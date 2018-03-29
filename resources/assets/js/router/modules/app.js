import Main from '@/views/Main.vue'

export const appRouter = [
  {
    path: '/admin',
    icon: 'key',
    name: 'admin',
    title: '后台管理',
    component: Main,
    children: [
      { path: 'book.index', name: 'book.index', meta: {title: '项目管理', icon: 'ios-bookmarks-outline'}, component: resolve => { require(['@/views/book/list.vue'], resolve) } },
      { path: 'permissions.index', name: 'permissions.index', meta: {title: '权限管理', icon: 'lock-combination'}, component: resolve => { require(['@/views/permissions/list.vue'], resolve) } },
      { path: 'roles.index', name: 'roles.index', meta: {title: '角色管理', icon: 'social-dropbox'}, component: resolve => { require(['@/views/roles/list.vue'], resolve) } },
    ]
  }
]
