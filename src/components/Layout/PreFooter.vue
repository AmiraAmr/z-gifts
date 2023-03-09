<template>
  <div class="pre-footer">
    <b-container>
      <div class="content">
        <b-row align-h="center">
          <b-col
            lg="4"
            md="6"
            sm="12"
            v-for="data in footerData"
            :key="data.title"
          >
            <div class="item">
              <b-row align-v="center">
                <b-col cols="3">
                  <img :src="data.icon" :alt="data.title" />
                </b-col>
                <b-col cols="9">
                  <div class="details">
                    <div class="title">{{ data.title }}</div>
                    <div class="description">{{ data.description }}</div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
.pre-footer {
  background-color: #282828;
  padding: 40px 0;
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
import Logo from "@/assets/logo.png";
export default {
  data() {
    return {
      footerData: [
        {
          icon: Logo,
          title: "Extra fast delivery",
          description:
            "Your order will be delivered in 3-5 business days after all of your items are available",
        },
        {
          icon: Logo,
          title: "Best prices",
          description:
            "We will match the product prices of key online and local competitions for immediately",
        },
        {
          icon: Logo,
          title: "Guarantee",
          description:
            "If the item you want is not available, we can process a return and place a new order",
        },
      ],
    };
  },
};
</script>
