<template>
  <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1" @on-select="menuRouter">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <MenuItem name="admin.home">
                    <Icon type="ios-navigate"></Icon>
                    后台管理
                </MenuItem>
            </div>
        </Menu>
      </Header>
      <Layout>
          <Sider hide-trigger></Sider>
          <Content class="book-content">
            <Row>
              <Col span="4" class="thumbnail-box" v-for="(item, index) in lists.data" :key="index">
                <router-link class="thumbnail" :to="{name: 'home.documents', query: {id:item.id} }">
                    <div class="img">
                        <img src="/images/book-default-bg.png" />
                    </div>
                    <p>{{item.name}}</p>
                </router-link>
              </Col>
            </Row>
          </Content>
          <Sider hide-trigger></Sider>
      </Layout>
      <Footer class="layout-footer-center">
        2018-2018 &copy; LuffyZhao
      </Footer>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      lists: []
    }
  },
  computed: {

  },
  mounted() {
    this.list(1)
  },
  methods: {
    list(id){
      axios.get(`book`).then((res) => {
        this.lists = res.data.data;
      })
    },
    menuRouter (name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

<style media="screen">
  .book-content{
    padding: 15px;
  }
  .thumbnail-box{
    padding: 10px;
  }
  .thumbnail {
      display: block;
      padding: 4px;
      margin-bottom: 20px;
      line-height: 1.42857143;
      background-color: #fff;
      border: 1px solid #ddd;
      -webkit-transition: border .2s ease-in-out;
      -o-transition: border .2s ease-in-out;
      transition: border .2s ease-in-out;
      height: 300px;
      color: #495060;
  }
  .thumbnail:hover{
    color: #495060;
  }
  .thumbnail .img{
    text-align: center;
    margin-bottom: 10px;
  }
  .thumbnail img,.thumbnail .img{
    max-width: 100%;
    height: 248px;
  }

  .ivu-layout{
    height: 100%;
  }
  .ivu-layout-sider{
    background-color: #fff;
  }
  .layout{
    /* border: 1px solid #d7dde4; */
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 120px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
