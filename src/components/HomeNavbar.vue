<template>
<div>
<!-- bar -->
<nav class="navbar fixed-top navbar-expand-lg py-2 bar-fadein">
  <div>
    <a class="h5 m-0 text-white font-weight-bold d-flex justify-content-center align-items-center" @click.prevent="goHome" href="#" style="text-decoration: none">
      <span class="mx-3">Nordic</span>
      </a> 
    </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="outline:none">
    <span class=""><i class="fas fa-angle-double-down text-white"></i></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mx-auto h5">
      <li class="nav-item">
        <a class="nav-link mr-5 mt-2 navbar-title1" href="#" @click.prevent="goTravel">Travel</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 mt-2 navbar-title1" href="#detail-box">Traffic</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 mt-2 navbar-title1 " href="#detail-box">Living</a>
      </li>
      <li class="nav-item">
        <a class="nav-link font-weight-bold text-center mt-2 login-link" href="#" style="border:1px solid black" @click="ChangeLogin()">Admin</a>
      </li>
    </ul>
  </div>
</nav>

</div>

</template>

<style>
.navbar {
  background: #000;
}
.navbar-title1 {
  position: relative;
  transition: 0.5s
}
.navbar-title1:hover {
  color: rgba(255, 255, 255, 0.9);
}
.navbar-title1:after {
  content: "";
  position: absolute;
  width: 0%;
  top: 100%;
  left: 0%;
  height: 1px;
  transition: all 0.6s;
  background-color: #fff;
}
.navbar-title1:hover:after {
  width: 100%;
  left: 0%;
}
.login-link {
  transition: 0.5s;
}
.login-link:hover {
  color: black!important;
  background-color: rgba(255,255,255,0.8);
}
.dropdown {
  display: none;
}
</style>


<script>
import $ from 'jquery'

export default {
  methods: {
    goHome(){
      this.$router.push('/HomePage')
    },
    goTravel() {
      this.$router.push('/Shopping')
    },
    ChangeLogin() {
      this.$router.push('/Login')
    }
  }
}
</script>