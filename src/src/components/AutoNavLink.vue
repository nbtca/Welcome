<template>
  <ion-nav-link
    :class="{
      active: active,
    }"
    ref="nav"
    :component="component"
    :component-props="componentProps"
  >
    <slot></slot>
  </ion-nav-link>
</template>
<style scoped>
.active::after {
  --border-width: 10px;
  content: "";
  position: fixed;
  top: 0px;
  width: calc(100% - 2 * var(--border-width));
  height: calc(100% - 2 * var(--border-width));
  /* background-color: var(--ion-color-primary); */
  animation: active 1s ease-in-out;
  border: var(--border-width) solid var(--ion-color-primary);
}
@keyframes active {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
<script lang="ts" setup>
import router from "@/router";
import { GetPageNameFromComponment, locationPath } from "@/router/heper";
const active = ref(false);
const props = defineProps<{
  component?: Object;
  componentProps?: Object;
}>();
const component = props.component as HTMLElement & { __name: string };
const nav = ref<HTMLIonNavLinkElement & { $el: HTMLIonNavLinkElement }>();
if (
  router.currentRoute.value.query[locationPath] ==
  GetPageNameFromComponment(component)
) {
  active.value = true;
  setTimeout(() => {
    const el = nav.value?.$el;
    if (el) {
      el.click();
    }
    active.value = false;
  }, 1250);
}
</script>
