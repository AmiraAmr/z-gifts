<template>
  <div class="home">
    <nav-bar />
    <div class="home-header">
      <home-carousel />
    </div>
    <products-section />
    <partners-slider />
  </div>
</template>

<style scoped>
.home .home-header {
  margin-bottom: 23px;
}
</style>

<script>
import NavBar from "@/components/Layout/NavBar.vue";
import HomeCarousel from "@/components/Home/HomeCarousel.vue";
import ProductsSection from "@/components/Home/ProductsSection.vue";
import PartnersSlider from "@/components/Home/PartnersSlider.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    HomeCarousel,
    ProductsSection,
    PartnersSlider,
  },
};
</script>
