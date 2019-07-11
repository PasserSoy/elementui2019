<template>
  <div>
    <div class="myForm">
      <label for="orderCode">
        <span>订单号</span>
        <el-input id="orderCode" placeholder="请输入订单号" v-model="orderCode" clearable></el-input>
      </label>
      <label for="applyAccountName">
        <span>账号</span>
        <el-input id="applyAccountName" placeholder="请输入账号" v-model="applyAccountName" clearable></el-input>
      </label>
      <label>
        <span>支付方式</span>
        <el-select v-model="applyAccountType" clearable placeholder="请选择支付方式">
          <el-option v-for="item in options" :key="item.applyAccountType" :label="item.label" :value="item.applyAccountType"> </el-option>
        </el-select>
      </label>
      <label>
        <span>状态</span>
        <el-select v-model="orderType" clearable placeholder="请选择状态">
          <el-option v-for="item in options1" :key="item.orderType" :label="item.label" :value="item.orderType"> </el-option>
        </el-select>
      </label>
      <label>
        <span>下单时间</span>
        <el-date-picker v-model="times" type="datetimerange" prefix-icon="el-icon-date" range-separator=" - " start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd HH:mm:ss"> </el-date-picker>
      </label>
      <el-button type="success" @click="btnSearch">查询</el-button>
    </div>
    <div class="myTable">
      <el-table v-loading="loading" element-loading-background="rgba(0, 0, 0, 0)" :data="tableData" stripe style="width: 100%">
        <el-table-column type="index" :index="tableIndex" label="序号" width="50"> </el-table-column>
        <el-table-column prop="orderCode" label="订单号" width="180"> </el-table-column>
        <el-table-column prop="applyAccountName" label="账号" width="180"> </el-table-column>
        <el-table-column prop="customerName" label="消费者"> </el-table-column>
        <el-table-column prop="billPrice" label="消费金额(元)"> </el-table-column>
        <el-table-column prop="applyAccountType" label="支付方式"> </el-table-column>
        <el-table-column prop="createTime" label="下单时间" width="180"> </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <span :orderType="scope.row.orderType">{{ scope.row.status }}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination layout="prev, pager, next, jumper, total" :pager-count="5" :current-page.sync="currentpage" :total="pagetotal" @current-change="handleCurrentChange"> </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      orderCode:'',// 订单号
      applyAccountName:'',// 账号
      options: [{
          applyAccountType: '',
          label: '请选择'
        }, {
          applyAccountType: '0',
          label: '未选支付方式'
        }, {
          applyAccountType: '1',
          label: '支付宝'
        }, {
          applyAccountType: '2',
          label: '微信支付'
        }],
      applyAccountType: '',// 支付方式
      options1: [{
          orderType: '',
          label: '请选择'
        }, {
          orderType: '1',
          label: '待付款'
        }, {
          orderType: '4',
          label: '已付款'
        }, {
          orderType: '5',
          label: '已取消'
        }],
      orderType: '',// 状态
      times: [],// 下单时间
      tableData: [],// 表格
      pagetotal:10,// 分页总条目数
      currentpage:1,// 当前页
      tableIndex:1,// 序号
      loading:true,// 表格loading
    }
  },
  methods:{
    search(){
      var dataPro = {pageNum:this.currentpage,orderCode:this.orderCode,applyAccountName:this.applyAccountName,applyAccountType:this.applyAccountType,orderType:this.orderType};
      if(this.times==null){
        dataPro.queryBeginTime='';
        dataPro.queryEndTime='';
      }else{
        dataPro.queryBeginTime = this.times[0]==undefined?'':this.times[0];
        dataPro.queryEndTime = this.times[1]==undefined?'':this.times[1];
      };
      this.toPage(dataPro);
    },
    toPage(params){// 表格渲染方法
      const _t = this;
      _t.instance.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        _t.loading = true;
        return config;
      });
      _t.instance.interceptors.response.use(function (config) {
        // 对响应数据做点什么
        console.log(config)
        _t.loading = false;
        return config;
      });
      _t.instance({
        url:'/back-api/order/list',
        data:params
      })
      .then(res=>{
          // console.log(res);
          // 格式化数据
          const tableDatas = res.data.data.list;
          for(const i of tableDatas){
            i.billPrice/=100;// 价钱除以100
            switch(i.applyAccountType){// 支付方式
              case 0:i.applyAccountType = '未选支付方式';break;
              case 1:i.applyAccountType = '支付宝';break;
              case 2:i.applyAccountType = '微信支付';break;
            };
            switch(i.orderType){// 状态
              case 1:i.status = '待付款';break;
              case 4:i.status = '已付款';break;
              case 5:i.status = '已取消';break;
            };
          }
          _t.tableData = tableDatas;// 表格数据
          _t.pagetotal = res.data.data.total;// 分页总条目数
          _t.tableIndex = (_t.currentpage-1)*10+1;
      });
    },
    btnSearch(){// 点击查询
      this.currentpage = 1;
      this.search();
    },
    handleCurrentChange(val) {// val为当前页的值
      this.currentpage = val;
      this.search();
    }
  },
  mounted(){
    this.search();// 初始化先渲染一次
  }
}
</script>
<style scoped>
  .myForm {
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 0 15px #c4e4c8;
    margin-bottom: 15px;
  }
  .myForm label {
    display: inline-block;
    margin-bottom: 3px;
  }
  .myForm .el-input {
    display: inline-block;
    width: 180px;
  }
  [orderType] {
    padding: 2px 9px;
    border-radius: 20px;
    color: #fff;
    background-color: #52b9c3;
  }
  [orderType='4'] {
    background-color: #79d584;
  }
  [orderType='5'] {
    background-color: #b3b3b3;
  }
</style>

