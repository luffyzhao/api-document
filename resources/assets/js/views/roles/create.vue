<template>
<div>
  <Modal title="创建角色" v-model="modalShow" :mask-closable="false" @on-visible-change="visibleChange" class-name="vertical-center-modal" width="auto" @on-ok="submit" ok-text="提交">
      <Form ref="formItem" :model="formItem" :label-width="100">
        <FormItem label="角色" prop="name" :rules="{required: true, message: '角色验证不通过!', trigger: 'blur', pattern: /^[a-z0-9_]+$/i}">
          <Input v-model="formItem.name" placeholder="Enter something..." style="width:500px;"></Input>
        </FormItem>
        <FormItem label="角色名称" prop="display_name" :rules="{required: true, message: '角色名称验证不通过!', trigger: 'blur'}">
          <Input v-model="formItem.display_name" placeholder="Enter something..." style="width:500px;"></Input>
        </FormItem>
        <FormItem label="角色描述" prop="description">
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
    }
  },
  computed: {
    modalShow: {
      get() {
        return this.show
      },
      set() {}
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
            this.$post('role', this.formItem).then((res) => {
              this.loadingVisible = false
              this.visibleChange(false)
              this.$Message.error('角色添加成功!');
            })
          }
      })
    }
  }
}
</script>
