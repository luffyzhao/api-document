import Main from '@/views/Main.vue'
// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: resolve => { require(['@/views/Login.vue'], resolve) }
}

export const page404Router = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: resolve => { require(['@/views/error-page/404.vue'], resolve) }
}

export const page403Router = {
  path: '/403',
  meta: {
    title: '403-权限不足'
  },
  name: 'error-403',
  component: resolve => { require(['@/views/error-page/403.vue'], resolve) }
}

export const page500Router = {
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error-500',
  component: resolve => { require(['@/views/error-page/500.vue'], resolve) }
}

export const lockRouter = {
  path: '/lock',
  meta: {
    title: 'Lock - 锁定'
  },
  name: 'lock',
  component: resolve => { require(['@/views/Lock.vue'], resolve) }
}

export const documentWriting = {
  path: '/document.writing',
  meta: {
    title: '编辑文档'
  },
  name: 'document.writing',
  component: resolve => { require(['@/views/document/writing.vue'], resolve) }
}

export const commonRouter = {
  path: '/',
  name: 'commonRouter',
  component: Main,
  redirect: '/home',
  children: [
    { path: 'home', name: 'home', meta: {title: '首页'}, component: resolve => { require(['@/views/common/home.vue'], resolve) } },
    { path: 'profile', title: '个人中心', name: 'profile', meta: {title: '个人中心'}, component: resolve => { require(['@/views/common/profile.vue'], resolve) } }
  ]
}
