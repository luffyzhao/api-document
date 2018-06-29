export default {
  data(){
    return {
      uuid: ''
    }
  },
  create(){
    this.uuid = (Math.random()*10000000).toString(16).substr(0,4)+'-'+(new Date()).getTime()+'-'+Math.random().toString().substr(2,5);
  }
}
