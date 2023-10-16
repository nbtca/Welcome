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
      FTP，全名为文件传输协议（File Transfer
      Protocol）。FTP最早是在1971年由Abhay
      Bhushan开发的，是互联网上最早的标准协议之一，至今仍然广泛使用。不过不太氨醛。
      <br />
      <h1>可用性</h1>
      目前测试没什么问题，Windows文件资源管理器可用。
      <br />
      <h1>使用方法</h1>
      <li>使用<inline-copy :data="address" />访问</li>
    </div>
  </ion-content>
</template>
<style scoped></style>
<script lang="ts" setup>
import { type ShareTypeInfo } from "@/components/UniversalFileItem.vue";
const props = defineProps<ShareTypeInfo>();
</script>
