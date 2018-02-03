import Vue from 'vue'
import VueRouter from 'vue-router'
import {loginRouter, page404Router, page403Router, page500Router, lockRouter, commonRouter} from './modules/common'
import {appRouter} from './modules/app'
import iView from 'iview'
import Util from '@/libs/Util'

Vue.use(VueRouter);


export const router = new VueRouter({
  routes: [
    loginRouter,
    lockRouter,
    ...appRouter,
    commonRouter,
    page500Router,
    page403Router,
    page404Router
  ]
})


router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  // 判断当前是否是锁定状态
  if (Util.cache.get('locking') === 1 && to.name !== 'lock') {
    next({name: 'lock'})
  } else if (Util.cache.get('locking') === 0 && to.name === 'lock') {
    next(false)
  } else {
    // 判断是否已经登录且前往的页面不是登录页
    if (!Util.cache.get('token') && to.name !== 'login') {
      next({name: 'login'})
      // 判断是否已经登录且前往的是登录页
    } else if (Util.cache.get('token') && to.name === 'login') {
      next({name: 'home'})
    } else {
      next()
    }
  }
})

router.afterEach((to) => {
  router.app.$store.commit('openPage', to)
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})
