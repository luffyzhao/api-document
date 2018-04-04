<template lang="html">
  <div class="table-page">
    <Card :bordered="false">
      <p slot="title"><slot name="title"><Icon type="ios-list-outline"></Icon> 列表</slot></p>
      <div class="form-con">
        <Row>
          <Col :span="17"><slot name="table"></slot></Col>
          <Col :span="7" style="padding-left: 30px">
          <div class="table-button"><slot name="table-button"></slot></div>
          <slot name="search"></slot>
          </Col>
        </Row>
      </div>
    </Card>
  </div>
</template>

<script lang="babel">
  export default {
    data () {
      return {}
    },
    computed: {
    },
    mounted () {},
    components: {}
  }
</script>

<style lang="scss">
  .ivu-table-footer {
  .ivu-page {
    text-align: right;
    margin-right: 20px;
  }
  }
  .table-button{
    padding: 16px 0 16px 20px;
    border-bottom: 1px dashed #c3c3c3;
    margin-bottom: 16px;
  }
</style>
