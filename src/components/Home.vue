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
    <Alert></Alert>
    <AboutUsModal></AboutUsModal>
    <loading :active.sync="isLoading" :is-full-page="true">
  <FullLoadingPage></FullLoadingPage>
  </loading>
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
import FullLoadingPage from "./FullLoadingPage";
import AboutUsModal from "./AboutUsModal";
import Alert from "./AlertMessage";


export default {
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    Carousel,
    HomeNavbar,
    FullLoadingPage,
    AboutUsModal,
    Alert,
  },
  methods: {},
  mounted() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    },2000)
  },
  created() {
    this.$router.push('/HomePage')
  }
};
</script>