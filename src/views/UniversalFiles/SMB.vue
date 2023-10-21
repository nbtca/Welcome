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
      SMB是windows通用的文件共享协议，本来可以很方便地在windows自带的文件资源管理器(explorer.exe)中直接访问。
      <br />
      <h1>可用性</h1>
      因历史上SMBv1(旧版本)协议存在安全性问题，学校似乎把 445
      端口屏蔽了，目前测试仅同一幢楼（同一个上级网关）可通过SMB协议访问。
      <br />
      <h1>使用方法</h1>
      <li>打开文件资源管理器</li>
      <li>在地址栏输入 <inline-copy :data="address" />即可直接浏览</li>
      如果没法访问，就是被屏蔽了，可以尝试使用 4450
      端口，可惜windows自带的文件资源管理器不支持自定义端口
      <br />
      <h1>备份方案</h1>
      已转发到 4450 端口，可通过第三方客户端填写端口使用
      <br />
      安卓端已使用MiX explorer和 VLC 测试可用
    </div>
  </ion-content>
</template>
<style scoped></style>
<script lang="ts" setup>
import { type ShareTypeInfo } from "@/components/UniversalFileItem.vue";
const props = defineProps<ShareTypeInfo>();
</script>
