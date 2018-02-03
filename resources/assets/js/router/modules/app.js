import Main from '@/views/Main.vue'

export const appRouter = [
  {
    path: '/admin',
    icon: 'key',
    name: 'admin',
    title: '后台管理',
    component: Main,
    children: [
       { path: 'document.list', name: 'admin.document.list', meta: {title: '文档管理', icon: 'ios-list-outline', parent_icon: 'clipboard', parent: '文档管理'}, component: resolve => { require(['@/views/document/list.vue'], resolve) } }
    ]
  }
]
