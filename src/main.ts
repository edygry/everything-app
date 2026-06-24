import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory('/everything-app/'),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: () => import('./views/AuthView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/DashboardView.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach((to, _from, next) => {
  const isAuthenticated = localStorage.getItem('everything-app-auth') === 'true'
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
