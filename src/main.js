import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入豆瓣的静态资源
import '@/styles/css/global.css'
import '@/styles/fonts/iconfont.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
