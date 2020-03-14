import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存放公共数据的地方
    title: '', // 当前标题
    list: [], // 当前的电影列表
    detail: null // detail是详情信息
  },
  mutations: {
    // 只能写同步代码
    // 用来更新 state中的title和list
    // state 是当前对象 payload 提交mutations传过来的参数
    updateListAndTitle (state, payload) {
      // 直接对state的数据进行赋值即可
      state.title = payload.title // payload想是什么是什么
      state.list = payload.list // 接收载荷中的list
    },
    // 专门来更新detail数据和标题
    updateDetail (state, payload) {
      state.title = payload.title
      state.detail = payload.detail
    }
  },
  // 可以做异步请求
  actions: {
    getList (Store, type) {
      // 请求豆瓣数据
      // jsonp(url,opt(可选),callback)
      // 将这个请求变成活的
      jsonp(`http://api.douban.com/v2/movie/${type}?apikey=0df993c66c0c636e29ecbb5344252a4a`, function (err, data) {
        if (err) return false // 如果err存在表示出问题了 出篓子了不能继续
        console.log(data)
        // 如果你action中的数据想要改state 必须通过mutations
        Store.commit('updateListAndTitle', {
          title: data.title,
          list: data.subjects
        })
      })
    },
    // 定义一个action 来获取详情数据
    getDetail (Store, id) {
      // 请求数据
      jsonp(`http://api.douban.com/v2/movie/subject/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`, function (err, data) {
        if (err) return false // 如果err存在表示出问题了 出篓子了不能继续
        console.log(data)
        Store.commit('updateDetail', {
          title: data.title,
          detail: data// 将整个数据作为载荷传出去
        })
      })
    }

  },
  modules: {
  }
})
