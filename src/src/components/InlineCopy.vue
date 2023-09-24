<template>
  <ion-buttons
    style="display: inline-block; margin-right: -5px; margin-left: -20px"
  >
    <ion-button
      style="margin-top: -20px; margin-bottom: -10px"
      fill="clear"
      :strong="true"
      color="success"
      @click="invokeCopy"
    >
      <ion-input
        style="
          margin-top: -10px;
          margin-bottom: -10px;
          margin-right: -10px;
          text-decoration: underline;
        "
        ref="textbox"
        :value="data"
        :readonly="true"
      />
      <ion-icon :icon="copyOutline"></ion-icon>
    </ion-button>
  </ion-buttons>
</template>
<style scoped></style>
<script lang="ts" setup>
const textbox = ref<HTMLIonInputElement & { $el: HTMLInputElement }>();
import { copyOutline } from "ionicons/icons";
const props = defineProps<{ data: string }>();
function invokeCopy() {
  const input = textbox.value?.$el.querySelector("input");
  console.log(input);
  if (input) {
    input.select();
    document.execCommand("copy");
  }
}
</script>
