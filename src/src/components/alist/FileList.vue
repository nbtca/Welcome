<template>
  <ion-list v-if="info.data">
    <ion-item :href="file.name" v-for="file in info.data.content">
      <div slot="start">
        <file-icon :file="file"> </file-icon>
        {{ file.name }}
      </div>
      <div v-if="!file.is_dir" slot="end">{{ file.size }}</div>
    </ion-item>
  </ion-list>
  <ion-label v-else> 空空如也 </ion-label>
</template>
<style scoped></style>
<script lang="ts" setup>
import { FileResult } from "@/api/alist";
const props = defineProps<{
  info: FileResult;
}>();
</script>
