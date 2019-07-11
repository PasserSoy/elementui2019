<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>订单号</th>
          <th>消费者</th>
          <th>消费金额</th>
          <th>下单时间</th>
          <slot></slot>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(datas,i) in tableData" :key="i">
          <td>{{datas.orderCode}}</td>
          <td>{{datas.customerName}}</td>
          <td>{{datas.billPrice}}</td>
          <td>{{datas.paymentTime}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props:['tableData']
}
</script>
<style scoped>
  table {
    border-collapse: collapse;
  }
  th,td {
    border: 1px solid red;
  }
</style>

