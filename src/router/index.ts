import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login/login.vue'),
    meta: {
      requiresAuth: false,
      title: '登录',
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      requiresAuth: true,
      title: '光伏数据平台',
    },
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '实时监测',
        },
      },
      {
        path: '/forecast',
        name: 'forecast',
        component: () => import('@/views/forecast/forecast.vue'),
        meta: {
          title: '发电数据',
        },
      },
      {
        path: '/data-upload',
        name: 'DataUpload',
        component: () => import('@/views/DataUpload.vue'),
        meta: {
          title: '数据上传与影响因素选择',
        },
      },
      {
        path: '/data-analysis',
        name: 'DataAnalysis',
        component: () => import('@/views/DataAnalysis.vue'),
        meta: {
          title: '数据分析',
        },
      },
      {
        path: '/prediction-result',
        name: 'PredictionResult',
        component: () => import('@/views/PredictionResult.vue'),
        meta: {
          title: '在线预测',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const appTitle = '光伏数据可视化平台';
  document.title = to.meta.title ? `${to.meta.title} | ${appTitle}` : appTitle;

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const authRequired = to.matched.some((record) => record.meta.requiresAuth);

  console.log('To:', to.path);
  console.log('Is Authenticated:', isAuthenticated);
  console.log('Auth Required:', authRequired);

  if (authRequired && !isAuthenticated) {
    console.log('Redirecting to login page');
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else if (to.path === '/login' && isAuthenticated) {
    console.log('Redirecting to index page');
    next('/index');
  } else {
    console.log('Allowing access');
    next();
  }
});

export default router;