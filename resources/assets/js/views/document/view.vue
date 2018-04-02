<template>
  <div class="writing-box">
    <div class="writing-title">

    </div>
    <div class="writing-content">
      <div class="api-list">
        <div class="api-list-nav">
          <div class="nav-item active">
            <Icon type="navicon-round"></Icon>
            列表
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          bookId: this.$route.query.id,
          documents: [],
          document:{}
        }
      },
      mounted () {
        this.getDocuments();
      },
      methods:{
        getDocuments(){
           this.$get(`book/${this.bookId}/document`).then((res) => {
             this.documents = res.data;
             if(this.documents.length > 0){
               this.getDocument(this.documents[0].id)
             }
           })
         },
         getDocument(id){
           this.$get(`book/${this.bookId}/document/${id}`).then((res) => {
             this.document = res.data
           })
         },
      }
    }
</script>

<style lang="less">
.vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    .ivu-modal {
        top: 0;
    }
}
.writing-box{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .writing-title{
    flex-basis: 40px;
    border-bottom: 1px solid #DDDDDD;
    box-sizing: border-box;
    padding: 3px 10px;
  }
  .writing-content{
    flex-grow: 1;
    height: 100%;
    overflow-y: auto;
    display:  flex;
    .api-list{
      flex-basis: 200px;
      border-right: 1px solid #ddd;
      .api-list-nav{
        font-size: 14px;
        color: #333333;
        font-weight: 200;
        zoom: 1;
        border-bottom: 1px solid #ddd;
        .nav-item{
          font-size: 14px;
          padding: 0 9px;
          cursor: pointer;
          float: left;
          height: 30px;
          line-height: 30px;
          color: #666;
        }
        .nav-item.active{
          border-bottom: 1px solid #fafafa;
          margin-bottom: -1px;
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
          padding-left: 8px;
          padding-right: 8px;
        }
        .plus-right{
          float: right;
          color: #999;
          cursor: pointer;
          height: 24px;
          width: 24px;
          line-height: 24px;
          display: inline-block;
          margin-top: 4px;
        }
      }
      .api-list-nav:after{
        display: block;
        content: '';
        clear: both;
        visibility: hidden;
      }
      .api-list-center{
        width: 199px;
        overflow: hidden;
        li{
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          line-height:30px;
          position: relative;
          .ivu-icon{
            width: 24px;
            height: 24px;
            text-align: center;
            line-height:24px;
          }
          .ivu-icon-arrow-expand, strong{
            cursor: pointer;
          }
          .hover-visble{
            position: absolute;
            top: 0;
            right: 0;
            .ivu-icon{
              cursor: pointer;
            }
          }
        }
      }
    }
    .api-content{
      height: 100%;
      flex-grow: 1;
      .markdown-editor{
        height: 100%;
      }
    }
  }
}
</style>
