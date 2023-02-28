<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      indicators
      background="#ababab"
      img-height="80vh"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        content-visible-up="sm"
        v-for="image in productImages"
        :key="image.idx"
        :img-src="image.src"
        :alt="image.alt"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style scoped lang="css">
 @media (min-width: 575px) {
    .carousel {
        display: none;
    }
 }
</style>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  props: ["productImages"],
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
