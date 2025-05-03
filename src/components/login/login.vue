<template>
  <div class="login-background">
    <div class="login-container">
      <div class="login-header">
        <div class="logo">
          <h1>光伏数据可视化平台</h1>
        </div>
        <p class="welcome-text">欢迎回来，请登录您的账户</p>
      </div>

      <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="loginRules"
          @keyup.enter="handleLogin"
          class="login-form"
      >
        <el-form-item prop="username">
          <el-input
              v-model="loginForm.username"
              placeholder="请输入用户名"
              size="large"
              clearable
          >
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
              v-model="loginForm.password"
              type="password"
              placeholder="请输入密码"
              size="large"
              show-password
          >
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-button
            type="primary"
            @click="handleLogin"
            :loading="loading"
            size="large"
            class="login-btn"
        >
          {{ loading ? '登录中...' : '登 录' }}
        </el-button>

        <div class="login-footer">
          <el-checkbox v-model="rememberMe">记住我</el-checkbox>
          <el-link type="primary" :underline="false">忘记密码?</el-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { User, Lock } from '@element-plus/icons-vue';
import type { FormInstance } from 'element-plus';
import { ElMessage } from 'element-plus';

const router = useRouter();
const route = useRoute();
const loading = ref(false);
const rememberMe = ref(false);

const loginForm = ref({
  username: '',
  password: '',
});

const loginRules = ref({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' },
  ],
});

const loginFormRef = ref<FormInstance | null>(null);
const isAuthenticated = inject('isAuthenticated') as any;

const handleLogin = async () => {
  try {
    if (!loginFormRef.value) return;
    const valid = await loginFormRef.value.validate();
    if (!valid) return;

    loading.value = true;

    // 模拟API请求
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (loginForm.value.username === 'admin' && loginForm.value.password === '123456') {
      localStorage.setItem('isAuthenticated', 'true');
      isAuthenticated.value = true;
      const redirectPath = route.query.redirect?.toString() || '/index';
      router.push(redirectPath);
      ElMessage.success('登录成功');
    } else {
      ElMessage.error('用户名或密码错误');
    }
  } catch (error) {
    console.error('登录失败:', error);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped lang="scss">
.login-background {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/img/Bg.png');
    background-size: cover;
    background-position: center;
    opacity: 1;
    z-index: 0;
  }
}

.login-container {
  position: relative;
  width: 450px;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  z-index: 1;
  animation: fadeInUp 0.6s ease-out;

  .login-header {
    text-align: center;
    margin-bottom: 40px;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;

      img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }

      h1 {
        color: #2c3e50;
        font-size: 24px;
        font-weight: 600;
        margin: 0;
      }
    }

    .welcome-text {
      color: #7f8c8d;
      font-size: 14px;
      margin: 0;
    }
  }

  .login-form {
    .el-form-item {
      margin-bottom: 24px;
    }

    :deep(.el-input__wrapper) {
      border-radius: 8px;
      padding: 0 15px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

      &:hover {
        box-shadow: 0 2px 6px rgba(64, 158, 255, 0.2);
      }
    }

    :deep(.el-input__prefix) {
      display: flex;
      align-items: center;
      margin-right: 8px;
    }
  }

  .login-btn {
    width: 100%;
    border-radius: 8px;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #409EFF 0%, #64b5f6 100%);
    border: none;
    margin-top: 10px;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(64, 158, 255, 0.3);
    }
  }

  .login-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    font-size: 14px;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>