<template>
  <page-base title="在线文件中心">
    <div v-if="info.code !== 200" class="top-center">
      <ion-label style="font-size: larger"> 获取失败 </ion-label>
      <ion-label style="width: 75%; text-align: center">
        {{ info.message }}</ion-label
      >
    </div>
    <div v-else-if="!info.data" class="top-center">
      <ion-label style="font-size: large">空空如也</ion-label>
    </div>
    <div v-else="info.data">
      <file-list :info="info"> </file-list>
    </div>
  </page-base>
</template>
<style scoped>
.top-center {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 50%;
}
</style>
<script lang="ts" setup>
import PageBase from "./Modules/PageBase.vue";
import { FileResult, listFiles } from "@/api/alist";
import { onMounted } from "vue";
const loading = ref(true);
const info = ref({
  code: 500,
  message: "未知错误",
  data: null,
} as FileResult);
onMounted(async () => {
  info.value = await listFiles();
  loading.value = false;
});
</script>
