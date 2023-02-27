<template>
    <div>
      {{ store.state }}
      <b-button @click="store.resetState">Reset state</b-button>
      <b-button @click="addUsers">Add users</b-button>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input id="input-1" type="email" required placeholder="Enter email"></b-form-input>
      </b-form-group>
  
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input id="input-2" required placeholder="Enter name"></b-form-input>
      </b-form-group>
  
      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select id="input-3" required></b-form-select>
      </b-form-group>
  
      <b-form-group id="input-group-4">
        <b-form-checkbox-group id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
    </div>
  </template>
  
  <script>
  
  export default {
    props: ["store"],
    methods: {
      
    }
  };
  </script>
  
  <style>
  </style>
  