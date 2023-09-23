<template>
  <ion-page mode="ios"> <ion-nav :root="Home"></ion-nav></ion-page>
</template>
<style scoped></style>
<script lang="ts" setup>
import Home from "@/views/HomePage.vue";
import { IonNav, IonPage } from "@ionic/vue";
</script>
