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
        title="文件"
        subtitle="文件中心"
        content="在此下载和备份文件"
      />
      <home-card-item
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
        subtitle="后台"
        content="(:"
      />
    </ion-row>
  </ion-content>
</template>
<style scoped></style>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
const isCampus = ref(false);
import FilesPage from "@/views/FilesPage.vue";
import SpeedTestPage from "@/views/SpeedTestPage.vue";
import MirrorPage from "@/views/MirrorPage.vue";
import ManagementPage from "@/views/ManagementPage.vue";
//https://mirrors.zju.edu.cn/api/mirrors
const myip = ref(undefined);
onMounted(async () => {
  try {
    isCampus.value =
      1 ==
      (await axios.get("http://mirrors.zju.edu.cn/api/is_campus_network")).data;
  } catch (error) {
    console.error("is_campus_network", error);
  }
  myip.value = (await axios.get("/ip")).data;
});
</script>
