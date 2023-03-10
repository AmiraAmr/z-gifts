<template>
  <div class="container">
    <div class="new-arrivals">
      <div class="title">
        <h3>New arrivals</h3>
        <p>Hurry up! limited</p>
      </div>
      <div class="row new-arrivals-row">
        <div
          class="col-lg-3 col-md-4 col-sm-6"
          v-for="image in newArrivalsProducts"
          :key="image.idx"
        >
          <div class="row" style="padding: 20px">
            <div>
              <div class="image-container">
                <div class="image">
                  <img :src="image.src" :alt="image.alt" />
                </div>
                <div class="description">
                  <div>{{ image.description }}</div>
                  <div class="price">${{ image.price }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.new-arrivals {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
.new-arrivals .title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
}
.new-arrivals .title p {
  color: #bbb;
}

.new-arrivals .image-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.new-arrivals .image-container .image {
  border: 1px solid #fefefe;
  border-radius: 5px;
  overflow: hidden;
}
.new-arrivals .image-container .image img {
  width: 100%;
  height: 100%;
}

.new-arrivals .image-container .description {
  display: flex;
  flex-direction: column;
  font-size: 18px;
  padding: 0 10px;
}
.new-arrivals .image-container .description .price {
  margin-bottom: 10px;
}
</style>

<script>
import image_1 from "@/assets/Home/black-cuff-bracelet@small@3x.png";
import image_2 from "@/assets/Home/wide-brown-studded-cuff-bracelet@small@3x.png";
export default {
  data: function () {
    return {
      newArrivalsProducts: [
        {
          idx: 0,
          src: image_1,
          description: "Worn Braided Custom Leather Bracelet",
          price: 15.95,
        },
        {
          idx: 1,
          src: image_2,
          description: "Worn Braided Custom Leather Bracelet",
          price: 15.95,
        },
        {
          idx: 2,
          src: image_1,
          description: "Worn Braided Custom Leather Bracelet",
          price: 15.95,
        },
        {
          idx: 3,
          src: image_2,
          description: "Worn Braided Custom Leather Bracelet",
          price: 15.95,
        },
        {
          idx: 4,
          src: image_1,
          description: "Worn Braided Custom Leather Bracelet",
          price: 15.95,
        },
        {
          idx: 5,
          src: image_2,
          description: "Worn Braided Custom Leather Bracelet",
          price: 15.95,
        },
        {
          idx: 6,
          src: image_1,
          description: "Worn Braided Custom Leather Bracelet",
          price: 15.95,
        },
        {
          idx: 7,
          src: image_2,
          description: "Worn Braided Custom Leather Bracelet",
          price: 15.95,
        },
      ],
    };
  },
};
</script>
