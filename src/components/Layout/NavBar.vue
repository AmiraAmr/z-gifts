<template>
  <div>
    <pre-nav />
    <b-navbar toggleable="sm" type="light" variant="light">
      <div class="nav-bar">
        <b-navbar-brand href="#">
          <div style="display: flex; gap: 7px">
            <img src="@/assets/logo.png" alt="z-letters-gifts" />
            <img src="@/assets/logo-2.png" alt="z-letters-gifts" />
          </div>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- <div class="nav-data"> -->
          <b-navbar-nav>
            <b-nav-item
              v-for="navItem in navItems"
              :key="navItem.label"
              :href="navItem.route"
              >{{ navItem.label }}</b-nav-item
            >
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <div class="more-options">
              <div class="search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                >
                  <path
                    d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"
                  />
                </svg>
              </div>
              <div class="heart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                >
                  <path
                    d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
                  />
                </svg>
              </div>
              <div class="cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                >
                  <path
                    d="M21,6H18A6,6,0,0,0,6,6H3A3,3,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A3,3,0,0,0,21,6ZM12,2a4,4,0,0,1,4,4H8A4,4,0,0,1,12,2ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A1,1,0,0,1,3,8H6v2a1,1,0,0,0,2,0V8h8v2a1,1,0,0,0,2,0V8h3a1,1,0,0,1,1,1Z"
                  />
                </svg>
              </div>
            </div>
          </b-navbar-nav>
          <!-- </div> -->
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<style scoped>
.nav-bar {
  padding: 0 20%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 100px;
  font-size: 20px;
  text-transform: capitalize;
}

.nav-bar .nav-data {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.nav-item.nav-item.nav-item a {
  color: #000;
  font-weight: 600;
}
.nav-item.nav-item.nav-item a:hover,
.nav-item.nav-item.nav-item a.active {
  color: #20c8ad;
}

.nav-bar .more-options {
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
}
.nav-bar .more-options > div {
  cursor: pointer;
}
.nav-bar .more-options > div:hover {
  opacity: 0.7;
}
</style>

<script>
// import { defineComponent } from '@vue/composition-api'
import PreNav from "./PreNav.vue";

export default {
  name: "NavBar",
  props: ["activeItem"],
  data: function () {
    return {
      navItems: [
        {
          label: "home",
          page: "HomeView",
          route: "/",
        },
        {
          label: "about",
          page: "AboutView",
          route: "/about",
        },
        {
          label: "product",
          page: "ProductView",
          route: "/product",
        },
      ],
    };
  },
  components: {
    PreNav,
  },
};
</script>
