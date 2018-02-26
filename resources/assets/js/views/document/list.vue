<template lang="html">
  <div class="box-flex">
    <Card :bordered="false" class="box-flex-search">
        <p slot="title">搜索</p>
        <Form ref="documentSearch" :model="documentSearch" inline :label-width="80">
          <FormItem label="文档名称">
            <Input type="text" v-model="documentSearch.name" placeholder="文档名称"></Input>
          </FormItem>
          <FormItem label="文档版本">
            <Input type="text" v-model="documentSearch.version" placeholder="文档版本"></Input>
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
          <Page :total="40" size="small" show-total></Page>
      </Card>
    </div>

    <Create v-on:visibleChange="visibleChangeCreate" :show="createModalShow"></Create>
    <Update v-on:visibleChange="visibleChangeUpdate" :show="updateModalShow" :row="updateId"></Update>
    <Writing v-on:visibleChange="visibleChangeWriting" :show="writingModalShow" :row="updateId"></Writing>
  </div>
</template>

<script lang="babel">
import Create from './create.vue'
import Update from './update.vue'
import Writing from './writing.vue'

export default {
  data() {
    return {
      documentColumns: [{
          "title": "文档名称",
          "key": "name"
        },
        {
          "title": "版本号",
          "key": "version",
          "width": 200
        },
        {
          "title": "作者",
          "key": "author",
          "width": 200
        },
        {
          "title": "环境域名",
          "render": (h, {
            row,
            column,
            index
          }) => {
            return (
              <div class="poptip-button-box">
                <poptip content={row.develop_url} placement="top"><i-button size="small" type="error">开发</i-button></poptip>
                <poptip content={row.test_url} placement="top"><i-button size="small" type="warning">测试</i-button></poptip>
                <poptip content={row.production_url} placement="top"><i-button size="small" type="success">生产</i-button></poptip>
              </div>
            );
          },
          "width": 200
        },
        {
          "title": "最后发布时间",
          "key": "lasttime",
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
              <i-button size="small" on-click={()=>{this.updateButton(row)}}>更新</i-button>
              <i-button size="small">删除</i-button>
              <i-button on-click={()=>{this.writingButton(row)}} size="small">编写文档</i-button>
            </button-group>)
          },
          'widht': 200
        }
      ],
      documentDatas: [{
        "id": 21,
        "name": "Name9",
        "version": '1.0.0',
        "author": '小白菜',
        "develop_url": 'http://localhost:8080/#/admin/document.list',
        "test_url": 'http://localhost:8080/#/admin/document.list',
        "production_url": 'http://localhost:8080/#/admin/document.list',
        "lasttime": '2018-01-01 20:00:10'
      }],
      documentSearch: {
        name: '',
        version: ''
      },
      createModalShow: false,
      updateModalShow: false,
      writingModalShow: false,
      updateId: 0
    }
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
    visibleChangeWriting(visible){
      this.writingModalShow = visible
    }
  },
  components: {
    Create,
    Update,
    Writing
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
