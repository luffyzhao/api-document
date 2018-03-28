<template lang="html">
  <div class="markdown-editor">
    <markdown
    :mdValuesP="value"
    :fullPageStatusP="false"
    :editStatusP="false"
    :previewStatusP="false"
    :navStatusP="false"
    :icoStatusP="true"
    @childevent="childEventHandler">
    </markdown>
  </div>
</template>


<script lang="babel">
import markdown from './contenteditable'
export default {
  data() {
    return {
      innerText: this.value
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {

  },
  components: {
      markdown // 声明mardown组件
  },
  methods: {
    childEventHandler:function(res){
      this.$emit('input', res);
    }
  }
}
</script>

<style>


.markdown-editor {
  display: flex;
}

.markdown-textarea,
.markdown-preview {
  vertical-align: top;
  box-sizing: border-box;
  flex: 0 0 50%;
  overflow: auto;
  padding: 10px;
}

.markdown-textarea {
  border: none;
  background-color: #f6f6f6;
  font-size: 12px;
  font-family: 'Monaco', courier, monospace;
  outline: none;
  line-height: 2;
}
.markdown-preview{
  border-left: 1px solid #ccc;
}
.editormd-preview {
  display: block;
  width: 100%;
}

.markdown-preview ul{
  list-style-type: disc;
}

.markdown-preview ol{
  list-style-type: decimal;
}


</style>
