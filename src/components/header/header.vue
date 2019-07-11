<template>
  <header>
    <div class="left">
      <p class="user">您好！欢迎{{user}}</p>
      <p class="time">{{mytime}}</p>
    </div>
    <div class="right" @click="exit">
      退出
    </div>
  </header>
</template>
<script>
export default {
  data(){
    return {
      dialogs:false,
      shade:false,
      mytime:'',
      timeDSQ:'',
      user:sessionStorage.user
    }
  },
  methods:{
    exit(){
      this.$confirm('是否退出？')
        .then(_ => {
          this.$router.replace({name:'login'});
          sessionStorage.clear();
        })
        .catch(_ => {});
    },
    getNow(){// 获取当前时间
      var d = new Date();
      // 处理年月日
      var y = d.getFullYear(),
        m = d.getMonth() + 1,
        d1 = d.getDate(); // 年月日
      var date = `${y}年${m<10?'0'+m:m}月${d1<10?'0'+d1:d1}日`;
      // 处理周
      var w = d.getDay(); // 周
      var weekArr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      var week = weekArr[w];
      // 处理时分秒
      var h = d.getHours(),
        m1 = d.getMinutes(),
        s = d.getSeconds(); // 时分秒
      var time = `${h<10?'0'+h:h}:${m1<10?'0'+m1:m1}:${s<10?'0'+s:s}`;
      this.mytime = date + week + time;
    }
  },
  mounted(){
    this.getNow();
    this.timeDSQ = setInterval(this.getNow, 1000);
  },
  beforeDestroy(){
    clearInterval(this.timeDSQ);
  }
}
</script>
<style scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    box-shadow: 0 0 10px #41c5839e;
    padding-left: 190px;
    z-index: 8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
  }
  header .left {
    display: flex;
  }header .left p {
    margin-right: 10px;
  }
  header .right {
    padding-right: 10px;
    cursor: pointer;
  }
</style>

