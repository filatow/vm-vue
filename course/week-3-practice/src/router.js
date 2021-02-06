import { createRouter, createWebHistory } from 'vue-router'
import Tasks from './views/Tasks'
import Task from './views/Task'
import New from './views/New'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Tasks },
    { path: '/new', component: New },
    { 
      path: '/task/:taskId',
      component: Task,
      // children: [{ path: ':mailId', component: AppEmailBody, props: true }]
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
