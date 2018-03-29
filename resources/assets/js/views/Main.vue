<template>
<div class="layout" :class="{'layout-hide-text': layoutHideText}">
  <Row type="flex">
    <Col span="5" class="layout-menu-left" :style="{width:layoutWidth + 'px'}">
    <left-menu></left-menu>
    </Col>
    <Col span="19" class="layout-content-right" :style="{width:layoutContentRightWidth + 'px'}">
    <div class="layout-header">
      <div class="layout-header-left">
        <Button type="text" @click="layoutHideText = !layoutHideText">
            <Icon type="navicon" size="40"></Icon>
          </Button>
      </div>
      <div class="layout-header-middle">
        <Breadcrumb separator=">">
          <BreadcrumbItem v-if="$route.path !== '/home'" href="/home">首页</BreadcrumbItem>
          <BreadcrumbItem :href="$route.path">{{ $route.meta.title }}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="layout-header-right">
        <header-icon></header-icon>
        <header-ownspace></header-ownspace>
      </div>
    </div>
    <div class="layout-router">
      <router-scroll></router-scroll>
    </div>
    <div class="layout-content" :style="{height: layoutContentHeight + 'px'}">
      <div class="layout-content-main">
        <div class="layout-content-main-content">
          <router-view></router-view>
        </div>
      </div>
      <div class="layout-copy">
        2011-2016 &copy; TalkingData
      </div>
    </div>
    </Col>
  </Row>
</div>
</template>
<script>
import headerIcon from '@/components/header-icon.vue'
import headerOwnspace from '@/components/header-ownspace.vue'
import routerScroll from '@/components/router-scroll.vue'
import leftMenu from '@/components/left-menu.vue'
export default {
  components: {
    headerIcon,
    headerOwnspace,
    routerScroll,
    leftMenu
  },
  data() {
    return {
      layoutHideText: false
    }
  },
  computed: {
    layoutContentRightWidth() {
      return this.$store.state.App.body.width - this.layoutWidth
    },
    layoutContentHeight() {
      return this.$store.state.App.layoutContent.height
    },
    layoutWidth() {
      if (this.layoutHideText) {
        return 60
      } else {
        return 180
      }
    }
  },
  methods: {

  }
}
</script>
