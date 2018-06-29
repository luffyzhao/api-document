<template>
    <div class="container" :ref="uuid+'-container'">
        <div class="codemirror-box" :ref="uuid + '-codemirror'" @mouseover="currentTab = 0" @scroll="onScroll(0)">
            <div :ref="uuid + '-codemirror-body'">
                <codemirror :ref="uuid" v-model="data" :options="editor" class="input"
                            :class="{open:!isPreview}"></codemirror>
            </div>
        </div>
        <div v-if="isPreview == true" class="preview" :ref="uuid+'-preview'" @mouseover="currentTab = 1" @scroll="onScroll(1)">
            <div class="markdown-body" v-html="input" :ref="uuid+'-preview-body'"/>
        </div>
    </div>
</template>

<script>
  import {codemirror} from 'vue-codemirror'
  import {debounce} from 'lodash';
  import editor from '@/modules/editor.js';
  import {initMarkdown} from '@/modules/markdown.js'
  import StringMixin from '@/mixins/StringMixin'

  /**
   * 参考 ： https://github.com/accforgit/blog-data/blob/master/%E5%85%83%E7%B4%A0%E8%B7%9F%E9%9A%8F%E6%BB%9A%E5%8A%A8/index.html
   */
  export default {
    name: 'my-markdown',
    components: {
      codemirror
    },
    mixins: [StringMixin],
    props: {
      value: {
        type: String,
        default: ''
      },
      preview: {
        type: Boolean,
        default: true
      },
      scroll: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        editor,
        input: '',
        markdown: initMarkdown(),
        isPreview: this.preview,
        scale: 0,
        currentTab: 0
      }
    },
    computed: {
      data: {
        get() {
          return this.value || ''
        },
        set(value) {
          this.$emit('input', value);
          if (this.isPreview) {
            this.input = this.markdown.render(value);
          }
        }
      }
    },
    methods: {
      onScroll(index) {
        if (this.scroll && this.isPreview) {
          let scale = (this.$refs[this.uuid + '-preview-body'].offsetHeight - this.$refs[this.uuid + '-preview'].offsetHeight) / (this.$refs[this.uuid + '-codemirror-body'].offsetHeight - this.$refs[this.uuid + '-codemirror'].offsetHeight);
          if(index == 0 && this.currentTab == 0){
            this.$refs[this.uuid + '-preview'].scrollTop = this.$refs[this.uuid + '-codemirror'].scrollTop * scale
          }else if(index == 1 && this.currentTab == 1){
            this.$refs[this.uuid + '-codemirror'].scrollTop = this.$refs[this.uuid + '-preview'].scrollTop / scale
          }
        }
      }
    },
    watch: {
      isPreview(value) {
        if (value) {
          this.input = this.markdown.render(this.code);
        }
      }
    },
  }
</script>

<style lang="scss">
    @import "../../../../style/markdown";
</style>
