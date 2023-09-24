<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <div style="margin: 20px">
      <h1>简介</h1>
      SMB是windows通用的文件共享协议，可以很方便地在windows自带的文件资源管理器(explorer.exe)中直接访问。
      <br />
      <h1>使用方法</h1>
      <li>打开文件资源管理器</li>
      <li>在地址栏输入 <inline-copy :data="address" />即可直接浏览</li>
    </div>
  </ion-content>
</template>
<style scoped></style>
<script lang="ts" setup>
import { type ShareTypeInfo } from "@/components/UniversalFileItem.vue";
const props = defineProps<ShareTypeInfo>();
</script>
