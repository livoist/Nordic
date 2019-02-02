// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//載入時出問題，要去看路徑有沒有錯誤！！！！！
//所有js外部插件以及自定義js的存放處！！！！！


import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import App from './App'
import router from './router'
import './bus';
import currencyFilter from './filters/currency'
import zhTWValidate from 'vee-validate/dist/locale/zh_TW'

Vue.use(VueAxios, axios)
Vue.use(VeeValidate)
VeeValidate.Validator.localize('zh_Tw',zhTWValidate)
Vue.config.productionTip = false
axios.defaults.withCredentials = true

Vue.component('Loading',Loading)
Vue.filter('currency',currencyFilter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to,from,next)=>{
  console.log('to',to,'from',from,'next',next)
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;
    const vm = this;
    axios.post(api).then((response) => {
      console.log(response.data);
      if (response.data.success){
        next()
      }else{
        next({
          path: '/login'
        })
      }
    });
  }else{
    next()
  }
})