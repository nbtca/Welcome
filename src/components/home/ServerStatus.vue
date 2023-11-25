<template>
  <ion-card class="card">
    <ion-card-header> STATUS </ion-card-header>
    <ion-card-title class="server-status-title">
      <div>服务器状态</div>
    </ion-card-title>
    <ion-card-content>
      <ion-row>
        <ion-col>
          <div class="server-status-item">
            <ion-label>磁盘占用</ion-label>
            <div class="usage-content-wrapper">
              <div class="usage-content">
                <div v-for="disk in dataDisk" class="usage-indicator">
                  <div class="font">
                    <ion-label color="secondary">
                      {{ disk.label_name }}
                    </ion-label>
                    <div>
                      <span>
                        ~ {{ formatSize(disk.available_free_space) }}
                      </span>
                    </div>
                  </div>
                  <ion-progress-bar class="progress" :value="calcUsage(disk)">
                  </ion-progress-bar>
                </div>
              </div>
            </div>
          </div>
        </ion-col>
        <ion-col>
          <div class="server-status-item">
            <ion-label>CPU占用</ion-label>
            <div class="usage-content-wrapper">
              <div class="usage-content">
                <div v-for="cpu in dataCPU" class="usage-indicator">
                  <div class="font">
                    <ion-label color="secondary">
                      {{
                        cpu.brand
                          .replace("Intel(R) ", "")
                          .replace("with Radeon Vega Graphics", "")
                      }}
                    </ion-label>
                    <span> {{ cpu.cpu_usage.toFixed(0) }}% </span>
                  </div>
                  <ion-progress-bar
                    class="progress"
                    :value="cpu.cpu_usage / 100"
                  >
                  </ion-progress-bar>
                </div>
              </div>
            </div>
          </div>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <div class="server-status-item-row-2">
            <ion-label>网络上行</ion-label>
            <div class="usage-content">
              <ion-label color="secondary">
                {{ formatSizeBps(dataNetwork.sent_speed) }}
              </ion-label>

              <ion-progress-bar
                class="progress"
                :value="calcNetworkOverload(dataNetwork.sent_speed)"
              >
              </ion-progress-bar>
              <div class="font">{{ formatSize(dataNetwork.sent_speed) }}/s</div>
            </div>
          </div>
        </ion-col>
        <ion-col>
          <div class="server-status-item-row-2">
            <ion-label>网络下行</ion-label>
            <div class="usage-content">
              <ion-label color="secondary">
                {{ formatSizeBps(dataNetwork.recv_speed) }}
              </ion-label>
              <ion-progress-bar
                class="progress"
                :value="calcNetworkOverload(dataNetwork.recv_speed)"
              >
              </ion-progress-bar>
              <div class="font">{{ formatSize(dataNetwork.recv_speed) }}/s</div>
            </div>
          </div>
        </ion-col>
        <ion-col>
          <div class="server-status-item-row-2">
            <ion-label>内存占用</ion-label>
            <div class="usage-content">
              <ion-label color="secondary">
                {{ dataMemory.memory_load }}%
              </ion-label>

              <ion-progress-bar
                class="progress"
                :value="dataMemory.memory_load / 100"
              >
              </ion-progress-bar>
              <div class="font">
                <span>
                  {{
                    formatSize(dataMemory.total_phys - dataMemory.avail_phys, 1)
                  }}
                  /
                  {{ formatSize(dataMemory.total_phys, 1) }}
                </span>
              </div>
            </div>
          </div>
        </ion-col>
      </ion-row>
    </ion-card-content>
  </ion-card>
</template>
<style scoped lang="scss">
.server-status-title {
  display: flex;
  justify-content: center;
}
.server-status-title div {
  font-size: 1.5rem;
}
.server-status-item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;

  .usage-content-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 190px;
    .usage-content {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .usage-indicator {
        max-width: 300px;
        width: 100%;
        .font {
          font-size: 1rem;
          display: flex;
          justify-content: space-between;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .progress {
          width: 100%;
          height: 5px;
          border-radius: 0.5rem;
        }
      }
    }
  }
}
.server-status-item-row-2 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  min-width: 120px;
  .usage-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 300px;
    .font {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1rem;
      display: flex;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .progress {
      width: 100%;
      height: 5px;
      border-radius: 0.5rem;
    }
  }
}
</style>
<script lang="ts" setup>
import {
  GetDisk,
  GetCPU,
  GetMemory,
  GetNetwork,
  type DiskInfo,
  type CPUInfo,
  type MemoryInfo,
} from "@/api/panel";
//最大网络速度
const maxNetworkSpeed = 200; //Mbps
//刷新间隔
const refreshInterval = 2500; //ms
const dataDisk = ref<DiskInfo[]>();
const dataCPU = ref<CPUInfo[]>();
const dataMemory = ref<MemoryInfo>({
  avail_page_file: NaN,
  total_page_file: NaN,
  avail_phys: NaN,
  memory_load: NaN,
  total_phys: NaN,
  avail_virtual: NaN,
  total_virtual: NaN,
});
const dataNetwork = ref({
  sent_speed: NaN,
  recv_speed: NaN,
  last_update: Date.now(),
  last_sent_total: NaN,
  last_recv_total: NaN,
});
let timerId: NodeJS.Timer | undefined = undefined;
async function UpdateNetwork() {
  const newInfo = (await GetNetwork()).find((item) => item.name === "WAN");
  if (newInfo) {
    const { total_received: current, total_transmitted: sent } = newInfo;
    const { last_recv_total, last_sent_total, last_update } = dataNetwork.value;
    const time = Date.now();
    const timeDiff = time - last_update;
    const recvDiff = current - last_recv_total;
    const sentDiff = sent - last_sent_total;
    dataNetwork.value = {
      sent_speed: (sentDiff / timeDiff) * 1000, //每秒发送
      recv_speed: (recvDiff / timeDiff) * 1000, //每秒接收
      last_update: time,
      last_sent_total: sent,
      last_recv_total: current,
    };
  } else {
    console.error("NetworkInfo not found (name==WAN)");
  }
}
async function init() {
  //初始化
  dataDisk.value = await GetDisk();
  dataCPU.value = await GetCPU();
  dataMemory.value = await GetMemory();
  await UpdateNetwork();
}
async function timer() {
  //定时刷新
  dataCPU.value = await GetCPU();
  dataMemory.value = await GetMemory();
  await UpdateNetwork();
}
onMounted(async () => {
  //组件挂载时
  init();
  timerId = setInterval(timer, refreshInterval); //开启定时器
});
onUnmounted(() => {
  //组件销毁时
  if (timerId) {
    clearInterval(timerId); //清除定时器
  }
});
function calcNetworkOverload(current: number) {
  const max = (maxNetworkSpeed * 1024 * 1024) / 8;
  const percentage = current / max;
  console.log(percentage);
  return percentage;
}
function calcUsage(info: DiskInfo) {
  return (info.total_size - info.available_free_space) / info.total_size;
}
function formatSizeBps(size: number, fixed = 0) {
  let s = Number(size) * 8;
  for (let i = 0; i < 4; i++, s /= 1024) {
    if (s < 1024) {
      return s.toFixed(fixed) + " " + ["b", "Kb", "Mb", "Gb"][i] + "ps";
    }
  }
  return s.toFixed(fixed) + " Tb/s";
}

function formatSize(size: number, fixed = 0) {
  let s = Number(size);
  for (let i = 0; i < 4; i++, s /= 1024) {
    if (s < 1024) {
      return s.toFixed(fixed) + " " + ["B", "KB", "MB", "GB"][i];
    }
  }
  return s.toFixed(fixed) + " TB";
  // if (s < 1024) {
  //   return s.toFixed(fixed) + "B";
  // }
  // s /= 1024;
  // if (s < 1024) {
  //   return s.toFixed(fixed) + "KB";
  // }
  // s /= 1024;
  // if (s < 1024) {
  //   return s.toFixed(fixed) + "MB";
  // }
  // s /= 1024;
  // if (s < 1024) {
  //   return s.toFixed(fixed) + "GB";
  // }
  // s /= 1024;
  // return s.toFixed(fixed) + "TB";
}
</script>
