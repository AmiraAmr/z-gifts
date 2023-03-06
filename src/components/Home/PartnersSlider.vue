<template>
  <!-- <div class="partners-container"> -->
  <b-container>
    <div class="partners">
      <div class="brand" v-for="partner in partners" :key="partner.name">
        <img :src="partner.logo" :alt="partner.name" />
      </div>
    </div>
  </b-container>
  <!-- </div> -->
</template>

<style scoped>
.partners {
  display: flex;
  flex-direction: row;
  gap: 30px;
  overflow-x: auto;
  padding: 50px 70px;
  margin: 30px 0;
  border: solid 1px #b07943;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.partners::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.partners {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>

<script>
import Braun from "@/assets/Home/partners/Braun.png";
import Neutrogena from "@/assets/Home/partners/Neutrogena.png";
import VictoriaSecret from "@/assets/Home/partners/VictoriaSecret.png";

export default {
  data: function () {
    return {
      partners: [
        {
          name: "Braun",
          logo: Braun,
        },
        {
          name: "Neutrogena",
          logo: Neutrogena,
        },
        {
          name: "VictoriaSecret",
          logo: VictoriaSecret,
        },
        {
          name: "Braun 2",
          logo: Braun,
        },
        {
          name: "Neutrogena 2",
          logo: Neutrogena,
        },
        {
          name: "VictoriaSecret 2",
          logo: VictoriaSecret,
        },
        {
          name: "Braun 3",
          logo: Braun,
        },
        {
          name: "Neutrogena 3",
          logo: Neutrogena,
        },
        {
          name: "VictoriaSecret 3",
          logo: VictoriaSecret,
        },
      ],
    };
  },
};
</script>
