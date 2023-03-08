<template>
  <div class="home">
    <nav-bar />
    <div class="home-header">
      <home-carousel />
    </div>
    <div class="sections">
      <products-section />
      <partners-slider />
      <products-collection />
      <new-arrivals />
      <blog-section />
    </div>
  </div>
</template>

<style scoped>
.home .home-header {
  margin-bottom: 23px;
}
.home .sections {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>

<script>
import NavBar from "@/components/Layout/NavBar.vue";
import HomeCarousel from "@/components/Home/HomeCarousel.vue";
import ProductsSection from "@/components/Home/ProductsSection.vue";
import PartnersSlider from "@/components/Home/PartnersSlider.vue";
import ProductsCollection from "@/components/Home/ProductsCollection.vue";
import NewArrivals from "@/components/Home/NewArrivals.vue";
import BlogSection from "@/components/Home/BlogSection.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    HomeCarousel,
    ProductsSection,
    PartnersSlider,
    ProductsCollection,
    NewArrivals,
    BlogSection,
  },
};
</script>
