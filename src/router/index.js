import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hot' // 强制跳转正在热映

  },
  {
    path: '/hot', // 正在热映
    component: () => import('@/views/hot')
  },
  {
    path: '/detail/:id', // 豆瓣影片详情
    component: () => import('@/views/detail')
  },
  {
    path: '/movie', // 即将上映
    component: () => import('@/views/movie')
  },
  {
    path: '/top', // TOP250
    component: () => import('@/views/top')
  }

]

const router = new VueRouter({
  routes
})

export default router
