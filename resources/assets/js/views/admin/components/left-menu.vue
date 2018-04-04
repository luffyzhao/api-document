<template lang="html">
  <Menu theme="dark" width="auto" :active-name="currentPage" @on-select="menuRouter">
    <div class="layout-logo-left"></div>
    <MenuItem name="admin.home">
      <Icon type="ios-home"></Icon>
      <span class="layout-text">首页</span>
    </MenuItem>
    <template v-for="(pages, index) in routerPages">
      <Submenu v-if="pages.children.length > 0" name="home">
        <template slot="title">
          <Icon :type="pages.icon"></Icon>
          <span class="layout-text"> {{ pages.title }} </span>
        </template>
        <MenuItem v-for="(page, key) in pages.children" :key="page.name" :name="page.name">
          <Icon :type="page.icon"></Icon>
          <span class="layout-text">{{ page.title }}</span>
        </MenuItem>
      </Submenu>
      <MenuItem v-else-if="pages.name" :name="pages.name">
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
      }
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
      }
      ,
      routerPages () {
        return Menu
      }
    }
  }
</script>
