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
          <BreadcrumbItem v-if="$route.meta.parent">{{ $route.meta.parent }}</BreadcrumbItem>
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

<style lang="less">

.box-flex-search {
    margin-bottom: 15px;
}
.layout {
    background: #f0f0f0;
    position: relative;
    height: 100%;
}
.layout .ivu-row-flex {
    height: 100%;
}
.layout-content {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    &-main {
        margin: 15px;
    }
}
.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
.layout-menu-left {
    background: #464c5b;
}
.layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    position: relative;
    &-left {
        margin: 6px;
        display: inline-block;
    }
    &-middle {
        position: absolute;
        left: 60px;
        top: 0;
        right: 340px;
        bottom: 0;
        padding: 10px;
        overflow: hidden;
        .ivu-breadcrumb {
            padding: 12px 8px 0;
        }
    }
    &-right {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 300px;
        text-align: right;
        &-icon {
            display: inline-block;
            padding: 18px 0;
            text-align: center;
            cursor: pointer;
            width: 100px;
            &-item {
                width: 30px;
                display: inline-block;
            }
            .ivu-tooltip {
                width: 30px;
                i {
                    vertical-align: middle;
                }
            }
        }
        &-ownspace {
            display: inline-block;
            .username {
                display: inline-block;
                max-width: 100px;
                word-break: keep-all;
                white-space: nowrap;
                vertical-align: middle;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: right;
            }
            .ivu-avatar {
                background: rgb(97, 159, 231);
                margin-left: 10px;
                margin-right: 20px;
            }
        }
    }
}
.layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
}

.ivu-menu-item a {
    color: hsla(0,0%,100%,.7);
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) a,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu) a {
    color: #2d8cf0;
}
.ivu-menu-item:hover a {
    color: #fff;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active a,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover a {
    color: #fff;
}
.layout-content-main {
    overflow-x: auto;
    /* flex-grow:1; */
    flex: 1;
    padding: 15px;
    margin: 0;
    &-content {
        height: 100%;
        width: 100%;
    }
}
.layout-router {
    height: 42px;
    z-index: -1;
    overflow: hidden;
    background: #fff;
    border-bottom: 2px solid #464c5b;
    &-scroll {
        position: relative;
        box-sizing: border-box;
        padding-right: 120px;
        width: 100%;
        height: 100%;
        &-dropdown {
            position: absolute;
            right: 0;
            top: 0;
            box-sizing: border-box;
            padding-top: 8px;
            text-align: center;
            width: 110px;
            height: 100%;
            background: #fff;
            box-shadow: -3px 0 15px 3px rgba(0,0,0,.1);
            z-index: 10;
        }
        &-body {
            position: absolute;
            padding: 2px 10px;
            overflow: visible;
            white-space: nowrap;
            transition: left 0.3s ease;
        }
    }
}
.layout-content-right,
.layout-menu-left {
    transition: all 0.2s ease-in-out;
}
.padding-left-right-10{
  padding: 0 10px;
}
.text-center{
  text-align:center;
}
div::-webkit-scrollbar {
    width: 5px;
    height: 1px;
}
div::-webkit-scrollbar-thumb {
    border-radius: 5px;
     -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #535353;
}
div::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 10px;
    background: #EDEDED;
}
</style>
