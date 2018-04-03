<html lang="zh">
 <head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="csrf-token" content="{{ csrf_token() }}" />
  <link href="/css/web.common.css" rel="stylesheet" />
  <script src="/js/vue.js"></script>
  <script src="/js/axios.min.js"></script>
  <script src="/js/highlight.min.js"></script>
  <script src="/js/marked.min.js"></script>
  <title>文档管理中心</title>
 </head>
 <body>
  <div id="app">
   <div class="writing-box">
    <div class="writing-title">
     <center>
      <h1>@{{ book.name }}</h1>
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
         <li v-for="(document, index) in documentLists" class="api-list-center-item" :class="index===0 && 'active'"  @click="clickEvent(event, document)">@{{ document.name }}</li>
       </ul>
      </div>
     </div>
     <div class="api-content">
      <div class="mdContainer">
        <div class="previewContainer markdown-body" v-html="content">
        </div>
      </div>
      </div>
     </div>
    </div>
   </div>
  </div>
  <script>

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

  new Vue({
  el: '#app',
  data: {
    book: {
      name: '',
    },
    documentLists: [],
    markdown: ''
  },
  computed: {
    content () {
      return marked(this.markdown, {
          sanitize: true
      })
    }
  },
  mounted() {
    this.getBook(this.getUrlParam('id'))
  },
  methods: {
    getBook(id) {
        axios.get(`/api/book/${id}`).then((res) => {
          this.book = res.data.data;
          this.getLists(this.book.id)
        })
      },
      getLists(id) {
        axios.get(`/api/book/${id}/document`).then((res) => {
          this.documentLists = res.data.data
          if(this.documentLists.length > 0){
            this.getMarkdown(this.documentLists[0]['id']);
          }
        })
      },
      getMarkdown(id){
        this.markdown = '加载中...';
        axios.get(`/api/book/${this.book.id}/document/${id}`).then((res) => {
          this.markdown = res.data.data.markdown || ''
        }).catch((e) => {
          this.markdown = '加载失败！';
        })
      },
      clickEvent(event, document) {
        this.switchClass(event.target, 'active')
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
})
  </script>
 </body>
</html>
