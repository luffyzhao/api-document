<template>
<div class="writing-box">
  <div class="writing-title">
    <Row>
      <Col span="12">
        <Tooltip content="返回">
          <Button icon="arrow-return-left" @click="goBack"></Button>
        </Tooltip>
        <Tooltip content="保存">
          <Button type="success" icon="cube"></Button>
        </Tooltip>
      </Col>
      <Col span="12" style="text-align: right;">
        <Tooltip content="发布">
          <Button icon="ios-cloud-upload"></Button>
        </Tooltip>
        <Tooltip content="修改历史">
          <Button icon="map" @click="goHistory"></Button>
        </Tooltip>
        <Tooltip content="保用帮助">
          <Button icon="information-circled" @click="useHelp"></Button>
        </Tooltip>
      </Col>
    </Row>
  </div>
  <div class="writing-content">
    <div class="api-list">
      <div class="api-list-nav">
        <div class="nav-item active">
          <Icon type="navicon-round"></Icon> 列表
        </div>
        <div class="plus-right">
          <div @click="addApiVisble = true"><Icon type="plus-round"></Icon></div>
        </div>
      </div>
    </div>
    <div class="api-content">
      <markdown></markdown>
    </div>
  </div>

  <Modal v-model="addApiVisble" width="460" ok-text="保存">
      <p slot="header">添加文档</p>
      <div>
          <Form ref="formValidate" :model="addApiModel" :rules="addApiValidate" :label-width="100">
            <FormItem label="文档名称" prop="name">
                <Input v-model="addApiModel.name"></Input>
            </FormItem>
            <FormItem label="文档唯王一标识" prop="identify">
                <Input v-model="addApiModel.identify"></Input>
            </FormItem>
          </Form>
      </div>
  </Modal>

  <Modal v-model="historyVisble" width="550">
    <p slot="header">修改记录</p>
    <div>
      <Table :columns="historyColumns" :data="historyData"></Table>
    </div>
    <div slot="footer"></div>
  </Modal>

</div>
</template>

<script>
import markdown from '@/components/markdown.vue'
export default {
  computed: {
  },
  data () {
    return {
      loadingVisible: false,
      addApiVisble: false,
      historyVisble: false,
      addApiModel: {
        name: "",
        identify: ""
      },
      addApiValidate: {
        name: [
          { required: true, message: '文档名称不能为空！', trigger: 'blur' }
        ],
        identify: [
          { message: '文档标识只能包含小写字母、数字，以及“-”和“_”符号,并且只能小写字母开头', pattern: /^[a-z]+[0-9a-zA-Z-_]*$/, trigger: 'blur'}
        ]
      },
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
      historyData: []
    }
  },
  methods: {
   goBack(){
    this.$router.go(-1)
   },
   goHistory(){
    this.historyVisble = true
   },
   useHelp(){
    window.open("http://wowubuntu.com/markdown/index.html");
   }
  },
  components: {
    markdown
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
.writing-box{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .writing-title{
    flex-basis: 40px;
    border-bottom: 1px solid #DDDDDD;
    box-sizing: border-box;
    padding: 3px 10px;
  }
  .writing-content{
    flex-grow: 1;
    height: 100%;
    overflow-y: auto;
    display:  flex;
    .api-list{
      flex-basis: 200px;
      border-right: 1px solid #ddd;
      .api-list-nav{
        font-size: 14px;
        color: #333333;
        font-weight: 200;
        zoom: 1;
        border-bottom: 1px solid #ddd;
        .nav-item{
          font-size: 14px;
          padding: 0 9px;
          cursor: pointer;
          float: left;
          height: 30px;
          line-height: 30px;
          color: #666;
        }
        .nav-item.active{
          border-bottom: 1px solid #fafafa;
          margin-bottom: -1px;
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
          padding-left: 8px;
          padding-right: 8px;
        }
        .plus-right{
          float: right;
          color: #999;
          cursor: pointer;
          height: 24px;
          width: 24px;
          line-height: 24px;
          display: inline-block;
          margin-top: 4px;
        }
      }
      .api-list-nav:after{
        display: block;
        content: '';
        clear: both;
        visibility: hidden;
      }
    }
    .api-content{
      height: 100%;
      flex-grow: 1;
      .markdown-editor{
        height: 100%;
      }
    }   
  }
}
</style>
