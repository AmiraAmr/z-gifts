<template>
  <div class="collection-tabs">
    <div class="container">
      <h3>collections</h3>
      <div class="card">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-all-tab"
              data-toggle="pill"
              data-target="#pills-all"
              type="button"
              role="tab"
              aria-controls="pills-all"
              aria-selected="true"
            >
              View All
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-women-tab"
              data-toggle="pill"
              data-target="#pills-women"
              type="button"
              role="tab"
              aria-controls="pills-women"
              aria-selected="false"
            >
              Women
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-men-tab"
              data-toggle="pill"
              data-target="#pills-men"
              type="button"
              role="tab"
              aria-controls="pills-men"
              aria-selected="false"
            >
              Men
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-accessories-tab"
              data-toggle="pill"
              data-target="#pills-accessories"
              type="button"
              role="tab"
              aria-controls="pills-accessories"
              aria-selected="false"
            >
              Accessories
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
          >
            <div class="content">
              <div class="content-style">
                <div class="content-title">Letters</div>
                <div class="content-description">New offers</div>
                <button href="/product">View now</button>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-women"
            role="tabpanel"
            aria-labelledby="pills-women-tab"
          >
            <div class="content">
              <div class="content-style">
                <div class="content-title">Women</div>
                <div class="content-description">women collections</div>
                <button href="/product">View now</button>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-men"
            role="tabpanel"
            aria-labelledby="pills-men-tab"
          >
            <div class="content">
              <div class="content-style">
                <div class="content-title">Men</div>
                <div class="content-description">men collections</div>
                <button href="/product">View now</button>
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="pills-accessories"
            role="tabpanel"
            aria-labelledby="pills-accessories-tab"
          >
            <div class="content">
              <div class="content-style">
                <div class="content-title">accessories</div>
                <div class="content-description">accessories collections</div>
                <button href="/product">View now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.nav-pills .nav-link {
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  margin: 0 10px;
  text-transform: capitalize;
  font-size: 15px;
  margin-bottom: 8px;
}
::v-deep .tab-link-class {
  color: #000;
}
::v-deep .nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: #b07943;
  border-color: #b07943;
}
.nav.nav-pills {
  justify-content: center;
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
  background-image: url("@/assets/Home/collection.jpg");
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

@media (max-width: 426px) {
  .content {
    align-items: center;
  }
}
</style>

<script>
export default {
  name: "ProductsCollection",
};
</script>
