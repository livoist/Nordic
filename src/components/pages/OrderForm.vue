<template>
<div class="container">
  <div class="my-5 row justify-content-center">
    <div class="col-8">
  <div class="card mt-4">
    <div class="card-header bg-light text-center">Personal Information
</div>
    <div class="card-body">
      <!-- 點擊事件createOrder -->
      <form @submit.prevent="createOrder">
        <div class="form-row">
          <div class="col-12">
        <div class="form-group">
          <label class="ml-1" for="useremail">Email：</label>
          <input
            type="email"
            class="form-control"
            :class="{'is-invalid': errors.has('email')}"
            name="email"
            id="useremail"
            v-model="form.user.email"
            placeholder="Email"
            v-validate="'required|email'"
          >
          <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
          <!-- Vue官方驗證欄位(Email語法) 14~16 v-if做判斷，錯誤做顯示，並以Name做綁定和v-validate="'required|email'"-->
        </div>

        <div class="form-group">
          <label class="ml-1" for="username">Name：</label>
          <input
            type="text"
            class="form-control"
            name="name"
            id="username"
            :class="{'is-invalid': errors.has('name')}"
            v-model="form.user.name"
            placeholder="Name"
            v-validate="'required'"
          >
          <span class="text-danger" v-if="errors.has('name')">Please enter name</span>
        </div>

        <div class="form-group">
          <label class="ml-1" for="usertel">Tel：</label>
          <input
            name="phone"
            type="tel"
            class="form-control"
            :class="{'is-invalid': errors.has('phone') }"
            id="usertel"
            v-model="form.user.tel"
            placeholder="Tel"
            v-validate="'required'"
          >
          <span class="text-danger" v-if="errors.has('phone')">Please enter phone number</span>
        </div>

        <div class="form-group">
          <label class="ml-1" for="useraddress">Address：</label>
          <input
            type="address"
            class="form-control"
            :class="{'is-invalid': errors.has('address')}"
            name="address"
            id="useraddress"
            v-model="form.user.address"
            placeholder="Address"
            v-validate="'required'"
          >
          <span class="text-danger" v-if="errors.has('address')">Place enter address</span>
        </div>

        <div class="form-group">
          <label class="ml-1" for="useraddress">Message：</label>
          <textarea
            name="space"
            id
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
            :class="{'is-invalid': errors.has('space')}"
            v-validate="'required'"
            placeholder="Message"
          ></textarea>
          <span class="text-danger" v-if="errors.has('space')">Any Precautions
          </span>
        </div>
        <div class="text-right">
          <button class="btn btn-danger">Send List</button>
        </div>
        </div>
        </div>
      </form>
    </div>
    </div> 
  </div>
  </div>
  <hr>
  <div class="text-center p-4">©2019 Widget All Reserved 
| Design by Ben</div>
  <!-- <div class="row">
    <div class="col-12 bg-dark" style="height:80px">

    </div>
  </div> -->
  </div>
</template>


<style>
</style>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: ""
      },
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      },
      cart: {},
      isLoading: false,
      coupon_code: ""
    };
  },
  methods: {
    createOrder() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const order = vm.form;
      // vm.isLading = true;
      //Vue官方驗證函式，抓取驗證資源，判斷輸入欄位若為正確，則訂單建立，反之印出欄位不完整
      this.$validator.validate().then(result => {
        if (result) {
          this.$http.post(api, { data: order }).then(res => {
            console.log("訂單已建立", res);
            if (res.data.success) {
              vm.$router.push(`/CustomerCheckout/${res.data.orderId}`);
            }
          });
        } else {
          console.log("欄位不完整");
        }
      });
    }
  },
};
</script>








