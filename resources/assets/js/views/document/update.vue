<template>
<div>
  <Modal title="创建文档" v-model="modalShow" :mask-closable="false" @on-visible-change="visibleChange" class-name="vertical-center-modal" width="auto" @on-ok="submit" ok-text="提交">
      <Form ref="formItem" :model="formItem" :rules="formRules" :label-width="80">
        <FormItem label="文档名称" prop="name">
          <Input v-model="formItem.name" placeholder="Enter something..." style="width:500px;"></Input>
        </FormItem>
        <FormItem label="文档版本" prop="version">
          <Input v-model="formItem.version" placeholder="Enter something..." style="width:200px;">
          </Input>
        </FormItem>
        <FormItem label="作者" prop="author">
          <Input v-model="formItem.author" placeholder="Enter something..." style="width:200px;"></Input>
        </FormItem>
        <FormItem label="开发环境" prop="develop_url">
          <Input v-model="formItem.develop_url" placeholder="Enter something..." style="width:500px;"></Input>
        </FormItem>
        <FormItem label="测试环境" prop="test_url">
          <Input v-model="formItem.test_url" placeholder="Enter something..." style="width:500px;"></Input>
        </FormItem>
        <FormItem label="生产环境" prop="production_url">
          <Input v-model="formItem.production_url" placeholder="Enter something..." style="width:500px;"></Input>
        </FormItem>
        <FormItem label="文档说明">
          <markdown v-model="formItem.desc" @on-result-change="(val) => formItem.desc = val"></markdown>
        </FormItem>
      </Form>

      <div slot="footer">
        <Button type="primary" size="large" :loading="loadingVisible" @click="submit('formItem')">提交</Button>
      </div>
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
      formItem: {
        name: '',
        version: '',
        author: '',
        develop_url: '',
        test_url: '',
        production_url: '',
        desc: ''
      },
      formRules: {
        name: [
          { required: true, message: '文档名称不能为空', trigger: 'blur' },
          { max: 50, message: '文档名称最多只能50个字符', trigger: 'blur' }
        ],
        version: [
          { required: true, message: '文档版本号不能为空', trigger: 'blur' },
          { max: 20, message: '文档版本号最多只能20个字符', trigger: 'blur' }
        ],
        author: [
          { max: 20, message: '作者最多只能20个字符', trigger: 'blur' }
        ],
        develop_url: [
          { required: true, message: '开发环境URL不能为空', trigger: 'blur' },
          { max: 200, message: '开发环境URL字符最多只能200个字符', trigger: 'blur' }
        ],
        test_url: [
          { required: true, message: '测试环境URL不能为空', trigger: 'blur' },
          { max: 200, message: '测试环境URL字符最多只能200个字符', trigger: 'blur' }
        ],
        production_url: [
          { required: true, message: '生产环境URL不能为空', trigger: 'blur' },
          { max: 200, message: '生产环境URL字符最多只能200个字符', trigger: 'blur' }
        ]
      }
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
          if (valid) {
              this.$Message.success('Success!');
              this.visibleChange(false)
          } else {
              this.$Message.error('Fail!');
          }
      })
      this.loadingVisible = false
    }
  },
  components: {
    markdown
  },
  watch: {
    modalShow: function (val, oldVal) {
      if(val){
        this.formItem = {
          "name": "Name9",
          "version": '0.1.0',
          "author": '只是SB',
          "develop_url": 'http://localhost:8080/#/admin/document.list',
          "test_url": 'http://localhost:8080/#/admin/document.list',
          "production_url": 'http://localhost:8080/#/admin/document.list',
          "desc": '2018-01-01 20:00:10'
        }
      }
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
