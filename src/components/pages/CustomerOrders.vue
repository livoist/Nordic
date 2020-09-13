<template>
  <div>
    <!-- cartIcon -->
    <div class="fixed-control" @click="openCartModal()">
      <i class="fas fa-shopping-cart my-3 fa-2x">
        <span class="h6">{{ cart.carts.length }}</span>
      </i>
    </div>

    <loading :active.sync="isLoading"></loading>
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="(item,id) in products" :key="id">
        <div class="card border-0 shadow-sm">
          <div
            style="height: 150px; background-size: cover; background-position: center"
            :style="{backgroundImage: `url(${item.imageUrl})`}"
          ></div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">Type</span>
            <h5 class="card-title">
              <a style="text-decoration: none" href="#" class="text-dark">{{ item.title }}</a>
            </h5>
            <p class="card-text">{{ item.content }}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="!item.price">{{ item.origin_price }}</div>
              <del class="h6" v-if="!item.price">{{ item.origin_price }}</del>
              <div class="h5" v-if="!item.price">{{ item.price }}</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm"
              @click="getProduct(item.id)"
            >
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
              See More
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm ml-auto"
              @click="addtoCart(item,item.id)"
            >
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
              Add Cart
            </button>
          </div>
        </div>
      </div>

      <!-- single productModal -->
      <div
        class="modal fade"
        id="productModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img :src="product.imageUrl" class="img-fluid" alt>
              <blockquote class="blockquote mt-3">
                <p class="mb-0">{{ product.content }}</p>
                <footer class="blockquote-footer text-right">{{ product.description }}</footer>
              </blockquote>
              <div class="d-flex justify-content-between align-items-baseline">
                <div class="h4" v-if="!product.price">${{ product.origin_price }}</div>
                <div class="h6" v-if="product.price">Price ${{ product.origin_price }}</div>
                <div class="h4 text-danger" v-if="product.price">Sale ${{ product.price }}</div>
              </div>
              <select name class="form-content mt-3" v-model="product.num">
                <option :value="num" v-for="num in 10" :key="num">{{ num }}</option>
              </select>
            </div>
            <div class="modal-footer">
              <div class="text-muted text-nowrap mr-3">
                Total
                <strong>{{ product.num * product.price }}</strong>
              </div>
              <button
                type="button"
                class="btn btn-primary"
                @click="addtoCart(product.item, product.id, product.num)"
              >Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled': !pagination.has_pre}">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="getProducts(pagination.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in pagination.total_pages"
          :key="page"
          :class="{'active':pagination.current_page === page}"
        >
          <a class="page-link" href="#" @click.prevent="getProducts(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{'disabled': !pagination.has_next}">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="getProducts(pagination.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Shopping Cart Modal -->
    <div
      class="modal fade"
      id="cartModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-warning">
            <h5 class="modal-title text-center" id="exampleModalLabel">My Cart</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>
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
                  <div class="h6 mt-2">${{ item.product.origin_price }}</div>
                  <div class="h3 text-danger mt-3">${{ item.product.price }}</div>
                  <div class="btn btn-primary" @click="removeCartItem(item.id)">Delete</div>
                  <div class="h5 text-dark text-right" >Number: {{ item.qty }} </div>
                  <div class="h5 text-dark text-right">Subtotal: ${{ item.total }}</div>
                  <div class="input-group mb-3 input-group-sm">
                    <input type="text" class="form-control" placeholder="place enter Coupon Code" v-model="coupon_code">
                    <div class="input-group-append">
                      <button class="btn btn-outline-secondary" type="button" @click="addCouponCode()">
                        Apply Promo Code
                      </button>
                    </div>
                  </div>
                  <hr>
                </div>
                <div class="h3 text-right text-danger mt-5 pt-5">Total ${{ cart.final_total }} </div>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cartList {
  list-style: none;
}

.fixed-control {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  z-index: 100;
  opacity: 0.5;
  cursor: pointer;
  transition: 0.5s;
}
.fixed-control:hover {
  opacity: 1;
}
</style>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      products: [],
      pagination: {},
      status: {
        loadingItem: ""
      },
      isLoading: false,
      isCartOpen: false,
      totalShow: false,
      coupon_code: ''
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart
    }
  },
  methods: {
    async getProducts(page = 1) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/admin/products?page=${page}`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        vm.products = response.data.products;
        vm.isLoading = false;
        vm.pagination = response.data.pagination;
      });
    },
    getProduct(id) {
      this.$store.dispatch('getProduct', id)
    },
    addtoCart(item, id, qty = 1) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(url, { data: cart }).then(response => {
        console.log(response);
        vm.status.loadingItem = "";
        vm.getCart();
        $("#productModal").modal("hide");
      });
    },
    getCart() {
      this.$store.dispatch('getCarts')
    },
    removeCartItem(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/cart/${id}`;
      this.$http.delete(url).then(response => {
        vm.getCart();
        vm.isLoading = false;
      });
    },
    openCartModal() {
      $("#cartModal").modal("show");
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/coupon`;
      const coupon = {
        code: vm.coupon_code,
      }
      this.$http.post(url,{data: coupon}).then(response => {
        console.log(response);
        vm.getCart();
        vm.isLoading = false;
      });
    }
  },
  created() {
    this.getProducts();
    this.getCart();
  }
};
</script>







