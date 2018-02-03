import Vue from 'vue'
import Vuex from 'vuex'

import App from './modules/app'
import Messages from './modules/messages'
import Markdown from './modules/markdown'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    dontCache: []  // 在这里定义你不想要缓存的页面的name属性值(参见路由配置router.js)
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    App,
    Messages,
    Markdown
  }
})

export default store
