<template>
  <IFramePage :url="src" title="管理" />
</template>
<script lang="ts" setup>
import IFramePage from "./Modules/IFramePage.vue";
const src = "/cgi-bin/luci";
</script>
