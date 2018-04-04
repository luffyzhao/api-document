export default [{
    name: 'admin.book.index',
    icon: 'ionic',
    title: '项目管理',
    children: []
  },{
    icon: 'ionic',
    title: '用户管理',
    children: [
      {
        name: 'admin.user.index',
        title: '用户管理',
        icon: 'person-add'
      },
      {
        name: 'admin.group.index',
        title: '用户组管理',
        icon: 'person-add'
      },
    ]
  },{
    icon: 'locked',
    title: '权限管理',
    children: [{
      name: 'admin.role.index',
      title: '权限组管理',
      icon: 'social-dropbox'
    },{
      name: 'admin.permission.index',
      title: '权限管理',
      icon: 'lock-combination'
    }]
  }
]
