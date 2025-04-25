<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <div id="app">
    <RouterView />
    <YourComponent />
  </div>
</template>

<style scoped>
html, body, #app {
  height: 100%;  /* 关键：确保根链高度继承 */
  margin: 0;     /* 清除默认边距 */
}
</style>
