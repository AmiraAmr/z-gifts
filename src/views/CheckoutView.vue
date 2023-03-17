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
            <!-- Accordion -->
            <div class="col-md-8">
              <div class="accordion details-accordion" id="accordionExample">
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
                            <input type="number" placeholder="Aparment" />
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
            <div class="col-md-4">
              <div class="order">
                <div class="row">
                  <div class="order-summary">
                    <div class="header">Order summary</div>
                    <div class="summary">
                      <div class="accordion" id="accordionExample2">
                        <div class="card">
                          <div class="card-header" id="headingOne2">
                            <h2 class="mb-0">
                              <button
                                class="btn btn-link btn-block text-left"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne2"
                                aria-expanded="true"
                                aria-controls="collapseOne2"
                              >
                                Brown Bracelet <span>with customization</span>
                              </button>
                            </h2>
                          </div>

                          <div
                            id="collapseOne2"
                            class="collapse show"
                            aria-labelledby="headingOne2"
                            data-parent="#accordionExample2"
                          >
                            <div class="card-body">
                              <div class="item">
                                <p>
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Dignissimos distinctio cum
                                  cumque reiciendis
                                </p>
                                <div class="item-details">
                                  <div>
                                    <div class="quantity">Qty: 1</div>
                                    <div class="size">size: medium</div>
                                  </div>
                                  <div class="total">total: $18.59</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <div class="card-header" id="headingTwo2">
                            <h2 class="mb-0">
                              <button
                                class="btn btn-link btn-block text-left collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwo2"
                                aria-expanded="true"
                                aria-controls="collapseTwo2"
                              >
                                Brown Bracelet <span>with customization</span>
                              </button>
                            </h2>
                          </div>
                          <div
                            id="collapseTwo2"
                            class="collapse show"
                            aria-labelledby="headingTwo2"
                            data-parent="#accordionExample2"
                          >
                            <div class="card-body">
                              <div class="item">
                                <p>
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Dignissimos distinctio cum
                                  cumque reiciendis
                                </p>
                                <div class="item-details">
                                  <div>
                                    <div class="quantity">Qty: 1</div>
                                    <div class="size">size: medium</div>
                                  </div>
                                  <div class="total">total: $18.59</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <div class="date-specification">
                            <input type="date" />
                            <input type="time" />
                          </div>
                        </div>

                        <div class="card">
                          <div class="pricing">
                            <div class="coupon">
                              <input type="text" placeholder="Coupon Code" />
                              <button>Apply</button>
                            </div>
                            <div class="finish-pricing">
                              <div class="title">subtotal pricing</div>
                              <div class="cost">$75.68</div>
                            </div>
                            <div class="finish-pricing">
                              <div class="title">shipping fees</div>
                              <div class="cost">$10</div>
                            </div>
                            <div class="finish-pricing">
                              <div class="title">discount</div>
                              <div class="cost">$18</div>
                            </div>

                            <hr />

                            <div class="total">
                              <div class="title">Grand total</div>
                              <div class="cost">$103.68</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Buttons -->
                <div class="row">
                  <div class="buttons">
                    <button class="cont-shopping">continue shopping</button>
                    <button class="place-order">place order</button>
                  </div>
                </div>
              </div>
            </div>
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

.checkout .accordion.details-accordion > .card > .card-header {
  background-color: #b07943;
  border: 1px solid #d09262;
}
.checkout .accordion.details-accordion > .card > .card-header .btn-link {
  color: #fff;
  font-size: 23px;
  font-weight: bold;
}
.checkout .accordion.details-accordion > .card > .card-header .btn-link,
.checkout .accordion.details-accordion > .card > .card-header .btn-link:hover,
.checkout .accordion.details-accordion > .card > .card-header .btn-link:focus,
.checkout .order .accordion .card > .card-header .btn-link,
.checkout .order .accordion .card > .card-header .btn-link:hover,
.checkout .order .accordion .card > .card-header .btn-link:focus {
  text-decoration: none;
  border: none;
  outline: none;
  box-shadow: none;
}

.checkout .accordion.details-accordion .card .card-body {
  padding: 40px 30px 15px;
}
.checkout .accordion.details-accordion .card {
  border: 0;
  outline: none;
}
.checkout .accordion.details-accordion .personal-info input,
.checkout .accordion.details-accordion .shipping-info input {
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

.checkout .order,
.checkout .order .order-summary {
  width: 100%;
}
.checkout .order .order-summary .header {
  text-align: center;
  width: 100%;
  padding: 18px 32px;
  border: 1px solid #b07943;
  background-color: #b07943;
  color: #fff;
  border-radius: 5px;
  font-size: 23px;
  font-weight: bold;
  text-transform: capitalize;
}
.checkout .order .accordion > .card > .card-header {
  background-color: transparent;
  border-bottom: 0;
}
.checkout .order .accordion .card > .card-header .btn-link {
  color: #000;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
}

.checkout .order .accordion .card > .card-header .btn-link span {
  color: #b07943;
}

.checkout .order .accordion .card .card-body {
  padding-left: 30px;
  padding-top: 0;
}
.checkout .order .accordion .card .card-body p {
  color: #a5a5a5;
  font-size: 15px;
}

.checkout .order .accordion .card .card-body .item-details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
}
.checkout .order .accordion .card .card-body .item-details > div {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
.checkout .order .accordion .card .card-body .item-details .quantity {
  color: #a5a5a5;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
}
.checkout .order .accordion .card .card-body .item-details .size {
  text-transform: capitalize;
  color: #b07943;
  font-size: 14px;
  font-weight: 500;
}
.checkout .order .accordion .card .card-body .item-details .total {
  font-size: 13px;
  font-weight: bold;
  text-transform: capitalize;
}
.checkout .order .card .date-specification {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;
}
.checkout .order .card .date-specification input {
  width: 100%;
  border: solid 1px #d8d8d8;
  border-radius: 5px;
  padding: 10px;
}
.checkout .order .card .pricing {
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 18px;
  font-weight: normal;
  padding: 30px 0;
}
.checkout .order .card .pricing .coupon {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.checkout .order .card .pricing .coupon input {
  width: 70%;
  border: solid 1px #d8d8d8;
  border-radius: 5px;
  padding: 10px;
}
.checkout .order .card .pricing .coupon button {
  width: 20%;
  color: #fff;
  background-color: #b07943;
  border: 1px solid #b07943;
  border-radius: 5px;
  padding: 10px;
  transition: all 0.5s;
}
.checkout .order .card .pricing .coupon button:hover {
  color: #b07943;
  background-color: #fff;
  transition: all 0.5s;
}

.checkout .order .card .pricing .finish-pricing {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  padding: 0 30px;
  text-transform: capitalize;
}
.checkout .order .card .pricing .finish-pricing .cost {
  color: #77777a;
}
.checkout .order .card .pricing hr {
  width: 80%;
}
.checkout .order .card .pricing .total {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  padding: 0 30px;
  font-size: 23px;
  font-weight: bold;
}

.checkout .order .buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  padding: 30px 0;
}
.checkout .order .buttons button {
  width: 50%;
  font-size: 14px;
  font-weight: 600;
  padding: 20px;
  border-radius: 5px;
  text-transform: capitalize;
  white-space: nowrap;
  transition: all 0.5s;
  border: 2px solid #b07943;
}
.checkout .order .buttons .cont-shopping {
  color: #000;
  background-color: transparent;
}
.checkout .order .buttons .cont-shopping:hover {
  color: #fff;
  background-color: #b07943;
}
.checkout .order .buttons .place-order {
  color: #fff;
  background-color: #b07943;
}
.checkout .order .buttons .place-order:hover {
  color: #000;
  background-color: #fff;
}

@media (max-width: 1024px) {
  .checkout .order .card .pricing .coupon {
    flex-direction: column;
  }
  .checkout .order .card .pricing .coupon input,
  .checkout .order .card .pricing .coupon button {
    width: 90%;
  }
}

@media (max-width: 768px) {
  .checkout .order .card .date-specification {
    flex-direction: column;
  }
}
@media (max-width: 425px) {
  .checkout .order .buttons {
    flex-direction: column;
    align-items: center;
  }
  .checkout .order .buttons button {
    width: 90%;
  }
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
