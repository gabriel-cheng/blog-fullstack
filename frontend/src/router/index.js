import { createRouter, createWebHistory } from 'vue-router'
function lazyLoad(view) {
  return import(`../views/${view}.vue`);
}
// import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyLoad('Home')
    },
    {
      path: '/postar',
      name: 'postar',
      component: lazyLoad('Postar')
    }
  ]
})

export default router
