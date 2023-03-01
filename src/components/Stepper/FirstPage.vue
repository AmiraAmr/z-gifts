<template>
  <div class="product-style">
    <b-row gap="2px">
      <b-col
        lg="3"
        md="4"
        sm="6"
        v-for="image in productStyles"
        :key="image.idx"
        @click="setStyle(image.idx)"
      >
        <b-row>
          <b-col v-if="selectedStyle.idx === image.idx">
            <div class="style-image-container">
              <div class="style-image" style="border-color: #b07943">
                <img :src="image.src" :alt="image.alt" />
              </div>
              <div class="style-description">{{ image.description }}</div>
            </div>
          </b-col>
          <b-col v-else-if="!selectedStyle.src && image.idx === 0">
            <div class="style-image-container">
              <div class="style-image" style="border-color: #b07943">
                <img :src="image.src" :alt="image.alt" />
              </div>
              <div class="style-description">{{ image.description }}</div>
            </div>
          </b-col>
          <b-col v-else>
            <div class="style-image-container">
              <div class="style-image">
                <img :src="image.src" :alt="image.alt" />
              </div>
              <div class="style-description">{{ image.description }}</div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
.product-style .style-image-container {
  display: flex;
  flex-direction: column;
}
.product-style .style-image {
  border-radius: 5px;
  border: solid 0.3px #eee;
  cursor: pointer;
}
.product-style .style-image:hover,
.product-style .style-image.active {
  border-color: #b07943;
}
.product-style .style-image > img {
  width: 100%;
  height: 100%;
}
.product-style .style-description {
  font-size: 14px;
  padding: 5px 22px 15px 5px;
  text-align: left;
  text-transform: capitalize;
}

@media (max-width: 575px) {
  .product-style .style-image {
    height: 150px;
  }
}
</style>

<script>
import image_1 from "@/assets/products/wristband-bracelet.png";
export default {
  data() {
    return {
      productStyles: [
        {
          idx: 0,
          src: image_1,
          alt: "bracelet",
          description: "default style",
        },
        {
          idx: 1,
          src: image_1,
          alt: "bracelet",
          description: "description for bracelet style",
        },
        {
          idx: 2,
          src: image_1,
          alt: "bracelet",
          description: "description for bracelet style",
        },
        {
          idx: 3,
          src: image_1,
          alt: "bracelet",
          description: "description for bracelet style",
        },
        {
          idx: 4,
          src: image_1,
          alt: "bracelet",
          description: "description for bracelet style",
        },
        {
          idx: 5,
          src: image_1,
          alt: "bracelet",
          description: "description for bracelet style",
        },
        {
          idx: 6,
          src: image_1,
          alt: "bracelet",
          description: "description for bracelet style",
        },
      ],
      selectedStyle: {},
    };
  },
  methods: {
    setStyle: function (idx) {
      this.selectedStyle = this.productStyles[idx];
    },
  },
};
</script>
