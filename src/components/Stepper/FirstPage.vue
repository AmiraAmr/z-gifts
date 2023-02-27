<template>
  <div class="product-style">
    <b-row gap="2px">
      <b-col
        lg="3"
        md="6"
        sm="12"
        v-for="image in productStyles"
        :key="image.idx"
        @click="setStyle(image.idx)"
      >
        <b-row>
          <div
            class="style-image"
            v-if="selectedStyle.idx === image.idx"
            style="border-color: #b07943"
          >
            <img :src="image.src" :alt="image.alt" />
          </div>
          <div
            class="style-image"
            v-else-if="!selectedStyle.src && image.idx === 0"
            style="border-color: #b07943"
          >
            <img :src="image.src" :alt="image.alt" />
          </div>
          <div class="style-image" v-else>
            <img :src="image.src" :alt="image.alt" />
          </div>
        </b-row>
        <b-row>
          <div class="style-description">{{ image.description }}</div>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
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

<style></style>
