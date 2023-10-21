<template>
  <div
    class="fade-in"
    style="
      -webkit-font-smoothing: antialiased;
      text-size-adjust: 100%;
      font-weight: 700;
      line-height: 1.75;
      letter-spacing: 0.00938em;
      max-width: 100%;
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-size: 0.8125rem;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      height: 32px;
      color: rgb(255, 255, 255);
      background-color: rgb(39, 168, 129);
      border-radius: 16px;
      white-space: nowrap;
      transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      cursor: default;
      outline: 0px;
      text-decoration: none;
      border: 0px;
      padding: 0px;
      vertical-align: middle;
      box-sizing: border-box;
      display: grid;
    "
  >
    <span
      style="
        -webkit-font-smoothing: antialiased;
        text-size-adjust: 100%;
        font-weight: 700;
        line-height: 1.75;
        letter-spacing: 0.00938em;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-size: 0.8125rem;
        color: rgb(255, 255, 255);
        cursor: default;
        box-sizing: inherit;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 12px;
        padding-right: 12px;
        white-space: nowrap;
      "
      >校内网络 - IPv4</span
    >
  </div>
</template>
<style scoped>
.fade-in {
  animation: fadeIn 0.3s ease-in-out forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
<script lang="ts" setup></script>
