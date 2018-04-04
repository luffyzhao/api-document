<template>
  <div class="mint-my-search">
    <div class="mint-my-searchbar">
      <div class="mint-my-searchbar-inner">
        <i class="mintui mintui-search"></i>
        <input
        ref="input"
        @click="visible = true"
        type="search"
        v-model="currentValue"
        :placeholder="placeholder"
        class="mint-my-searchbar-core">
      </div>
      <a
        class="mint-my-searchbar-cancel"
        @click="searchCancel"
        v-show="visible"
        v-text="cancelText">
      </a>
    </div>
    <div class="mint-my-search-list" v-show="show || currentValue">
      <div class="mint-my-search-list-warp">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * mt-search
 * @module components/search
 * @desc 搜索框
 * @param {string} value - 绑定值
 * @param {string} [cancel-text=取消] - 取消按钮文字
 * @param {string} [placeholder=取消] - 搜索框占位内容
 * @param {boolean} [autofocus=false] - 自动 focus
 * @param {boolean} [show=false] - 始终显示列表
 * @param {slot} 结果列表
 *
 * @methodes @searchCancel 点击取消
 *
 * @example
 * <mt-search :value.sync="value">
 * <a class="mint-my-cell" v-if="filterResult.length > 0" v-for="item in filterResult">
 *     <div class="mint-my-cell-wrapper">
 *         <div class="mint-my-cell-title"><!----> 
 *             <span class="mint-my-cell-text">{{ item }}</span>
 *         </div> 
 *     </div> 
 * </a>
 * <a class="mint-my-cell" v-if="filterResult.length == 0">
 *     <div class="mint-my-cell-wrapper">
 *         <div class="mint-my-cell-empty">
 *             没有找到数据！
 *         </div>
 *     </div>
 * </a>
 * </mt-search>
 * 
 */
export default {
  name: 'mt-search',
  data() {
    return {
      visible: false,
      currentValue: this.value
    };
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },
    value(val) {
      this.currentValue = val;
    }
  },
  methods:{
    searchCancel () {
      this.visible = false;
      this.currentValue = '';
      this.$emit('searchCancel');
    }
  },
  props: {
    value: String,
    autofocus: Boolean,
    show: Boolean,
    cancelText: {
      default: '取消'
    },
    placeholder: {
      default: '搜索'
    }
  },
  mounted() {
    this.autofocus && this.$refs.input.focus();
  }
};
</script>

<style lang="less">
.mint-my{
  &-search {
    height: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
  &-searchbar {
    position: relative;
    align-items: center;
    background-color: #d9d9d9;
    box-sizing: border-box;
    display: flex;
    padding: 8px 10px;
    z-index: 1;
    &-inner {
      align-items: center;
      background-color: #fff;
      border-radius: 2px;
      display: flex;
      flex: 1;
      height: 28px;
      padding: 4px 6px;
      .mintui-search {
        font-size: 12px;
        color: #d9d9d9;
      }
    }
    &-core {
      appearance: none;
      border: 0;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      outline: 0;
    }
    &-cancel {
      color: #26a2ff;
      margin-left: 10px;
      text-decoration: none;
    }
  }
  &-search-list {
    overflow: auto;
    padding-top: 44px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .mint-my-cell{
      border-bottom: 1px solid #c8c8cd;
      &:last-child{
        border-bottom: 1px solid #fff;
      }
    }
  }


  &-cell {
      background-color: #fff;
      box-sizing: border-box;
      color: inherit;
      min-height: 48px;
      display: block;
      overflow: hidden;
      position: relative;
      text-decoration: none;
      &:first-child {
        .mint-cell-wrapper {
          background-origin: border-box;
        }
      }
      &:last-child {
        background-image: linear-gradient(0deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: bottom;
      }
      &-wrapper {
        background-image:linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
        background-size: 120% 1px;
        background-repeat: no-repeat;
        background-position: top left;
        background-origin: content-box;
        align-items: center;
        box-sizing: border-box;
        display: flex;
        font-size: 16px;
        line-height: 1;
        min-height: inherit;
        overflow: hidden;
        padding: 0 10px;
        width: 100%;
      }
      &-mask {
        &::after {
          background-color: #000;
          content: " ";
          opacity: 0;
          position: absolute;
          left: 0;
          top: 0;
        }
        &:active::after {
          opacity: .1;
        }
      }
      &-text {
        vertical-align: middle;
      }
      &-label {
        color: #888;
        display: block;
        font-size: 12px;
        margin-top: 6px;
      }
      img {
        vertical-align: middle;
      }
      &-title {
        flex: 1;
      }
      &-value {
        color: #888;
        display: flex;
        align-items: center;
      }
      &-left {
        position: absolute;
        height: 100%;
        left: 0;
        transform: translate3d(-100%, 0, 0);
      }
      &-right {
        position: absolute;
        height: 100%;
        right: 0;
        top: 0;
        transform: translate3d(100%, 0, 0);
      }
      &-allow-right::after {
        border: solid 2px #c8c8cd;
        border-bottom-width: 0;
        border-left-width: 0;
        content: " ";
        position: absolute;
        size: 5px;
        transform: translateY(-50%) rotate(45deg);
      }
      &-empty{
        color: #ccc;
        text-align: center;
        width: 100%;
      }
    }
}

</style>