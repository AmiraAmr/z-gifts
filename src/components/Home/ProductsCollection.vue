<template>
  <div class="collection-tabs">
    <b-container>
      <h3>collections</h3>
      <b-card no-body>
        <b-tabs pills align="center" content-class="mt-3">
          <b-tab
            v-for="tab in tabs"
            :title="tab.title"
            :key="tab.title"
            :title-item-class="'tab-title-class'"
            :title-link-class="'tab-link-class'"
          >
            <b-card-text>
              <template>
                <div
                  class="content"
                  :style="{ 'background-image': `url(${tab.contentImg})` }"
                >
                  <div class="content-style">
                    <div class="content-title">
                      {{ tab.contentTitle }}
                    </div>
                    <div class="content-description">
                      {{ tab.contentDescription }}
                    </div>
                    <button :href="tab.buttonLink">View now</button>
                  </div>
                </div>
              </template>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </div>
</template>

<style scoped lang="css">
::v-deep .tab-title-class {
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  margin: 0 10px;
  text-transform: capitalize;
  font-size: 13px;
}
::v-deep .tab-link-class {
  color: #000;
}
::v-deep .nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: #b07943;
  border-color: #b07943;
}
.collection-tabs h3 {
  text-transform: capitalize;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
.collection-tabs .card .card-header {
  background-color: transparent;
}

.card {
  border: none;
}

.content {
  height: 450px;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 30px;
}
.content .content-style {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
}
.content .content-title,
.content .content-description {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}
.content button {
  background-color: #fff;
  color: #000;
  text-transform: capitalize;
  font-size: 16px;
  padding: 12px 35px;
  margin-top: 10px;
  border: 1px solid transparent;
  border-radius: 25px;
  transition: all 1s;
}

.content button:hover {
  background-color: #000;
  color: #fff;
  transition: all 1s;
}
</style>

<script>
import cont_img from "@/assets/Home/collection.jpg";
export default {
  data: function () {
    return {
      tabs: [
        {
          title: "View all",
          contentImg: cont_img,
          contentTitle: "Letters",
          contentDescription: "New offers",
          buttonLink: "/product",
        },
        {
          title: "Women",
          contentImg: cont_img,
          contentTitle: "women",
          contentDescription: "women collections",
          buttonLink: "/product",
        },
        {
          title: "Men",
          contentImg: cont_img,
          contentTitle: "Men",
          contentDescription: "Men collections",
          buttonLink: "/product",
        },
        {
          title: "accessories",
          contentImg: cont_img,
          contentTitle: "accessories",
          contentDescription: "accessories collections",
          buttonLink: "/product",
        },
      ],
    };
  },
};
</script>
