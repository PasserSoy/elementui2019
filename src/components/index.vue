<template>
  <div id="index">
    <myHeader></myHeader>
    <myNav></myNav>
    <router-view class="container"></router-view>
  </div>
</template>
<script>
import myHeader from './header/header'
import myNav from './nav/nav'
export default {
  components:{
    myHeader,
    myNav
  },
  created(){
    var _self = this;// 页面点击需要初始化钩子
    document.onkeydown = function(e){
      // console.log(window.event)
      // if(window.event.keyCode == 13){
      //   alert(0)
      // }
    }
  },
  computed:{
    user(){
      return this.$store.state.userName;
    }
  }
}
</script>
<style scoped>
  .container {
    position: fixed;
    left: 180px;
    top: 40px;
    right: 0;
    bottom: 0;
    background-color: blanchedalmond;
    overflow-y: auto;
    padding: 15px;
  }
</style>

