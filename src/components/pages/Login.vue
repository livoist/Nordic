<template>
<html>
  <body>
    <Alert/>
    <div class="login-all">
      <form class="form-signin login-bg-color" @submit.prevent="signin">
        <div class="text-center mb-5 d-flex flex-column ">
          <div> <img src="https://upload.cc/i1/2019/02/19/0KSrkx.png" alt=""></div>
          <a class="font-weight-bold" href.prevent="#" style="text-decoration: none">Nordic</a>
        </div>
        <h1 class="h5 mb-3 font-weight-normal text-center text-dark">Login</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          v-model="user.username"
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
        >
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          v-model="user.password"
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
        >
        <div class="checkbox mb-3">
          <label>
            <input class="custom-checkbox" type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-dark btn-block" type="submit">Sign in</button>
        <div class="d-flex justify-content-center mt-5">
          <div class="icon-border p-1 mx-2">
            <i class="fab fa-facebook-f">
              <span class="icon-left mx-2">
                <span class="ml-2">Facebook</span>
              </span>
            </i>
          </div>
          <div class="icon-border p-1 mr-2">
            <i class="fab fa-twitter">
              <span class="icon-left mx-2">
                <span class="ml-2">Twitter</span>
              </span>
            </i>
          </div>
          <div class="icon-border p-1 mr-2">
            <i class="fab fa-google">
              <span class="icon-left mx-2">
                <span class="ml-2">Google</span>
              </span>
            </i>
          </div>
        </div>
        <p class="pt-3 mt-5 text-black year-fixed text-center" style="font-size: 13px">&copy;2019 Account Login Widget All right Reserved <br> | Design by Ben</p>
      </form>
    </div>
  </body>
</html>
</template>

<style>
input[type="checkbox"] {
  width: 12px;
  height: 12px;
  border: 2px solid rgb(245, 195, 59);
  border-radius: 50%;
  transition: 0.5s;
  cursor: pointer;
}
input[type="checkbox"]:checked {
  background-color: rgb(253, 77, 7);
  border: 2px solid rgb(253, 77, 7);
}
.custom-checkbox {
  appearance: none;
  outline: none;
}
.icon-border {
  border: 1px solid black;
}
.icon-left::before {
  content: "";
  border: 0.5px solid black;
}
.icon-border:hover {
  color: white;
  cursor: pointer;
  background-color: black;
}
</style>


<script>
import Alert from '../AlertMessage';



export default {
  name: "HelloWorld",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  components: {
    Alert,
  },
  methods: {
    signin() {
      const api = `${process.env.APIPATH}/admin/signin`;
      const checkAPI = `${process.env.APIPATH}/api/user/check`;
      const vm = this;
      this.$http.post(api, vm.user).then(res => {
        console.log(res.data);
        if (res.data.success) {
          vm.$router.push("/admin/products");
        }else {
          this.$bus.$emit("message:push","Link Error","danger")
          setTimeout(()=>{
            this.$bus.$emit("message:push","Check your Account or Password","danger")
          },3000)
          
        }
      });
    }
  }
};
</script>

<!--scope綁定範圍使用-->
<style scoped>
html,
body {
  height: 100%;
  width: 100%;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: white;
  z-index: 1;
}
.login-all {
  border: 2px solid #000;
  z-index: 100;
}
.form-signin {
  width: 100%;
  max-width: 350px;
  padding: 30px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>