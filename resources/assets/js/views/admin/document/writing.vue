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
      <my-markdown v-model="document.markdown"></my-markdown>
    </div>
  </div>

  <History v-on:visibleChange="historyVisble = false" :show="historyVisble"></History>
</div>
</template>

<script>
import ApiList from './api-list.vue'
import History from './history.vue'
import MyMarkdown from "@/views/admin/components/editor/markdown";

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
      this.$get(`admin/book/${this.bookId}/document`).then((res) => {
        this.documents = res.data;
        if(this.documents.length > 0){
          this.getDocument(this.documents[0].id)
        }
      })
    },
    getDocument(id){
      this.saveMarkdown();
      this.$get(`admin/book/${this.bookId}/document/${id}`).then((res) => {
        let data = JSON.parse(JSON.stringify(res.data));
        this.document = data
        this.historyMarkdown = data.markdown
      })
    },
    saveMarkdown(){
      if(this.isChange){
        this.$put(`admin/book/${this.bookId}/document/${this.document.id}`, {
          markdown: this.document.markdown
        }).then((res) => {
          this.$Message.success('保存成功');
          this.historyMarkdown = this.document.markdown
        })
      }
    }
  },
  components: {
    MyMarkdown,
    ApiList,
    History
  }
}
</script>
