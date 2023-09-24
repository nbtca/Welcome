<template>
  <ion-card style="margin-left: 20px; margin-right: 20px">
    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
      <ion-card-subtitle v-if="subtitle">{{ subtitle }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content style="min-height: 100px">
      <div style="position: fixed; bottom: 0px; width: calc(100% - 20px)">
        <div style="margin-bottom: 10px">
          <div style="display: flex; flex-direction: column">
            <ion-label v-for="line in descriptions">
              {{ line }}
            </ion-label>
          </div>
          <ion-item>
            <ion-input
              ref="addressBox"
              style="font-size: large"
              :value="address"
              :readonly="true"
            />
            <ion-buttons>
              <ion-button @click="invokeCopy">
                <ion-icon :icon="copy" size="large"></ion-icon>
              </ion-button>
              <ion-nav-link
                v-if="component"
                :component="component"
                :component-props="props"
              >
                <ion-button>
                  <ion-icon :icon="info" size="large"></ion-icon>
                </ion-button>
              </ion-nav-link>
            </ion-buttons>
          </ion-item>
        </div>
      </div>
    </ion-card-content>
  </ion-card>
</template>
<style scoped>
ion-card {
  min-width: min(500px, calc(100% - 40px));
}
</style>
<script lang="ts" setup>
import {
  copyOutline as copy,
  // helpCircleOutline as help,
  // chevronForward as info
  arrowForward as info,
} from "ionicons/icons";
export type ShareTypeInfo = {
  title: string;
  address: string;
  descriptions?: string[];
  subtitle?: string;
  component?: Object;
};
const props = defineProps<ShareTypeInfo>();

const addressBox = ref<HTMLIonInputElement & { $el: HTMLInputElement }>();
const component = props.component as HTMLElement;
function invokeCopy() {
  const input = addressBox.value?.$el.querySelector("input");
  console.log(input);
  if (input) {
    input.select();
    document.execCommand("copy");
  }
}
</script>
