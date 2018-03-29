<template lang="html">
  <div class="box-flex">
    <div class="box-flex-list">
      <Card :bordered="false">
          <p slot="title">
            <span>列表</span>
            <Button size="small" type="success" @click="createModalShow = true">添加</Button>
          </p>
          <Table :columns="Columns" :data="Datas" size="small" ref="table"></Table>
          <Page :total="page.total" size="small" :current.sync="page.current" :page-size="page.page_size" show-total></Page>
      </Card>
    </div>

      <Create v-on:visibleChange="visibleChangeCreate" :show="createModalShow"></Create>
      <Update v-on:visibleChange="visibleChangeUpdate" :show="updateModalShow" :row="updateId"></Update>
  </div>
</template>

<script lang="babel">
import Create from './create.vue'
import Update from './update.vue'

export default {
  data() {
    return {
      Columns: [{
        'title': '操作',
        'render': (h, {
          row,
          column,
          index
        }) => {
          return (<button-group>
            <i-button on-click={()=>{this.updateButton(row)}} size="small">更新</i-button>
            <poptip transfer title="您确认删除这条内容吗？" confirm on-on-ok={()=>{this.deleteButton(row)}}><i-button size="small">删除</i-button></poptip>
          </button-group>)
        }
      }],
      Datas: [],
      page: {
        total: 40,
        current: 1,
        page_size: 20
      },
      createModalShow: false,
      updateModalShow: false,
      updateId: 0
    }
  },
  mounted () {
    this.search(1);
  },
  methods: {
    search(current){

    },
    updateButton (row) {
      this.updateId = row.id
      this.updateModalShow = true
    },
    deleteButton (row) {

    },
    visibleChangeCreate(visible) {
      this.createModalShow = visible
      if(visible === false){

      }
    },
    visibleChangeUpdate(visible) {
      this.updateModalShow = visible
      if(visible === false){

      }
    }
  },
  components: {
    Create,
    Update
  }
}
</script>
