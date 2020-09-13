// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//載入時出問題，要去看路徑有沒有錯誤！！！！！
//所有js外部插件以及自定義js的存放處！！！！！

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import App from './App'
import router from './router'
import './bus';
import * as VueGoogleMaps from 'vue2-google-maps'
import currencyFilter from './filters/currency'
import store from './store'
// import zhTWValidate from 'vee-validate/dist/locale/zh_TW'

Vue.use(VueAxios, axios)
Vue.use(VeeValidate)
Vue.use(Vuex)
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GoogleMapAPI_Key,
  },
})
// VeeValidate.Validator.localize('zh_Tw',zhTWValidate)
Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.component('Loading',Loading)
Vue.filter('currency',currencyFilter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data: {
    center: {
      lat: 64.146582, 
      lng: -21.9426354
    },
    markers: [{
      position: {
        lat: 64.147331,
        lng: -21.940461
      },
      position: {
        lat: 64.145823,
        lng: -21.9412
      },
    }],
    // shape: {
    //   coords: [10,10,10,15,15,15,15,10],
    //   type: 'poly'
    // }
  }
});
router.beforeEach((to,from,next)=>{
  console.log('to',to,'from',from,'next',next)
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;
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



