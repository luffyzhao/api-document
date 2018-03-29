export default [{
    name: 'book.index',
    icon: 'ionic',
    title: '项目管理',
    children: []
  },{
    icon: 'locked',
    title: '角色权限',
    children: [{
      name: 'permissions.index',
      title: '权限管理',
      icon: 'lock-combination'
    },{
      name: 'roles.index',
      title: '角色管理',
      icon: 'social-dropbox'
    }]
  }
]
