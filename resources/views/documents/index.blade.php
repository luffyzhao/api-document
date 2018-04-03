<html lang="zh">
 <head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="csrf-token" content="{{ csrf_token() }}" />
  <link href="/css/web-list.css" rel="stylesheet" />
  <title>文档管理中心</title>
 </head>
 <body>
  <div id="app">
   <div class="writing-box">
    <div class="writing-title">
     <center>
      <h1 style="margin: 0px;">{{ $book->name }}</h1>
     </center>
    </div>
    <div class="writing-content" id="markdown-content">
     <div class="api-list">
      <div class="api-list-nav">
       <div class="nav-item active">
        <i class="ivu-icon ivu-icon-navicon-round"></i> 列表
       </div>
      </div>
      <div class="api-list-center">
       <ul>
        @foreach ($book->documents as $document)
        <li class="api-list-center-item" data-href="{{ $document->name }}"><strong class="api-list-center-item-a">{{ $document->name }}</strong></li>
        @endforeach
       </ul>
      </div>
     </div>
     <div class="api-content">
      <div class="mdContainer">
        @foreach ($book->documents as $document)
        <div class="previewContainer markdown-body">
          <h4 id="{{ $document->name }}" class="markdown-body-title">{{ $document->name }}</h4>
          {!! $document->content !!}
        </div>
        @endforeach
      </div>
      </div>
     </div>
    </div>
   </div>
  </div>
  <script>
  var items = document.getElementsByClassName('api-list-center-item');
  var timer = null;
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click",function(event){
      switchClass(this, 'active');
      switchScroll(this,'markdown-content');
      window.addEventListener('scroll',function(e){
        console.log(e);
      });
    });
  }

  function switchScroll(elem, id){
    var top = document.getElementById(elem.dataset.href).offsetTop;
    var box = document.getElementById(id);
    intervalScroll(box, top);
  }

  function intervalScroll(elem, itarget) {
    var count = 0;
    clearInterval(timer);
    var step = function(pos){
        return (Math.pow((pos-1), 5) +1);
    }
    timer = setInterval((it)=>{
      var st = step(++count * 0.01)
      var newScroll = 0;

      if(elem.scrollTop < itarget){
        newScroll = (elem.scrollTop + st > itarget) ? itarget : elem.scrollTop + st;
      }else{
        newScroll = (elem.scrollTop - st < itarget) ? itarget : elem.scrollTop - st;
      }

      elem.scrollTop = newScroll;

      if(newScroll == itarget){
        clearInterval(timer);
      }
    }, 1)
  }

  function switchClass(elem, cls){
    var ns = elem.parentNode.childNodes;
    ns.forEach((item) => {
      if(Node.ELEMENT_NODE === item.nodeType) {
          if(hasClass(item, cls)){
            removeClass(item, cls);
          }
      }
    })
    addClass(elem, cls);
  }

  function hasClass(elem, cls) {
    cls = cls || '';
    if (cls.replace(/\s/g, '').length == 0)
      return false;
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
  }

  function addClass(elem, cls) {
    if (!hasClass(elem, cls)) {
      elem.className = elem.className == '' ? cls : elem.className + ' ' + cls;
    }
  }

  function removeClass(elem, cls) {
    if (hasClass(elem, cls)) {
      var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
      while (newClass.indexOf(' ' + cls + ' ') >= 0) {
        newClass = newClass.replace(' ' + cls + ' ', ' ');
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
  }


  </script>
 </body>
</html>
