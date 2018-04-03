webpackJsonp([5],{417:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(418),s=a.n(o),i=a(421),r=a.n(i);t.default={data(){this.$createElement;return{Columns:[{title:"权限",key:"name"},{title:"权限名称",key:"display_name"},{title:"权限描述",key:"description"},{title:"操作",render:(e,{row:t,column:a,index:o})=>e("button-group",null,[e("i-button",{on:{click:()=>{this.updateButton(t)}},attrs:{size:"small"}},["更新"]),e("poptip",{attrs:{transfer:!0,title:"您确认删除这条内容吗？",confirm:!0},on:{"on-ok":()=>{this.deleteButton(t)}}},[e("i-button",{attrs:{size:"small"}},["删除"])])])}],Datas:[],page:{total:40,current:1,page_size:20},createModalShow:!1,updateModalShow:!1,updateId:0}},mounted(){this.search(1)},methods:{search(e){this.$get("permission",{page:e}).then(e=>{this.Datas=e.data.data,this.page.total=e.data.total,this.page.current=e.data.current_page,this.page.page_size=e.data.per_page})},updateButton(e){this.updateId=e.id,this.updateModalShow=!0},deleteButton(e){this.$delete(`permission/${e.id}`).then(e=>{this.$Message.error("权限删除成功!"),this.search(this.page.current)})},visibleChangeCreate(e){this.createModalShow=e,!1===e&&this.search(1)},visibleChangeUpdate(e){this.updateModalShow=e,!1===e&&this.search(this.page.current)}},components:{Create:s.a,Update:r.a}}},418:function(e,t,a){var o=a(10)(a(419),a(420),!1,null,null,null);e.exports=o.exports},419:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{show:{type:Boolean,default:!1}},computed:{modalShow:{get:function(){return this.show},set:function(){}}},data:function(){return{loadingVisible:!1,formItem:{}}},methods:{visibleChange:function(e){!1===e?this.$emit("visibleChange",e):this.formItem={}},submit:function(e){var t=this;this.loadingVisible=!0,this.$refs[e].validate(function(e){e&&t.$post("permission",t.formItem).then(function(e){t.visibleChange(!1),t.$Message.error("权限添加成功!")})}),this.loadingVisible=!1}}}},420:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Modal",{attrs:{title:"创建权限","mask-closable":!1,"class-name":"vertical-center-modal",width:"auto","ok-text":"提交"},on:{"on-visible-change":e.visibleChange,"on-ok":e.submit},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[a("Form",{ref:"formItem",attrs:{model:e.formItem,"label-width":100}},[a("FormItem",{attrs:{label:"权限",prop:"name",rules:{required:!0,message:"权限验证不通过!",trigger:"blur",pattern:/^[a-z]+.([a-z]+.)*[a-z]+$/}}},[a("Input",{staticStyle:{width:"500px"},attrs:{placeholder:"Enter something..."},model:{value:e.formItem.name,callback:function(t){e.$set(e.formItem,"name",t)},expression:"formItem.name"}})],1),e._v(" "),a("FormItem",{attrs:{label:"权限名称",prop:"display_name",rules:{required:!0,message:"权限名称验证不通过!",trigger:"blur"}}},[a("Input",{staticStyle:{width:"500px"},attrs:{placeholder:"Enter something..."},model:{value:e.formItem.display_name,callback:function(t){e.$set(e.formItem,"display_name",t)},expression:"formItem.display_name"}})],1),e._v(" "),a("FormItem",{attrs:{label:"权限描述",prop:"description"}},[a("Input",{staticStyle:{width:"500px"},attrs:{type:"textarea",placeholder:"Enter something..."},model:{value:e.formItem.description,callback:function(t){e.$set(e.formItem,"description",t)},expression:"formItem.description"}})],1)],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary",size:"large",loading:e.loadingVisible},on:{click:function(t){e.submit("formItem")}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]}},421:function(e,t,a){var o=a(10)(a(422),a(423),!1,null,null,null);e.exports=o.exports},422:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{show:{type:Boolean,default:!1},row:{type:Number,default:0}},computed:{modalShow:{get:function(){return this.show},set:function(){}},updateId:function(){return this.row}},data:function(){return{loadingVisible:!1,formItem:{}}},methods:{visibleChange:function(e){!1===e&&(this.formItem={},this.$emit("visibleChange",e))},submit:function(e){var t=this;this.loadingVisible=!0,this.$refs[e].validate(function(e){e&&t.$put("permission/"+t.updateId,{name:t.formItem.name,display_name:t.formItem.display_name,description:t.formItem.description}).then(function(e){t.visibleChange(!1),t.$Message.error("权限更新成功!")})}),this.loadingVisible=!1}},watch:{modalShow:function(e,t){var a=this;e&&this.$get("permission/"+this.updateId).then(function(e){a.formItem=e.data})}}}},423:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Modal",{attrs:{title:"修改文档","mask-closable":!1,"class-name":"vertical-center-modal",width:"auto","ok-text":"提交"},on:{"on-visible-change":e.visibleChange,"on-ok":e.submit},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[a("Form",{ref:"formItem",attrs:{model:e.formItem,"label-width":100}},[a("FormItem",{attrs:{label:"权限",prop:"name",rules:{required:!0,message:"权限验证不通过!",trigger:"blur",pattern:/^[a-z]+.([a-z]+.)*[a-z]+$/}}},[a("Input",{staticStyle:{width:"500px"},attrs:{placeholder:"Enter something..."},model:{value:e.formItem.name,callback:function(t){e.$set(e.formItem,"name",t)},expression:"formItem.name"}})],1),e._v(" "),a("FormItem",{attrs:{label:"权限名称",prop:"display_name",rules:{required:!0,message:"权限验证不通过!",trigger:"blur"}}},[a("Input",{staticStyle:{width:"500px"},attrs:{placeholder:"Enter something..."},model:{value:e.formItem.display_name,callback:function(t){e.$set(e.formItem,"display_name",t)},expression:"formItem.display_name"}})],1),e._v(" "),a("FormItem",{attrs:{label:"权限描述",prop:"description"}},[a("Input",{staticStyle:{width:"500px"},attrs:{type:"textarea",placeholder:"Enter something..."},model:{value:e.formItem.description,callback:function(t){e.$set(e.formItem,"description",t)},expression:"formItem.description"}})],1)],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary",size:"large",loading:e.loadingVisible},on:{click:function(t){e.submit("formItem")}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]}},424:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box-flex"},[a("div",{staticClass:"box-flex-list"},[a("Card",{attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("span",[e._v("列表")]),e._v(" "),a("Button",{attrs:{size:"small",type:"success"},on:{click:function(t){e.createModalShow=!0}}},[e._v("添加")])],1),e._v(" "),a("Table",{ref:"table",attrs:{columns:e.Columns,data:e.Datas,size:"small"}}),e._v(" "),a("Page",{attrs:{total:e.page.total,size:"small",current:e.page.current,"page-size":e.page.page_size,"show-total":""},on:{"update:current":function(t){e.$set(e.page,"current",t)},"on-change":e.search}})],1)],1),e._v(" "),a("Create",{attrs:{show:e.createModalShow},on:{visibleChange:e.visibleChangeCreate}}),e._v(" "),a("Update",{attrs:{show:e.updateModalShow,row:e.updateId},on:{visibleChange:e.visibleChangeUpdate}})],1)},staticRenderFns:[]}},456:function(e,t,a){var o=a(10)(a(417),a(424),!1,null,null,null);e.exports=o.exports}});