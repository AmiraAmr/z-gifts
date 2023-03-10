<template>
  <div class="container">
    <div class="row">
      <div
        class="col-md-6 col-sm-12"
        v-for="product in products"
        :key="product.index"
      >
        <div
          class="product"
          :style="{ 'background-image': `url(${product.image})` }"
        >
          <div class="text-container">
            <div class="text">
              <div class="description">
                {{ product.description }}
              </div>
              <button :href="product.link">view all</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product {
  border: solid 0.5px #dcdcdc;
  padding: 20px;
  display: flex;
  align-content: flex-end;
  flex-wrap: wrap;
  height: 500px;
}
.product .text-container .text {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
.product .text-container .text .description {
  font-size: 35px;
  font-weight: 500;
}
.product .text-container .text button {
  white-space: nowrap;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  background-color: #fff;
  border: 0.5px solid #ddd;
  border-radius: 32px;
  text-transform: uppercase;
  transition: all 1s;
}
.product .text-container .text button:hover {
  background-color: #000;
  border-color: #000;
  color: #fff;
  transition: all 1s;
}
</style>

<script>
import img_1 from "@/assets/Home/personalized-keychains.jpg";
export default {
  data: function () {
    return {
      products: [
        {
          index: 0,
          image: img_1,
          description: "Lorem ipsum dolor sit amet",
          link: "/product",
        },
        {
          index: 1,
          image: img_1,
          description: "Lorem ipsum dolor sit amet",
          link: "/product",
        },
      ],
    };
  },
};
</script>
