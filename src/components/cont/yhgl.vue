<template>
  <div>
    <myTable :tableData="myData">
      <!-- <my-col prop="orderCode" label="订单号"></my-col> -->
      <th>订单号1</th>
      <th>订单号2</th>
    </myTable>
  </div>
</template>
<script>
import myTable from './tables'
export default {
  data(){
    return {
      myData:[ 
        { "applyAccountName":"",
         "applyAccountType":0,
          "approverStatus":0,
           "billPrice":100, 
           "billStatus":1,
            "checkStatus":0,
             "createTime":"2019-04-30 17:51:41",
              "customerName":"李菲",
               "id":"000000000270", 
               "linkmanCreatorId":79,
                "linkmanId":577,
                 "modifyTime":"2019-04-30 17:51:41",
                  "orderCode":"201904300002",
                   "orderNumber":"", "orderType":5,
                    "paymentTime":"2019-05-17 11:02:30",
                     "relationId":122,
                      "relationType":4,
                       "remitStatus":0,
                        "tradeType":1,
                         "userId":79 }, 
                         { "applyAccountName":"135****2967", "applyAccountType":1, "approverStatus":0, "billPrice":100, "billStatus":1, "checkStatus":0, "createTime":"2019-04-30 14:49:22", "customerName":"李菲", "id":"000000000269", "linkmanCreatorId":79, "linkmanId":555, "modifyTime":"2019-04-30 14:49:35", "orderCode":"201904300001", "orderNumber":"2019043022001451801041893894", "orderType":4, "paymentTime":"2019-04-30 14:49:35", "relationId":203, "relationType":2, "remitStatus":1, "tradeType":1, "userId":79 }, { "applyAccountName":"", "applyAccountType":0, "approverStatus":0, "billPrice":100, "billStatus":1, "checkStatus":0, "createTime":"2019-04-28 22:27:00", "customerName":"onion.哥哥呀🦄🐷🐴🐷", "id":"000000000268", "linkmanCreatorId":1, "linkmanId":473, "modifyTime":"2019-04-28 22:27:00", "orderCode":"201904280008", "orderNumber":"", "orderType":5, "paymentTime":"2019-05-17 11:02:30", "relationId":111, "relationType":4, "remitStatus":0, "tradeType":1, "userId":1 }, { "applyAccountName":"", "applyAccountType":0, "approverStatus":0, "billPrice":100, "billStatus":1, "checkStatus":0, "createTime":"2019-04-28 14:30:38", "customerName":"onion.哥哥呀🦄🐷🐴🐷", "id":"000000000267", "linkmanCreatorId":79, "linkmanId":465, "modifyTime":"2019-04-28 14:30:38", "orderCode":"201904280007", "orderNumber":"", "orderType":5, "paymentTime":"2019-05-17 11:02:30", "relationId":130, "relationType":5, "remitStatus":0, "tradeType":1, "userId":1 }, { "applyAccountName":"", "applyAccountType":0, "approverStatus":0, "billPrice":140, "billStatus":1, "checkStatus":0, "createTime":"2019-04-28 14:17:44", "customerName":"onion.哥哥呀🦄🐷🐴🐷", "id":"000000000266", "linkmanCreatorId":79, "linkmanId":439, "modifyTime":"2019-04-28 14:17:45", "orderCode":"201904280006", "orderNumber":"", "orderType":5, "paymentTime":"2019-05-17 11:02:30", "relationId":113, "relationType":5, "remitStatus":0, "tradeType":1, "userId":1 }, { "applyAccountName":"", "applyAccountType":0, "approverStatus":0, "billPrice":120, "billStatus":1, "checkStatus":0, "createTime":"2019-04-28 14:16:47", "customerName":"onion.哥哥呀🦄🐷🐴🐷", "id":"000000000265", "linkmanCreatorId":1, "linkmanId":447, "modifyTime":"2019-04-28 14:16:47", "orderCode":"201904280005", "orderNumber":"", "orderType":5, "paymentTime":"2019-05-17 11:02:30", "relationId":115, "relationType":5, "remitStatus":0, "tradeType":1, "userId":1 }, { "applyAccountName":"", "applyAccountType":0, "approverStatus":0, "billPrice":195, "billStatus":1, "checkStatus":0, "createTime":"2019-04-28 14:02:38", "customerName":"onion.哥哥呀🦄🐷🐴🐷", "id":"000000000264", "linkmanCreatorId":1, "linkmanId":436, "modifyTime":"2019-04-28 14:02:38", "orderCode":"201904280004", "orderNumber":"", "orderType":5, "paymentTime":"2019-05-17 11:02:30", "relationId":98, "relationType":4, "remitStatus":0, "tradeType":1, "userId":1 }, { "applyAccountName":"", "applyAccountType":0, "approverStatus":0, "billPrice":195, "billStatus":1, "checkStatus":0, "createTime":"2019-04-28 14:02:34", "customerName":"onion.哥哥呀🦄🐷🐴🐷", "id":"000000000263", "linkmanCreatorId":1, "linkmanId":436, "modifyTime":"2019-04-28 14:02:34", "orderCode":"201904280003", "orderNumber":"", "orderType":5, "paymentTime":"2019-05-17 11:02:30", "relationId":98, "relationType":4, "remitStatus":0, "tradeType":1, "userId":1 }, { "applyAccountName":"", "applyAccountType":0, "approverStatus":0, "billPrice":195, "billStatus":1, "checkStatus":0, "createTime":"2019-04-28 14:02:30", "customerName":"onion.哥哥呀🦄🐷🐴🐷", "id":"000000000262", "linkmanCreatorId":1, "linkmanId":436, "modifyTime":"2019-04-28 14:02:30", "orderCode":"201904280002", "orderNumber":"", "orderType":5, "paymentTime":"2019-05-17 11:02:31", "relationId":98, "relationType":4, "remitStatus":0, "tradeType":1, "userId":1 }, { "applyAccountName":"", "applyAccountType":0, "approverStatus":0, "billPrice":195, "billStatus":1, "checkStatus":0, "createTime":"2019-04-28 14:02:20", "customerName":"onion.哥哥呀🦄🐷🐴🐷", "id":"000000000261", "linkmanCreatorId":1, "linkmanId":436, "modifyTime":"2019-04-28 14:02:20", "orderCode":"201904280001", "orderNumber":"", "orderType":5, "paymentTime":"2019-05-17 11:02:31", "relationId":98, "relationType":4, "remitStatus":0, "tradeType":1, "userId":1 } ],
    }
  },
  components:{
    myTable
  }
}
</script>

