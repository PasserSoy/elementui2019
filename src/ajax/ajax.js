import axios from 'axios'
import qs from 'qs'

const $myAjax = function({
  method='POST',
  url='',
  data={},
  header={'Content-Type':'application/x-www-form-urlencoded'},
  success=function(){},
  error=function(){}
}){
  axios({
    method:method,
    url:url,
    data:qs.stringify(data),
    header:header
  }).then(res=>{
    if(res.data.success==false && res.data.errorCode == 'please.login.first'){
      const that = this;
      that.$message({
        message:res.data.errorInfo,
        type:'error',
        duration:1500,
        onClose:function(){
          that.$router.replace({name:'login'});
          sessionStorage.clear();
        }
      });
    }else{
      success(res);
    };
  }).catch(err=>{
    error(err);
    console.log(err);
    this.$message(res.data.errorInfo);
  })
}
export var instance = axios.create({
  method: 'post',
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理
    return qs.stringify(data);
  }],
});
export default $myAjax
