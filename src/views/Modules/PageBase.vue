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
    <slot> </slot>
  </ion-content>
</template>
<style scoped></style>
<script lang="ts" setup>
const prop = defineProps<{
  title?: string;
}>();
</script>
