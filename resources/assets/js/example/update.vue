<template>
<div>
  <Modal title="修改文档" v-model="modalShow" :mask-closable="false" @on-visible-change="visibleChange" class-name="vertical-center-modal" width="auto" @on-ok="submit" ok-text="提交">
      <Form ref="formItem" :model="formItem" :label-width="100">

      </Form>
      <div slot="footer">
        <Button type="primary" size="large" :loading="loadingVisible" @click="submit('formItem')">提交</Button>
      </div>
  </Modal>
</div>
</template>

<script>
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
      formItem: {}
    }
  },
  methods: {
    visibleChange(visible) {
      if (visible === false) {
        this.$emit('visibleChange', visible)
      }
    },
    submit(name){
      this.loadingVisible = true
      this.$refs[name].validate((valid) => {
          if (valid) {}
      })
      this.loadingVisible = false
    }
  },
  watch: {
    // 监听组件显示
    modalShow: function (val, oldVal) {
      if(val){

      }
    }
  }
}
</script>
