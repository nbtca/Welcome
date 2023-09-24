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
      todo
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
