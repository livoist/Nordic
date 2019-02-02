<template>
  <div>
    <div class="container mt-5">
          <div class="row">
            <loading :active.sync="isLoading"></loading>
            <div class="col-12">
              <!--先把抓出來的response.data.data存入陣列cart
              ，在用v-for取出data中的carts(cart.carts)，印出的部分再用item下的product取出裡面的值做渲染-->
              <ul>
                <div class="cartList" v-for="item in cart.carts" :key="item.id">
                  <hr>
                  <li class="h3 text-center mb-4">{{ item.product.title }}</li>
                  <div class="d-flex justify-content-center ml-5">
                    <img
                      class="mr-5"
                      style="height: 150px; width: 200px; background-size: cover; background-position: center"
                      :src="item.product.imageUrl"
                      alt
                    >
                    <div class="h6 text-primary">{{ item.product.description }}</div>
                  </div>
                  <div class="h6 mt-2 price-middle-line">${{ item.product.origin_price }}</div>
                  <div class="h3 text-danger mt-3">${{ item.product.price }}</div>
                  <div class="btn btn-primary" @click="removeCartItem(item.id)">Delete</div>
                  <div class="h5 text-dark text-right">Num: {{ item.qty }}</div>
                  <div class="h5 text-danger text-right">total: ${{ item.total }}</div>
                  <hr>
                </div>
                <!-- 優惠券輸入 -->
                <div class="input-group mt-3 input-group-sm">
                  <input type="text" class="form-control" placeholder="Code" v-model="coupon_code">
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
            </div>
          </div>
          <div class="footer text-right my-5">
            <button class="btn btn-outline-dark" @click="goPay()">Go pay</button>
          </div>
        </div>
        <hr>
<div class="text-center p-4">©2019 Widget All Reserved 
| Design by Ben</div>
      </div>
</template>

<script>
import $ from 'jquery';


export default {
  data() {
    return {
      cart: {
        carts: []
      },
      coupon_code: "",
      isLoading: false,
    }
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
        console.log(res.data.data)
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
      this.$http.delete(url).then(response => {
        vm.isLoading = false;
        vm.getCart();
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
    }
  },
  created() {
    this.getCart();
    this.addCouponCode();
  }
}


</script>