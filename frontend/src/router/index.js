import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => {return import('../views/Home.vue')}
    },
    {
      path: '/postar',
      name: 'postar',
      component: () => {return import('../views/Postar.vue')}
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => {return import('../views/Admin.vue')}
    }
  ]
})

export default router
