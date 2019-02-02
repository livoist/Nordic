<template>
  <div>
    <!-- cartIcon -->
    <div class="fixed-control" @click="cartPage()">
      <i class="fas fa-shopping-cart my-3 fa-2x" style="z-index:100">
        <span class="h6">{{ cart.carts.length }}</span>
      </i>
    </div>

    <loading :active.sync="isLoading"></loading>

    <!-- Sidebar box -->
    <!-- 篩選Method，帶入參數 -->
    <div class="container">
      <div class="row-reverse">
        <div class="col-md-12 text-center" style="z-index:1">
          <div
            class="list-group list-group-flush sticky-top mt-5"
            style="top:5px;font-family:Didot, serif"
          >
            <a
              class="list-group-item list-group-item-action text-dark"
              href="#pane-1"
              data-toggle="list"
              @click="filterProduct('iceland')"
            >
              <!-- <i class="fa fa-star-o"></i>-->
              Iceland
            </a>
            <a
              class="list-group-item list-group-item-action text-dark"
              href="#pane-5"
              data-toggle="list"
              @click="filterProduct('finland')"
            >
              <!-- <i class="fa fa-star-o"></i>-->
              Finland
            </a>
            <a
              class="list-group-item list-group-item-action text-dark"
              href="#pane-2"
              data-toggle="list"
              @click="filterProduct('norway')"
            >
              <!-- <i class="fa fa-star-o"></i>-->
              Norway
            </a>
            <a
              class="list-group-item list-group-item-action text-dark"
              href="#pane-3"
              data-toggle="list"
              @click="filterProduct('denmark')"
            >
              <!-- <i class="fa fa-star-o"></i>-->
              Denmark
            </a>
            <a
              class="list-group-item list-group-item-action text-dark"
              href="#pane-4"
              data-toggle="list"
              @click="filterProduct('swedan')"
            >Swedan</a>
          </div>
        </div>
        <!-- card box -->
        <div class="col-md-12">
          <div class="row mt-4">
            <div class="col-md-4 mb-4" v-for="(item,id) in filterTodos" :key="id">
              <div class="card border-0 shadow-sm">
                <div
                  style="height: 150px; background-size: cover; background-position: center"
                  :style="{backgroundImage: `url(${item.imageUrl})`}"
                ></div>
                <div class="card-body">
                  <span class="badge badge-dark float-right ml-2">{{ item.category }}</span>
                  <h5 class="card-title">
                    <a
                      style="text-decoration: none"
                      href.prevent="#"
                      class="text-secondary"
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
                    @click="getProduct(id)"
                  >
                    <i class="fas fa-sync fa-spin" v-if="status.loadingItem === id"></i>
                    See More
                  </button>
                  <!-- 加入購物車，並加入動態icon判斷參數 -->
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm ml-auto"
                    @click="addtoCart(item,id)"
                  >
                    <i class="fas fa-spinner fa-pulse" v-if="status.loadingItem === item"></i>
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
                      <p class="mb-0">{{product.content}}</p>
                      <footer class="blockquote-footer text-right">{{ product.description }}</footer>
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
                      @click="addtoCart(product.item, product.id,product.num)"
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
                <!-- 點擊事件(取消預設行為)，取得產品頁面的所在頁數-1(回上頁) -->
              </li>
              <li
                class="page-item"
                v-for="page in pagination.total_pages"
                :key="page"
                :class="{'active':pagination.current_page === page}"
              >
                <a class="page-link" href="#" @click.prevent="getProducts(page)">{{ page }}</a>
              </li>
              <!-- 點擊事件(取消預設行為)，取得產品頁面的所在頁數，並且顯示出來 -->
              <!-- 條件切換(active)，若現在的頁面等於取得的頁面則顯示active -->
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
                <!-- 點擊事件(sr-only取消預設行為)，取得產品頁面的所在頁數+1(往下頁) -->
              </li>
            </ul>
          </nav>
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
      coupon_code: "",
      // addSuccess: {}
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/admin/products/all`;
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
        newAry = vm.products.filter(function(product){
          return product.category == type;
        });
        vm.filterTodos = newAry;
      }
    },
    getProduct(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/product/${id}`;
      // 抓取點擊物件(加上ID)的API
      vm.status.loadingItem = id;
      //data設定空值存放抓取的id進行比對
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        $("#productModal").modal("show");
        console.log(response);
        vm.product = response.data.product;
        vm.isLoading = false;
        vm.status.loadingItem = "";
        //結束後結束loading icon
      });
    },
    //商品加入購物車行為
    addtoCart(item, id, qty = 1) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.status.loadingItem = item;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(url, { data: cart }).then(response => {
        console.log(response);
        vm.status.loadingItem = "";
        vm.getCart();
        //155，加入購物車後，取回購物車完整內容
        // $("#productModal").modal("hide");
      });
    },
    //取得購物車資訊
    getCart() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      //全畫面loading icon觸發
      this.$http.get(url).then(response => {
        console.log(response);
        vm.isLoading = false;
        vm.cart = response.data.data;
        //定義陣列Cart，並把更新後的Data傳入Cart
        //全畫面loading icon關閉
      });
    },
    cartPage() {
      this.$router.push("/CartList")
    },
  },
  computed: {},

  created() {
    this.getProducts();
    this.getCart();
  }
};
</script>














/* .panel {
  width: 70%;
}
.panel ul {
  list-style: none;
}
.panel ul li {
  transition: 0.5s;
}
.panel ul li:hover {
  background-color: rgba(white, 0.25);
  cursor: pointer;
  border-radius: 5px;
  transform: translateY(-10px);
} */
/* .control {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(10deg, #111 0%, #111 50%, transparent 100%);
  box-sizing: border-box;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
} */

/* .control.isCartOpen {
  opacity: 1;
  pointer-events: initial;
} */