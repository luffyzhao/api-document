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
      <Allot v-on:visibleChange="visibleChangeAllot" :show="allotModalShow" :row="allotId"></Allot>
  </div>
</template>

<script lang="babel">
import Create from './create.vue'
import Update from './update.vue'
import Allot from './allot.vue'

export default {
  data() {
    return {
      Columns: [{
        "title": "权限组",
        "key": "name"
      },{
        "title": "权限组名称",
        "key": "display_name"
      },{
        "title": "权限组描述",
        "key": "description"
      },{
        'title': '操作',
        'render': (h, {
          row,
          column,
          index
        }) => {
          return (<button-group>
            <i-button on-click={()=>{this.updateButton(row)}} size="small">更新</i-button>
            <i-button on-click={()=>{this.allotButton(row)}} size="small">分配</i-button>
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
      allotModalShow: false,
      allotId: 0,
      updateId: 0
    }
  },
  mounted () {
    this.search(1);
  },
  methods: {
    search(current){
      this.$get('admin/role',{
        page: current
      }).then((res) => {
        this.Datas = res.data.data;
        this.page.total = res.data.total
        this.page.current = res.data.current_page
        this.page.page_size = res.data.per_page
      })
    },
    updateButton (row) {
      this.updateId = row.id
      this.updateModalShow = true
    },
    allotButton (row) {
      this.allotId = row.id
      this.allotModalShow = true
    },
    deleteButton (row) {
      this.$delete(`admin/role/${row.id}`).then((res) => {
        this.$Message.error('权限组删除成功!');
        this.search(this.page.current)
      })
    },
    visibleChangeCreate(visible) {
      this.createModalShow = visible
      if(visible === false){
        this.search(1)
      }
    },
    visibleChangeAllot (visible) {
      this.allotModalShow = visible;
    },
    visibleChangeUpdate(visible) {
      this.updateModalShow = visible
      if(visible === false){
        this.search(this.page.current)
      }
    }
  },
  components: {
    Create,
    Update,
    Allot
  }
}
</script>
