<template>
  <ion-card class="card">
    <ion-card-header> 下水道负载 </ion-card-header>
    <ion-card-title class="server-status-title">
      <div>服务器状态</div>
    </ion-card-title>
    <ion-card-content>
      <ion-row>
        <ion-col>
          <div class="server-status-item">
            <ion-label>磁盘占用</ion-label>
            <ion-label v-for="disk in data" color="secondary">
              {{ disk.format }} :
              {{
                (disk.available_free_space / 1024 / 1024 / 1024).toFixed(1)
              }}GB free
            </ion-label>
          </div>
        </ion-col>
        <ion-col>
          <div class="server-status-item">
            <ion-label>CPU占用</ion-label>
            <ion-label color="secondary">xx%</ion-label>
          </div>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <div class="server-status-item">
            <ion-label>网络上行</ion-label>
            <ion-label color="secondary">xx%</ion-label>
          </div>
        </ion-col>
        <ion-col>
          <div class="server-status-item">
            <ion-label>网络下行</ion-label>
            <ion-label color="secondary">xx%</ion-label>
          </div>
        </ion-col>
      </ion-row>
    </ion-card-content>
  </ion-card>
</template>
<style scoped>
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
  type NetworkInfo,
} from "@/api/panel";
const data = ref<DiskInfo[]>();

onMounted(async () => {
  data.value = await GetDisk();
});
</script>
