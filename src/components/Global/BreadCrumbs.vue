<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a :href="levelOne.link">
        <b-icon
          icon="house-fill"
          scale="1.25"
          shift-v="1.25"
          aria-hidden="true"
        ></b-icon>
        {{ levelOne.text }}
      </a>
    </li>
    <li class="breadcrumb-item">
      <a :href="levelTwo.link">{{ levelTwo.text }} </a>
    </li>
    <li class="breadcrumb-item" v-if="levelThree">
      <a :href="levelThree.link">{{ levelThree.text }} </a>
    </li>
    <li class="breadcrumb-item" v-if="levelFour">
      <a>{{ levelFour.text }}</a>
    </li>
  </ol>
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
