<template lang="html">
  <div class="layout-header-right-ownspace">
    <Dropdown @on-click="tagDropdown">
      <a href="javascript:void(0);">
          <span class="username">
            luffyzhao
            <Icon type="arrow-down-b"></Icon>
          </span>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem name="ownspace">个人中心</DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <span class="ivu-avatar ivu-avatar-circle ivu-avatar-default ivu-avatar-image">
      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&amp;fm=27&amp;gp=0.jpg">
    </span>
    </div>
</template>

<script lang="babel">
  import Util from '@/libs/Util'
  export default {
    data () {
      return {}
    },
    methods: {
      tagDropdown (name) {
        if (name === 'ownspace') {
          this.$router.push({
            name: 'admin.profile'
          })
        } else {
          Util.cache.clear()
          this.$router.push({
            name: 'common.login'
          })
        }
      }
    },
    components: {}
  }
</script>

<style lang="scss">

</style>
