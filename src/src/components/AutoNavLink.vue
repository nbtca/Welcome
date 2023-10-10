<template>
  <ion-nav-link
    ref="nav"
    data-a="测试"
    :component="component"
    :component-props="componentProps"
  >
    <slot></slot>
  </ion-nav-link>
</template>
<style scoped></style>
<script lang="ts" setup>
import router from "@/router";

const props = defineProps<{
  component?: Object;
  componentProps?: Object;
}>();
const component = props.component as HTMLElement & { __name: string };
const nav = ref<HTMLIonNavLinkElement & { $el: HTMLIonNavLinkElement }>();

const componentName = component.__name;
console.log(componentName);
if (
  router.currentRoute.value.query.location == componentName.toLocaleLowerCase()
) {
  setTimeout(() => {
    const el = nav.value?.$el;
    if (el) {
      el.click();
    }
  }, 250);
}
</script>
