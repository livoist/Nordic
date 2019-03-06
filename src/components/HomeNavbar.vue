<template>
<div>
<!-- bar -->
<nav class="navbar fixed-top navbar-expand-lg py-2 bar-fadein">
  <div>
    <a class="h5 text-white font-weight-bold" @click="goHome" href="#" style="text-decoration: none">Nordic</a> 
    </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="outline:none">
    <span class=""><i class="fas fa-angle-double-down text-white"></i></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mx-auto h5">
      <li class="nav-item">
        <a class="nav-link mr-5 mt-2 navbar-title" href="#" @click="goTravel">Travel</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 mt-2 navbar-title" href="#detail-box">Traffic</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 mt-2 navbar-title " href="#detail-box">Living</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 mt-2 navbar-title" href="#"  @click.prevent="modalShow()">About us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navbar-title font-weight-bold text-center mt-2 login-link" href="#" style="border:1px solid black" @click="ChangeLogin()">Admin</a>
      </li>
    </ul>
  </div>
</nav>

</div>

</template>

<style>
.navbar-title {
  transition: all 0.5s;
}
.navbar-title:hover {
  opacity: 0.7;
  color: #fff;
  border-bottom: 1px solid #fff;
}
.login-link {
  transition: 0.5s;
}
.login-link:hover {
  color: black!important;
  background-color: white;
}
.dropdown {
  display: none;
}
.bar-fadein {
  background-color: transparent;
  transition: 1s;
}


</style>


<script>
import $ from 'jquery'

$(document).ready(function(){
  $(window).scroll(function(){
    let scrollPos = $(window).scrollTop();
    let windowHeight = $(window).height();
    console.log(scrollPos)
    if (scrollPos > 50) {
      $(".bar-fadein").css('background-color','rgba(0,0,0,0.8)')
    }else if (scrollPos < 50) {
      $(".bar-fadein").css({'background-color':'transparent','transition':'0.5s'})
    }
  })
})



export default {
  data() {
    return {

    }
  },
  methods: {
    modalShow() {
      $('.about-us-modal').toggleClass("about-us-modal-active")
    },
    goHome(){
      this.$router.push('/HomePage')
    },
    goTravel() {
      this.$router.push('/Shopping')
    },
    ChangeLogin() {
      this.$router.push('/Login')
    },
  
  }
}
</script>