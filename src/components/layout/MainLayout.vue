<template>
  <div class="floating-layout">
    <!-- 悬浮按钮 -->
    <ToggleButton :collapsed="isCollapsed" @toggle="toggleSidebar" />

    <!-- 悬浮侧边栏 -->
    <Sidebar
        :collapsed="isCollapsed"
        class="floating-sidebar"
    />

    <!-- 主内容（始终全宽） -->
    <main>
      <RouterView />
    </main>

    <!-- 半透明遮罩（可选） -->
    <div
        v-if="!isCollapsed"
        class="overlay"
        @click="toggleSidebar"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import Sidebar from './Sidebar.vue';
import ToggleButton from './ToggleButton.vue';

// 使用 ref 创建 isCollapsed 状态
const isCollapsed = ref(true);

// 定义 toggleSidebar 方法来更新 isCollapsed 状态
function toggleSidebar() {
  isCollapsed.value = !isCollapsed.value;
}
</script>

<style scoped>
.floating-layout {
  position: relative;
}

.floating-sidebar {
  position: fixed;
  z-index: 1000;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.floating-sidebar:not(.collapsed) {
  transform: translateX(0);
}

main {
  width: 100%;
  transition: filter 0.3s;
}

/* 遮罩效果 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* 主内容模糊效果（可选） */
main:has(+ .overlay) {
  filter: blur(2px);
}
</style>