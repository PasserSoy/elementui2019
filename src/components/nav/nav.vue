<template>
  <nav id="nav">
    <p class="tit">电通宝</p>
    <el-collapse v-model="activeNames" @change="handleChange">
      <router-link to="/index" class="el-collapse-item__header">
        <i class="header-icon el-icon-upload"></i>首页信息
      </router-link>

      <el-collapse-item title="首页信息" name="1">
        <template slot="title">
          <i class="header-icon el-icon-info"></i>销售管理
        </template>
        <router-link to="/index/xsgl">销售管理</router-link>
        <router-link to="/index/bannergl">banner管理</router-link>
      </el-collapse-item>

      <el-collapse-item name="2">
        <template slot="title">
          <i class="header-icon el-icon-picture"></i>订单管理
        </template>
        <router-link to="/index/ddgl">订单管理</router-link>
        <router-link to="/index/sydd">所有订单</router-link>
      </el-collapse-item>

      <router-link to="/index/yhgl" class="el-collapse-item__header">
        <i class="header-icon el-icon-upload"></i>用户管理
      </router-link>

      <el-collapse-item name="3">
        <template slot="title">
          <i class="header-icon el-icon-picture"></i>项目管理
        </template>
        <router-link to="/index/gcxx">工程信息</router-link>
        <router-link to="/index/qyxx">企业信息</router-link>
        <router-link to="/index/sjyxx">设计院信息</router-link>
        <router-link to="/index/xxjc">信息纠错</router-link>
      </el-collapse-item>

      <router-link to="/ghfw" class="el-collapse-item__header">
        <i class="header-icon el-icon-upload"></i>客户服务
      </router-link>

      <el-collapse-item name="4">
        <template slot="title">
          <i class="header-icon el-icon-picture"></i>财务管理
        </template>
        <router-link to="/index/lrfc">利润分成</router-link>
        <router-link to="/index/txgl">提现管理</router-link>
      </el-collapse-item>

      <el-collapse-item name="5">
        <template slot="title">
          <i class="header-icon el-icon-picture"></i>权限管理
        </template>
        <router-link to="/index/qxgl">权限管理</router-link>
        <router-link to="/index/hyfl">行业分类</router-link>
      </el-collapse-item>

      <router-link to="/bbgl" class="el-collapse-item__header">
        <i class="header-icon el-icon-upload"></i>版本管理
      </router-link>

    </el-collapse>
  </nav>
</template>
<script>
export default {
  data(){
    return {
      activeNames:[]
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
      sessionStorage.navArr = JSON.stringify(val);
    }
  },
  mounted(){
    if(sessionStorage.navArr) this.activeNames = JSON.parse(sessionStorage.navArr);
  }
}
</script>
<style>
  nav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 180px;
    z-index: 9;
    overflow-y: auto;
    box-shadow: 0 0 10px #41c5839e;
  }
  nav::-webkit-scrollbar {
    display: none
  }
  nav p.tit {
    background-color: #1fbb32;
    margin: 0;
    text-align: center;
    color: #fff;
    font-size: 28px;
    height: 40px;
    line-height: 40px;
  }
  nav .el-collapse-item__content {
    padding-bottom: 0;
  }
  nav .el-collapse-item__content a {
    display: flex;
    text-decoration: none;
    color: #303133;
    padding-left: 32px;
    height: 48px;
    line-height: 48px;
  }
  nav a {
    text-decoration: none;
  }
  nav a:hover {
    background-color: #e5f5e7;
  }
  nav .router-link-exact-active {
    background-color: #e5f5e7;
    color: #25ab38 !important;
  }
  .el-collapse-item__header {
    font-size: 16px;
  }
  .el-collapse-item__header i {
    margin: 0 8px;
  }
  .el-table .cell {
    white-space: nowrap;
  }
</style>
