<template>
    <IFramePage :url="src" title="Aria离线下载" />
  </template>
  <script lang="ts" setup>
  import IFramePage from "./Modules/IFramePage.vue";
  const src = "/ariang";
  </script>
  