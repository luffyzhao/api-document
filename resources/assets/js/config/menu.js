export default [{
    name: 'book.index',
    icon: 'ionic',
    title: '项目管理',
    children: []
  },{
    icon: 'locked',
    title: '角色权限',
    children: [{
      name: 'users.index',
      title: '用户管理',
      icon: 'person-add'
    },{
      name: 'roles.index',
      title: '角色管理',
      icon: 'social-dropbox'
    },{
      name: 'permissions.index',
      title: '权限管理',
      icon: 'lock-combination'
    }]
  }
]
