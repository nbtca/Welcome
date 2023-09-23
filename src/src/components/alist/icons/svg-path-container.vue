<template>
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
  >
    <path :d="path" />
  </svg>
</template>
<script setup lang="ts">
defineProps<{
  path: string;
}>();
</script>
