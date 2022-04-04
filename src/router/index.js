import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Dashboard from '../components/Dashboard'
import Topic from '../components/Topic'

Vue.use(VueRouter)

const routes = [
  {
    // 重定向
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: Dashboard
      },
      {
        path: '/topic',
        component: Topic
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if (!token) next('/login')
  next()
})

export default router
