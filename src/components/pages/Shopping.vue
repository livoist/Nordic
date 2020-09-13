<template>
  <div class="bg-black">
    <!-- cartIcon -->
    <loading :active.sync="isLoading"></loading>
    <div class="fixed-control" @click="cartPage()">
      <i class="fas fa-shopping-cart my-3 fa-2x text-white" style="z-index:100">
        <span class="h6">{{ cart.carts.length }}</span>
      </i>
    </div>
    <!-- Sidebar box -->
    <div class="container">
      <div class="row">
        <div class="col-12 py-5 my-4 bg-cover bg-transparent">
          <div class="row d-flex justify-content-center align-items-center">
            <div
              @click="filterProduct('iceland')"
              class="mx-3 my-1 col-8 col-md-2 animated-4 color-box color-box1 text-center d-flex align-items-center justify-content-center"
            ></div>
            <div
              @click="filterProduct('finland')"
              class="mx-3 my-1 col-8 col-md-2 animated-4 color-box color-box2 text-center d-flex align-items-center justify-content-center"
            ></div>
            <div
              @click="filterProduct('norway')"
              class="mx-3 my-1 col-8 col-md-2 animated-4 color-box color-box3 text-center d-flex align-items-center justify-content-center"
            ></div>
            <div
              @click="filterProduct('denmark')"
              class="mx-3 my-1 col-8 col-md-2 animated-4 color-box color-box4 text-center d-flex align-items-center justify-content-center"
            ></div>
            <div
              @click="filterProduct('swedan')"
              class="mx-3 my-1 col-8 col-md-2 animated-4 color-box color-box5 text-center d-flex align-items-center justify-content-center"
            ></div>
          </div>
        </div>

        <!-- card box -->
        <div class="col-md-12 mb-5">
          <div class="row mt-4">
            <div class="col-md-4 mb-4" v-for="(item,id) in filterCards" :key="id">
              <div class="card shadow-sm card-bg-color card-hover-move border-none">
                <div
                  style="height: 150px; background-size: cover; background-position: center"
                  :style="{backgroundImage: `url(${item.imageUrl})`}"
                >
                  <div v-if="item.category == 'iceland'">
                    <div class="shopping-icon-box-2"></div>
                    <div class="shopping-icon-box d-flex justify-content-center align-items-center">
                      <div class="text-white font-weight-bold">-20%</div>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <span class="badge badge-dark float-right ml-2">{{ item.category }}</span>
                  <h5 class="card-title">
                    <a
                      href.prevent="#"
                      class="text-dark font-weight-bold"
                    >{{ item.title }}</a>
                  </h5>
                  <p class="card-text">{{ item.content }}</p>
                  <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h5" v-if="!item.price">{{ item.origin_price }}</div>
                    <del class="h6" v-if="!item.price">{{ item.origin_price }}</del>
                    <div class="h5" v-if="!item.price">{{ item.price }}</div>
                  </div>
                </div>
                <div class="card-footer d-flex">
                  <!-- 取得單一產品內容，並加入動態icon判斷參數 -->
                  <div class="btn btn-outline-dark btn-sm" @click="detailPage(item)">
                    <i class="fas fa-sync fa-spin" v-if="loadingItem === item"></i>
                    See More
                  </div>
                  <!-- 加入購物車，並加入動態icon判斷參數 -->
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm ml-auto"
                    @click="addtoCart(item,item.id)"
                  >
                    <i class="fas fa-spinner fa-pulse" v-if="loadingItem === item.id"></i>
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from 'vuex'

export default {
  data() {
    return {
      filterCards: [],
      coupon_code: ""
    };
  },
  computed: {
    ...mapState([
      'products',
      'product',
      'cart',
      'isLoading',
      'loadingItem'
    ]),
  },
  watch: {
    products: {
      immediate: true,
      deep: true,
      handler(val) {
        if (val) {
          this.filterCards = val
        }
      }
    }
  },
  methods: {
    getProducts() {
      this.$store.dispatch('getProducts')
    },
    getProduct(item) {
      this.$store.dispatch('getProduct', item)
    },
    filterProduct(type) {
      const vm = this
      let newAry = []
      newAry = vm.products.filter(item => {
        return item.category === type
      })
      return vm.filterCards = newAry
    },
    addtoCart(item, id, qty = 1) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(url, { data: cart }).then(res => {
        if (res.data.success) {
          this.$bus.$emit("message:push", "Add to Shopping Cart", "success");
          vm.getCart();
        } else {
          this.$bus.$emit("message:push", "Error", "danger");
          vm.getCart();
        }
      });
    },
    getCart() {
      this.$store.dispatch('getCarts')
    },
    cartPage() {
      this.$router.push("/CartList");
    },
    detailPage(item) {
      this.$router.push({
        name: "ShoppingSinglePage",
        params: { id: item.id }
      });
    }
  },
  created() {
    this.filterProduct()
    this.getProducts()
    this.getProduct()
    this.getCart()
  }
};
</script>












