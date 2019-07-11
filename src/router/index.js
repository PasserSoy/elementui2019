import Vue from 'vue'
import Router from 'vue-router'
import _404 from '../components/_404'
import Login from '../components/login'
import Index from '../components/index'
// 子页面
import souye from '../components/cont/souye'// 首页
import xsgl from '../components/cont/xsgl'// 销售管理
import sydd from '../components/cont/sydd'// 所有订单
import yhgl from '../components/cont/yhgl'// 所有订单

Vue.use(Router)

const router = new Router({
  routes:[
    {path:'/login',name:'login',component:Login},
    {path:'/',redirect:'/login'},
    {path:'/index',name:'index',component:Index,children:[
      {path:'',name:'souye',component:souye},
      {path:'xsgl',name:'xsgl',component:xsgl},
      {path:'sydd',name:'sydd',component:sydd},
      {path:'yhgl',name:'yhgl',component:yhgl},
    ]},
    {path:'*',component:_404,}
  ],
  base:'/ljy',
  mode:'history'
})
router.beforeEach((to, from, next) => {
  // console.log('to')
  // console.log(to)
  // console.log('from')
  // console.log(from)
  // 如果没有isLogin，则跳转到登录页
  const isLogin = sessionStorage.getItem('isLogin');
  if(isLogin){// 有登陆信息，禁止跳回登录页
    if(to.name=='login'){
      router.go(-1);
    }else{
      next();
    };
  }else{// 没有登录信息，且不在登录页
    if(to.name!='login'){
      next({name:'login'});
    }else{
      next();
    };
  };
})
export default router
