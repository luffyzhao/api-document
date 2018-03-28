<template>
<div class="writing-box">
  <div class="writing-title">
    <Row>
      <Col span="12">
        <Tooltip content="返回">
          <Button icon="arrow-return-left" @click="goBack"></Button>
        </Tooltip>
        <Tooltip content="保存">
          <Button type="success" icon="cube" @click="saveMarkdown"></Button>
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
        <ApiList :data="documents" v-on:change="getDocument" v-on:update="getDocuments"></ApiList>
    </div>
    <div class="api-content">
      <markdown
      :mdValuesP="document.markdown"
      :fullPageStatusP="false"
      :editStatusP="false"
      :previewStatusP="false"
      :navStatusP="true"
      :icoStatusP="true"
      @childevent="childEventHandler">
      </markdown>
    </div>
  </div>

  <History v-on:visibleChange="historyVisble = false" :show="historyVisble"></History>
</div>
</template>

<script>
import ApiList from './api-list.vue'
import History from './history.vue'
import markdown from '@/components/markdown'

export default {
  data () {
    return {
      bookId: this.$route.query.id,
      documents: [],
      loadingVisible: false,
      historyVisble: false,
      document:{},
      historyMarkdown: ''
    }
  },
  computed: {
    isChange(){
      return typeof(this.document.markdown) !== 'undefined' && this.historyMarkdown !=  this.document.markdown;
    }
  },
  mounted () {
    this.getDocuments();
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
   },
   getDocuments(){
      this.$get(`book/${this.bookId}/document`).then((res) => {
        this.documents = res.data;
        if(this.documents.length > 0){
          this.getDocument(this.documents[0].id)
        }
      })
    },
    getDocument(id){
      this.saveMarkdown();
      this.$get(`book/${this.bookId}/document/${id}`).then((res) => {
        this.document = res.data
        this.historyMarkdown = res.data.markdown
      })
    },
    childEventHandler:function(res){
      this.document.markdown = res.mdValue
    },
    saveMarkdown(){
      if(this.isChange){
        this.$put(`book/${this.bookId}/document/${this.document.id}`, {
          markdown: this.document.markdown
        }).then((res) => {
          this.$Message.success('保存成功');
          this.historyMarkdown = this.document.markdown
        })
      }
    }
  },
  components: {
    markdown,
    ApiList,
    History
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
      .api-list-center{
        width: 199px;
        overflow: hidden;
        li{
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          line-height:30px;
          position: relative;
          .ivu-icon{
            width: 24px;
            height: 24px;
            text-align: center;
            line-height:24px;
          }
          .ivu-icon-arrow-expand, strong{
            cursor: pointer;
          }
          .hover-visble{
            position: absolute;
            top: 0;
            right: 0;
            .ivu-icon{
              cursor: pointer;
            }
          }
        }
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
