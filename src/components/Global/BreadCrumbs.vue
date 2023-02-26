<template>
  <b-breadcrumb>
    <b-breadcrumb-item :href="levelOne.link">
      <b-icon
        icon="house-fill"
        scale="1.25"
        shift-v="1.25"
        aria-hidden="true"
      ></b-icon>
      {{ levelOne.text }}
    </b-breadcrumb-item>
    <b-breadcrumb-item :href="levelTwo.link">{{
      levelTwo.text
    }}</b-breadcrumb-item>
    <b-breadcrumb-item v-if="levelThree" :href="levelThree.link">{{
      levelThree.text
    }}</b-breadcrumb-item>
    <b-breadcrumb-item v-if="levelFour">{{ levelFour.text }}</b-breadcrumb-item>
  </b-breadcrumb>
</template>

<style lang="css" scoped>
.breadcrumb {
  background: transparent;
}
.breadcrumb-item + .breadcrumb-item::before,
.breadcrumb .breadcrumb-item a {
  color: #cecece;
}

@media (max-width: 425px) {
    .breadcrumb {
      display: none;
    }
  }
  
</style>

<script>
export default {
  name: "BreadCrumbs",
  props: ["levelOne", "levelTwo", "levelThree", "levelFour"],
};
</script>
