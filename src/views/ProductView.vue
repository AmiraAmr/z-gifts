<template>
  <div class="product">
    <bread-crumbs
      :levelOne="levelOne"
      :level-two="levelTwo"
      :level-three="levelThree"
      :level-four="levelFour"
    />
    <div class="product-container">
      <b-row align-v="stretch">
        <b-col class="gap-3" md="12" lg="6">
          <div class="product-images">
            <b-row>
              <b-col lg="4" md="6" sm="12">
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
              <b-col lg="8" md="6" sm="12">
                <div v-if="!selectedImage.src" class="selectedImage">
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

        <b-col>
          <b-row align-h="between">
            <b-col cols="2">
              <div class="sale">Sale</div>
            </b-col>
            <b-col cols="2">
              <div class="product-id">
                <b-row class="m-0" align-h="end">Product ID</b-row>
                <b-row class="m-0" align-h="end">{{ productID }}</b-row>
              </div>
            </b-col>
          </b-row>

          <!-- Step component -->
          <b-row>
            <product-selection />
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style scoped lang="css">
.product {
  padding: 30px 10%;
}
.product-container {
  max-height: 80vh;
}
.product .product-images {
  height: 80vh;
}
.product .product-images .all-images {
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
}
.product .product-images .all-images > div {
  width: 100%;
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
  height: 170px;
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

.product .sale {
  background-color: #b07943;
  color: #fff;
  padding: 5px;
  text-align: center;
  border-radius: 40px;
  font-size: 15px;
  text-transform: uppercase;
}
.product .product-id {
  color: #cecece;
  text-align: right;
  align-items: end;
}

@media (max-width: 768px) {
  .product .product-images .all-images {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .product .product-images .all-images > div {
    max-width: 30%;
  }
  .product .selectedImage {
    margin-top: 30px;
  }
}
</style>

<script>
import BreadCrumbs from "@/components/Global/BreadCrumbs.vue";
import image_1 from "@/assets/products/cool-hibiscus-tie-dye-braided-bracelet@small.jpg";
import image_2 from "@/assets/products/personalized-keychains.jpg";
import image_3 from "@/assets/products/white-black-back-wristband-bracelet@small.jpg";
import ProductSelection from "@/components/Stepper/ProductSelection.vue";

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
      productID: "0102153",
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
    ProductSelection,
  },
};
</script>
