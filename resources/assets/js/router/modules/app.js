import Main from '@/views/Main.vue'

export const appRouter = [
  {
    path: '/admin',
    icon: 'key',
    name: 'admin',
    title: '后台管理',
    component: Main,
    children: [
      // {path: 'book', name: 'admin.book', meta: {title: '项目管理', icon: 'ios-bookmarks-outline'}},
      { path: 'book.index', name: 'book.index', meta: {title: '项目管理', icon: 'ios-bookmarks-outline'/*, parent: 'admin.book'*/}, component: resolve => { require(['@/views/book/list.vue'], resolve) } },
    ]
  }
]
