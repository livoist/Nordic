import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import $ from "jquery"

Vue.use(Vuex)

const LOADING = 'LOADING'
const HOME_LOADING = 'HOME_LOADING'
const LOADING_ITEM = 'LOADING_ITEM'
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_CARTS = 'GET_CARTS'
const GET_PRODUCT = 'GET_PRODUCT'

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    homeLoading: false,
    products: [],
    product: {},
    loadingItem: '',
    cart: {
      carts: []
    }
  },
  mutations: {
    [LOADING](state, payload) {
      state.isLoading = payload;
    },
    [LOADING_ITEM](state, payload) {
      state.loadingItem = payload
    },
    [HOME_LOADING](state, payload) {
      state.homeLoading = payload;
    },
    [GET_PRODUCTS](state, payload) {
      state.products = payload
    },
    [GET_PRODUCT](state, payload) {
      state.product = payload
    },
    [GET_CARTS](state, payload) {
      state.cart = payload
    }
  },
  actions: {
    async getProducts({ commit }) {
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
        }/products/all`;
      commit('LOADING', true)
      try {
        const res = await axios.get(url)
        commit('GET_PRODUCTS', res.data.products);
        commit('LOADING', false)
      } catch (err) {
        console.log(err)
      }
    },
    async getProduct({ commit }, id) {
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/product/${id}`;
      commit('LOADING_ITEM', id)
      commit('LOADING', true)
      try {
        const res = await axios.get(url)
        $("#productModal").modal("show");
        commit('LOADING', false)
        commit('GET_PRODUCT', res.data.product)
        commit('LOADING_ITEM', '')
      } catch(err) {
        console.log(err)
      }
    },
    async getCarts({ commit }) {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      commit('LOADING', true)
      try {
        const res = await axios.get(url)
        commit('GET_CARTS', res.data.data)
        commit('LOADING', false)
      } catch(err) {
        console.log(err)
      }
    }
  }
})