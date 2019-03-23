<template>
  <div class="shopping-bgc">
    <!-- cartIcon -->
    <div class="fixed-control" @click="cartPage()">
      <i class="fas fa-shopping-cart my-3 fa-2x text-white" style="z-index:100">
        <span class="h6">{{ cart.carts.length }}</span>
      </i>
    </div>

    <loading :active.sync="isLoading"></loading>

    <!-- Sidebar box -->
    <!-- 篩選Method，帶入參數 -->
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
        <div class="col-md-12">
          <div class="row mt-4">
            <div class="col-md-4 mb-4" v-for="(item,id) in filterTodos" :key="id">
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
                      style="text-decoration: none"
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
                    <i class="fas fa-sync fa-spin" v-if="status.loadingItem === item"></i>
                    See More
                  </div>
                  <!-- 加入購物車，並加入動態icon判斷參數 -->
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm ml-auto"
                    @click="addtoCart(item,item.id)"
                  >
                    <i class="fas fa-spinner fa-pulse" v-if="status.loadingItem === item.id"></i>
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

export default {
  data() {
    return {
      products: [],
      filterTodos: [],
      //存放篩選過後的陣列用於渲染
      cart: {
        carts: []
      },
      //cart資料結構＊＊＊＊＊
      product: {},
      pagination: {},
      status: {
        loadingItem: ""
      },
      isLoading: false,
      // isCartOpen: false,
      // totalShow: false,
      coupon_code: ""
      // addSuccess: {}
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/products/all`;
      vm.isLoading = true;
      this.$http.get(url).then(res => {
        vm.filterTodos = res.data.products;
        vm.products = res.data.products;
        vm.isLoading = false;
        console.log(res);
      });
    },
    //Shopping篩選，定義新陣列，用filter過濾找出符合條件的值並回傳
    filterProduct(type) {
      const vm = this;
      let newAry = [];
      if (type == "") {
        vm.filterTodos = vm.products;
      } else {
        newAry = vm.products.filter(function(product) {
          return product.category == type;
        });
        vm.filterTodos = newAry;
      }
    },
    // getProduct(item) {
    //   const vm = this;
    //   const url = `${process.env.APIPATH}/api/${
    //     process.env.CUSTOMPATH
    //   }/product/${item.id}`;

    //   vm.isLoading = true;
    //   this.$http.get(url).then(response => {
    //     $("#productModal").modal("show");
    //     console.log(response);
    //     vm.product = response.data.product;
    //     vm.product.num = 1;
    //     vm.isLoading = false;

    //     this.$router.push("/ShoppingSinglePage")
    //   });
    // },
    //商品加入購物車行為
    addtoCart(item, id, qty = 1) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(url, { data: cart }).then(res => {
        console.log(res);
        if (res.data.success) {
          this.$bus.$emit("message:push", "Add to Shopping Cart", "success");
          vm.status.loadingItem = "";
          vm.getCart();
          //加入購物車後，取回購物車完整內容
        } else {
          this.$bus.$emit("message:push", "Error", "danger");
          vm.getCart();
        }
      });
    },
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
        //定義陣列Cart，並把更新後的Data傳入Cart
        //全畫面loading icon關閉
      });
    },
    cartPage() {
      this.$router.push("/CartList");
    },
    detailPage(item) {
      this.$router.push({
        name: "ShoppingSinglePage",
        params: {id: item.id}
      });
    }
  },
  computed: {},

  created() {
    this.getProducts();
    this.getCart();
  }
};
</script>












