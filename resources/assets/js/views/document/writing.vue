<template>
<div>
  <Modal title="编写文档" :width="60" :scrollable="true" v-model="modalShow" :mask-closable="false" @on-visible-change="visibleChange" class-name="vertical-center-modal" >
    <markdown></markdown>
    <span slot="footer"></span>
  </Modal>
</div>
</template>

<script>
import markdown from '@/components/markdown.vue'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    row: {
      type: Number,
      default: 0
    }
  },
  computed: {
    modalShow: {
      get() {
        return this.show
      },
      set() {}
    },
    updateId () {
      return this.row
    }
  },
  data () {
    return {
      loadingVisible: false,
    }
  },
  methods: {
    visibleChange(visible) {
      if (visible === false) {
        this.$emit('visibleChange', visible)
      }
    }
  },
  components: {
    markdown
  },
  watch: {
    modalShow: function (val, oldVal) {

    }
  }
}
</script>

<style lang="less">
.vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;

    .ivu-modal {
        top: 0;
    }
}
</style>
