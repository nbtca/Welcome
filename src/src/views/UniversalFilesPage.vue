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
        title="WebDav"
        subtitle="支持上传和下载和管理"
        :descriptions="['账户名: web 密码: 0', '需要客户端操作']"
        :address="`https://${host}/dav`"
        :component="WebDav"
      />
      <universal-file-item
        title="GoWebDav"
        subtitle="支持上传和下载"
        :descriptions="['支持网页下载', '上传需要客户端']"
        :address="`https://${host}/webdav`"
        :component="WebDav"
      />
      <universal-file-item
        title="FTP"
        subtitle="支持上传和下载和管理"
        :descriptions="['传统协议', '兼容性好']"
        :address="`ftp://${host}/`"
        :component="FTP"
      />
      <universal-file-item
        title="SMB共享"
        :descriptions="['445 端口可能被屏蔽', '如无法连接请使用 4450 端口']"
        subtitle="支持上传和下载和管理"
        :address="`\\\\${host}\\`"
        :component="SMB"
      />
      <universal-file-item
        title="NFS"
        subtitle="支持乱码 (╯°Д°)╯︵ ┻━┻"
        :descriptions="['不推荐', '有编码问题']"
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
import FTP from "./UniversalFiles/FTP.vue";
</script>
