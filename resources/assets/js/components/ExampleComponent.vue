<template>
    <div class="container">
        <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            value: "1212"
          }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
