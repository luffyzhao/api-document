<template>
<div>
  <Modal v-model="modalShow" @on-visible-change="visibleChange" width="550">
    <p slot="header">修改记录</p>
    <div>
      <Table :columns="historyColumns" :data="historyData"></Table>
    </div>
    <div slot="footer"></div>
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
      historyColumns: [
          {
              title: 'ID',
              key: 'id'
          },
          {
              title: '修改时间',
              key: 'updated_at'
          },
          {
              title: '修改人',
              key: 'address'
          },
          {
              title: '版本',
              key: 'version'
          },
          {
              title: '操作',
              key: 'address'
          }
      ],
      historyData: [],
    }
  },
  methods: {
    visibleChange(visible) {
      if (visible === false) {
        this.$emit('visibleChange', visible)
      }
    },
    submit(name){
      this.$refs[name].validate((valid) => {
          if (valid) {

          }
      })
    }
  }
}
</script>
