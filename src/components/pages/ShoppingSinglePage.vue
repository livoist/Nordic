<template>
  <div class="p-5" style="background-color: black">
    <loading :active.sync="isLoading"></loading>
    <div class="fixed-control" @click="cartPage()">
      <i class="fas fa-shopping-cart my-3 fa-2x text-dark" style="z-index:100">
        <span class="h6">{{ cart.carts.length }}</span>
      </i>
    </div>
    <div class=" mx-5">
      <div class>
        <div class="body d-flex flex-column justify-content-center align-items-center">
          <img :src="product.imageUrl" class="img-fluid" style="max-width: 55vh ; max-height: 70vh ; border: 1px solid white" >
          <blockquote class="blockquote mt-3">
            <p class="mb-0 font-weight-bold text-center mt-2 text-white">{{product.content}}</p>
            <div
              class="blockquote-footer text-center mt-4 font-weight-bold"
            >{{ product.description }}</div>
          </blockquote>
          <div class="d-flex justify-content-between align-items-baseline">
            <div class="h4" v-if="!product.price">${{ product.origin_price }}</div>
            <div class="h6 price-middle-line text-white mx-3" v-if="product.price">Price ${{ product.origin_price }}</div>
            <div class="h4 text-danger mx-3" v-if="product.price">Sale ${{ product.price }}</div>
          </div>
          <select class="form-content mt-3" v-model="product.num" style="z-index: 100; outline: none">
            <option :value="num" v-for="num in 10" :key="num">{{ num }}</option>
          </select>
        </div>
        <div class="footer d-flex justify-content-center align-items-center mt-5">
          <div class="text-muted text-nowrap mr-3">
            Total
            <span class="font-weight-bold">{{ product.num * product.price }}</span>
          </div>
          <button
            style="z-index: 100"
            type="button"
            class="btn btn-outline-light btn-sm"
            @click="addtoCart(product.item,product.id,product.num)"
          >Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      product: {},
      cart: {
        carts: []
      },
      isLoading: false,
    };
  },
  methods: {
    getProduct(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/product/${id}`;
      // 抓取點擊物件(加上ID)的API
      // vm.status.loadingItem = item.id;
      //data設定空值存放抓取的id進行比對
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        $("#productModal").modal("show");
        console.log(response);
        vm.product = response.data.product;
        vm.product.num = 1;
        vm.isLoading = false;
        // vm.status.loadingItem = "";
        //結束後結束loading icon
      });
    },
    addtoCart(item, id, qty = 1) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      // vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(url, { data: cart }).then(res => {
        console.log(res);
        if (res.data.success) {
          this.$bus.$emit("message:push", "Add to Shopping Cart", "success");
          // vm.status.loadingItem = "";
          vm.getCart();
          //加入購物車後，取回購物車完整內容
        } else {
          this.$bus.$emit("message:push", "Error", "danger");
          vm.getCart();
        }
      });
    },
    getCart() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      //全畫面loading icon觸發
      this.$http.get(url).then(res => {
        console.log(res);
        vm.isLoading = false;
        vm.cart = res.data.data;
        //定義陣列Cart，並把更新後的Data傳入Cart
        //全畫面loading icon關閉
      });
    },
    cartPage() {
      this.$router.push("/CartList");
    },
  },
  created() {
    const id = this.$route.params.id;
    this.getProduct(id);
    this.getCart();
  }
};
</script>