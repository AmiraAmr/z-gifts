<template>
  <div id="ProductSelection" class="my-4">
    <d-stepper :steps="steps">
      <template #fatal-error="{ errorMsg }">{{ errorMsg }}</template>
    </d-stepper>
  </div>
</template>

<script>
import DStepper from "./DStepper";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPageVue from "./ThirdPage.vue";

export default {
  name: "ProductSelection",
  components: {
    DStepper,
  },
  data() {
    return {
      steps: [
        {
          disabled: false,
          active: true,
          component: FirstPage,
          NextLabel: "Choose a color",
        },
        {
          disabled: false,
          active: false,
          component: SecondPage,
          NextLabel: "Personalize",
          PreviuosLabel: "Back to styles",
        },
        {
          disabled: false,
          active: false,
          component: ThirdPageVue,
        },
      ],
    };
  },
};
</script>

<style></style>
