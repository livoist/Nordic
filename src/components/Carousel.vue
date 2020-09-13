<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item active bg-cover car-item p-5"
          style="background-image:url(https://images.unsplash.com/photo-1491446559770-3fc03a481cdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
        >
          <div class="carousel-caption d-md-block">
            <router-link class="btn btn-md btn-outline-light mb-5 font-show" :to="{name:'Shopping'}" exact>Go Travel</router-link>
            <div class="carousel-font-box pb-5">
              <small>iceland</small>
              <div class="h5 font-weight-bold">Road Travel</div>
              <p>Let's go,your endless road trip.</p>
            </div>
          </div>
        </div>
        <div
          class="carousel-item bg-cover car-item"
          style="background-image:url(https://images.unsplash.com/uploads/141150083822630dd983b/730944d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80)"
        >
          <div class="carousel-caption d-md-block">
            <router-link class="btn btn-md btn-outline-light mb-5 font-show" :to="{name:'Shopping'}" exact>Go Travel</router-link>
            <div class="carousel-font-box pb-5">
              <small>iceland</small>
              <div class="h5 font-weight-bold">Sheep</div>
              <p>Cute sheep is always looking at you.</p>
            </div>
          </div>
        </div>
        <div
          class="carousel-item bg-cover car-item"
          style="background-image:url(https://images.unsplash.com/photo-1539110306704-fabc10bdcad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80)"
        >
          <div class="carousel-caption d-md-block">
            <router-link class="btn btn-md btn-outline-light mb-5 font-show" :to="{name:'Shopping'}" exact>Go Travel</router-link>
            <div class="carousel-font-box pb-5">
              <small>norway</small>
              <div class="h5 font-weight-bold">Aurora</div>
              <p>That is the light, waiting for you to see.</p>
            </div>
          </div>
        </div>
        <div
          class="carousel-item bg-cover car-item"
          style="background-image:url(https://images.unsplash.com/photo-1488804297330-2b6016fe2f45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)"
        >
          <div class="carousel-caption d-md-block">
            <router-link class="btn btn-md btn-outline-dark mb-5 font-show" :to="{name:'Shopping'}" exact>Go Travel</router-link>
            <div class="carousel-font-box pb-5">
              <small>norway</small>
              <div class="h5 font-weight-bold">Fox</div>
              <p>Come play with me.</p>
            </div>
          </div>
        </div>
        <div
          class="carousel-item bg-cover car-item"
          style="background-image:url(https://images.unsplash.com/photo-1541620158600-cb5a226ca9f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
        >
          <div class="carousel-caption d-md-block">
            <router-link class="btn btn-md btn-outline-dark mb-5 font-show" :to="{name:'Shopping'}" exact>Go Travel</router-link>
            <div class="carousel-font-box pb-5">
              <small>norway</small>
              <div class="h5 font-weight-bold">Road Travel</div>
              <p>Let's go,your endless road trip.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.carousel-caption {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
}
.carousel-font-box {
  opacity: 0;
  transition: 0.5s
}
.font-show:hover +.carousel-font-box {
  opacity: 1;
}
.car-item {
  min-height: 100vh;
}
.bg-cover {
  background-size: cover;
  background-position: center center;
}
</style> 