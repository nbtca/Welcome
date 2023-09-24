<template>
  <ion-col>
    <ion-card>
      <ion-card-header>
        <ion-card-title>{{ title }}</ion-card-title>
        <ion-card-subtitle v-if="subtitle">{{ subtitle }}</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content v-if="content"> {{ content }} </ion-card-content>
      <ion-nav-link v-if="component" :component="component">
        <ion-button fill="clear" class="forward-button" @click="forward">
          <ion-icon :icon="arrowForward" size="large"></ion-icon>
        </ion-button>
      </ion-nav-link>
      <ion-button v-else fill="clear" class="forward-button" @click="forward">
        <ion-icon :icon="arrowForward" size="large"></ion-icon>
      </ion-button>
    </ion-card>
  </ion-col>
</template>
<style scoped>
ion-col {
  min-width: min(400px, 100%);
}
.forward-button {
  font-size: large;
  display: flex;
}
</style>
<script lang="ts" setup>
import { arrowForward } from "ionicons/icons";

const props = defineProps<{
  title: string;
  subtitle?: string;
  content?: string;
  link?: string;
  component?: Object;
}>();
const component = props.component as HTMLElement;
function forward() {
  if (props.link) {
    window.open(props.link, "_blank");
  }
}
</script>
