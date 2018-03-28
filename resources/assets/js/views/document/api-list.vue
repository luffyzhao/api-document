<template>
<div>
  <div class="api-list-nav">
    <div class="nav-item active">
      <Icon type="navicon-round"></Icon>
      列表
    </div>
    <div class="plus-right">
      <div @click="AddApiVisible=true; AddApiData = {};"><Icon type="plus-round"></Icon></div>
    </div>
  </div>
  <div class="api-list-center">
  <ul>
    <li v-for="item in data">
      <Icon type="clipboard"></Icon>
      <strong @click="changeDocument(item.id)">{{item.name}}</strong>
      <div class="hover-visble">
        <i class="ivu-icon ivu-icon-edit" @click="AddApiVisible=true; AddApiData = item;"></i>
        <i class="ivu-icon ivu-icon-trash-a" @click="deleteItem(item.id)"></i>
      </div>
    </li>
  </ul>
</div>
  <AddApi v-on:visibleChange="AddApiVisible = false" v-on:update="update" :show="AddApiVisible" :data="AddApiData"></AddApi>
</div>
</template>

<script>
import AddApi from './add-api.vue'
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  computed: {},
  data () {
    return {
      AddApiVisible: false,
      AddApiData: {}
    }
  },
  methods: {
    deleteItem(id){
      this.$delete(`book/${this.$route.query.id}/document/${id}`).then((res) => {
        this.$Message.success(res.msg);
        this.update();
      })
    },
    update(){
      this.$emit('update');
    },
    changeDocument(id){
      this.$emit('change', id);
    }
  },
  filters: {},
  components: {
    AddApi
  }
}
</script>

<style lang="less">

</style>
