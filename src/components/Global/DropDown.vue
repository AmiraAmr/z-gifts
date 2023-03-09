<template>
  <div>
    <b-dropdown
      class="dropdown b-dropdown m-2 btn-group"
      size="sm"
      variant="transparent"
    >
      <template #button-content>
        <span v-if="value.label" style="color: #fff">{{ value.label }}</span>
        <span v-else style="color: #fff">{{ defaultValue.label }}</span>
      </template>
      <b-dropdown-item
        v-for="option in options"
        :key="option.value"
        href="#"
        @click="changeLanguage(option)"
        >{{ option.label }}</b-dropdown-item
      >
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: ["options", "defaultValue"],
  data: function () {
    return {
      value: {},
    };
  },
  methods: {
    changeLanguage: function (option) {
      this.value = option;
    },
  },
};
</script>
