<template lang="html">
  <div class="upload-once">
    <Upload
      ref="upload"
      :show-upload-list="false"
      :on-success="handleSuccess"
      :format="['jpg','jpeg','png']"
      :max-size="2048"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleMaxSize"
      :before-upload="handleBeforeUpload"
      type="drag"
      action="//jsonplaceholder.typicode.com/posts/">
      <div class="once-upload">
        <div class="once-upload-img">
          <Icon type="upload" size="82"></Icon>
          <img v-if="uploadOnce !== ''" :src="uploadOnce"/>
        </div>
      </div>
    </Upload>
    <div class="once-upload-cover" @click="handleRemove">
      <Icon type="ios-trash-outline" size="30"></Icon>
    </div>
  </div>
</template>

<script lang="babel">
  export default {
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        imgName: '',
        visible: false,
        uploadOnce: this.value
      }
    },
    methods: {
      handleView (name) {
        this.imgName = name;
        this.visible = true;
      },
      handleRemove (file) {
        this.uploadOnce = ''
      },
      handleSuccess (res, file) {
        this.uploadOnce = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar'
      },
      handleFormatError (file) {
        this.$Notice.warning({
          title: 'The file format is incorrect',
          desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
        });
      },
      handleMaxSize (file) {
        this.$Notice.warning({
          title: 'Exceeding file size limit',
          desc: 'File  ' + file.name + ' is too large, no more than 2M.'
        });
      },
      handleBeforeUpload () {
        return true;
      }
    },
    watch: {
      uploadList (val){
        this.$emit("on-upload", val)
      }
    }
  }
</script>

<style lang="scss">
  .once-upload{
    height:220px;
    position: relative;
    text-align: center;
  }
  .upload-once{
    position: relative;
  }
  .once-upload-img{
    padding:10px;
    position: relative;
    height:220px;
  }
  .once-upload-img img, .once-upload-img i{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #3399ff;
    max-height: 200px;
  }

  .once-upload-cover{
    display: none;
    position: absolute;
    height: 30px;
    bottom: 0;
    width: 30px;
    right: 0;
    /*background: rgba(0,0,0,.6);*/
    text-align: center;
  }
  .upload-once:hover .once-upload-cover{
    display: block;
  }
  .once-upload-cover i{
    color: #3399ff;
    font-size: 30px;
    cursor: pointer;
    margin: 0 2px;
  }
</style>
