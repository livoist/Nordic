<template>
  <div class>
    <loading :active.sync="isLoading"></loading>
    <div class="d-flex justify-content-end mt-2">
      <div class>
        <button
          class="btn btn-outline-primary mr-3"
          @click="openCouponModal(true)"
        >Build a new Coupon</button>
      </div>
      <!-- <div class>
        <button class="btn btn-outline-primary" @click="removeAll()">RemoveAll</button>
      </div> -->
    </div>

    <div class="row d-flex justify-content-center">
      <table class="table mt-4">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Coupon Name</th>
            <th scope="col">Discount</th>
            <th scope="col">Deadline</th>
            <th scope="col">Couponcode</th>
            <th scope="col">Enabled</th>
            <th width="200">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,id) in coupons" :key="id">
            <td>{{ Math.floor(Math.random()*52+1) }}</td>
            <td>{{ item.percent }}</td>
            <td>{{ item.due_date }}</td>
            <td>{{ item.code }}</td>
            <td>
              <span v-if="item.is_enabled" class="text-success">enabled</span>
              <span v-else class="text-danger">Not enabled</span>
            </td>
            <td>
              <button class="btn btn-outline-primary mt-2 btn-sm" @click="openCouponModal(false,item)">Edit</button>
              <button class="btn btn-outline-primary mt-2 btn-sm" @click="deleteCoupon(item.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- 切換頁面Bar -->
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="{'disabled': !pagination.has_pre}">
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
              @click.prevent="getCoupons(pagination.current_page - 1)"
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
            <a class="page-link" href="#" @click.prevent="getCoupons(page)">{{ page }}</a>
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
            <!-- 點擊事件(取消預設行為)，取得產品頁面的所在頁數+1(往下頁) -->
          </li>
        </ul>
      </nav>
    </div>

    <!--add Coupon Modal -->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Coupon Edit</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="mr-3 h5" for="title">Name:</label>
              <input type="text" v-model="tempProduct.title">
            </div>
            <div class="form-group">
              <label class="mr-3 h5" for="discount">Percent:</label>
              <input type="text" v-model="tempProduct.percent">
            </div>
            <div class="form-group">
              <label class="mr-3 h5" for="code">Code:</label>
              <input type="text" v-model="tempProduct.code">
            </div>
            <div class="form-group">
              <label class="mr-3 h5" for="code">Date:</label>
              <input type="text" v-model="tempProduct.due_date">
            </div>
            <div>
              <!--啟用控制項，新增至物件(tempProduct上)，設定動態切換value(true and false)，
              去判斷是否啟用，並在上方span下v-if判斷式決定顯示條件-->
              <label for="is_inabled" class="h6 mt-4">enabled or Not enabled</label>
              <input type="checkbox" v-model="tempProduct.is_enabled" :true-value="1" :false-value="0" id="is_enabled">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="updateCoupon()">Save changes</button>
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
      coupons: [],
      newCoupon: {},
      tempProduct: {},
      isLoading: false,
      pagination: {},
      isNew: false,
    };
  },
  methods: {
    //取得API資料，然後要在created(初始化)執行
    getCoupons(page = 1) {
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/admin/coupons?page=${page}`;
      const vm = this;
      console.log(process.env.APIPATH, process.env.CUSTOMPATH);
      vm.isLoading = true;
      this.$http.get(api).then(res => {
        console.log(res.data);
        vm.isLoading = false;
        vm.coupons = res.data.coupons;
        vm.pagination = res.data.pagination;
      });
    },
    //加入優惠卷內容
    updateCoupon() {
      let api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/admin/coupon`;
      let httpMethod = "post";
      const vm = this;
      if (!vm.isNew) {
        api = `${process.env.APIPATH}/api/${
          process.env.CUSTOMPATH
        }/admin/coupon/${vm.tempProduct.id}`;
        httpMethod = "put";
        //如果不是新的，進入編輯模式，改為put修改，並且榜上ID確認為哪個欄位
        //更新API的方法，get為取得，post為建立，put為修改(後補上ID確認修改項目)
      };
      console.log(process.env.APIPATH, process.env.CUSTOMPATH);
      this.$http[httpMethod](api, { data: vm.tempProduct }).then((res) => {
        console.log(res.data);
        if (res.data.success) {
          $("#couponModal").modal("hide");
          vm.getCoupons();
        } else {
          $("#couponModal").modal("hide");
          vm.getCoupons();
          console.log("新增失敗");
        }
      });
    },
    //傳入id，跟api同樣執行刪除
    deleteCoupon(id) {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/admin/coupon/${id}`;
      this.$http.delete(api).then(res => {
        vm.isLoading = true;
        this.getCoupons();
      });
    },
    openCouponModal(isNew, item) {
      $("#couponModal").modal("show");
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.isNew = false;
        this.tempProduct = Object.assign({}, item);
        //因為被定義為空的物件所以會影響到下面的物件
        //ES6物件防參考語法，創立一個新的物件
        //並把原來的值(點擊當下的item)傳進去
      }
    }
  },
  created() {
    this.getCoupons();
  }
};
</script>

















