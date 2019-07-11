<template>
  <div id="login">
    <div class="user">
      用户名:
      <el-input placeholder="用户名" v-model="input1" clearable></el-input>
    </div>
    <div class="pass">
      密码:
      <el-input type="password" placeholder="密码" v-model="input2" clearable show-password></el-input>
    </div>
    <div class="pass">
      用户名:{{input1}}
      密码:{{input2}}
    </div>
    <div class="pass">
      <el-button type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>
<style scoped>
  body {
    margin: 0;
    padding: 0;
  }
  #login {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .el-input {
    width: 240px;
  }
  #login>div {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #efefef;
    padding: 20px;
  }
  .pass {
    margin-top: -20px;
  }
  .el-button {
    width: 100%;
  }
</style>
<script>
export default {
  data(){
    return {
      input1:'17665301212',
      input2:'1234'
    }
  },
  methods:{
    login(){
      var that = this;
      // var params = new URLSearchParams();
      // params.append('mobile',that.input1);
      // params.append('msmCode',that.input2);
      var params = {'mobile':that.input1,'msmCode':that.input2};
      this.$ajax({
        url:'/back-api/doLogin',
        data:params,
        success:function(res){
          console.log(res)
          that.$message({
            message:'您好，'+res.data.data.userName+' 。欢迎登录！',
            type:'success'
          });
          if(res.data.success==true){
            document.onkeydown = undefined;
            that.$store.state.userName = res.data.data.userName;
            sessionStorage.isLogin = true;// 登录成功保存登录状态
            sessionStorage.user = res.data.data.userName;// 用户名
            // that.$router.replace({name:'index'});// 跳转的时候不用path会加载不出子页面
            that.$router.replace({path:'/index'});
          };
        }
      });
    }
  },
  created(){
    var _self = this;// 页面点击需要初始化钩子
    document.onkeydown = function(e){
      var key = window.event.keyCode;
      // console.log(window.event)
      if(window.event!=undefined && key == 13){
        _self.login();
      }
    }
  }
}
</script>
