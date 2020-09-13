<template>
  <div class="px-2 py-5 bg-black">
    <loading :active.sync="isLoading"></loading>
    <div class="fixed-control" @click="cartPage()">
      <i class="fas fa-shopping-cart my-3 fa-2x text-white" style="z-index:100">
        <span class="h6">{{ cart.carts.length }}</span>
      </i>
    </div>
    <div class=" mx-2">
      <div class="container">
        <div class="row d-flex flex-column justify-content-center align-items-center">
          <div class="px-2 col-12 col-md-6">
          <img :src="productContent.imageUrl" class="img-fluid white-border-1">
          </div>
          <blockquote class="blockquote mt-3">
            <div class="h5 mb-0 font-weight-bold text-center mt-4 text-white">{{ productContent.content }}</div>
            <div
              class="blockquote-footer text-center mt-4 font-weight-bold"
            >{{ productContent.description }}</div>
          </blockquote>
          <div class="d-flex justify-content-between align-items-baseline">
            <div class="h4" v-if="!productContent.price">${{ productContent.origin_price }}</div>
            <div class="h6 price-middle-line text-white mx-3" v-if="productContent.price">Price ${{ productContent.origin_price }}</div>
            <div class="h4 text-danger mx-3" v-if="productContent.price">Sale ${{ productContent.price }}</div>
          </div>
        </div>
        <div class="">
          <div class="row mt-3">
            <div class="col-12 d-flex justify-content-center align-items-center">
          <div class="text-white text-nowrap">
            Total
            <span class="text-white font-weight-bold">{{ productContent.num * productContent.price }}</span>
          </div>
          <select class="form-content mx-3" v-model="productContent.num" style="z-index: 100;">
            <option :value="num" v-for="num in 10" :key="num">{{ num }}</option>
          </select>
          <button
            style="z-index: 100"
            type="button"
            class="btn btn-outline-light btn-sm"
            @click="addtoCart(productContent.item,productContent.id,productContent.num)"
          >Add to Cart</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      productContent: {}
    }
  },
  computed: {
    ...mapState([
      'cart',
      'product',
      'isLoading'
    ])
  },
  watch: {
    product: {
      deep: true,
      immediate: true,
      handler(val) {
        if(val) {
          this.productContent = val
        }
      }
    }
  },
  methods: {
    getProduct(id) {
      this.$store.dispatch('getProduct', id)
    },
    getCart() {
      this.$store.dispatch('getCarts')
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