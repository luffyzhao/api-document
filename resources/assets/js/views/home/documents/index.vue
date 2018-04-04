<template>
  <div class="writing-box">
   <div class="writing-title">
    <center>
     <h1>{{ book.name }}</h1>
    </center>
   </div>
   <div class="writing-content">
    <div class="api-list">
     <div class="api-list-nav">
      <div class="nav-item active">
       列表
      </div>
     </div>
     <div class="api-list-center">
      <ul>
        <li v-for="(document, index) in documentLists" class="api-list-center-item" :class="index===0 && 'active'">
          <i class="ivu-icon ivu-icon-clipboard"></i>
          <strong @click="clickEvent($event, document)">{{ document.name }}</strong>
        </li>
      </ul>
     </div>
    </div>
    <div class="api-content">
     <div class="mdContainer" style="position: relative">
       <Spin size="large" fix v-if="loading"></Spin>
       <div class="previewContainer markdown-body" v-html="content">
       </div>
     </div>
     </div>
    </div>
   </div>
</template>

<script>
import marked from 'marked'
import hljs from 'highlight.js'
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function(code) {
        return hljs.highlightAuto(code).value
    }
});

    export default {
      data() {
        return {
          book: {
            name: '',
          },
          documentLists: [],
          markdown: '',
          loading: false
        }
      },
      computed: {
        content () {
          return marked(this.markdown, {
              sanitize: true
          })
        }
      },
      mounted() {
        this.getBook(this.$route.query.id)
      },
      methods: {
        getBook(id) {
            axios.get(`book/${id}`).then((res) => {
              this.book = res.data.data;
              this.getLists(this.book.id)
            })
          },
          getLists(id) {
            axios.get(`book/${id}/document`).then((res) => {
              this.documentLists = res.data.data
              if(this.documentLists.length > 0){
                this.getMarkdown(this.documentLists[0]['id']);
              }
            })
          },
          getMarkdown(id){
            this.loading = true;
            axios.get(`book/${this.book.id}/document/${id}`).then((res) => {
              this.markdown = res.data.data.markdown || ''
              this.loading = false;
            }).catch((e) => {
              this.loading = false;
            })
          },
          clickEvent(event, document) {
            this.switchClass(event.target.parentNode, 'active')
            this.getMarkdown(document.id);
          },
          getUrlParam(name) {
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            let r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
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
      }
    }
</script>
