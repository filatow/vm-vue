import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login'
import Forget from './views/Forget'
// import Mail from './views/Mail'
import Dashboard from './views/Dashboard'
import NotFound from './views/NotFound'
import AppEmailBody from './components/AppEmailBody'

const Mail = () => import('./views/Mail')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login, alias: '/' },
    {
      path: '/forget',
      component: Forget,
      meta: {
        cantEnter: true,
      },
    },
    {
      path: '/dashboard',
      component: Dashboard,
      name: 'home',
      beforeEnter() {
        console.log('beforeEnter()')
      },
    },
    {
      path: '/mail',
      component: Mail,
      name: 'email',
      children: [{ path: ':mailId?', component: AppEmailBody, props: true }],
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach()')
  // console.log(`to :: `, to)
  // console.log(`from ::`, from)

  if (to.meta.cantEnter) {
    next({ name: 'home' })
  } else {
    next()
  }
})

router.afterEach(() => {
  console.log('afterEach()')
})
export default router