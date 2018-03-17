import Vue from 'vue'
import Vuex from 'vuex'

import App from './modules/app'
import Messages from './modules/messages'
import Markdown from './modules/markdown'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
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
