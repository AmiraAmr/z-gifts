<template>
  <div>
    <nav-bar />
    <div class="product">
      <bread-crumbs
        :levelOne="levelOne"
        :level-two="levelTwo"
        :level-three="levelThree"
        :level-four="levelFour"
      />
      <div class="product-container">
        <div class="row">
          <div class="col-md-12 col-lg-5 images-cont">
            <div class="product-images">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="all-images">
                    <div
                      v-for="image in productImages"
                      :key="image.idx"
                      @click="setImage(image.idx)"
                    >
                      <img :src="image.src" :alt="image.alt" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12">
                  <div v-if="!selectedImage.src" class="selectedImage">
                    <img
                      :src="productImages[0].src"
                      :alt="productImages[0].alt"
                    />
                  </div>
                  <div v-if="selectedImage.src" class="selectedImage">
                    <img :src="selectedImage.src" :alt="selectedImage.alt" />
                  </div>
                </div>
              </div>
            </div>

            <product-carousel :productImages="productImages" />
          </div>

          <div class="col-lg-7 col-md-12">
            <div class="right-side">
              <div class="row justify-between" align-h="between">
                <div class="col-xl-3 col-lg-4 col-md-2 col-sm-3">
                  <div class="sale">Sale</div>
                </div>
                <div class="col-lg-4 col-md-3 col-sm-5">
                  <div class="product-id">
                    <div class="m-0" align-h="end">Product ID</div>
                    <div class="m-0" align-h="end">{{ productID }}</div>
                  </div>
                </div>
              </div>

              <!-- Step component -->
              <div class="row">
                <product-selection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.product {
  padding: 30px 10%;
}
.justify-between {
  justify-content: space-between;
}
.product-container,
.product .product-images {
  max-height: 70vh;
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
  height: 150px;
}
.product .selectedImage {
  width: 100%;
  height: 100%;
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
  margin: 0 20px;
}
.product .product-id {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 5px;
  color: #cecece;
  text-align: right;
  margin: 0 20px;
}

@media (max-width: 991px) {
  .product {
    padding: 40px;
  }
  .product-container,
  .product .product-images {
    max-height: unset;
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .product .product-images {
    margin-bottom: 60px;
  }
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

@media (max-width: 575px) {
  .product {
    padding: 0 0 40px 0;
  }
  .product .images-cont {
    padding-right: 0;
    padding-left: 0;
  }
  .right-side {
    padding: 40px 70px;
  }

  .product .product-images {
    display: none;
  }
  .product .product-id {
    flex-direction: row;
    margin-top: 10px;
    justify-content: center;
  }
}
</style>

<script>
import BreadCrumbs from "@/components/Global/BreadCrumbs.vue";
import image_1 from "@/assets/products/cool-hibiscus-tie-dye-braided-bracelet@small.jpg";
import image_2 from "@/assets/products/personalized-keychains.jpg";
import image_3 from "@/assets/products/white-black-back-wristband-bracelet@small.jpg";
import ProductSelection from "@/components/Stepper/ProductSelection.vue";
import ProductCarousel from "@/components/ProductCarousel.vue";
import NavBar from "@/components/Layout/NavBar.vue";

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
    ProductCarousel,
    NavBar,
  },
};
</script>
