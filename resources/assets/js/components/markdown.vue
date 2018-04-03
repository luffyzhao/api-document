<template>
    <div class="mdContainer" :class="{ fullPage: fullPageStatus }">
        <div class="navContainer" v-if="navStatus">
            <div class="markContainer">
                <ul class="markListGroup">
                    <li class="markListItem" @click="addStrong" title="加粗"><b>B</b></li>
                    <li class="markListItem" @click="addItalic" title="斜线"><i>I</i></li>
                    <li class="markListItem" @click="addStrikethrough" title="删除线"><i class="fa fa-strikethrough" aria-hidden="true"></i></li>
                    <li class="markListItem" @click="addHTitle(1)" title="H1-标题">H1</li>
                    <li class="markListItem" @click="addHTitle(2)" title="H2-标题">H2</li>
                    <li class="markListItem" @click="addHTitle(3)" title="H3-标题">H3</li>
                    <li class="markListItem" @click="addHTitle(4)" title="H4-标题">H4</li>
                    <li class="markListItem" @click="addHTitle(5)" title="H5-标题">H5</li>
                    <li class="markListItem" @click="addHTitle(6)" title="H6-标题">H6</li>
                    <li class="markListItem" @click="addLine" title="分隔线">一</li>
                    <li class="markListItem" @click="addQuote" title="引用"><i class="fa fa-quote-left" aria-hidden="true"></i></li>
                    <li class="markListItem" @click="addCode" title="代码块"><i class="fa fa-code" aria-hidden="true"></i></li>
                    <li class="markListItem" @click="addLink" title="链接"><i class="fa fa-link" aria-hidden="true"></i></li>
                    <li class="markListItem" @click="addImage" title="网络图片"><i class="fa fa-picture-o" aria-hidden="true"></i></li>
                    <li class="markListItem" @click="addTable" title="表格"><i class="fa fa-table" aria-hidden="true"></i></li>
                    <li class="markListItem" @click="addUl" title="有序列表"><i class="fa fa-list-ul" aria-hidden="true"></i></li>
                    <li class="markListItem" @click="addOl" title="无序列表"><i class="fa fa-list-ol" aria-hidden="true"></i></li>
                    <li class="markListItem" @click="addTemplate" title="模板"><i class="fa fa-object-group" aria-hidden="true"></i></li>
                    <li class="markListItem" @click="fullPageFn" title="全屏"><i class="fa fa-arrows-alt" aria-hidden="true"></i></li>
                    <li class="markListItem" @click="previewFn" title="关闭预览"><i class="fa fa-eye-slash" aria-hidden="true"></i></li>
                    <li class="markListItem" @click="previewAllFn" title="关闭编辑框"><i class="fa fa-eye" aria-hidden="true"></i></li>
                </ul>

            </div>
        </div>
        <div class="mdBodyContainer" :class="{ noMenu: !navStatus }">
            <div class="editContainer" v-if="editStatus">
                <textarea name="" class="mdEditor" @keydown.9="tabFn" v-scroll="editScroll" v-model="input"></textarea>
            </div>
            <div class="previewContainer markdown-body" v-scroll="previewScroll" v-html="compiledMarkdown" v-if="previewStatus">
            </div>
        </div>
    </div>
</template>

<script lang="babel">
    import Vue from 'vue'
    import marked from 'marked'
    import scroll from 'vue-scroll'
    import range from '@/libs/rangeFn'
    import hljs from 'highlight.js'

    Vue.use(scroll)

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

    function insertContent(val, that) {
        let textareaDom = document.querySelector('.mdEditor');
        let value = textareaDom.value;
        let point = range.getCursortPosition(textareaDom);
        let lastChart = value.substring(point - 1, point);
        let lastFourCharts = value.substring(point - 4, point);
        if (lastChart != '\n' && value != '' && lastFourCharts != '    ') {
            val = '\n' + val;
            range.insertAfterText(textareaDom, val);
        } else {
            range.insertAfterText(textareaDom, val);
        }
        that.input = document.querySelector('.mdEditor').value;
    }
    export default {
        name: 'markdown',
        props: ['mdValuesP', 'fullPageStatusP', 'editStatusP', 'previewStatusP', 'navStatusP', 'icoStatusP'],
        data() {
            return {
                input: this.mdValuesP || '',
                editStatus: Boolean(this.editStatusP),
                previewStatus: Boolean(this.previewStatusP),
                fullPageStatus: Boolean(this.fullPageStatusP),
                navStatus: Boolean(this.navStatusP),
                icoStatus: Boolean(this.icoStatusP),
                maxEditScrollHeight:0,
                maxPreviewScrollHeight:0
            }
        },
        created: function() {
            if (!this.editStatus && !this.previewStatus) {
                this.editStatus = true;
                this.previewStatus = true;
            }
        },
        methods: {
            tabFn: function(evt) {
                insertContent("    ", this);
                // 屏蔽屌tab切换事件
                if (evt.preventDefault) {
                    evt.preventDefault();
                } else {
                    evt.returnValue = false;
                }
            },
            addImage: function(evt) {
                insertContent("![Vue](https://cn.vuejs.org/images/logo.png)", this);
            },
            addHTitle: function(index) {
                let tmp = '';
                switch (index) {
                    case 1:
                        tmp = '# ';
                        break;
                    case 2:
                        tmp = '## ';
                        break;
                    case 3:
                        tmp = '### ';
                        break;
                    case 4:
                        tmp = '#### ';
                        break;
                    case 5:
                        tmp = '##### ';
                        break;
                    case 6:
                        tmp = '###### ';
                        break;
                    default:
                        break;
                }
                insertContent(tmp, this);
            },
            addCode: function() {
                let textareaDom = document.querySelector('.mdEditor');
                let value = textareaDom.value;
                let point = range.getCursortPosition(textareaDom);
                let lastChart = value.substring(point - 1, point);
                insertContent('```\n\n```', this);
                if (lastChart != '\n' && value != '') {
                    range.setCaretPosition(textareaDom, point + 5);
                } else {
                    range.setCaretPosition(textareaDom, point + 4);
                }
            },
            addStrikethrough: function() {
                let textareaDom = document.querySelector('.mdEditor');
                let value = textareaDom.value;
                let point = range.getCursortPosition(textareaDom);
                let lastChart = value.substring(point - 1, point);
                insertContent('~~~~', this);
                if (lastChart != '\n' && value != '') {
                    range.setCaretPosition(textareaDom, point + 3);
                } else {
                    range.setCaretPosition(textareaDom, point + 2);
                }
            },
            addStrong: function() {
                let textareaDom = document.querySelector('.mdEditor');
                let value = textareaDom.value;
                let point = range.getCursortPosition(textareaDom);
                let lastChart = value.substring(point - 1, point);
                insertContent('****', this);
                if (lastChart != '\n' && value != '') {
                    range.setCaretPosition(textareaDom, point + 3);
                } else {
                    range.setCaretPosition(textareaDom, point + 2);
                }
            },
            addItalic: function() {
                let textareaDom = document.querySelector('.mdEditor');
                let value = textareaDom.value;
                let point = range.getCursortPosition(textareaDom);
                let lastChart = value.substring(point - 1, point);
                insertContent('**', this);
                if (lastChart != '\n' && value != '') {
                    range.setCaretPosition(textareaDom, point + 2);
                } else {
                    range.setCaretPosition(textareaDom, point + 1);
                }
            },
            setStrong: function() {
                let textareaDom = document.querySelector('.mdEditor');
                let point = range.getCursortPosition(textareaDom);
            },
            addLine: function() {
                insertContent('\n----\n', this);
            },
            addLink: function() {
                insertContent("[Vue](https://cn.vuejs.org/images/logo.png)", this);
            },
            addQuote: function() {
                let textareaDom = document.querySelector('.mdEditor');
                let value = textareaDom.value;
                let point = range.getCursortPosition(textareaDom);
                let lastChart = value.substring(point - 1, point);
                insertContent('> ', this);
                if (lastChart != '\n' && value != '') {
                    range.setCaretPosition(textareaDom, point + 3);
                } else {
                    range.setCaretPosition(textareaDom, point + 2);
                }
            },
            addTable: function() {
                insertContent('\nheader 1 | header 2\n', this);
                insertContent('---|---\n', this);
                insertContent('row 1 col 1 | row 1 col 2\n', this);
                insertContent('row 2 col 1 | row 2 col 2\n\n', this);
            },
            addUl: function() {
                insertContent('* ', this);
            },
            addOl: function() {
                insertContent('1. ', this);
            },
            previewFn: function() {
                if (!this.editStatus) {
                    this.editStatus = true;
                    this.previewStatus = !this.previewStatus;
                } else {
                    this.previewStatus = !this.previewStatus;
                }
            },
            previewAllFn: function() {
                if (!this.editStatus && this.previewStatus) {
                    this.editStatus = true;
                    this.previewStatus = true;
                } else {
                    this.editStatus = false;
                    this.previewStatus = true;
                }
            },
            fullPageFn: function() {
                this.fullPageStatus = !this.fullPageStatus;
                let maxEditScrollHeight=document.querySelector('.mdEditor').scrollHeight-document.querySelector('.mdEditor').clientHeight;
                let maxPreviewScrollHeight=document.querySelector('.previewContainer').scrollHeight-document.querySelector('.previewContainer').clientHeight;
                this.maxEditScrollHeight = maxEditScrollHeight
                this.maxPreviewScrollHeight = maxPreviewScrollHeight
            },
            previewScroll: function(e, position) {
                if(this.maxEditScrollHeight!==0){
                    let topPercent=position.scrollTop/this.maxPreviewScrollHeight;
                    document.querySelector('.mdEditor').scrollTop = this.maxEditScrollHeight*topPercent;
                }
            },
            editScroll:function(e, position){
                if(this.maxPreviewScrollHeight!==0){
                    let topPercent=position.scrollTop/this.maxEditScrollHeight;
                    document.querySelector('.previewContainer').scrollTop = this.maxPreviewScrollHeight*topPercent;
                }
            },
            addTemplate(){
              insertContent('\n#### 请求URL \n\n> [api/auth/login](#)\n\n#### 请求方式\n\n>**POST**\n\n#### 请求参数\n\n| 请求参数      |     参数     |   为空   |   参数说明   |\n| :-------- | :--------| :------ | :------|\n|     email    |    string    |    否    |    登录邮箱    |\n|    password    |    string    |    否    |    密码     |\n\n#### 返回参数\n\n| 返回参数     |     参数类型    |    参数说明    |\n| :-------- | :--------| :------ |\n|    access_token    |    String    |    token    |\n|    token_type    |    String    |    `token`类型    |\n|    expires_in    |    Int    |    有效时长    |\n\n#### 返回示例\n\n```json\n{\n    "data": {\n        "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",\n        "token_type": "bearer",\n        "expires_in": 36000\n    },\n    "code": 200,\n    "msg": "成功",\n    "extra": null\n}\n```', this);
            }
        },
        computed: {
            compiledMarkdown: function() {
                return marked(this.input, {
                    sanitize: true
                })
            }
        },
        watch: {
            input: function() {
                let data = {};
                data.mdValue = this.input;
                data.htmlValue = marked(this.input, {
                    sanitize: true
                });
                this.$emit('childevent', data);
                let maxEditScrollHeight=document.querySelector('.mdEditor').scrollHeight-document.querySelector('.mdEditor').clientHeight;
                let maxPreviewScrollHeight=document.querySelector('.previewContainer').scrollHeight-document.querySelector('.previewContainer').clientHeight;
                this.maxEditScrollHeight = maxEditScrollHeight
                this.maxPreviewScrollHeight = maxPreviewScrollHeight
            },
            mdValuesP(value){
              this.input = value || ''
            }
        }
    }
</script>
