<template>
  <div class="product">
    <bread-crumbs
      :levelOne="levelOne"
      :level-two="levelTwo"
      :level-three="levelThree"
      :level-four="levelFour"
    />
    <div class="product-container">
      <b-row>
        <b-col class="gap-3">
          <div class="product-images">
            <b-row>
              <b-col cols="3">
                <div class="all-images">
                  <div
                    v-for="image in productImages"
                    :key="image.idx"
                    @click="setImage(image.idx)"
                  >
                    <img :src="image.src" :alt="image.alt" />
                  </div>
                </div>
              </b-col>
              <b-col>
                <div v-if="!selectedImage.src" class="selectedImage not">
                  <img
                    :src="productImages[0].src"
                    :alt="productImages[0].alt"
                  />
                </div>
                <div v-if="selectedImage.src" class="selectedImage">
                  <img :src="selectedImage.src" :alt="selectedImage.alt" />
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col>Some data</b-col>
      </b-row>
    </div>
  </div>
</template>

<style scoped lang="css">
.product {
  padding: 30px 10%;
}
.product-continer {
  padding: 0 10%;
}

.product .product-images .all-images {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.product .product-images .all-images > div {
  width: 170px;
  height: 170px;
  border: solid 0.3px #eee;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}

.product .product-images .all-images > div:hover {
  border-color: #b07943;
}
.product .product-images .all-images > div img {
  border: solid 0.3px transparent;
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
.product .selectedImage {
  width: 100%;
  height: 100%;
  padding: 0 12px;
}
.product .selectedImage > img {
  width: 100%;
  height: 100%;
}

</style>

<script>
import BreadCrumbs from "@/components/Global/BreadCrumbs.vue";
import image_1 from "@/assets/products/cool-hibiscus-tie-dye-braided-bracelet@small.jpg";
import image_2 from "@/assets/products/personalized-keychains.jpg";
import image_3 from "@/assets/products/white-black-back-wristband-bracelet@small.jpg";

export default {
  name: "ProductView",
  data: function () {
    return {
      levelOne: {
        text: "",
        link: "/",
      },
      levelTwo: {
        text: "AllProducts",
        link: "/products",
      },
      levelThree: {
        text: "Summer Collection",
        link: "/products/summer-collection",
      },
      levelFour: {
        text: "Braceletes",
      },
      productImages: [
        {
          idx: 0,
          src: image_1,
          alt: "bracelet",
        },
        {
          idx: 1,
          src: image_2,
          alt: "bracelet",
        },
        { idx: 2, src: image_3, alt: "bracelet" },
      ],
      selectedImage: {},
    };
  },
  methods: {
    setImage: function (indx) {
      this.selectedImage = this.productImages[indx];
    },
  },
  components: {
    BreadCrumbs,
  },
};
</script>
