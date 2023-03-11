<template>
  <div>
    <nav-bar />
    <div class="container">
      <div class="checkout">
        <h2>Check out</h2>
        <div class="login">
          already have an account? <span><a href="/login">login</a></span>
        </div>
        <div class="content">
          <div class="row">
            <div class="col-md-8">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Personal Information
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="personal-info">
                        <div class="row">
                          <div class="col-md-6">
                            <input type="text" placeholder="First Name" />
                          </div>
                          <div class="col-md-6">
                            <input type="text" placeholder="Second Name" />
                          </div>
                          <div class="col-md-6">
                            <input type="phone" placeholder="Mobile Number" />
                          </div>
                          <div class="col-md-6">
                            <input type="phone" placeholder="WhatsApp" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        Shipping Information
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse show"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="shipping-info">
                        <div class="row">
                          <div class="col-md-4">
                            <input type="text" placeholder="Area" />
                          </div>
                          <div class="col-md-4">
                            <input type="number" placeholder="Block" />
                          </div>
                          <div class="col-md-4">
                            <input type="text" placeholder="Street" />
                          </div>
                          <div class="col-md-4">
                            <input type="text" placeholder="Avenue" />
                          </div>
                          <div class="col-md-4">
                            <input type="text" placeholder="House" />
                          </div>
                          <div class="col-md-4">
                            <input type="number" placeholder="Building" />
                          </div>
                          <div class="col-md-4">
                            <input type="number" placeholder="Floor" />
                          </div>
                          <div class="col-md-4">
                            <input type="number" placeholder="Apaerment" />
                          </div>
                          <div class="col-md-4">
                            <input type="text" placeholder="Office/Desk" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        Payment Method
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse show"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="payment">
                        <div class="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio1"
                            name="customRadio"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="customRadio1"
                            >Visa</label
                          >
                        </div>
                        <div class="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio2"
                            name="customRadio"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="customRadio2"
                            >Master Card</label
                          >
                        </div>
                        <div class="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio3"
                            name="customRadio"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="customRadio3"
                            >Cash on delivery</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- order summary -->
            <div class="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkout {
  padding: 40px 0;
}
.checkout h2 {
  text-transform: capitalize;
  font-size: 35px;
  font-weight: bold;
  color: #0c0c0c;
}
.checkout .login {
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  margin: 20px 0;
}
.checkout .login span a {
  color: #b07943;
  transition: all 0.5s;
}

.checkout .login span a:hover {
  text-decoration: none;
  color: #0c0c0c;
  transition: all 0.5s;
}

.checkout .accordion > .card > .card-header {
  background-color: #b07943;
  border: 1px solid #d09262;
}
.checkout .accordion > .card > .card-header .btn-link {
  color: #fff;
  font-size: 23px;
  font-weight: bold;
}
.checkout .accordion > .card > .card-header .btn-link,
.checkout .accordion > .card > .card-header .btn-link:hover,
.checkout .accordion > .card > .card-header .btn-link:focus {
  text-decoration: none;
  border: none;
  outline: none;
  box-shadow: none;
}

.checkout .accordion .card .card-body {
  padding: 40px 30px 15px;
}
.checkout .accordion .card {
  border: 0;
  outline: none;
}
.checkout .accordion .personal-info input,
.checkout .accordion .shipping-info input {
  width: 100%;
  border: solid 1px #d8d8d8;
  border-radius: 5px;
  padding: 15px 25px;
  margin-bottom: 25px;
}

.checkout .payment .custom-control.custom-radio {
    font-size: 25px;
    margin-bottom: 10px;
}
.custom-control-label::before {
    top: 35%;
    border: 2px solid;
}
.custom-control-input:checked ~ .custom-control-label::before {
    border: 1px solid #b07943;
    padding: 1px;
    background-color: #b07943;
}
</style>

<script>
import NavBar from "@/components/Layout/NavBar.vue";

export default {
  name: "AboutView",
  components: {
    NavBar,
  },
};
</script>
