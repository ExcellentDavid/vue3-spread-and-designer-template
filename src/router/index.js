import { createRouter, createWebHistory } from 'vue-router'
import DesignerView from '@/views/DesignerView.vue'
import SpreadView from '@/views/SpreadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DesignerView,
    },
    {
      path: '/spread',
      name: 'spread',
      component: SpreadView,
    },
    {
      path: '/designer',
      name: 'designer',
      component: DesignerView,
    },
  ],
})

export default router
