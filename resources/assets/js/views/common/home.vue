<template lang="html">
  <div>
    <Card :bordered="false">
      <p slot="title">No border title</p>
      <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
    </Card>
  </div>
</template>

<script lang="babel">
  export default {
    data () {
      return {
        value: ''
      }
    },
    components: {

    }
  }
</script>

<style lang="scss">

</style>
