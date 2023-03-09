<template>
  <div class="home-carousel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      indicators
      background="#ababab"
      img-height="full"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="image in sliderImages"
        :key="image.idx"
        :img-src="image.src"
        :alt="image.alt"
        height="100vh"
      >
        <div class="slider-text">
          <div class="head">{{ image.head }}</div>
          <div class="caption">{{ image.caption }}</div>
          <button :href="image.buttonLink">Shop now</button>
        </div>
      </b-carousel-slide>
    </b-carousel>
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
  font-family: OpenSans;
  font-size: 56px;
  font-weight: bold;
  color: #000;
}
.slider-text button {
  font-family: OpenSans;
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
import image_1 from "@/assets/Home/slide.png";
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      sliderImages: [
        {
          idx: 0,
          src: image_1,
          alt: "slide 1",
          head: "new",
          caption: "Lorem ipsum ipsum sit elit",
          buttonLink: "/product",
        },
        {
          idx: 1,
          src: image_1,
          alt: "slide 2",
          head: "Flash sale",
          caption: "Lorem ipsum dolor sit",
          buttonLink: "/product",
        },
        {
          idx: 2,
          src: image_1,
          alt: "slide 3",
          head: "Featured",
          caption: "consectetur adipiscing",
          buttonLink: "/product",
        },
      ],
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
