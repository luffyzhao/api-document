<template>
<div>
  <Modal title="修改文档" v-model="modalShow" :mask-closable="false" @on-visible-change="visibleChange" class-name="vertical-center-modal" width="auto" @on-ok="submit" ok-text="提交">
      <Form ref="formItem" :model="formItem" :label-width="100">
        <FormItem label="用户姓名:" prop="username" :rules="{required: true, message: '用户姓名不能为空！', trigger: 'blur'}">
          <Input v-model="formItem.username" style="width: 300px"></Input>
        </FormItem>
        <FormItem label="登录邮箱:" prop="email" :rules="{required: true, type: 'email', message: '请输出正确的邮箱号码！', trigger: 'blur'}">
          <Input v-model="formItem.email" style="width: 300px"></Input>
        </FormItem>
        <FormItem label="手机号码:" prop="phone" :rules="{ pattern: /^1[34578][0-9]{9}$/, message: '手机号码格式不正确！', trigger: 'blur'}">
          <Input v-model="formItem.phone" style="width: 300px"></Input>
        </FormItem>
        <FormItem label="登录密码:">
          <Button type="text" @click="setPassword = true">修改密码</Button>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="primary" size="large" :loading="loadingVisible" @click="submit('formItem')">提交</Button>
      </div>
  </Modal>

  <Modal ref="modalSetPassword" v-model="setPassword" title="修改密码" ok-text="提交" cancel-text="取消" :loading="true" @on-ok="handlePassword">
    <Form ref="formSetPassword" :model="formSetPassword" :label-width="100">
      <FormItem label="原密码" prop="old_password" :rules="{required: true, message: '原密码不能为空！', trigger: 'blur'}">
        <Input type="password" v-model="formSetPassword.old_password"></Input>
      </FormItem>
      <FormItem label="新密码" prop="password" :rules="{required: true, message: '密码不能为空！', trigger: 'blur'}">
        <Input type="password" v-model="formSetPassword.password"></Input>
      </FormItem>
      <FormItem label="确认密码" prop="password_confirmation" :rules="{required: true, message: '确认密码不能为空！', trigger: 'blur'}">
        <Input type="password" v-model="formSetPassword.password_confirmation"></Input>
      </FormItem>
    </Form>
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
      formItem: {},
      formSetPassword: {
        old_password: '',
        password: '',
        password_confirmation: ''
      },
      setPassword: false
    }
  },
  methods: {
    handlePassword (e) {
      this.$put(`user/${this.updateId}/password`, this.formSetPassword).then((res) => {
        this.$Message.success('密码修改成功!');
        this.$refs['modalSetPassword'].close();
      })
    },
    visibleChange(visible) {
      if (visible === false) {
        this.$emit('visibleChange', visible)
      }
    },
    submit(name){
      this.loadingVisible = true
      this.$refs[name].validate((valid) => {
          if (valid) {
            this.$put(`user/${this.updateId}`, {
              username: this.formItem.username,
              phone: this.formItem.phone,
              email: this.formItem.email
            }).then((res) => {
              this.loadingVisible = false
              this.visibleChange(false)
              this.$Message.error('用户更新成功!');
            }).catch((e) => {
              this.loadingVisible = false
            })
          }
      })
    }
  },
  watch: {
    // 监听组件显示
    modalShow: function (val, oldVal) {
      if(val){
        this.$get(`user/${this.updateId}`).then((res) => {
          this.formItem = res.data;
        })
      }else{
        this.formItem = {}
      }
    }
  }
}
</script>
