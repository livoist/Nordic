<template>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div class="allweb">
    <HomeNavbar></HomeNavbar>
    <Carousel></Carousel>
    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</body>
</html>
</template>



<script>
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

import $ from "jquery";
import HomeNavbar from "./HomeNavbar";
import Carousel from "./Carousel";

export default {
  data() {
    return {};
  },
  components: {
    Carousel,
    HomeNavbar
  },
  methods: {},
  created() {
    this.$router.push('/HomePage')
  }
};
</script>