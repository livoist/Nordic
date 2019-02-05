<template>
  <div class="Parallax-Scrolling">
    <div class="container-fluid" style="height:600px;">
      <!-- Top row1 scroll-1 -->
      <div class="row">
        <div class="col-12 p-0">
          <div class style="height:500px" id="scroll_1">
            <div class="container-fluid">
              <div class="row">
                <div
                  class="col-4 bg-cover"
                  style="background-image:url(https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80)"
                ></div>
                <div
                  class="col-8 d-flex flex-column justify-content-center align-items-center text-white"
                  style="height:596px"
                >
                  <div class="h3">Welcome norway</div>
                  <p
                    class="h5 mt-5"
                  >Norway is a quiet and beautiful place, welcome to a quiet country</p>
                  <div class="btn btn-outline-light mt-5">More</div>
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
                <div class="btn btn-dark btn-sm mt-3 animated-2">Norway</div>
                <div class="btn btn-dark btn-sm mt-3 animated-2">Finland</div>
                <div class="btn btn-dark btn-sm mt-3 animated-2">Iceland</div>
                <div class="btn btn-dark btn-sm mt-3 animated-2">Denmark</div>
                <div class="btn btn-dark btn-sm mt-3 animated-2">Sweden</div>
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
            <div class="btn btn-sm btn-outline-warning">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-1">
          <div class="text-center text-light py-3 mt-5">
            <small>norway</small>
            <div class="h3">Wild</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-1">
          <div class="text-center text-light py-3 mt-5">
            <small>finland</small>
            <div class="h3">Animal</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning">More</div>
          </div>
        </div>
      </div>
      <div class="row d-flex">
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-2">
          <div class="text-center text-light py-3 mt-5">
            <small>denmark</small>
            <div class="h3">City</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-2">
          <div class="text-center text-light py-3 mt-5">
            <small>iceland</small>
            <div class="h3">Living</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-2">
          <div class="text-center text-light py-3 mt-5">
            <small>norway</small>
            <div class="h3">Mountaineering</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning">More</div>
          </div>
        </div>
      </div>
      <div class="row d-flex">
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-3">
          <div class="text-center text-light py-3 mt-5">
            <small>iceland</small>
            <div class="h3">Trolltunga</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-3">
          <div class="text-center text-light py-3 mt-5">
            <small>finland</small>
            <div class="h3">Wild Horse</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning">More</div>
          </div>
        </div>
        <div class="col-md-4 animated-3 py-5 bg-cover picture-background-3">
          <div class="text-center text-light py-3 mt-5">
            <small>norway</small>
            <div class="h3">volcanic</div>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="btn btn-sm btn-outline-warning">More</div>
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
              class="animated-4 color-box color-box1 text-center d-flex align-items-center justify-content-center"
            >
              <a href="#pane-1"></a>
            </div>
            <div
              class="animated-4 color-box color-box2 text-center d-flex align-items-center justify-content-center"
            >
              <a href="#pane-2"></a>
            </div>
            <div
              class="animated-4 color-box color-box3 text-center d-flex align-items-center justify-content-center"
              id="tour-btn3"
            ></div>
            <div
              class="animated-4 color-box color-box4 text-center d-flex align-items-center justify-content-center"
              id="tour-btn4"
            ></div>
            <div
              class="animated-4 color-box color-box5 text-center d-flex align-items-center justify-content-center"
              id="tour-btn5"
            ></div>
          </div>
        </div>

        <!-- <div class="tab-content col-6 col-md-9 p-0">
          <div class="tab-pane active aurora-picture-border bg-image text-center text-white bg-cover d-flex flex-column justify-content-start align-items-center"  id="pane-1" style="width:auto;height:100%"></div>
          <div class="tab-pane aurora-picture-border bg-image-2 text-center text-white bg-cover d-flex flex-column justify-content-start align-items-center"  id="pane-2" style="width:auto;height:100%"></div>
          
        </div>-->
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

        <!-- <div class="tab-content"> -->
        <!-- <div class="tab-pane" id="pane-1">
            <div
              class="aurora-picture-border col-6 col-md-9 text-center text-white bg-cover d-flex flex-column justify-content-start align-items-center"
              style="background-image:url(https://i.pinimg.com/564x/12/93/13/129313c995b2290999788303e0ba4152.jpg)"
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
        </div>-->
      </div>

      <div class="row">
        <div
          class="col-5 col-md-5 py-5 bg-cover picture-sub-scale"
          style="background-image: url(https://images.unsplash.com/photo-1465353471565-b77e538f34c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
        ></div>
        <div class="col-7 col-md-7 py-5 text-center bg-light text-secondary">
          <small>norway</small>
          <div class="h3 text-dark">City</div>
          <p>You may think that your high school experience is uniqueYou may think that your high school experience is uniqueYou may think that your high school experience is unique</p>
          <div class="btn btn-sm btn-outline-primary">More</div>
        </div>
      </div>
      <div class="row flex-row-reverse">
        <div
          class="col-5 col-md-5 py-5 bg-cover picture-sub-scale"
          style="background-image: url(https://images.unsplash.com/photo-1488887935090-66c640f39ded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80)"
        ></div>
        <div class="col-7 col-md-7 py-5 bg-light text-secondary">
          <div class="ml-3 text-center">
            <small>iceland</small>
            <div class="h3 text-dark">Wild</div>
            <p>You may think that your high school experience is uniqueYou may think that your high school experience is uniqueYou may think that your high school experience is unique</p>
            <div class="btn btn-sm btn-outline-primary">More</div>
          </div>
        </div>
      </div>
    </div>

    <!-- bottom row 4x1 picture-box -->
    <div class="container-fluid">
      <div class="row" style="height: 300px">
        <div
          class="col-6 col-md-3 bg-cover"
          style="background-image: url(https://i.pinimg.com/564x/f3/3b/7d/f33b7d461d046605f316d1ca15fb9835.jpg)"
        ></div>
        <div
          class="col-6 col-md-3 bg-cover"
          style="background-image: url(https://i.pinimg.com/564x/70/4a/a2/704aa2bee7a433764f6ce12de89195c6.jpg)"
        ></div>
        <div
          class="col-6 col-md-3 bg-cover"
          style="background-image: url(https://i.pinimg.com/564x/22/ff/68/22ff68ae56a971720678396311ae8956.jpg)"
        ></div>
        <div
          class="col-6 col-md-3 bg-cover"
          style="background-image: url(https://i.pinimg.com/564x/59/9f/e5/599fe5fa384b8ebc88502944cca01b10.jpg)"
        ></div>
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
              <div
                class="web-footer-content-border d-flex justify-content-center"
              ><div>Address: 10F., No.128, Sec. 1,Neihu Rd., Neihu Dist., Taipei City 114, Taiwan (R.O.C.)</div>
              </div>
            </div>
          </div>
          <div class="row d-flex flex-column justify-content-center align-items-center">
            <div class="col-10 p-3 mt-1" style="border-bottom:1px solid white"></div>
            <div class="col-12">
              <div class="text-center text-white p-4">
                ©2019 Account Login Widget All Reserved
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
  });
  // $('#tour-btn').click(function(){
  //   $('.bg-image').addClass('bg-image-1')
  // })
  // $('#tour-btn2').click(function(){
  //   $('.bg-image').addClass('bg-image-2')
  // })
  // $('#tour-btn3').click(function(){
  //   $('.bg-image').addClass('bg-image-3')
  // })
  // $('#tour-btn4').click(function(){
  //   $('.bg-image').addClass('bg-image-4')
  // })
  // $('#tour-btn5').click(function(){
  //   $('.bg-image').addClass('bg-image-')
  // })
});

export default {
  data() {
    return {};
  },
  created() {
    // social icon tool
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
};
</script> 















