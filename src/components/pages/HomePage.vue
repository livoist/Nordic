<template>
  <div>
  <div class="Parallax-Scrolling">
    <div class="container-fluid" style="height:700px;">
      <!-- Top row1 scroll-1 -->
      <div class="row">
        <div class="col-12 p-0">
          <div class id="scroll_1">
            <div class="container-fluid">
              <div class="row animated-5">
                <div
                  class="col-12 col-md-4 bg-cover"
                  style="background-image:url(https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80)"
                ></div>
                <div
                  class="col-12 col-md-8 d-flex flex-column justify-content-center text-center align-items-center row1-text-color"
                  style="height:596px"
                >
                  <div class="h3">Welcome Iceland</div>
                  <p
                    class="h5 mt-5"
                  >Norway is a quiet and beautiful place, welcome to a quiet country</p>
                  <div class="btn btn-outline-light mt-5" @click="changePage('More')">More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Top row2 scroll-2 -->
      <div class="row" style="height:1100px" id="scroll_2">
        <div
          class="col-12 bg-cover"
          style="background-image: url(https://images.unsplash.com/photo-1513430905222-1056ba13340a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1323&q=80);
          position:relative"
        >
          <div class="row d-flex justify-content-center align-items-center p-5">
            <div class="col-12 col-md-8">
              <small>living</small>
              <div class="h3">Norway</div>
              <div
                class="h6 mt-5 animated font-weight-bold"
                style="letter-spacing:2px"
              >Norway is covered by Scandinavian mountains. The plateau and mountains in the country account for more than 70% of the country's total area; there are lakes and swamps in the south of the country, and fjords formed by glaciers on the west coast. Soon and Geiranger are famous in Norway. The fjord landscape, the coastal continental shed is wide, even more than twice the size of the local area.</div>
            </div>
            <div class="col-12 col-md-4 d-flex justify-content-center">
              <div class="d-flex flex-column">
                <div
                  class="btn btn-dark btn-lg m-3 animated-2"
                  @click="changePage('Norway')"
                >More</div>
              </div>
            </div>
          </div>
          <div>
            <img
              id="deer-move"
              src="http://pngimg.com/uploads/deer/deer_PNG10182.png"
              alt
              style="height:300px;position:absolute;left:0;bottom:150px"
            >
          </div>
          <div>
            <img
              id="sheep-move"
              src="http://pngimg.com/uploads/sheep/sheep_PNG2190.png"
              alt
              style="height:200px;position:absolute;right:0;bottom:150px"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Meddile row1 3x3-card -->
    <div class="container-fluid magin-gutter">
      <div class="row d-flex">
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-1">
          <div class="text-center mt-5 py-3">
            <small>iceland</small>
            <div class="h3" style>Country</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-1">
          <div class="text-center py-3 mt-5">
            <small>norway</small>
            <div class="h3">Wild</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-1">
          <div class="text-center py-3 mt-5">
            <small>finland</small>
            <div class="h3">Animal</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
      </div>
      <div class="row d-flex">
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-2">
          <div class="text-center py-3 mt-5">
            <small>denmark</small>
            <div class="h3">City</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-2">
          <div class="text-center py-3 mt-5">
            <small>iceland</small>
            <div class="h3">Living</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-2">
          <div class="text-center py-3 mt-5">
            <small>norway</small>
            <div class="h3">Mountaineering</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
      </div>
      <div class="row d-flex">
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-3">
          <div class="text-center py-3 mt-5">
            <small>iceland</small>
            <div class="h3">Trolltunga</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-3">
          <div class="text-center py-3 mt-5">
            <small>finland</small>
            <div class="h3">Wild Horse</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-3">
          <div class="text-center py-3 mt-5">
            <small>norway</small>
            <div class="h3">volcanic</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
      </div>
    </div>

    <!-- meddile row2-full  -->
    <div class="container-fluid house3">
      <div class="row">
        <div
          class="custom-padding aurora-picture-border bg-image col-12 text-center text-white bg-cover d-flex flex-column justify-content-start align-items-center"
        >
          <div class="font-opacity">
            <div class="h3 mt-5">Welcome to Nordic</div>
            <div
              class="mt-5 p-5"
            >
Flowing light and shadow, nature's gift, aurora, come and find the eternal and beautiful memories.</div>
          </div>
          <div class="mt-5 d-flex align-items-center justify-content-center">
            <i class="fas fa-search"></i>
            <div class="input-group">
            <input
              onkeyup="this.value=this.value.replace(/\s+/g,'')"
              type="text"
              class="ml-2 input-style text-white input-group-prepend"
              placeholder="Search Tour"
              aria-describedby="addon-wrapping"
            >
            </div>
          </div>
        </div>
      </div>
<!-- row(9-3)x2 -->
      <div class="row">
        <div class="col-6 col-md-9 py-5 bg-cover bg-image-1"></div>
        <div class="col-6 col-md-3 py-5 text-center bg-light text-secondary">
          <small>norway</small>
          <div class="h3 text-dark">City</div>
          <p
            class="my-4"
          >Slowly experience the city and relive the meaning of life.</p>
          <div class="btn btn-sm btn-outline-primary" @click="changePage('')">More</div>
        </div>
      </div>
      <div class="row flex-row-reverse">
        <div class="col-6 col-md-9 py-5 bg-cover bg-image-2"></div>
        <div class="col-6 col-md-3 py-5 bg-light text-secondary">
          <div class="ml-3 text-center">
            <small>iceland</small>
            <div class="h3 text-dark">Wild</div>
            <p
              class="my-4"
            >The endless field, feel the pulse of the world's breath.
</p>
            <div class="btn btn-sm btn-outline-primary" @click="changePage('')">More</div>
          </div>
        </div>
      </div>
    </div>

    <!-- car、house、food(box) -->
    <div class="container-fluid" id="detail-box">
      <div class="row d-flex justify-content-between text-center target-fix">
        <div
          class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center transparent-black-box py-5"
        >
          <div class="text-white h4 font-weight-bold">Traffic</div>
          <i class="icon-scale fas fa-car-side fa-2x text-secondary py-5"></i>
          <div
            class
          >We offer rental services and work with good merchants to get you more favorable prices.</div>
        </div>
        <div
          class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center transparent-black-box py-5"
        >
          <div class="text-white h4 font-weight-bold">Package</div>
          <i class="icon-scale fas fa-home fa-2x text-info py-5"></i>
          <div
            class
          >The same, we also cooperate with several quality hotels and B&Bs, accommodation is not a problem at all.</div>
        </div>
        <div
          class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center transparent-black-box py-5"
        >
          <div class="text-white h4 font-weight-bold">Food</div>
          <i class="icon-scale fas fa-utensils fa-2x text-danger py-5"></i>
          <div
            class
          >We work with local famous shops to offer you a discount package, which is cheap and safe.</div>
        </div>
      </div>
    </div>
    <!-- bottom row 4x1 picture-box -->
    <div class="container-fluid">
      <div class="row" style="height: 300px">
        <div class="col-6 col-md-3 bg-cover half-box">
          <div class="transparent-box d-flex justify-content-center align-items-center">
            <div class="border-white">Norway</div>
          </div>
        </div>
        <div class="col-6 col-md-3 bg-cover half-box">
          <div class="transparent-box d-flex justify-content-center align-items-center">
            <div class="border-white">Finland</div>
          </div>
        </div>
        <div class="col-6 col-md-3 bg-cover half-box">
          <div class="transparent-box d-flex justify-content-center align-items-center">
            <div class="border-white">Sweden</div>
          </div>
        </div>
        <div class="col-6 col-md-3 bg-cover half-box">
          <div class="transparent-box d-flex justify-content-center align-items-center">
            <div class="border-white">Denmark</div>
          </div>
        </div>
      </div>
    </div>

    <!--bottom row web footer(social-icon) -->
    <div class="container-fluid custom-color-black" >
      <div class="row">
        <div
          class="col-12 d-flex text-center justify-content-center pt-5 text-white"
        >
          <div class>
            <a href class>
              <i
                class="web-footer-social-icon fab fa-twitter-square fa-2x"
                data-toggle="tooltip"
                data-placement="top"
                title="Twitter"
                id="tool"
              ></i>
            </a>
            <div class="mt-2 social-font-color">Twitter</div>
          </div>
          <div class>
            <a href class>
              <i
                class="web-footer-social-icon fab fa-medium fa-2x"
                data-toggle="tooltip"
                data-placement="top"
                title="Medium"
                id="tool"
              ></i>
            </a>
            <div class="mt-2 social-font-color">Medium</div>
          </div>
          <div class>
            <a href class>
              <i
                class="web-footer-social-icon fab fa-facebook-square fa-2x"
                data-toggle="tooltip"
                data-placement="top"
                title="Facebook"
                id="tool"
              ></i>
            </a>
            <div class="mt-2 social-font-color">Facebook</div>
          </div>
          <div class>
            <a href class>
              <i
                class="web-footer-social-icon fab fa-instagram fa-2x"
                data-toggle="tooltip"
                data-placement="top"
                title="Instagram"
                id="tool"
              ></i>
            </a>
            <div class="mt-2 social-font-color">Instagram</div>
          </div>
          <div class id="Youtube">
            <a href class>
              <i
                class="web-footer-social-icon fab fa-youtube fa-2x"
                data-toggle="tooltip"
                data-placement="top"
                title="Youtube"
                id="tool"
              ></i>
            </a>
            <div class="mt-2 social-font-color">Youtube</div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="d-flex justify-content-center m-0 text-center text-white pt-5" style>
                <div
                  class="p-3"
                >Our Nordic team, if you have any questions, please feel free to contact us, we will be happy to serve you, below are our contact information, I wish you a wonderful journey.
</div>
              </div>
            </div>
          </div>
          <div class="row mb-1 d-flex align-items-center justify-content-around pt-5 text-center text-white">
            
              <div class="col-12 col-md-4 web-footer-content"><i class="fas fa-envelope mr-2 icon-email"></i>Email: Info@aleart.com.tw</div>
              <div class="col-12 col-md-4 web-footer-content"><i class="fas fa-phone mr-2 icon-phone"></i>Phone: +886 22345781</div>
              <div class="col-12 col-md-4 web-footer-content mb-4"><i class="fas fa-home mr-2 icon-home"></i>Address: 10F., No.128, Sec. 1,Neihu Rd., Neihu Dist., Taipei City 114, Taiwan (R.O.C.)
            </div>
          </div>
          <div class="row d-flex flex-column justify-content-center align-items-center">
            <div class="col-10 p-3 mt-1" style="border-bottom:1px solid white"></div>
            <div class="col-12">
              <div class="text-center text-white p-4">
                ©2019 All Right Reserved
                | Design by Ben
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template> 


<script>
import $ from "jquery";

//Home-page-animated
$(document).ready(function() {
  $(window).scroll(function() {
    let scrollPos = $(window).scrollTop();
    let windowHeight = $(window).height();
    $("#scroll_1").css("transform", "translateY(" + -scrollPos / 3 + "px)");
    $("#scroll_2").css("transform", "translateY(" + -scrollPos / 2 + "px)");
    $("#deer-move").css("transform", "translateX(" + scrollPos / 6 + "px)");
    $("#sheep-move").css("transform", "translateX(" + -scrollPos / 10 + "px)");
    $(".animated").each(function() {
      let thisPos = $(this).offset().top;
      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass("fadeIn");
      }
    });
    $(".animated-2").each(function() {
      let thisPos = $(this).offset().top;
      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass("fadeIn");
      }
    });
    $(".animated-3").each(function() {
      let thisPos = $(this).offset().top;
      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass("fadeIn");
      }
    });
    $(".animated-4").each(function() {
      let thisPos = $(this).offset().top;
      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass("fadeIn");
      }
    });
    $(".animated-5").each(function() {
      let thisPos = $(this).offset().top;
      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass("fadeIn");
      }
    });
  });
});

export default {
  data() {
    return {
      products: [],
      filterTodos: [],
      isLoading: false,
    };
  },
  methods: {
    changePage(name) {
      if (
        (name == "",
        "Norway",
        "Iceland",
        "Finland",
        "Denmark",
        "Sweden",
        "More")
      ) {
        this.$router.push("/Shopping");
      }
    },
  },
  created() {
    // social icon tool
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
};
</script> 















