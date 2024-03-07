<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-title>Welcome</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content :fullscreen="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">
          <div style="width: fit-content; display: flex; align-items: center">
            欢迎

            <div v-if="isCampus" style="margin-top: 5px; margin-left: 10px">
              <campus-internal-network />
            </div>
            <ion-label
              style="
                margin-top: 7px;
                margin-left: 5px;
                font-size: large;
                text-align: center;
              "
              v-if="myip"
            >
              {{ myip }}
            </ion-label>
          </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-row>
      <home-card-item
        :component="FilesPage"
        title="在线文件中心"
        subtitle="Files Center"
        content="在网页上直接浏览和管理文件"
      />
      <!-- <home-card-item
        :component="UniversalFilesPage"
        title="通用文件共享"
        subtitle="Files Sharing"
        content="使用不同协议管理文件"
      /> -->
      <!-- <home-card-item
        :component="AriaNGPage"
        title="离线下载"
        subtitle="AriaNG"
        content="使用aria的离线下载功能"
      /> -->
      <!-- <home-card-item
        :component="SpeedTestPage"
        title="内网测速"
        subtitle="SpeedTest"
        content="测速当前到本服务器的内网速度"
      />
      <home-card-item
        :component="MirrorPage"
        title="浙大开源软件镜像站"
        subtitle="ZJU Mirror"
        content="ubuntu / npm / pip ..."
      />
      <home-card-item
        :component="ManagementPage"
        title="管理"
        subtitle="Management"
        content="(:"
      />
      <home-card-item
        :component="CalenderPage"
        title="计协日历"
        subtitle="Calender"
        content="xxx活动"
      /> -->
    </ion-row>
    <!-- <recent-activity class="card" /> -->
    <!-- <server-status class="card" /> -->
    <div style="justify-content: flex-end; display: flex">
      <ion-card>
        <ion-card-content> 临时站点 当前仅允许下载 </ion-card-content>
      </ion-card>
    </div>
  </ion-content>
</template>
<style scoped>
.card {
  margin: 20px;
}
</style>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
const isCampus = ref(false);
import FilesPage from "@/views/FilesPage.vue";
import UniversalFilesPage from "@/views/UniversalFilesPage.vue";
import SpeedTestPage from "@/views/SpeedTestPage.vue";
import MirrorPage from "@/views/MirrorPage.vue";
import ManagementPage from "@/views/ManagementPage.vue";
import AriaNGPage from "@/views/AriaNGPage.vue";
import CalenderPage from "@/views/CalenderPage.vue";
//https://mirrors.zju.edu.cn/api/mirrors
const myip = ref(undefined);
onMounted(async () => {
  try {
    //传输协议 http or https
    const protocol = window.location.protocol;
    //是否校园网访问
    isCampus.value =
      1 ==
      (await axios.get(protocol + "//mirrors.zju.edu.cn/api/is_campus_network"))
        .data;
  } catch (error) {
    console.error("is_campus_network", error);
  }
  myip.value = (await axios.get("/ip")).data;
});
</script>
