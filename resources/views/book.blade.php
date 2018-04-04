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
  
})
  </script>
 </body>
</html>
