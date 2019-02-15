<template>
  <div class="Parallax-Scrolling">
    <div class="container-fluid" style="height:600px;">
      <!-- Top row1 scroll-1 -->
      <div class="row">
        <div class="col-12 p-0">
          <div class style="height:500px" id="scroll_1">
            <div class="container-fluid">
              <div class="row animated-5">
                <div
                  class="col-12 col-md-4 bg-cover"
                  style="background-image:url(https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80)"
                ></div>
                <div
                  class="col-12 col-md-8 d-flex flex-column justify-content-center align-items-center row1-text-color"
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
          <div class="row d-flex justify-content-center align-items-center" style="height:500px">
            <div class="col-8">
              <small>living</small>
              <div class="h3">Norway</div>
              <div class="h6 mt-5 animated" style="letter-spacing:2px;font-weight:bold">
                People want to go on religious pilgrimages to spiritual places in the springtime, when the April
                rains have soaked deep into the dry ground to water the
                flowers’ roots; and when Zephyrus, the god of the
                west wind, has helped new flowers
                to grow everywhere and when
                you can see
              </div>
            </div>
            <div class="col-4 d-flex justify-content-center">
              <div class="d-flex flex-column ml-5" style="width:100px">
                <div
                  class="btn btn-secondary btn-sm mt-3 animated-2"
                  @click="changePage('Norway')"
                >Norway</div>
                <div class="btn btn-secondary btn-sm mt-3 animated-2" @click="changePage()">Finland</div>
                <div class="btn btn-secondary btn-sm mt-3 animated-2" @click="changePage()">Iceland</div>
                <div class="btn btn-secondary btn-sm mt-3 animated-2" @click="changePage()">Denmark</div>
                <div class="btn btn-secondary btn-sm mt-3 animated-2" @click="changePage()">Sweden</div>
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
          <div>
            <img
              id="squirrel-move"
              src="http://pngimg.com/uploads/squirrel/squirrel_PNG15799.png"
              alt
              style="height:100px;position:absolute;right:250px;top:370px"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Meddile row1 3x3-card -->
    <div class="container-fluid magin-gutter">
      <div class="row d-flex">
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-1">
          <div class="text-center text-light mt-5 py-3">
            <small>iceland</small>
            <div class="h3" style>Country</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-1">
          <div class="text-center text-light py-3 mt-5">
            <small>norway</small>
            <div class="h3">Wild</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-1">
          <div class="text-center text-light py-3 mt-5">
            <small>finland</small>
            <div class="h3">Animal</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
      </div>
      <div class="row d-flex">
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-2">
          <div class="text-center text-light py-3 mt-5">
            <small>denmark</small>
            <div class="h3">City</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-2">
          <div class="text-center text-light py-3 mt-5">
            <small>iceland</small>
            <div class="h3">Living</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-2">
          <div class="text-center text-light py-3 mt-5">
            <small>norway</small>
            <div class="h3">Mountaineering</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
      </div>
      <div class="row d-flex">
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-3">
          <div class="text-center text-light py-3 mt-5">
            <small>iceland</small>
            <div class="h3">Trolltunga</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-3">
          <div class="text-center text-light py-3 mt-5">
            <small>finland</small>
            <div class="h3">Wild Horse</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-3">
          <div class="text-center text-light py-3 mt-5">
            <small>norway</small>
            <div class="h3">volcanic</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning" @click="changePage('More')">More</div>
          </div>
        </div>
      </div>
    </div>

    <!-- meddile row2 lighten-color-box -->
    <div class="container-fluid house3">
      <div class="row" style="height:700px">
        <div class="col-6 col-md-3 py-5 bg-cover bg-color">
          <div class="color-box-item">
            <div
              @click="changePage('')"
              class="animated-4 color-box color-box1 text-center d-flex align-items-center justify-content-center"
            ></div>
            <div
              @click="changePage('')"
              class="animated-4 color-box color-box2 text-center d-flex align-items-center justify-content-center"
            ></div>
            <div
              @click="changePage('')"
              class="animated-4 color-box color-box3 text-center d-flex align-items-center justify-content-center"
            ></div>
            <div
              @click="changePage('')"
              class="animated-4 color-box color-box4 text-center d-flex align-items-center justify-content-center"
            ></div>
            <div
              @click="changePage('')"
              class="animated-4 color-box color-box5 text-center d-flex align-items-center justify-content-center"
            ></div>
          </div>
        </div>
        <div
          class="aurora-picture-border bg-image col-6 col-md-9 text-center text-white bg-cover d-flex flex-column justify-content-start align-items-center"
        >
          <div class="font-opacity">
            <div class="h3 mt-5">Welcome to Nordic</div>
            <div
              class="mt-5 p-5"
            >We are drawn to people who smile. There is an attractionfactor. We want to know a smiling person and figure out what is sogood. Frowns, scowls and grimaces all push people away -- but asmile draws them in。</div>
          </div>
          <div class="mt-5 d-flex align-items-center justify-content-center">
            <i class="fas fa-search"></i>
            <input
              onkeyup="this.value=this.value.replace(/\s+/g,'')"
              type="text"
              class="ml-2 input-style text-white"
              placeholder="Search Tour"
            >
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="col-12 col-md-5 py-5 bg-cover bg-image-1"
        ></div>
        <div class="col-12 col-md-7 py-5 text-center bg-light text-secondary">
          <small>norway</small>
          <div class="h3 text-dark">City</div>
          <p>You may think that your high school experience is uniqueYou may think that your high school experience is uniqueYou may think that your high school experience is unique</p>
          <div class="btn btn-sm btn-outline-primary" @click="changePage('')">More</div>
        </div>
      </div>
      <div class="row flex-row-reverse">
        <div
          class="col-12 col-md-5 py-5 bg-cover bg-image-2"
        ></div>
        <div class="col-12 col-md-7 py-5 bg-light text-secondary">
          <div class="ml-3 text-center">
            <small>iceland</small>
            <div class="h3 text-dark">Wild</div>
            <p>You may think that your high school experience is uniqueYou may think that your high school experience is uniqueYou may think that your high school experience is unique</p>
            <div class="btn btn-sm btn-outline-primary" @click="changePage('')">More</div>
          </div>
        </div>
      </div>
    </div>

<!-- car、house、food(box) -->
    <div class="container-fluid">
      <div class="row d-flex justify-content-between text-center">
        <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center transparent-black-box py-5">
          <div class="text-white h4 font-weight-bold">Trffic</div>
          <i class="icon-scale fas fa-car-side fa-2x text-secondary py-5"></i>
        <div class="">When Donald Trump and Kim Jong Un meet in Vietnam later this month, the U.S. hopes the North Korean leade.</div></div>
        <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center transparent-black-box py-5">
          <div class="text-white h4 font-weight-bold">Living</div>
          <i class="icon-scale fas fa-home fa-2x text-info py-5"></i>
        <div class="">Secretly watching users navigate an app can help companies fix bugs.will see what might await his country if he decides to denuclearize.</div></div>
        <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center transparent-black-box py-5">
          <div class="text-white h4 font-weight-bold">Food</div>
          <i class="icon-scale fas fa-utensils fa-2x text-warning py-5"></i>
        <div class="">will see what might await his country if he decides to denuclearize.Even astronauts have to deal with plumbing problems.</div></div>
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
    <div class="bg-dark container-fluid">
      <div class="row">
        <div
          class="col-12 d-flex text-center justify-content-center pt-5 text-white"
          style="height: 80px"
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
          <div class id="linkeddin">
            <a href class>
              <i
                class="web-footer-social-icon fab fa-linkedin fa-2x"
                data-toggle="tooltip"
                data-placement="top"
                title="Linkeddin"
                id="tool"
              ></i>
            </a>
            <div class="mt-2 social-font-color">Linkeddin</div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="d-flex justify-content-center m-0 text-center text-white pt-5" style>
                <div
                  class="p-3"
                >To collect all of these personality types in one place, we made a list of every single person you’ll meet in high school. While you’re clicking through, keep one thing in mind: if you think that your school doesn’t have mouth-breathing loud chewer</div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div
              class="col-12 d-flex align-items-center justify-content-around pt-5 text-center text-white"
            >
              <div class="web-footer-content-border">Email: Info@aleart.com.tw</div>
              <div class="web-footer-content-border">Phone: +886 22345781</div>
              <div class="web-footer-content-border d-flex justify-content-center">
                <div>Address: 10F., No.128, Sec. 1,Neihu Rd., Neihu Dist., Taipei City 114, Taiwan (R.O.C.)</div>
              </div>
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
    $("#deer-move").css("transform", "translate(" + scrollPos / 5 + "px)");
    $("#sheep-move").css("transform", "translate(" + -scrollPos / 7 + "px)");
    $("#squirrel-move").css(
      "transform",
      "translateX(" + -scrollPos / 10 + "px)"
    );
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
      filterTodos: []
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
    }
  },
  created() {
    // social icon tool
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
};
</script> 















