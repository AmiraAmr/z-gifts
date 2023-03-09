<template>
  <div class="product-color">
    <div class="row" gap="2px">
      <div
        class="col-lg-3 col-md-3 col-sm-6"
        v-for="image in productColors"
        :key="image.idx"
        @click="setColor(image.idx)"
      >
        <div class="row">
          <div
            class="color-image"
            v-if="selectedColor.idx === image.idx"
            style="border-color: #b07943"
          >
            <img :src="image.src" :alt="image.alt" />
          </div>
          <div
            class="color-image"
            v-else-if="!selectedColor.src && image.idx === 0"
            style="border-color: #b07943"
          >
            <img :src="image.src" :alt="image.alt" />
          </div>
          <div class="color-image" v-else>
            <img :src="image.src" :alt="image.alt" />
          </div>
        </div>
        <div class="row">
          <div class="color-description">{{ image.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-color .color-image {
  border-radius: 5px;
  border: solid 0.3px #eee;
  cursor: pointer;
}
.product-color .color-image:hover,
.product-color .color-image.active {
  border-color: #b07943;
}
.product-color .color-image > img {
  width: 100%;
  height: 100%;
}
.product-color .color-description {
  font-size: 14px;
  padding: 5px 22px 15px 5px;
  text-align: left;
  text-transform: capitalize;
}

@media (max-width: 575px) {
  .product-color .col-sm {
    width: 50%;
  }
}
</style>

<script>
import image_1 from "@/assets/products/wristband-bracelet.png";
export default {
  data() {
    return {
      productColors: [
        {
          idx: 0,
          src: image_1,
          alt: "bracelet",
          description: "default color",
        },
        {
          idx: 1,
          src: image_1,
          alt: "bracelet",
          description: "description for bracelet color",
        },
        {
          idx: 2,
          src: image_1,
          alt: "bracelet",
          description: "description for bracelet color",
        },
        {
          idx: 3,
          src: image_1,
          alt: "bracelet",
          description: "description for bracelet color",
        },
      ],
      selectedColor: {},
    };
  },
  methods: {
    setColor: function (idx) {
      this.selectedColor = this.productColors[idx];
    },
  },
};
</script>

<style></style>
