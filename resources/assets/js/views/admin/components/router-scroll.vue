<template lang="html">
  <div class="layout-router-scroll">
    <div class="layout-router-scroll-dropdown">
      <Dropdown :transfer="true" @on-click="tagDropdown">
        <Button type="primary" size="small">
          标签选项
          <Icon type="arrow-down-b"></Icon>
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem name="closeOther">关闭其他</DropdownItem>
          <DropdownItem name="closeAll">关闭所有</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <div class="layout-router-scroll-body">
      <Tag type="dot" v-for="(item, index) in openPageList" :key="index" :color="currentPage === item.name ? 'blue':'default'" :closable="item.name !== 'home'" :name="index" @on-close="tagClose" @click.native="menuRouter(item.name)">{{ item.meta.title }}</Tag>
    </div>
  </div>
</template>

<script lang="babel">
  export default {
    data () {
      return {}
    },
    computed: {
      currentPage () {
        return this.$store.state.App.currentPage
      },
      openPageList () {
        return this.$store.state.App.openPageList
      }
    },
    methods: {
      tagClose (event, index) {
        this.$store.commit('closePage', {
          index,
          vm: this
        })
      },
      tagDropdown (name) {
        this.$store.commit('closePages', {
          name,
          vm: this
        })
      },
      menuRouter (name) {
        this.$router.push({
          name
        })
      }
    },
    components: {}
  }
</script>

<style>

</style>
