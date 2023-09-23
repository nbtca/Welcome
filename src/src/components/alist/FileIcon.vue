<template>
  <icon-iso v-if="ext === ExtensionTypes.iso"> </icon-iso>
  <icon-folder v-if="ext === ExtensionTypes.folder"> </icon-folder>
  <ion-icon :icon="fileIcon" v-else> </ion-icon>
</template>
<style scoped></style>
<script lang="ts" setup>
import { FileItem } from "@/api/alist";
import { apps as fileIcon } from "ionicons/icons";
const props = defineProps<{
  file: FileItem;
}>();
enum ExtensionTypes {
  unknown,
  iso,
  folder,
}
function getExtensionType(isdir: boolean, ext: string) {
  if (isdir) {
    return ExtensionTypes.folder;
  }
  ext = ext.toLowerCase();
  switch (ext) {
    case "iso":
      return ExtensionTypes.iso;
    default:
      return ExtensionTypes.unknown;
  }
}
const ext = getExtensionType(
  props.file.is_dir,
  props.file.name.split(".").pop()!
);
</script>
