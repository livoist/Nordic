<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item active bg-cover car-item"
          style="background-image:url(https://images.unsplash.com/photo-1485982353291-4f167f9dee32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
        >
          <div class="carousel-caption d-md-block">
            <router-link class="btn btn-md btn-dark mb-5 " :to="{name:'Shopping'}" exact>Go Travel</router-link>
            <div class="carousel-font-box">
              <small>iceland</small>
              <h5>Road Travel</h5>
              <p>As you may or may not have noticed there wasn't a grocery haul last week.</p>
            </div>
          </div>
        </div>
        <div
          class="carousel-item bg-cover car-item"
          style="background-image:url(https://images.unsplash.com/uploads/141150083822630dd983b/730944d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80)"
        >
          <div class="carousel-caption d-md-block">
            <router-link class="btn btn-lg btn-dark mb-5 " :to="{name:'Shopping'}" exact>Go Travel</router-link>
            <div class="carousel-font-box">
              <small>iceland</small>
              <h5>Sheep</h5>
              <p>I ended up going out with friends, scavenging around my apartment for food</p>
            </div>
          </div>
        </div>
        <div
          class="carousel-item bg-cover car-item"
          style="background-image:url(https://images.unsplash.com/photo-1488415032361-b7e238421f1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80)"
        >
          <div class="carousel-caption d-md-block">
            <router-link class="btn btn-lg btn-dark mb-5 " :to="{name:'Shopping'}" exact>Go Travel</router-link>
            <div class="carousel-font-box">
              <small>norway</small>
              <h5>aurora</h5>
              <p>I was still within my budget even if it wasn't the most balanced of weekly meals</p>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<style>
.carousel-font-box {
  opacity: 1;
  transition: all 2s;
  padding: 15px;
  background-color: rgba(0,0,0, 0.5);
}
.carousel-font-box:hover {
  transform: scale(1.1);
  color: rgba(168, 248, 248, 0.959);
}
.car-item {
  height: 450px;
}
.bg-cover {
  background-size: cover;
  background-position: center center;
}
</style> 