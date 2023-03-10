<template>
  <div class="cart-view">
    <nav-bar />
    <div class="container">
      <div class="cart">
        <!-- breadcrumbs -->
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/products">
              <b-icon
                icon="house-fill"
                scale="1.25"
                shift-v="1.25"
                aria-hidden="true"
              ></b-icon>
            </a>
          </li>
          <li class="breadcrumb-item">
            <a>Cart </a>
          </li>
        </ol>

        <!-- cart table -->
        <div>
          <div class="cart-table-header">
            <div class="row">
              <div class="col-lg-11">
                <div class="row">
                  <div class="col-lg-7">
                    <h4 style="text-align: left">item</h4>
                  </div>
                  <div class="col-lg-1">
                    <h4>type</h4>
                  </div>
                  <div class="col-lg-1">
                    <h4>size</h4>
                  </div>
                  <div class="col-lg-2">
                    <h4>ammount</h4>
                  </div>
                  <div class="col-lg-1"><h4>price</h4></div>
                </div>
              </div>
            </div>
          </div>

          <div class="cart-table">
            <div class="row center-table-row">
              <div class="col-lg-11">
                <div class="row center-table-row">
                  <div class="col-lg-7">
                    <div class="item">
                      <div class="row center-table-row">
                        <div class="col-5">
                          <img
                            src="@/assets/products/wristband-bracelet.png"
                            alt="item"
                          />
                        </div>
                        <div class="col-7">
                          <div class="title">
                            This bracelet description
                            <span>with some customization</span>
                          </div>
                          <div class="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Porro dolore aliquid odit voluptas autem, a
                            rem magnam, natus quas earum, eos laboriosam.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-1">
                    <div class="data">bracelet</div>
                  </div>
                  <div class="col-lg-1">
                    <div class="data">Medium</div>
                  </div>
                  <div class="col-lg-2">
                    <div class="counter">
                      <button class="subtract" disabled>-</button>
                      <div class="value">1</div>
                      <button class="add">+</button>
                    </div>
                  </div>
                  <div class="col-lg-1">
                    <div class="data">$18.36</div>
                  </div>
                </div>
              </div>
              <!-- Delete icon -->
              <div class="col-lg-1"><div class="delete">X</div></div>
            </div>
          </div>
        </div>

        <!-- Checkout section -->
        <div class="checkout-section">
          <div class="back">
            <svg
              fill="#000000"
              height="20px"
              width="20px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 490 490"
              xml:space="preserve"
            >
              <g>
                <polygon
                  points="242.227,481.919 314.593,407.95 194.882,290.855 490,290.855 490,183.86 210.504,183.86 314.593,82.051 
		242.227,8.081 0,244.996 	"
                />
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </g>
            </svg>
            continue shopping
          </div>

          <div class="promos">
            <div class="apply-promo">
              <div class="input-field">
                <input placeholder="Promo Code" />
                <button>apply</button>
              </div>
            </div>
            <div class="total">
                <div>total</div>
                <div class="price">$18.36</div>
            </div>
            <button class="checkout">checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Breadcrumbs */
.breadcrumb {
  background: transparent;
  margin-top: 30px;
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

/* Table */
.cart .cart-table {
  padding-top: 30px;
}
.cart .center-table-row {
  align-items: center;
}
.cart .cart-table-header h4 {
  font-size: 18px;
  color: #c1c1c1;
  text-transform: capitalize;
  font-weight: normal;
  text-align: center;
}
.cart .cart-table .item {
  padding-right: 15px;
}
.cart .cart-table img {
  width: 100%;
  height: 100%;
}
.cart .cart-table .title {
  font-weight: 600;
  font-size: 20px;
  text-transform: capitalize;
}
.cart .cart-table .title span {
  color: #b07943;
}
.cart .cart-table .description {
  color: #a5a5a5;
  font-size: 15px;
}
.cart .cart-table .data {
  font-size: 18px;
  text-align: center;
  text-transform: capitalize;
}
.cart .cart-table .counter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  padding: 10px 0px;
  border-radius: 5px;
  border: solid 1px #d8d8d8;
  font-size: 20px;
  font-weight: 600;
}
.cart .cart-table .counter .add,
.cart .cart-table .counter .subtract {
  background-color: transparent;
  border: none;
}
.cart .cart-table .delete {
  font-weight: bold;
  cursor: pointer;
}

/* Checkout */
.checkout-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  margin-top: 40px;
}
.checkout-section .back {
  text-transform: capitalize;
  font-size: 17px;
  font-weight: 600;
}
.checkout-section .back svg {
  margin-right: 10px;
}

.checkout-section .promos {
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
}
.checkout-section .promos .input-field {
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  padding: 7px 5px 6px 10px;
}
.checkout-section .promos .input-field input {
  border: none;
  outline: none;
}

.checkout-section button.checkout,
.checkout-section .promos .input-field button {
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #b07943;
  text-transform: capitalize;
  color: #fff;
  border: 1px solid #b07943;
  transition: all 0.5s;
}

.checkout-section button.checkout:hover,
.checkout-section .promos .input-field button:hover {
  background-color: #fff;
  color: #b07943;
  transition: all 0.5s;
}
.checkout-section .total {
    display: flex;
    flex-direction: row;
    gap:10px;
    font-size: 20px;
  font-weight: 300;
  text-transform: capitalize;
}
.checkout-section .total .price {
    font-weight: bold;
}
.checkout-section button.checkout {
    padding: 8px 35px;
}
</style>

<script>
import NavBar from "@/components/Layout/NavBar.vue";

export default {
  name: "CartView",
  data: function () {
    return {};
  },
  components: {
    NavBar,
  },
};
</script>
