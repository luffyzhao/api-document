<template>
<div>
  <Modal title="分配权限组" v-model="modalShow" :mask-closable="false" @on-visible-change="visibleChange" class-name="vertical-center-modal" width="500" @on-ok="submit" ok-text="提交">
      <Form ref="formItem" :model="formItem" :label-width="1">
        <FormItem>
          <CheckboxGroup v-model="formItem.data">
            <Checkbox v-for="item in formItem.permission" :key="item.id" :label="item.id">{{ item.name }}</Checkbox>
          </CheckboxGroup>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button size="large" @click="allCheck">全选</Button>
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
    allotId () {
      return this.row
    }
  },
  data () {
    return {
      loadingVisible: false,
      formItem: {
        permission: [],
        data: []
      }
    }
  },
  methods: {
    visibleChange(visible) {
      if (visible === false) {
        this.$emit('visibleChange', visible)
      }
    },
    allCheck (){
      if(this.formItem.data.length === this.formItem.permission.length){
        this.formItem.data = []
      }else{
        this.formItem.data = this.formItem.permission.map((v)=>v.id)
      }
    },
    submit(name){
      this.loadingVisible = true
      this.$post(`admin/user/${this.allotId}/group`, {
        relation: this.formItem.data
      }).then((res) => {
        this.loadingVisible = false
        this.visibleChange(false)
      })
    }
  },
  watch: {
    // 监听组件显示
    modalShow: function (val, oldVal) {
      if(val){
        this.$get(`admin/group/all`).then((res) => {
          this.formItem.permission = res.data;
        })
        this.$get(`admin/user/${this.allotId}/group`).then((res) => {
          this.formItem.data = res.data.map((v) => v.id);
        })
      }else{
        this.formItem.data = []
      }
    }
  }
}
</script>
