<template>
  <ion-page mode="ios">
    <ion-nav
      :root="Home"
      @ionNavDidChange="(e) => ionNavDidChange(e.target)"
      @ionNavWillChange="(e) => ionNavWillChange(e)"
    >
    </ion-nav>
  </ion-page>
</template>
<style scoped></style>
<script lang="ts" setup>
import Home from "@/views/HomePage.vue";
import { IonNav, IonPage } from "@ionic/vue";
import { ionNavDidChange, ionNavWillChange } from "@/router/heper";
</script>
