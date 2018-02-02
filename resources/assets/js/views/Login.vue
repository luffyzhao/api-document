<template>
    <div>
      <Button type="primary" @click="login">登录</Button>
    </div>
</template>

<script>
  import Util from '@/libs/Util'
    export default {
      methods: {
        login(){
          Util.cache.set('token', 'adf')
          this.$router.replace({name: 'home'})
        }
      }
    }
</script>
