<template>
<div>
  <Modal title="创建项目" v-model="modalShow" :mask-closable="false" @on-visible-change="visibleChange" class-name="vertical-center-modal" width="auto" @on-ok="submit" ok-text="提交">
      <Form ref="formItem" :model="formItem" :label-width="100">
        <FormItem label="用户姓名:" prop="username" :rules="{required: true, message: '用户姓名不能为空！', trigger: 'blur'}">
          <Input v-model="formItem.username" style="width: 300px"></Input>
        </FormItem>
        <FormItem label="登录邮箱:" prop="email" :rules="{required: true, type: 'email', message: '请输出正确的邮箱号码！', trigger: 'blur'}">
          <Input v-model="formItem.email" style="width: 300px"></Input>
        </FormItem>
        <FormItem label="手机号码:" prop="phone" :rules="{pattern: /^1[34578][0-9]{9}$/, message: '手机号码格式不正确！', trigger: 'blur'}">
          <Input v-model="formItem.phone" style="width: 300px"></Input>
        </FormItem>
        <FormItem label="密码" prop="password" :rules="{required: true, message: '密码不能为空！', trigger: 'blur'}">
          <Input type="password" v-model="formItem.password"></Input>
        </FormItem>
        <FormItem label="确认密码" prop="password_confirmation" :rules="{required: true, message: '确认密码不能为空！', trigger: 'blur'}">
          <Input type="password" v-model="formItem.password_confirmation"></Input>
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
            this.$post('user', this.formItem).then((res) => {
              this.loadingVisible = false
              this.visibleChange(false)
              this.$Message.error('用户添加成功!');
            })
          }
      }).catch((e) => {
        this.loadingVisible = false
      })
    }
  }
}
</script>
