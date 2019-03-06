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
              <div class="card shadow-sm card-bg-color card-hover-move">
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
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm"
                    @click="getProduct(item)"
                  >
                    <i class="fas fa-sync fa-spin" v-if="status.loadingItem === item"></i>
                    See More
                  </button>
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
                      <p class="mb-0 font-weight-bold text-center mt-2">{{product.content}}</p>
                      <footer class="blockquote-footer text-center mt-4 font-weight-bold">{{ product.description }}</footer>
                    </blockquote>
                    <div class="d-flex justify-content-between align-items-baseline">
                      <div class="h4" v-if="!product.price">${{ product.origin_price }}</div>
                      <div
                        class="h6 price-middle-line"
                        v-if="product.price"
                      >Price ${{ product.origin_price }}</div>
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
                      @click="addtoCart(product.item,product.id,product.num)"
                    >Add to Cart</button>
                  </div>
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
    getProduct(item) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/product/${item.id}`;
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
        if (res.data.success){
          this.$bus.$emit("message:push", "Add to Shopping Cart","");
          vm.status.loadingItem = "";
          vm.getCart();
        //加入購物車後，取回購物車完整內容
        }else {
          this.$bus.$emit("message:push", "Error", "")
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
    }
  },
  computed: {},

  created() {
    this.getProducts();
    this.getCart();
  }
};
</script>












