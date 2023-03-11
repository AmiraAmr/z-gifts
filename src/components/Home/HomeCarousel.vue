<template>
  <div class="home-carousel">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/Home/slide.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <div class="slider-text">
              <div class="head">new</div>
              <div class="caption">Lorem ipsum ipsum sit elit</div>
              <button href="/product">Shop now</button>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/Home/slide.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <div class="slider-text">
              <div class="head">Flash sale</div>
              <div class="caption">Lorem ipsum ipsum sit elit elit</div>
              <button href="/product">Shop now</button>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/Home/slide.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <div class="slider-text">
              <div class="head">Featured</div>
              <div class="caption">Lorem ipsum ipsum sit</div>
              <button href="/product">Shop now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-carousel {
  height: 100%;
}
::v-deep .carousel-item img {
  height: 100vh;
}
.slider-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 40%;
  margin-left: 55%;
  margin-top: -40%;
  text-transform: uppercase;
}
.slider-text .head {
  font-size: 21px;
  font-weight: 600;
}
.slider-text .caption {
  font-family: OpenSans, sans-serif;
  font-size: 56px;
  font-weight: bold;
  color: #000;
}
.slider-text button {
  font-family: OpenSans, sans-serif;
  font-size: 20px;
  font-weight: 600;
  padding: 15px 60px;
  text-align: center;
  text-transform: uppercase;
  border: 0.5px solid #000;
  border-radius: 32px;
  background-color: transparent;
  margin-top: 20px;
  transition: all 1s;
}
.slider-text button:hover {
  background-color: #000;
  color: #fff;
  transition: all 1s;
}

::v-deep .carousel-indicators li {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  opacity: 0.21;
  background-color: #000;
}
::v-deep .carousel-indicators .active {
  background-color: #b07943;
  opacity: 0.8;
}

@media (max-width: 1024px) {
  .slider-text {
    width: 70%;
    margin-top: -50%;
  }
}
@media (max-width: 970px) {
  .slider-text .head {
    font-size: 18px;
  }
  .slider-text .caption {
    font-size: 40px;
  }
  .slider-text button {
    font-size: 15px;
    padding: 15px 30px;
  }
}

@media (max-width: 769px) {
  .slider-text {
    width: 100%;
    margin-left: auto;
    margin-top: -80%;
  }
}
@media (max-width: 425px) {
  .slider-text {
    margin-top: -100%;
  }
}
</style>

<script>
export default {
  name: "HomeCarousel",
};
</script>
