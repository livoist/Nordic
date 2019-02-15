<template>
  <div class="d-flex flex-column text-center justify-content-center align-items-center">
    <div class="card p-5 mt-4 mb-5 bg-light">
      <div class="h3 font-weight-font my-5 py-3">Thanks Your Order</div>
      <div class="h5 line-finishPage-height mt-3 mb-5">Welcome to order again
        <br>We are happy to serve you again.
        <br>Have good Travel
        <br>See You
        <br>last you can follow us,we send new message for you
      </div>
      <div class="d-flex justify-content-around mt-2 font-weight-bold">
        <div>
          <a href="">
          <i
            class="web-footer-social-icon fab fa-instagram fa-2x"
            data-toggle="tooltip"
            data-placement="top"
            title="Instagram"
            id="tool"
          ></i></a>
          <div>Instagram</div>
        </div>
        <div>
          <a href="">
          <i
            class="web-footer-social-icon fab fa-facebook-square fa-2x"
            data-toggle="tooltip"
            data-placement="top"
            title="Facebook"
            id="tool"
          ></i></a>
          <div>Facebook</div>
        </div>
        <div>
          <a href="">
          <i
            class="web-footer-social-icon fab fa-twitter-square fa-2x"
            data-toggle="tooltip"
            data-placement="top"
            title="Twitter"
            id="tool"
          ></i></a>
          <div>Twitter</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  created() {
    // social icon tool
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
}
</script>