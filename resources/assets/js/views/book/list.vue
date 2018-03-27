<template lang="html">
  <div class="box-flex">
    <Card :bordered="false" class="box-flex-search">
        <p slot="title">搜索</p>
        <Form ref="documentSearch" :model="documentSearch" inline :label-width="80">
          <FormItem label="项目名称">
            <Input type="text" v-model="documentSearch.name" placeholder="项目名称"></Input>
          </FormItem>
          <FormItem :label-width="1">
            <ButtonGroup>
              <Button type="primary" @click="search">搜索</Button>
              <Button type="success" @click="() => {this.createModalShow = true}">添加</Button>
            </ButtonGroup>
          </FormItem>
        </Form>
    </Card>
    <div class="box-flex-list">
      <Card :bordered="false">
          <p slot="title">列表</p>
          <Table :columns="documentColumns" :data="documentDatas" size="small" ref="table"></Table>
          <Page :total="page.total" size="small" :current.sync="page.current" :page-size="page.page_size" @on-change="getDocumentDatas" show-total></Page>
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
      documentColumns: [{
          "title": "项目名称",
          "key": "name"
        },
        {
          "title": "创建时间",
          "key": "created_at",
          "width": 200
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
              <i-button size="small">查看文档</i-button>
              <i-button size="small" on-click={()=>{this.updateButton(row)}}>更新</i-button>
              <i-button size="small">删除</i-button>
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
      updateId: 0
    }
  },
  mounted () {
    this.getDocumentDatas(1);
  },
  methods: {
    search(){

    },
    updateButton (row) {
      this.updateId = row.id
      this.updateModalShow = true
    },
    writingButton(row){
      this.$router.push({
          name: "document.writing"
        })
    },
    visibleChangeCreate(visible) {
      this.createModalShow = visible
    },
    visibleChangeUpdate(visible) {
      this.updateModalShow = visible
    },
    getDocumentDatas(current) {
      this.$get('book', {
        page: current
      }).then((res) => {
        this.documentDatas = res.data.data;
        this.page.total = res.data.total
        this.page.current = res.data.current_page
        this.page.page_size = res.data.per_page
      }).catch((err) => {
        this.$Message.error('数据请求失败!');
      })
    }
  },
  components: {
    Create,
    Update
  }
}
</script>

<style lang="scss">
.box-flex {
    display: flex;
    flex-direction: column;
    height: 100%;
    .box-flex-list {
        flex: 1;
        flex-grow: 1;
        overflow: hidden;
        .ivu-card {
            height: 100%;
            display: flex;
            flex-direction: column;
            .ivu-card-body {
                flex: 1;
                flex-grow: 1;
                overflow: hidden;
                .ivu-table-wrapper {
                    height: calc(100% - 40px);
                    margin-bottom: 15px;
                    .ivu-table {
                        .ivu-table-fixed {
                            height: inherit;
                        }
                        .ivu-table-body {
                            height: calc(100% - 40px);
                        }
                        .ivu-table-fixed-body {
                            height: calc(100% - 40px - 20px);
                        }
                        .poptip-button-box {
                            .ivu-poptip {
                                margin-left: 5px;
                            }
                            .ivu-poptip:first-child {
                                margin-left: 0;
                            }
                        }
                    }
                    .ivu-table-small {
                        .ivu-table-fixed {
                            height: inherit;
                        }
                        .ivu-table-body {
                            height: calc(100% - 32px);
                        }
                        .ivu-table-fixed-body {
                            height: calc(100% - 32px - 20px);
                        }
                    }
                    .ivu-table-large {
                        .ivu-table-fixed {
                            height: inherit;
                        }
                        .ivu-table-body {
                            height: calc(100% - 48px);
                        }
                        .ivu-table-fixed-body {
                            height: calc(100% - 48px - 20px);
                        }
                    }
                }
                .ivu-page {
                    text-align: right;
                }
            }
        }
    }
}
</style>
