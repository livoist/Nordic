<template>
  <div class="allweb">
      <HomeNavbar></HomeNavbar>
      <Carousel></Carousel>
    <main>
      <router-view></router-view>
    </main>
  </div>
  
  
</template>

<style>
.allweb {
  font-weight: 500;
  font-family: Didot, serif;
  line-height: 1.5em;
}
</style>


<script>

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

import $ from "jquery";
import HomeNavbar from "./HomeNavbar";
import Carousel from "./Carousel";

export default {
  data() {
    return {

    }
  },
  components: {
    Carousel,
    HomeNavbar
  },
  methods: {

  }
};
</script>