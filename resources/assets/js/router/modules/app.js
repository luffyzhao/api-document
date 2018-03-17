import Main from '@/views/Main.vue'

export const appRouter = [
  {
    path: '/admin',
    icon: 'key',
    name: 'admin',
    title: '后台管理',
    component: Main,
    children: [
       { path: 'book.list', name: 'admin.book.list', meta: {title: '项目管理', icon: 'ios-bookmarks-outline'}, component: resolve => { require(['@/views/book/list.vue'], resolve) } },
    ]
  }
]
