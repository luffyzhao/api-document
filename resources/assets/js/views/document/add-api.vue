<template>
<div>
  <Modal v-model="modalShow" width="550"  @on-visible-change="visibleChange" >
      <p slot="header">添加文档</p>
      <div>
          <Form ref="addApiModel" :model="addApiModel" :label-width="100">
            <FormItem label="文档名称" prop="name" :rules="{ required: true, message: '文档名称不能为空！', trigger: 'blur' }">
                <Input v-model="addApiModel.name"></Input>
            </FormItem>
            <FormItem label="排序" prop="sort" :rules="{ message: '排序必须是整数！', trigger: 'blur' , pattern: /^[1-9]+[0-9]*$/,}">
                <Input v-model="addApiModel.sort" placeholder="非必填"></Input>
            </FormItem>
          </Form>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" @click="submit('addApiModel')" :loading="loading">提交</Button>
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
    data: {
      type: Object,
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
      addApiModel:{
        name: '',
        identify: '',
        sort: 10
      },
      loading: false
    }
  },
  methods: {
    visibleChange(visible) {
      if (visible === false) {
        this.$emit('visibleChange', visible)
      }
      this.addApiModel = {
        name: this.data.name,
        sort: this.data.sort
      };
    },
    submit(name){
      this.$refs[name].validate((valid) => {
          if (valid) {
            this.loading = true;
            if(this.data.id > 0){
              this.$put(`book/${this.$route.query.id}/document/${this.data.id}`, this.addApiModel).then((res) => {
                this.documents = res.data;
                this.loading = false;
                this.$Message.success('请求成功!');
                this.visibleChange(false)
                this.update()
              })
            }else{
              this.$post(`book/${this.$route.query.id}/document`, this.addApiModel).then((res) => {
                this.documents = res.data;
                this.loading = false;
                this.$Message.success('请求成功!');
                this.visibleChange(false)
                this.update()
              })
            }
          }
      })
    },
    update(){
      this.$emit('update');
    }
  }
}
</script>

<style lang="less">

</style>
