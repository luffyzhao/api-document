<template lang="html">
  <Menu theme="dark" width="auto" :active-name="currentPage" @on-select="menuRouter">
    <div class="layout-logo-left"></div>
    <MenuItem name="admin.home">
      <Icon type="ios-home"></Icon>
      <span class="layout-text">首页</span>
    </MenuItem>
    <template v-for="(pages, index) in routerPages">
      <Submenu v-if="pages.children.length > 0 && isShow(pages)" name="home">
        <template slot="title">
          <Icon :type="pages.icon"></Icon>
          <span class="layout-text"> {{ pages.title }} </span>
        </template>
        <MenuItem v-for="(page, key) in pages.children" :key="page.name" v-if="isShow(page)" :name="page.name">
          <Icon :type="page.icon"></Icon>
          <span class="layout-text">{{ page.title }}</span>
        </MenuItem>
      </Submenu>
      <MenuItem v-else-if="pages.name && isShow(pages)" :name="pages.name">
        <Icon :type="pages.icon"></Icon>
        <span class="layout-text">{{ pages.title }}</span>
      </MenuItem>
    </template>
    <MenuItem name="admin.profile">
      <Icon type="person"></Icon>
      <span class="layout-text">个人中心</span>
    </MenuItem>
  </Menu>
</template>

<script lang="babel">
  import Menu from "@/config/menu"

  export default {
    data () {
      return {
        roles: []
      }
    },
    components: {},
    methods:{
      menuRouter (name) {
        this.$router.push({
          name
        })
      },
      getPermsByRoles(roles){
        let perms = [];
        let item = {};
        let index = -1;
        for (var i = 0; i < roles.length; i++) {
          for (var j = 0; j < roles[i].perms.length; j++) {
            item = roles[i].perms[j];
            index = perms.findIndex((v) => {
              return v.id === item
            })
            if(index === -1){
              perms.push(roles[i].perms[j]);
            }
          }
        }
        return perms;
      },
      isPerms(name){
        name = name.substring(6)
        let index =  this.$store.state.App.perms.findIndex((val) => {
          return val.name === name
        })
        if(index > -1){
          return true;
        }else{
          return false;
        }
      },
      isShow(page){
        if(typeof (page.children) === 'undefined' || page.children.length == 0){
          return page.perms;
        }else{
          let perms = false;
          for (var i = 0; i < page.children.length; i++) {
            perms = page.children[i].perms || perms
          }
          return perms;
        }
      }
    },
    mounted () {
      if(this.$store.state.App.perms.length === 0){
        this.$get('admin/auth/perms').then((res) => {
          this.roles = res.data;

          this.$store.commit('setPerms', this.getPermsByRoles(res.data))
        })
      }
    },
    computed: {
      currentPage () {
        return this.$store.state.App.currentPage;
      },
      routerPages () {
        for (var i = 0; i < Menu.length; i++) {
          if(Menu[i].children.length === 0){
            Menu[i].perms = this.isPerms(Menu[i].name);
          }else{
            for (var j = 0; j < Menu[i].children.length; j++) {
              Menu[i].children[j].perms = this.isPerms(Menu[i].children[j].name);
            }
          }
        }
        return Menu
      }
    }
  }
</script>
