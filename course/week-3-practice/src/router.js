import { createRouter, createWebHistory } from 'vue-router'
const Tasks = () => import('./views/Tasks')
const Task = () => import('./views/Task')
const New =  () => import('./views/New')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Tasks },
    { path: '/new', component: New },
    { 
      path: '/task/:taskId',
      component: Task,
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
