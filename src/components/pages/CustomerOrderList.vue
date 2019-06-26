<template>
  <div class="font-weight-bold">
    <loading :active.sync="isLoading"></loading>
    <div class="d-flex justify-content-end mt-2">
    </div>

    <!-- 5，點擊事件，傳入參數true為建立新產品觸發行為 -->
    <table class="table mt-4">
      <thead class="bg-dark text-white">
        <th width="120">訂單編號</th>
        <th width="180">訂購人姓名</th>
        <th width="auto" class="text-right">注意事項</th>
        <th width="auto" class="text-right">總金額</th>
        <th width="auto" class="text-right">商品內容</th>
        <th class>編輯</th>
      </thead>
      <tbody>
        <tr v-for="(item,id) in customerList" :key="id">
          <td class="font-weight-bold">{{ item.create_at }}</td>
          <td>{{ item.user.name }}</td>
          <td class="text-right">{{ item.message }}</td>
          <td class="text-right">{{ item.total }}</td>
          <td
            class="text-right text-success cursor-pointer"
            @click="getCustomer(item)"
          >訂購人詳細資訊</td>
          <td>
            <div class="btn btn-sm btn-info" @click="openCustomerModal(item)">修改訂單</div>
            <!-- <div class="btn btn-sm btn-danger" @click="deleteOrder(id)">刪除訂單</div> -->
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
            @click.prevent="getCustomerList(pagination.current_page - 1)"
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
          <a class="page-link" href="#" @click.prevent="getCustomerList(page)">{{ page }}</a>
        </li>
        <!-- 點擊事件(取消預設行為)，取得產品頁面的所在頁數，並且顯示出來 -->
        <!-- 條件切換(active)，若現在的頁面等於取得的頁面則顯示active -->
        <li class="page-item" :class="{'disabled': !pagination.has_next}">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="getCustomerList(pagination.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
          <!-- 點擊事件(取消預設行為)，取得產品頁面的所在頁數+1(往下頁) -->
        </li>
      </ul>
    </nav>

    <!-- customerModal -->
    <div
      class="modal fade"
      id="customerModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>Change Order</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group row">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label">訂單編號:</label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="colFormLabelSm"
                    placeholder
                    v-model="newList.create_at"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">訂購人姓名:</label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="colFormLabel"
                    placeholder
                    v-model="newList.user.name"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label for="colFormLabelLg" class="col-sm-2 col-form-label">注意事項:</label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="colFormLabelLg"
                    placeholder
                    v-model="newList.message"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label for="colFormLabelLg" class="col-sm-2 col-form-label">金額:</label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="colFormLabelLg"
                    placeholder
                    v-model="newList.total"
                  >
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">cancel</button>
            <button type="button" class="btn btn-primary" @click="updateCustomerList">comfirm</button>
            <!-- 202，點擊事件，確認更新 -->
          </div>
        </div>
      </div>
    </div>

    <!-- single customer Modal -->
    <div
      class="modal fade"
      id="getCustomer"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>Order detail</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group row">
                <label for="colFormLabelSm" class="h5 col-sm-2 col-form-label">姓名:</label>
                <div class="col-sm-10">
                  <div class="h5"> {{ newList.user.name }} </div>
                </div>
              </div>
              <hr>
              <div class="form-group row">
                <label for="colFormLabelSm" class="h5 col-sm-2 col-form-label">地址:</label>
                <div class="col-sm-10">
                  <div class="h5"> {{ newList.user.address }} </div>
                </div>
              </div>
              <hr>
              <div class="form-group row">
                <label for="colFormLabel" class="h5 col-sm-2 col-form-label">電話:</label>
                <div class="col-sm-10">
                  <div class="h5"> {{ newList.user.tel }} </div>
                </div>
              </div>
              <hr>
              <div class="form-group row">
                <label for="colFormLabelLg" class="h5 col-sm-2 col-form-label">電子信箱:</label>
                <div class="col-sm-10">
                  <div class="h5"> {{ newList.user.email }} </div>
                </div>
              </div>
              <hr>
              <div class="form-group row">
                <label for="colFormLabelLg" class="h5 col-sm-2 col-form-label">注意事項:</label>
                <div class="col-sm-10">
                  <div class="h5"> {{ newList.message }} </div>
                </div>
              </div>
              <hr>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">cancel</button>
            <!-- <button type="button" class="btn btn-primary" @click="updateCustomerList">comfirm</button> -->
            <!-- 點擊事件，確認更新 -->
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
      customerList: [],
      newList: {
        user: {}
      },
      //起始資料值
      pagination: {},
      isNew: false,
      //判斷是否為新的物件或是編輯舊的物件
      isLoading: false,
      //loding icon判斷條件
      status: {
        fileUploading: false
      }
      //圖片載入時觸發條件
    };
  },
  methods: {
    //page = 1為ES6語法，若參數沒有值傳進來則預設為1
    getCustomerList(page = 1) {
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/admin/orders?page=${page}`;
      const vm = this;
      console.log(process.env.APIPATH, process.env.CUSTOMPATH);
      this.$http.get(api).then(res => {
        console.log(res.data.orders);
        vm.customerList = res.data.orders;
        vm.pagination = res.data.pagination;
        //把取出來的api傳入定義的空陣列或物件裡
      });
    },
    updateCustomerList() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/admin/order/${vm.newList.id}`;
      vm.isLoading = true;
      this.$http.put(api, { data: vm.newList }).then(res => {
        console.log(res.data);
        if (res.data.success) {
          $("#customerModal").modal("hide");
          vm.getCustomerList();
          vm.isLoading = false;
        } else {
          $("#customerModal").modal("hide");
          vm.getCustomerList();
          console.log("修改失敗");
          vm.isLoading = false;
        }
      });
    },
    // getCustomer(id) {
    //   let api = `${process.env.APIPATH}/api/${
    //     process.env.CUSTOMPATH
    //   }/admin/order/${id}`;
    //   const vm = this;
    //   this.$http.get(api).then(res => {});
    // },
    // deleteOrder(id) {
    //   let api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/order/${id}`;
    //   const vm = this;
    //   this.$http.delete(api).then(res=>{
    //     vm.getCustomerList();
    //   })
    // },
    openCustomerModal(item) {
      this.newList = Object.assign({}, item)
      $("#customerModal").modal("show");
    },
    getCustomer(item) {
      this.newList = item;
      $("#getCustomer").modal("show");
    },
    frontPage() {
      this.$router.push("/HomePage");
    }
  },
  //Vue初始化執行行為
  created() {
    this.getCustomerList();
  }
};
</script>













