<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-12">
        <div class="">
          <div
            class="about-us-modal text-center py-5 px-3 d-fex flex-column justify-content-center align-items-center"
          >
            <div class="mb-3">
              <img class="img-width-5" src="https://upload.cc/i1/2019/02/19/0KSrkx.png" alt>
            </div>
            <div class="h3 font-weight-bold">HI
              <br>We are
              <br>Nordi Team
            </div>
            <div
              class="my-4 line-height font-size-14"
            >We are committed to creating a wonderful experience that will allow you to have the most wonderful experience..
            </div>
            <div class="btn btn-light btn-sm" @click="modalHide">Close</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from 'jquery'

export default {
  data() {
    return {

    }
  },
  methods: {
    modalHide() {
      $('.about-us-modal').removeClass('about-us-modal-active')
    }
  }
}

</script>