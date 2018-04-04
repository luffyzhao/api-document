<template lang="html">
  <div class="box-flex">
    <div class="box-flex-list">
      <Card :bordered="false">
          <p slot="title">
            <span>列表</span>
            <Button size="small" type="success" @click="() => {this.createModalShow = true}">添加</Button>
          </p>
          <Table :columns="documentColumns" :data="documentDatas" size="small" ref="table"></Table>
          <Page :total="page.total" size="small" :current.sync="page.current" :page-size="page.page_size" @on-change="search" show-total></Page>
      </Card>
    </div>

    <Create v-on:visibleChange="visibleChangeCreate" :show="createModalShow"></Create>
    <Update v-on:visibleChange="visibleChangeUpdate" :show="updateModalShow" :row="updateId"></Update>
    <Group v-on:visibleChange="visibleChangeGroup" :show="groupModalShow" :row="row"></Group>
  </div>
</template>

<script lang="babel">
import Create from './create.vue'
import Update from './update.vue'
import Group from './group.vue'

export default {
  data() {
    return {
      documentColumns: [{
          "title": "项目名称",
          "key": "name"
        },
        {
          "title": "创建人",
          "key": "username",
          "width": 200
        },
        {
          "title": "可见状态",
          "key": "status",
          "width": 200,
          "render": (h, {row, column, index}) => {
            if(row.status == 1){
              return (<icon size="16px" type="eye"></icon>);
            }else{
              return (<icon size="16px" type="eye-disabled"></icon>);
            }
          }
        },
        {
          "title": "最后修改时间",
          "key": "updated_at",
          "width": 200
        },
        {
          'title': '操作',
          'render': (h, {
            row,
            column,
            index
          }) => {
            return (<button-group>
              <i-button size="small" on-click={() => this.viewBook(row.id)}>查看文档</i-button>
              <i-button size="small" on-click={()=>{this.updateButton(row)}}>更新</i-button>
              <i-button size="small" on-click={()=>{this.groupButton(row)}}>分配用户组</i-button>
              <i-button on-click={()=>{this.writingButton(row)}} size="small">编写文档</i-button>
            </button-group>)
          },
          'widht': 200
        }
      ],
      documentDatas: [],
      page: {
        total: 40,
        current: 1,
        page_size: 20
      },
      documentSearch: {
        name: ''
      },
      createModalShow: false,
      updateModalShow: false,
      updateId: 0,
      groupModalShow: false,
      row: {}
    }
  },
  mounted () {
    this.search(1);
  },
  methods: {
    updateButton (row) {
      this.updateId = row.id
      this.updateModalShow = true
    },
    groupButton(row){
      this.row = row
      this.groupModalShow = true
    },
    visibleChangeGroup(visible){
      this.groupModalShow = visible;
    },
    viewBook (id) {
      this.$router.push({
        name: 'home.documents',
        query: {id}
      });
    },
    writingButton(row){
      this.$router.push({
          name: "admin.book.document.index",
          query: {id: row.id}
        })
    },
    visibleChangeCreate(visible) {
      this.createModalShow = visible
      if(visible === false){
        this.search(1)
      }
    },
    visibleChangeUpdate(visible) {
      this.updateModalShow = visible
      if(visible === false){
        this.search(this.page.current)
      }
    },
    search(current) {
      this.$get('admin/book', {
        page: current
      }).then((res) => {
        this.documentDatas = res.data.data;
        this.page.total = res.data.total
        this.page.current = res.data.current_page
        this.page.page_size = res.data.per_page
      })
    }
  },
  components: {
    Create,
    Update,
    Group
  }
}
</script>
