<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button @click="openExternal">
          <ion-icon slot="icon-only" :icon="openOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <iframe
      class="fade-in-element"
      v-bind:hidden="!loaded"
      ref="rootFrame"
      :src="src"
    >
    </iframe>
    <loading-spinner class="fade-out-element" v-if="!loaded"> </loading-spinner>
  </ion-content>
</template>
<style scoped>
iframe {
  width: 100%;
  height: calc(100% - 4px);
  margin-bottom: -4px;
  border: none;
}
.fade-in-element {
  opacity: 0; /* 初始时透明 */
  animation: fadeIn 0.75s ease-in-out forwards; /* 使用名为fadeIn的动画，持续1秒 */
}

.fade-out-element {
  opacity: 1; /* 初始时透明 */
  animation: fadeOut 0.75s ease-in-out forwards; /* 使用名为fadeIn的动画，持续1秒 */
}
@keyframes fadeOut {
  from {
    opacity: 1; /* 动画开始时完全不透明 */
  }
  50% {
    opacity: 1; /* 在动画的50%位置，即0.5秒时，元素完全不透明 */
  }
  to {
    opacity: 0; /* 动画结束时完全透明 */
  }
}
@keyframes fadeIn {
  from {
    opacity: 0; /* 动画开始时完全透明 */
  }

  to {
    opacity: 1; /* 动画结束时完全不透明 */
  }
}
</style>
<script lang="ts" setup>
import { openOutline } from "ionicons/icons";
import { ref } from "vue";
const props = defineProps<{
  title: string;
  url: string;
}>();
const rootFrame = ref<HTMLIFrameElement>(); //取得上方 ref="rootFrame" 的HTML元素
const src = props.url; //传入的访问地址
const loaded = ref(false);
onMounted(() => {
  setTimeout(() => {
    loaded.value = true;
  }, 750);
});
function openExternal() {
  window.open(src, "_blank");
}
</script>
