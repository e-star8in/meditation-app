import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store.ts';

export const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundView.vue'),
      name: 'notfound',
    },
    {
      path: '/',
      component: () => import('@/views/AuthView.vue'),
      name: 'auth',
    },
    {
      path: '/',
      component: () => import('@/views/MainView.vue'),
      children: [
        {
          path: 'main',
          component: () => import('@/views/IndexView.vue'),
          name: 'main',
        },
        {
          path: 'stat',
          component: () => import('@/views/StatView.vue'),
          name: 'stat',
        },
        {
          path: 'meditation',
          component: () => import('@/views/MeditationView.vue'),
          name: 'meditation',
        },
      ],
    },
  ],
  history: createWebHistory(),
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  if (!authStore.getToken && to.name !== 'auth') return { name: 'auth' };
  if (authStore.getToken && to.name === 'auth') return { name: 'main' };
  return true;
});
