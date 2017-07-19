import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import store from './vuex/store.js'
Vue.prototype.$store = store  //加入到原型链中
import crypto from 'crypto'   //加密模块
Vue.prototype.$crypto = crypto    //加入到原型链中

//引入弹窗的数据仓库
import saferAlert from './vuex/safeAlert.js'
Vue.prototype.$saferAlert = saferAlert

// administrator系统人员列表的数据仓库
import adminListStore from './vuex/adminListStore.js'
Vue.prototype.$adminListStore = adminListStore

import VueResource from 'vue-resource'

import axios from 'axios';
axios.defaults.withCredentials = true;  //允许在跨域请求时，携带cookie

Vue.prototype.$reqs = axios;    // 将axios赋值给vue
Vue.config.debug = true;    // 开启debug模式

Vue.use(Vuex);
Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  store,
  
})