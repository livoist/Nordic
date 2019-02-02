

<template>
  <!-- import!!!  v-for迴圈在印出多個物件時使用，但在created取得資料時，就可以從資料結構裡取出在頁面上做渲染，不用跑v-for  -->
  <div class="container">
  <div class="row justify-content-center">
    <form class="col-10 col-sm-8 col-md-6" @submit.prevent="payOrder">
      <div class="mt-5 text-center h5">Order list</div>
      <table class="table mt-5">
        <thead class="thead-dark">
          <tr>
            <th colspan="1">#</th>
            <th colspan="5">Product</th>
            <th class="text-right" colspan="3">Num</th>
            <th class="text-right" colspan="3">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <th colspan="1" >  </th>
            <td colspan="5">{{ item.product.title }}</td>
            <td class="text-right" colspan="2">{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="text-right" colspan="4">{{ item.final_total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="11"></td>
            <td colspan="1" class="text-right text-danger h5">
              <span class="mr-3">Total</span>
              {{ order.total }}
            </td>
          </tr>
        </tfoot>
      </table>
      <hr>
      <table class="table mt-3">
        <thead class="thead-dark">
          <th colspan="12" class="text-center">Orderer information
</th>
        </thead>
        <tbody>
          <tr>
            <th>Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>Tel</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>Precautions</th>
            <td>{{ order.message }}</td>
          </tr>
        </tbody>
        <tr>
          <th>Status</th>
          <td>
            <span v-if="!order.is_paid" class="text-danger">Unpaid</span>
            <span v-else class="text-success">payment completed
</span>
          </td>
        </tr>
      </table>
      <hr>
      <div class="text-right mb-4">
        <button class="btn btn-danger btn-sm" v-if="order.is_paid === false">Pay</button>
      </div>
    </form>
  </div>
  <div class="mt-5 pt-5">
  <hr>
  </div>
  <div class="text-center p-4">©2019 Account Login Widget All Reserved 
| Design by Ben</div>
  </div>
  
  
</template>

<script>
export default {
  data() {
    return {
      orderId: "",
      order: {
        user: {}
      }
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${
        vm.orderId
      }`;
      vm.isLoading = true;
      this.$http.get(api).then(res => {
        vm.order = res.data.order;
        vm.isLoading = false;
        console.log(res);
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${
        vm.orderId
      }`;
      vm.isLoading = true;
      this.$http.post(api).then(res => {
        console.log(res);
        if (res.data.success) {
          vm.getOrder();
        }
        vm.isLoading = false;
      });
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
    console.log(this.orderId);
  }
};
</script>