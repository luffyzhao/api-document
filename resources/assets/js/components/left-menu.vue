<template lang="html">
  <Menu theme="dark" width="auto" :active-name="currentPage" @on-select="menuRouter">
    <div class="layout-logo-left"></div>
    <MenuItem name="home">
      <Icon type="ios-home"></Icon>
      <span class="layout-text">首页</span>
    </MenuItem>
    <template v-for="(pages, index) in routerPages">
      <Submenu v-if="pages.children.length >= 1 && pages.parent" :name="pages.name">
        <template slot="title">
          <Icon :type="pages.icon"></Icon>
          <span class="layout-text"> {{ pages.title }} </span>
        </template>
        <MenuItem v-for="(page, key) in pages.children" :key="page.name" :name="page.name">
          <Icon :type="page.icon"></Icon>
          <span class="layout-text">{{ page.title }}</span>
        </MenuItem>
      </Submenu>
      <MenuItem v-else-if="pages.parent === false" :name="pages.name">
        <Icon type="ios-home"></Icon>
        <span class="layout-text">{{ pages.title }}</span>
      </MenuItem>
    </template>
  </Menu>
</template>

<script lang="babel">
  export default {
    data () {
      return {}
    },
    components: {},
    methods:{
      menuRouter (name) {
        this.$router.push({
          name
        })
      }
    },
    computed: {
      currentPage () {
        return this.$store.state.App.currentPage
      },
      routerPages () {
        let routers = []
        let routersForMenu = this.$router.options.routes.filter((n) => n.name==='admin' && n.path === '/admin')[0].children;
        routersForMenu.filter((n) => typeof(n.meta.parent) === 'undefined').forEach((item, index) => {
          routers.push({
            name: item.name,
            title: item.meta.title,
            icon: item.meta.icon,
            children: [],
            parent: typeof(item.component) === 'undefined' ? true : false
          })
        })

        routersForMenu.filter((n) => typeof(n.meta.parent) !== 'undefined').forEach((item, index) => {
          routers.find((n) => n.name === item.meta.parent).children.push({
            name: item.name,
            title: item.meta.title,
            icon: item.meta.icon,
          })

        })
        return routers
      }
    }
  }
</script>

<style lang="scss">
  .ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title{
    overflow: hidden;
    height: 49px;
    white-space: nowrap;
  }
  .ivu-menu-submenu.ivu-menu-item-active{
  .ivu-menu{
    display: block !important;
  }
  }
  .layout-hide-text .layout-text,.layout-hide-text .ivu-menu-submenu-title-icon{
    display: none;
  }
  .layout-hide-text .ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item{
    padding-left: 24px;
  }
</style>
