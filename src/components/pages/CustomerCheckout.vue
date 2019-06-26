

<template>
  <!-- import!!!  v-for迴圈在印出多個物件時使用，但在created取得資料時，就可以從資料結構裡取出在頁面上做渲染，不用跑v-for  -->
  <div class="container py-5">
    <div class="card my-3">
      <div class="row justify-content-center">
        <form class="col-10 col-sm-8 col-md-6 font-weight-bold" @submit.prevent="payOrder">
          <div class="mt-5 text-center h3 font-weight-bold">Order List</div>
          <table class="table mt-5">
            <thead class="thead-dark">
              <tr>
                <th colspan="6">Product</th>
                <th colspan="3" class="text-right">Num</th>
                <th colspan="3" class="text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td colspan="6">{{ item.product.title }}</td>
                <td colspan="3" class="text-right">{{ item.qty }}/{{ item.product.unit }}</td>
                <td colspan="3" class="text-right">{{ item.final_total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2"></td>
                <td colspan="4"></td>
                <td colspan="6" class="text-right text-danger h5">
                  <!-- <span class="mr-3"></span> -->
                  Total：{{ order.total }}
                </td>
              </tr>
            </tfoot>
          </table>
          <hr>
          <table class="table mt-3">
            <thead class="thead-dark">
              <tr>
                <th></th>
                <th colspan="12"> <span style="display: inline-block; transform: translateX(-50px)">Orderer information</span> </th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >Email：</td>
                <td colspan="12">{{ order.user.email }}</td>
                
              </tr>
              <tr>
                <td >Name：</td>
                <td colspan="12">{{ order.user.name }}</td>
                
              </tr>
              <tr>
                <td>Tel：</td>
                <td colspan="12">{{ order.user.tel }}</td>
                
              </tr>
              <tr>
                <td>Address：</td>
                <td colspan="12">{{ order.user.address }}</td>
                
              </tr>
              <tr>
                <td>Precautions：</td>
                <td colspan="12">{{ order.message }}</td>
                
              </tr>
            </tbody>
            <tr>
              <td>Status</td>
              <td colspan="12">
                <span v-if="!order.is_paid" class="text-danger">Unpaid</span>
                <span v-else class="text-success">payment completed</span>
              </td>
            </tr>
          </table>
          <hr>
          <div class="text-right mb-4">
            <button class="btn btn-danger btn-sm" v-if="order.is_paid === false">Pay</button>
          </div>
        </form>
      </div>
    </div>
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
          setTimeout(() => {
            this.$router.push("/FinishPage");
          }, 4000);
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