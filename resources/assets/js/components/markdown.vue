<template lang="html">
  <div class="markdown-editor">
    <link rel="stylesheet" href="/css/github-markdown.css">
    <div class="markdown-textarea" @keyup="update" contenteditable v-init-text='myValue'></div>
    <div class="markdown-preview">
        <div v-html="compiledMarkdown" class="markdown-body"></div>
    </div>
  </div>
</template>

<script lang="babel">
import hljs from 'highlight.js'
import marked from 'marked'

export default {
  data() {
    return {
      myValue: this.value
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    compiledMarkdown: function() {
      marked.setOptions({
        highlight: function(code) {
          return hljs.highlightAuto(code).value;
        }
      });
      return marked(this.myValue, {
        sanitize: true,
        code: true
      })
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.myValue = e.target.innerText
    }, 300)
  },
  watch: {
    myValue(val) {
      this.$emit("on-result-change", val)
    }
  },
  directives: {
    initText: {
      inserted: function(el, {
        value
      }) {
        if (value) {
          el.innerHTML = value
        }
      }
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
</style>
