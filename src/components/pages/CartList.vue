<template>
  <div>
    <div
      class="d-flex justify-content-center align-items-center flex-column"
      v-if="cart.carts.length == 0"
    >
      <div class="h3 p-5 text-center">Your Cart is Empty</div>
      <router-link class="btn btn-md btn-dark my-4" :to="{name:'Shopping'}" exact>Back to Pick</router-link>
    </div>
    <div class="container mt-5" v-else>
      <div class="row d-flex justify-content-center">
        <loading :active.sync="isLoading"></loading>
        <div class="col-12 col-md-8">
          <!--先把抓出來的res.data.data存入陣列cart
          ，在用v-for取出data中的carts(cart.carts)，印出的部分再用item下的product取出裡面的值做渲染-->
          <ul class="padding-0">
            <div
              class="cart-card-border cartList position-relative mb-3"
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
              <li class="h3 text-center mb-4">{{ item.product.title }}</li>
              <div class="d-flex justify-content-start ml-5">
                <img
                  class="mr-5"
                  style="height:150px; width:120px; background-size: cover; background-position: center"
                  :src="item.product.imageUrl"
                  alt
                >
                <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="h6 text-primary font-weight-bold">{{ item.product.description }}</div></div>
              </div>
              <div class="d-flex">
                <div class="price-box mr-auto">
                <div class="h6 price-middle-line ml-5 my-2">${{ item.product.origin_price }}</div>
                <div class="h3 text-danger ml-5 mt-2">${{ item.product.price }}</div>
                </div>
                <div class="d-flex flex-column align-items-end">
                <div class="h5 text-dark">Num: {{ item.qty }}</div>
                <div class="h5 text-danger">total: ${{ item.total }}</div>
                <div>
                  <div
                  class="btn btn-outline-dark btn-sm my-2"
                  @click="shoppingPage"
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
                  class="btn btn-outline-secondary"
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
              >- {{ Math.floor((cart.final_total/cart.total)*100) }}% Total: ${{ cart.final_total }}</div>
              <div class="h5 text-dark text-right" v-else>Total: ${{ cart.total }}</div>
            </div>
            <!--  -->
          </ul>
          <div class="row">
            <div class="col-12">
              <div class="d-flex flex-column justify-content-center align-items-center font-weight-bold" style="border: 1px solid black">
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
        <button class="btn btn-outline-dark" @click="goPay()">Go pay</button>
      </div></div></div>
    </div>
    <hr>
    <div class="text-center p-4">
      ©2019 All right Reserved
      | Design by Ben
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      cart: {
        carts: []
      },
      coupon_code: "",
      isLoading: false
    };
  },
  methods: {
    //取得購物車資訊
    getCart() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      //全畫面loading icon觸發
      this.$http.get(url).then(res => {
        console.log(res);
        vm.isLoading = false;
        vm.cart = res.data.data;
        console.log(res.data.data);
        //定義陣列Cart，並把更新後的Data傳入Cart
        //全畫面loading icon關閉
      });
    },
    removeCartItem(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then(res => {
        if (res.data.success) {
          this.$bus.$emit('message:push','Delete Success')
          vm.isLoading = false;
          vm.getCart();
        }else {
          this.$bus.$emit('message:push','Delete Error')
          vm.isLoading = false;
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
      vm.isLoading = true;
      this.$http.post(url, { data: coupon }).then(res => {
        console.log(res);
        vm.getCart();
        vm.isLoading = false;
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
    this.addCouponCode();
  }
};
</script>