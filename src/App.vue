<template>
  <div>
    <MainLayout v-if="isAuthenticated">
      <router-view />
      <button @click="logout">退出登录</button>
    </MainLayout>
    <Login v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import { useRouter } from 'vue-router'
import Login from './components/login/login.vue'
import MainLayout from './components/layout/MainLayout.vue'

const router = useRouter()
const isAuthenticated = ref(false)

provide('isAuthenticated', isAuthenticated)

const logout = () => {
  localStorage.removeItem('isAuthenticated')
  isAuthenticated.value = false
  router.push('/login')
}
</script>

<style scoped>

</style>