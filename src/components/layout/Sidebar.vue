<template>
  <aside
      class="sidebar"
      :class="{ 'collapsed': collapsed }"
  >
    <!-- 侧边栏内容 -->
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/data-upload">data-upload</router-link>
      <router-link to="/data-analysis">data-analysis</router-link>
      <router-link to="/prediction-result">prediction-result</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </aside>
</template>

<script setup>
defineProps({
  collapsed: Boolean
});
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background: #2c3e50;
  transition: transform 0.3s ease;
  position: fixed;
  left: 0;
  top: 0;
  color: white;
  padding: 20px;
  z-index: 100;
}

.sidebar.collapsed {
  transform: translateX(-100%);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav a {
  color: white;
  text-decoration: none;
}

.nav a.router-link-active {
  font-weight: bold;
}
</style>