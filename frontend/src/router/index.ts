import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'

import Statistic from '../components/pages/stat.vue';
import History from '../components/pages/history.vue';
import Teach from '../components/pages/teach.vue';
import Docs from '../components/pages/docs.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'statistic',
        component: Statistic
      },
      {
        path: 'docs',
        component: Docs
      },
      {
        path: 'history',
        component: History
      },
      {
        path: 'teach',
        component: Teach
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

export default router
