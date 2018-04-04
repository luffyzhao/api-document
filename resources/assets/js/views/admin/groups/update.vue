<template>
<div>
  <Modal title="修改文档" v-model="modalShow" :mask-closable="false" @on-visible-change="visibleChange" class-name="vertical-center-modal" width="auto" @on-ok="submit" ok-text="提交">
      <Form ref="formItem" :model="formItem" :label-width="100">
        <FormItem label="用户组" prop="name" :rules="{required: true, message: '用户组验证不通过!', trigger: 'blur'}">
          <Input v-model="formItem.name" placeholder="Enter something..." style="width:500px;"></Input>
        </FormItem>
        <FormItem label="用户组描述" prop="description">
          <Input v-model="formItem.description" type="textarea" placeholder="Enter something..." style="width:500px;"></Input>
        </FormItem>
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
      }else{
        this.formItem = {}
      }
    },
    submit(name){
      this.loadingVisible = true
      this.$refs[name].validate((valid) => {
          if (valid) {
            this.$put(`admin/group/${this.updateId}`, {
              name: this.formItem.name,
              description: this.formItem.description,
            }).then((res) => {
              this.loadingVisible = false
              this.visibleChange(false)
              this.$Message.error('权限更新成功!');
            })
          }
      })
    }
  },
  watch: {
    // 监听组件显示
    modalShow: function (val, oldVal) {
      if(val){
        this.$get(`admin/group/${this.updateId}`).then((res) => {
          this.formItem = res.data;
        })
      }else{
        this.formItem = {}
      }
    }
  }
}
</script>
