import {createRouter, createWebHistory} from "vue-router";

export const router = createRouter({
  routes:
    [
      {
        path: "/:pathMatch(.*)*",
        component: () => import("@/views/NotFoundView.vue"),
        name: 'notfound'
      },
      {
        path: "/",
        component: () => import("@/views/AuthView.vue")
      },
      {
        path: "/",
        component: () => import("@/views/MainView.vue"),
        children: [
          {
            path: "main",
            component: () => import("@/views/IndexView.vue"),
            name: 'main'
          },
          {
            path: "stat",
            component: () => import("@/views/StatView.vue"),
            name: 'stat'
          },
          {
            path: "meditation",
            component: () => import("@/views/MeditationView.vue"),
            name: 'meditation'
          }
        ]
      }
    ],
  history: createWebHistory(),
})
