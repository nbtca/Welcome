<template>
  <IFramePage :url="src" title="内网测速" />
</template>
<script lang="ts" setup>
import IFramePage from "./Modules/IFramePage.vue";
const src = `/speedtest`;
</script>
