<template>
  <div>
    <b-form-group
      id="input-group-1"
      label="Email address:"
      label-for="input-1"
      description="We'll never share your email with anyone else."
    >
      <b-form-input
        v-model="email"
        id="input-1"
        type="email"
        required
        placeholder="Enter email"
      ></b-form-input>
    </b-form-group>

    <h2>{{ store.state }}</h2>
    <b-button @click="store.setState('name', 'Laura')">Cambiar nombre</b-button>
    <b-button @click="store.setState('lastname', 'Q')">Set new key</b-button>
    <b-button @click="store.setState('users', ['Q', 'John'])"
      >Set array</b-button
    >

    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
      <b-form-input
        id="input-2"
        required
        placeholder="Enter name"
      ></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
export default {
  props: ["store"],
  data() {
    return {
      email: "",
    };
  },
  methods: {
    //nextStep() {
    /*if (this.email.length > 0) return true;
  
        this.$bvToast.toast(`El formluario tiene campos obligatorios`, {
          title: "Error",
          autoHideDelay: 2000,
          variant: "danger",
          toaster: "b-toaster-bottom-right"
        });
        this.$emit("error", true);
        return false;*/
    //}
  },
};
</script>

<style></style>
