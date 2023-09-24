<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>通用文件中心</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-row style="justify-content: center">
      <universal-file-item
        title="SMB共享"
        subtitle="支持上传和下载"
        :address="`\\\\${host}\\`"
        :component="SMB"
      />
      <universal-file-item
        title="WebDav"
        subtitle="支持上传和下载"
        :descriptions="['账户名: web', '密码: 0']"
        :address="`http://${host}/dav`"
        :component="WebDav"
      />
      <universal-file-item
        title="WebDav[Readonly]"
        subtitle="仅支持下载"
        :address="`http://${host}/webdav`"
        :component="WebDav"
      />
      <universal-file-item
        title="FTP"
        subtitle="仅支持下载"
        :address="`ftp://${host}/`"
      />
      <universal-file-item
        title="NFS"
        subtitle="仅支持下载"
        :address="`${host}`"
      />
    </ion-row>
  </ion-content>
</template>
<style scoped></style>
<script lang="ts" setup>
const host = window.location.host;
const hostname = window.location.hostname;
import SMB from "./UniversalFiles/SMB.vue";
import WebDav from "./UniversalFiles/WebDav.vue";
</script>
