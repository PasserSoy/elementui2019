import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ajax,{instance} from './ajax/ajax'
import router from './router'
import Vuex from 'vuex'
import store from './vuex'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.prototype.$ajax = ajax
Vue.prototype.instance = instance

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
