<template>
  <div class="pre-footer">
    <div class="container">
      <div class="content">
        <div class="row" align-h="center">
          <div
            class="col-lg-4 col-md-6 col-sm-12"
            v-for="data in footerData"
            :key="data.title"
          >
            <div class="item">
              <div class="row" align-v="center">
                <div class="col-3">
                  <div class="item-image">
                    <img :src="data.icon" :alt="data.title" />
                  </div>
                </div>
                <div class="col-9">
                  <div class="details">
                    <div class="title">{{ data.title }}</div>
                    <div class="description">{{ data.description }}</div>
                  </div>
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
.pre-footer {
  background-color: #282828;
  padding: 40px 0 0 0;
  margin-top: 30px;
}

.pre-footer .content .item {
  margin-bottom: 40px;
}
.pre-footer .content .item .item-image img {
  height: 100%;
  width: 100%;
}
.pre-footer .content .item .title {
  color: #fafafa;
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 8px;
}
.pre-footer .content .item .description {
  color: #cbcbcc;
  font-size: 14px;
}
</style>

<script>
import boxes from "@/assets/footer/boxes.png";
import coins from "@/assets/footer/coins.png";
import diploma from "@/assets/footer/diploma.png";
export default {
  data() {
    return {
      footerData: [
        {
          icon: boxes,
          title: "Extra fast delivery",
          description:
            "Your order will be delivered in 3-5 business days after all of your items are available",
        },
        {
          icon: coins,
          title: "Best prices",
          description:
            "We will match the product prices of key online and local competitions for immediately",
        },
        {
          icon: diploma,
          title: "Guarantee",
          description:
            "If the item you want is not available, we can process a return and place a new order",
        },
      ],
    };
  },
};
</script>
