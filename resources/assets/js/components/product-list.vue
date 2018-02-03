<template lang="html">
  <ul>
    <li v-for="item in lists" :key="key" class="list-item online" ismarket="0" data="1936296745">
      <div class="shopimg">
        <img width="228" height="140" data-src="https://img.waimai.baidu.com/pb/455dc6db93e8fe0b68f6a535b1d34a0e56@s_0,w_228,h_140,q_100" alt="韦小堡（蛇口店）" onerror="this.src='https://stc1.waimai.baidu.com/static/waimai/images/shopcard_loading_c401ffe.png'" src="https://img.waimai.baidu.com/pb/455dc6db93e8fe0b68f6a535b1d34a0e56@s_0,w_228,h_140,q_100" />
      </div>
      <div class="title" title="一品麻辣香锅饭">
        一品麻辣香锅饭
      </div>
      <div class="info f-info clearfix">
        <div class="f-col f-price">
          <span class="item-label">价格:</span>
          <span class="item-value">&yen;20</span>
        </div>
        <div class="f-col f-cost">
          <span class="item-label">库存:</span>
          <span class="item-value">&yen;3</span>
        </div>
        <div class="f-col f-time">
          编辑
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="babel">
  export default {
    props: {
      lists: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {}
    },
    components: {}
  }
</script>

<style lang="scss">

</style>
