<template>
  <div class="about">
    <div class="about-header">
      <nav-bar />
      <div class="breadcrumbs-container">
        <bread-crumbs :levelOne="levelOne" :level-two="levelTwo" />
      </div>
      <div class="header">
        <div class="title">Let's talk bussiness</div>
        <div class="description">Lorium ipsum dolor sit amet</div>
      </div>
    </div>

    <div class="about-us">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="title">About us.</div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                corrupti quisquam aliquid. Libero alias earum, fugit quo
                doloribus ratione?
              </p>
              <p>
                Lorem ipsum neque asperiores esse ectetur adipisicing elit.
                Amet. Incidunt neque asperiores esse nesciunt beatae, corrupti
                quisquam aliquid. Libero alias earum, fugit quo doloribus
                ratione?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="inspiration">
      <div class="container">
        <div class="row" align-v="center">
          <div class="col-lg-6 col-md-12">
            <div class="title">
              <div class="main">Our inspiration</div>
              <div class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                temporibus culpa facilis expedita similique minima blanditiis
                laborum, voluptates sequi explicabo necessitatibus, recusandae
                adipisci quasi excepturi natus architecto tempora sed eveniet?
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <img src="@/assets/dummy.png" alt="dummy img" />
          </div>
        </div>
      </div>
    </div>

    <div class="process">
      <div class="container">
        <div class="row" align-v="center">
          <div
            class="col-lg-6 col-md-12 order-lg-0 order-md-1 order-sm-1 order-xs-1"
          >
            <img src="@/assets/dummy.png" alt="dummy img" />
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="title">
              <div class="main">Our process</div>
              <div class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                temporibus culpa facilis expedita similique minima blanditiis
                laborum, voluptates sequi explicabo necessitatibus, recusandae
                adipisci quasi excepturi natus architecto tempora sed eveniet?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about .breadcrumbs-container {
  padding: 0 10%;
}
.about .header {
  background-color: #e9e9e9;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 100px;
  height: 70vh;
}

.about .header .title {
  font-size: 60px;
  font-weight: bold;
  line-height: 1.17;
  text-align: center;
  text-transform: uppercase;
}
.about .header .description {
  font-size: 30px;
}

.about .about-us {
  padding: 70px 0 40px;
}

.about .about-us .title {
  font-size: 70px;
  font-weight: bold;
  text-align: left;
  color: #b07943;
  text-transform: capitalize;
}
.about .about-us .description {
  font-size: 25px;
  line-height: 1.8;
  text-align: left;
}
.about .about-us .description p {
  margin-bottom: 30px;
}

.about .inspiration,
.about .process {
  padding: 70px 0 40px;
}
.about .inspiration .row-gap,
.about .process .row-gap {
  gap: 80px;
}

.about .inspiration .title,
.about .process .title {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.about .inspiration .title .main,
.about .process .title .main {
  font-size: 50px;
  font-weight: bold;
  text-transform: capitalize;
  text-align: justify;
}

.about .inspiration .description,
.about .process .description {
  font-size: 25px;
  line-height: 1.8;
  text-align: justify;
  text-justify: inter-word;
}
.about .inspiration .description p,
.about .process .description p {
  margin-bottom: 30px;
}
.about .inspiration img,
.about .process img {
  width: 100%;
}

@media (max-width: 425px) {
  .about .header {
    padding: 30px;
  }
}
</style>

<script>
import BreadCrumbs from "@/components/Global/BreadCrumbs.vue";
import NavBar from "@/components/Layout/NavBar.vue";

export default {
  name: "AboutView",
  data: function () {
    return {
      levelOne: {
        text: "",
        link: "/",
      },
      levelTwo: {
        text: "About",
        link: "/about",
      },
    };
  },
  components: {
    BreadCrumbs,
    NavBar,
  },
};
</script>
