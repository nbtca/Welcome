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
      WebDAV（Web-based Distributed Authoring and
      Versioning）是基于HTTP扩展协议的文件协作和文件管理协议。它允许用户通过Web服务器来编辑、管理和共享网络上的文件和资源。
      <h1>安全性</h1>
      使用域名访问并使用https协议，安全性高。
      <h1>可用性</h1>
      测试可用，Windows文件资源管理器直接使用存在问题，使用客户端即可，测试WinScp可用。
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
