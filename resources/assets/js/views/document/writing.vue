<template>
<div class="writing-box">
  <div class="writing-title">
    <Row>
      <Col span="12">
        <Tooltip content="返回">
          <Button icon="arrow-return-left"></Button>
        </Tooltip>
        <Tooltip content="保存">
          <Button type="success" icon="cube"></Button>
        </Tooltip>
      </Col>
      <Col span="12" style="text-align: right;">
        <Tooltip content="发布">
          <Button icon="ios-cloud-upload"></Button>
        </Tooltip>
        <Tooltip content="关闭分栏">
          <Button icon="document"></Button>
        </Tooltip>
        <Tooltip content="修改历史">
          <Button icon="map"></Button>
        </Tooltip>
        <Tooltip content="保用帮助">
          <Button icon="information-circled"></Button>
        </Tooltip>
      </Col>
    </Row>
  </div>
  <div class="writing-content">
    <div class="api-list">
      
    </div>
    <div class="api-content">
      <markdown></markdown>
    </div>
  </div>
  
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
    }
  },
  methods: {
   
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
      flex-basis: 140px;
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
