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
      <strong @click="changeDocument($event,item.id)">{{item.name}}</strong>
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
      this.$delete(`admin/book/${this.$route.query.id}/document/${id}`).then((res) => {
        this.$Message.success(res.msg);
        this.update();
      })
    },
    update(){
      this.$emit('update');
    },
    changeDocument(event, id){
      this.switchClass(event.target.parentNode, 'active')
      this.$emit('change', id);
    },
    switchClass(elem, cls) {
      var ns = elem.parentNode.childNodes;
      ns.forEach((item) => {
        if (Node.ELEMENT_NODE === item.nodeType) {
          if (this.hasClass(item, cls)) {
            this.removeClass(item, cls);
          }
        }
      })
      this.addClass(elem, cls);
    },
    hasClass(elem, cls) {
      cls = cls || '';
      if (cls.replace(/\s/g, '').length == 0) return false;
      return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ')
    },
    addClass(elem, cls) {
      if (!this.hasClass(elem, cls)) {
        elem.className = elem.className == '' ? cls : elem.className + ' ' + cls
      }
    },
    removeClass(elem, cls) {
      if (this.hasClass(elem, cls)) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
        while (newClass.indexOf(' ' + cls + ' ') >= 0) {
          newClass = newClass.replace(' ' + cls + ' ', ' ')
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '')
      }
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
