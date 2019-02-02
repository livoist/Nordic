<template>
<div>
<!-- bar -->
<nav class="navbar fixed-top navbar-expand-lg navbar-light py-2 bar-fadein">
  <div class="" @click="goHome()">
    <i class="fas fa-dice-d20 text-dark fa-2x"></i> 
    <a class="" href="#" style="text-decoration: none">Nordic</a> 
    </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="outline:none">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mx-auto h5">
      <li class="nav-item">
        <a class="nav-link mr-5 mt-2 navbar-title" href="#">Travel</a>

      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 mt-2 navbar-title" href="#">Traffic</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 mt-2 navbar-title" href="#">Living</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 mt-2 navbar-title" href="#">About us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navbar-title font-weight-bold text-center mt-2 login-link" href="#" style="border:1px solid black" @click="ChangeLogin()">login</a>
      </li>
    </ul>
  </div>
</nav>

</div>

</template>

<style>
.navbar-title:hover {
  border-bottom: 1px solid #000;
}
.login-link {
  transition: 0.5s;
}
.login-link:hover {
  color: white!important;
  background-color: black;
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
      $(".bar-fadein").css('background-color','#edeff2')
    }else if (scrollPos < 50) {
      $(".bar-fadein").css({'background-color':'transparent','transition':'1s'})
    }
  })
})



export default {
  data() {
    return {

    }
  },
  methods: {
    goHome(){
      this.$router.push('HomePage')
    },
    ChangeLogin() {
      this.$router.push('/Login')
    },
  
  }
}
</script>