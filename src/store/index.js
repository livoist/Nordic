import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  // Vuex的嚴謹模式
  state: {
    isLoading: false,
    homeLoading: false,
    products: [],
    filterTodos: [],
  },
  actions: {
    //payload 載荷(status)
    updateLoading(context, status) {
      context.commit('LOADING', status);
      //context，擁有方法和屬性的函式，用以提交行為給mutaions改變狀態。
    },
    updateHomeLoading(context, status) {
      context.commit('HOMELOADING', status);
    },
    getProducts(context) {
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
        }/products/all`;
      context.commit('LOADING', true);
      axios.get(url).then(res => {
        context.commit('PRODUCTS', res.data.products);
        context.commit('CATEGORIES', res.data.products);
        context.commit('LOADING', false);
        console.log(res);
      });
    },
  },
  // 操作行為，操作動作，非同步行為settimeout or Ajax 在actions完成，不然資料狀態會對不上且會很難除錯。
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
      // LOADING會有兩個參數，一個是現在的狀態state，一個是要修改的狀態status
    },
    HOMELOADING(state, status) {
      state.homeLoading = status;
    },
    // PRODUCTS(state, payload) {
    //  state.products = payload
    // },
    // CATEGORIES(state, payload) {
    //     let newAry = [];
    //     if (type == "") {
    //       vm.filterTodos = payload;
    //     } else {
    //       newAry = payload.filter(function(product) {
    //         return product.category == type;
    //       });
    //       state.filterTodos = newAry;
    //     }
    // }
  },
  //改變資料狀態
})