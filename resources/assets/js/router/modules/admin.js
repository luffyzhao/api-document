export const adminRouter = [
  { path: 'home', name: 'admin.home', meta: {title: '首页'}, component: resolve => { require(['@/views/admin/common/home.vue'], resolve) } },
  { path: 'profile', name: 'admin.profile', meta: {title: '个人中心'}, component: resolve => { require(['@/views/admin/common/profile.vue'], resolve) } },
  { path: 'book.index', name: 'admin.book.index', meta: {title: '项目管理'}, component: resolve => { require(['@/views/admin/book/list.vue'], resolve) } },
  { path: 'permissions.index', name: 'admin.permission.index', meta: {title: '权限管理'}, component: resolve => { require(['@/views/admin/permissions/list.vue'], resolve) } },
  { path: 'roles.index', name: 'admin.role.index', meta: {title: '权限组管理'}, component: resolve => { require(['@/views/admin/roles/list.vue'], resolve) } },
  { path: 'users.index', name: 'admin.user.index', meta: {title: '用户管理'}, component: resolve => { require(['@/views/admin/users/list.vue'], resolve) } },
  { path: 'group.index', name: 'admin.group.index', meta: {title: '用户组管理'}, component: resolve => { require(['@/views/admin/groups/list.vue'], resolve) } },
  { path: 'book.document.index', name: 'admin.book.document.index', meta: {title: '编辑文档', full: true}, component: resolve => { require(['@/views/admin/document/writing.vue'], resolve)}},
]
