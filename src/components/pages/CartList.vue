<template>
  <div class="py-5 bg-black">
    <div
      class="d-flex justify-content-center align-items-center flex-column my-5"
      v-if="cart.carts.length == 0"
    >
      <div class="h3 py-5 text-center text-white">Your Cart is Empty</div>
      <router-link class="btn btn-md btn-dark my-4" style="z-index: 1001" :to="{ name: 'Shopping' }" exact>Back to Pick</router-link>
    </div>
    <div class="container mt-5" v-else>
      <div class="row d-flex justify-content-center">
        <loading :active.sync="isLoading"></loading>
        <div class="col-12 col-md-6">
          <ul class="padding-0">
            <div
              class="cartList position-relative mb-3"
              v-for="item in cart.carts"
              :key="item.id"
            >
              <div v-if="item.product.category == 'iceland'">
                <div class="icon-box-2"></div>
                <div class="icon-box">
                  <div class="d-flex justify-content-center align-items-center text-bold">
                    <div class="text-white">Sale -20%</div>
                  </div>
                </div>
              </div>
              <hr>
              <li class="h4 text-center mb-4">{{ item.product.title }}</li>
              <div class="d-flex flex-column justify-content-center align-items-center">
                <img
                  class="img-fluid"
                  style="background-size: cover; background-position: center"
                  :src="item.product.imageUrl"
                  alt
                >
                <div class="d-flex justify-content-center align-items-center">
                <div class="h6 text-primary font-weight-bold my-5 px-2 text-center">{{ item.product.description }}</div></div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="price-box ml-3 d-flex flex-column justify-content-center align-items-center">
                <div class="h6 price-middle-line">${{ item.product.origin_price }}</div>
                <div class="h3 text-danger">${{ item.product.price }}</div>
                </div>
                <div class="d-flex flex-column align-items-end">
                <div class="h5 text-dark">Num: {{ item.qty }}</div>
                <div class="h5 text-danger">total: ${{ item.total }}</div>
                <div>
                  <div
                  class="btn btn-outline-dark btn-sm my-2"
                  @click="getPoduct(id)"
                ><i class="fas fa-pencil-alt"></i></div>
                <div
                  class="btn btn-outline-dark btn-sm my-2"
                  @click="removeCartItem(item.id)"
                ><i class="fas fa-trash"></i></div>
                </div>
              </div>
              </div>

              

              <hr>
            </div>
            <!-- 優惠券輸入 -->
            <div class="input-group mt-3 input-group-sm">
              <input type="text" class="form-control outline-none" placeholder="Code" v-model="coupon_code">
              <div class="input-group-append">
                <button
                  class="btn btn-dark"
                  type="button"
                  @click="addCouponCode"
                >Discount code</button>
              </div>
            </div>

            <!-- 折數金額顯示判斷 -->
            <div class="mt-3">
              <div
                class="h3 text-right text-success mt-2s"
                v-if="cart.total!=cart.final_total"
              >- {{ Math.floor((cart.final_total / cart.total) * 100) }}% Total: ${{ cart.final_total }}</div>
              <div class="h5 text-white text-right" v-else>Total: ${{ cart.total }}</div>
            </div>
            <!--  -->
          </ul>
          <div class="row">
            <div class="col-12">
              <div class="d-flex flex-column justify-content-center align-items-center font-weight-bold text-white white-border-1">
            coupon code:
            <div>code: 30%</div>
            <div>code: 50%</div>
            <div>code: 70%</div>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row"><div class="col-12">
        <div class="footer text-right my-5">
        <button class="btn btn-outline-light btn-sm" @click="goPay()">Go pay</button>
      </div></div></div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from 'vuex'

export default {
  data() {
    return {
      coupon_code: ""
    };
  },
  computed: {
    ...mapState([
      'cart',
      'isLoading'
    ])
  },
  methods: {
    //取得購物車資訊
    getCart() {
      this.$store.dispatch('getCarts')
    },
    removeCartItem(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/cart/${id}`;
      this.$http.delete(url).then(res => {
        if (res.data.success) {
          this.$bus.$emit('message:push','Delete Success','success')
          vm.getCart();
        } else {
          this.$bus.$emit('message:push','Delete Error','danger')
          vm.getCart();
        }
      });
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code
      };
      this.$http.post(url, { data: coupon }).then(res => {
        vm.getCart();
        vm.coupon_code = "";
      });
    },
    goPay() {
      $("#cartModal").modal("hide");
      this.$router.push("/OrderForm");
    },
    shoppingPage() {
      this.$router.push("/Shopping");
    }
  },
  created() {
    this.getCart();
  }
};
</script>