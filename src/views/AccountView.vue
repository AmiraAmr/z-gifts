<template>
  <div>
    <nav-bar />
    <div class="container">
      <div class="account">
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
            <a>Profile</a>
          </li>
        </ol>

        <h2>my account</h2>
        <div class="account-tabs">
          <div class="row">
            <div class="col-md-4 col-xs-12">
              <div
                class="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  class="nav-link active"
                  id="v-pills-details-tab"
                  data-toggle="pill"
                  data-target="#v-pills-details"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-details"
                  aria-selected="true"
                >
                  <div class="tab-title">
                    <div>your details</div>
                    <div class="d-none d-md-block">
                      <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 12L4 12M20 12L14 18M20 12L14 6"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                <button
                  class="nav-link"
                  id="v-pills-favorites-tab"
                  data-toggle="pill"
                  data-target="#v-pills-favorites"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-favorites"
                  aria-selected="false"
                >
                  <div class="tab-title">
                    <div>favorites</div>
                    <div class="d-none d-md-block">
                      <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 12L4 12M20 12L14 18M20 12L14 6"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                <button
                  class="nav-link"
                  id="v-pills-empty-favorites-tab"
                  data-toggle="pill"
                  data-target="#v-pills-empty-favorites"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-empty-favorites"
                  aria-selected="false"
                >
                  <div class="tab-title">
                    <div>favorites empty</div>
                    <div class="d-none d-md-block">
                      <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 12L4 12M20 12L14 18M20 12L14 6"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                <button
                  class="nav-link"
                  id="v-pills-orders-history-tab"
                  data-toggle="pill"
                  data-target="#v-pills-orders-history"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-orders-history"
                  aria-selected="false"
                >
                  <div class="tab-title">
                    <div>orders history</div>
                    <div class="d-none d-md-block">
                      <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 12L4 12M20 12L14 18M20 12L14 6"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                <button
                  class="nav-link"
                  id="v-pills-address-book-tab"
                  data-toggle="pill"
                  data-target="#v-pills-address-book"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-address-book"
                  aria-selected="false"
                >
                  <div class="tab-title">
                    <div>address book</div>
                    <div class="d-none d-md-block">
                      <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 12L4 12M20 12L14 18M20 12L14 6"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                <button
                  class="nav-link"
                  id="v-pills-new-address-tab"
                  data-toggle="pill"
                  data-target="#v-pills-new-address"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-new-address"
                  aria-selected="false"
                >
                  <div class="tab-title">
                    <div>new-address</div>
                    <div class="d-none d-md-block">
                      <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 12L4 12M20 12L14 18M20 12L14 6"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                <button
                  class="nav-link"
                  id="v-pills-logout-tab"
                  data-toggle="pill"
                  data-target="#v-pills-logout"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-logout"
                  aria-selected="false"
                >
                  <div class="tab-title">
                    <div>logout</div>
                    <div class="d-none d-md-block">
                      <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 12L4 12M20 12L14 18M20 12L14 6"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div class="col-md-8 col-xs-12">
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-details"
                  role="tabpanel"
                  aria-labelledby="v-pills-details-tab"
                >
                  <div class="details">
                    <h3>personal information</h3>
                    <hr />
                    <div class="row">
                      <div class="col-md-6 col-xs-12 field-container">
                        <div class="label">first name</div>
                        <input type="text" placeholder="Mohamed" />
                      </div>
                      <div class="col-md-6 col-xs-12 field-container">
                        <div class="label">last name</div>
                        <input type="text" placeholder="Ahmed" />
                      </div>
                      <div class="col-md-6 col-xs-12 field-container">
                        <div class="label">email</div>
                        <input
                          type="email"
                          placeholder="example@gmail.com"
                          readonly
                          disabled
                        />
                      </div>
                      <div class="col-md-6 col-xs-12 field-container">
                        <div class="label">phone number</div>
                        <input type="phone" placeholder="+1234567890" />
                      </div>
                    </div>
                    <div class="actions">
                      <div class="delete">
                        <a href="#">delete your account</a>
                      </div>
                      <button href="#">save</button>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-favorites"
                  role="tabpanel"
                  aria-labelledby="v-pills-favorites-tab"
                >
                  <div class="favorites">
                    <h3>favorites</h3>
                    <div class="content">
                      <div class="row">
                        <div class="col-md-4 col-sm-6 col-xs-12">
                          <div class="item">
                            <div class="item-img">
                              <img
                                src="@/assets/Home/wide-brown-studded-cuff-bracelet@small@3x.png"
                                alt="bracelte"
                              />
                            </div>
                            <div class="description">
                              Worn Braided Custom Leather Bracelet
                            </div>
                            <div class="price">$15.95</div>
                          </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                          <div class="item">
                            <div class="item-img">
                              <img
                                src="@/assets/Home/wide-brown-studded-cuff-bracelet@small@3x.png"
                                alt="bracelte"
                              />
                            </div>
                            <div class="description">
                              Worn Braided Custom Leather Bracelet
                            </div>
                            <div class="price">$15.95</div>
                          </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                          <div class="item">
                            <div class="item-img">
                              <img
                                src="@/assets/Home/wide-brown-studded-cuff-bracelet@small@3x.png"
                                alt="bracelte"
                              />
                            </div>
                            <div class="description">
                              Worn Braided Custom Leather Bracelet
                            </div>
                            <div class="price">$15.95</div>
                          </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                          <div class="item">
                            <div class="item-img">
                              <img
                                src="@/assets/Home/wide-brown-studded-cuff-bracelet@small@3x.png"
                                alt="bracelte"
                              />
                            </div>
                            <div class="description">
                              Worn Braided Custom Leather Bracelet
                            </div>
                            <div class="price">$15.95</div>
                          </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                          <div class="item">
                            <div class="item-img">
                              <img
                                src="@/assets/Home/wide-brown-studded-cuff-bracelet@small@3x.png"
                                alt="bracelte"
                              />
                            </div>
                            <div class="description">
                              Worn Braided Custom Leather Bracelet
                            </div>
                            <div class="price">$15.95</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-empty-favorites"
                  role="tabpanel"
                  aria-labelledby="v-pills-empty-favorites-tab"
                >
                  <div class="empty-favorites">
                    <h3>favorites</h3>
                    <hr />
                    <div class="content">
                      <div class="heart">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="78.843"
                          height="68.427"
                          viewBox="0 0 78.843 68.427"
                        >
                          <g data-name="Group 3017">
                            <path
                              data-name="Path 68"
                              d="M495.25 366.483q-7.759-7.754-15.462-15.581-7.265-7.346-14.547-14.666a19.844 19.844 0 0 1 28.187-27.936l4.481 4.489 4.491-4.489a19.841 19.841 0 1 1 28.187 27.932q-7.329 7.336-14.589 14.712-7.7 7.782-15.427 15.549l-2.66 2.361z"
                              transform="translate(-458.489 -301.424)"
                              style="
                                fill: none;
                                stroke: #b07943;
                                stroke-linejoin: round;
                                stroke-miterlimit: 10;
                                stroke-width: 2px;
                              "
                            />
                          </g>
                        </svg>
                      </div>
                      <h4>default favorites</h4>
                      <p>your favorites is currently empty</p>
                      <button href="/home">explore now</button>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-orders-history"
                  role="tabpanel"
                  aria-labelledby="v-pills-orders-history-tab"
                >
                  <div class="orders-history">
                    <h3>orders history</h3>
                    <hr />
                    <div class="item">
                      <div class="row align-items-center">
                        <div class="col-lg-3 col-sm-6 col-xs-12">
                          <img
                            src="@/assets/Home/wide-brown-studded-cuff-bracelet@small@3x.png"
                            alt="bracelet"
                          />
                        </div>
                        <div class="col-lg-3 col-sm-6 col-xs-12">
                          <div class="description">
                            <div class="title">product name</div>
                            <div class="status success">successful</div>
                          </div>
                        </div>
                        <div class="col-lg-2 col-sm-4 col-xs-4">$15.00</div>
                        <div class="col-lg-1 col-sm-2 col-xs-4">
                          <div class="quantity">2</div>
                        </div>
                        <div class="col-lg-2 col-sm-4 col-xs-4">$30.00</div>
                        <div class="col-lg-1 col-sm-2 col-xs-4">
                          <div class="details">
                            <a href="#">view details</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div class="item">
                      <div class="row align-items-center">
                        <div class="col-md-3 col-sm-6 col-xs-12">
                          <img
                            src="@/assets/Home/wide-brown-studded-cuff-bracelet@small@3x.png"
                            alt="bracelet"
                          />
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-12">
                          <div class="description">
                            <div class="title">product name</div>
                            <div class="status fail">cancelled</div>
                          </div>
                        </div>
                        <div class="col-md-2 col-sm-4 col-xs-4">$17.36</div>
                        <div class="col-md-1 col-sm-2 col-xs-4">
                          <div class="quantity">1</div>
                        </div>
                        <div class="col-md-2 col-sm-4 col-xs-4">$17.36</div>
                        <div class="col-md-1 col-sm-2 col-xs-4">
                          <div class="details">
                            <a href="#">view details</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-address-book"
                  role="tabpanel"
                  aria-labelledby="v-pills-address-book-tab"
                >
                  <div class="address-book">
                    <h3>address book</h3>
                    <hr />
                    <div class="address">
                      <div class="title">Home</div>
                      <div class="address-details">
                        Street Name, City name, 1st Floor, Appartment number 10
                      </div>
                      <div class="actions">
                        <div class="row align-items-center">
                          <div class="col-md-3">
                            <button class="edit">edit details</button>
                          </div>
                          <div class="col-1"><hr /></div>
                          <div class="col-md-3">
                            <button class="delete">delete address</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="address">
                      <div class="title">Work</div>
                      <div class="address-details">
                        Street Name, City name, 1st Floor, Appartment number 5
                      </div>
                      <div class="actions">
                        <div class="row align-items-center">
                          <div class="col-md-3">
                            <button class="edit">edit details</button>
                          </div>
                          <div class="col-1"><hr /></div>
                          <div class="col-md-3">
                            <button class="delete">delete address</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="add">
                      <button>add new address</button>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-new-address"
                  role="tabpanel"
                  aria-labelledby="v-pills-new-address-tab"
                >
                  <div class="new-address">
                    <h3>address book</h3>
                    <hr />
                    <div class="address-info">
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
                      <div class="save">
                        <button>save</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-logout"
                  role="tabpanel"
                  aria-labelledby="v-pills-logout-tab"
                >
                  ...
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

.account h2 {
  font-size: 35px;
  color: #0c0c0c;
  text-transform: capitalize;
  margin-bottom: 30px;
}

.account .nav-pills .nav-link {
  text-transform: capitalize;
  font-size: 25px;
  padding: 20px 30px;
  text-align: left;
  background-color: #f1f1f1;
  border-radius: 0;
}
::v-deep .tab-link-class {
  color: #000;
}
::v-deep .nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: #b07943;
  border-color: #b07943;
}
.account .nav-pills .tab-title {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
}
.account .nav-pills .nav-link svg {
  stroke: #d4d4d4;
}
::v-deep .nav-pills .nav-link.active svg {
  stroke: #fff;
}

@media (max-width: 768px) {
  .account-tabs .tab-content {
    padding-top: 30px;
  }
}

/* all tabs titles and hr */
.details h3,
.favorites h3,
.empty-favorites h3,
.orders-history h3,
.address-book h3,
.new-address h3 {
  font-size: 37px;
  text-transform: capitalize;
  font-weight: normal;
}
hr {
  width: 100%;
  margin-bottom: 20px;
}

/* ---------------- */

/* Details tab */
.details {
  display: flex;
  flex-direction: column;
}
.details .label {
  font-size: 18px;
  text-transform: capitalize;
  margin-bottom: 15px;
}
.details input {
  border-radius: 4px;
  border: solid 1px #c8c8c8;
  color: #b5b5b5;
  font-size: 15px;
  width: 100%;
  padding: 20px 18px;
  margin-bottom: 20px;
}
.details input:read-only {
  background-color: #dcdcdc;
}
.details .actions {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.details .actions .delete a {
  color: #ce2c2c;
  transition: all o.5s;
  font-size: 20px;
  text-transform: capitalize;
  text-decoration: underline;
}
.details .actions .delete a:hover {
  opacity: 0.7;
  transition: all o.5s;
}
.details .actions button {
  font-size: 20px;
  color: #fff;
  padding: 10px 50px;
  width: 35%;
  border: 2px solid #b07943;
  border-radius: 5px;
  background-color: #b07943;
  transition: all 0.5s;
  text-transform: capitalize;
}
.details .actions button:hover {
  color: #b07943;
  background-color: #fff;
  transition: all 0.5s;
}

@media (max-width: 768px) {
  .details .actions {
    flex-direction: column;
  }

  .details .actions button {
    width: 100%;
  }
}

/* Favorites */
.favorites .content {
  padding: 30px 0;
}
.favorites .content .item .item-img img {
  width: 100%;
  height: 100%;
}

.favorites .content .item .description {
  font-size: 14px;
}
.favorites .content .item .price {
  font-size: 14px;
  margin: 3px 0 20px;
}

/* Empty Favorites */
.empty-favorites .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-transform: capitalize;
}
.empty-favorites .content .heart {
  border: solid 1px #56bfa4;
  border-radius: 50%;
  padding: 32px 24px 28px;
}
.empty-favorites .content h4 {
  font-size: 37px;
  font-weight: 500;
}
.empty-favorites .content p {
  font-size: 22px;
  text-align: center;
}
.empty-favorites .content button {
  font-size: 20px;
  font-weight: 500;
  border-radius: 4px;
  border: 2px solid #b07943;
  background-color: #b07943;
  color: #fff;
  text-transform: capitalize;
  padding: 15px 40px;
  width: 50%;
  transition: all 0.5s;
}
.empty-favorites .content button:hover {
  background-color: #fff;
  color: #b07943;
  transition: all 0.5s;
}
@media (max-width: 426px) {
  .empty-favorites .content button {
    width: 100%;
  }
}

/* Orders History */
.orders-history .item {
  text-transform: capitalize;
  font-size: 20px;
}
.orders-history .item img {
  width: 100%;
  height: 100%;
}
.orders-history .item .description {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.orders-history .item .quantity {
  color: #cdcdd2;
  font-weight: 600;
}
.orders-history .item .description .status {
  font-size: 15px;
}

.orders-history .item .description .status.success {
  color: #1ca112;
}
.orders-history .item .description .status.fail {
  color: #ce2c2c;
}
.orders-history .item .details a {
  font-size: 15px;
  color: #b07943;
}

/* Address Book */
.address-book .address {
  padding: 25px 30px;
  border-radius: 8px;
  border: solid 1px #dcdcdc;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 25px;
}
.address-book .title {
  font-size: 20px;
  font-weight: bold;
  color: #b07943;
}
.address-book .address-details {
  font-size: 20px;
}
.address-book .actions button {
  background-color: transparent;
  border: none;
  font-size: 18px;
  text-transform: capitalize;
  transition: all 0.5s;
}
.address-book .actions button:hover {
  opacity: 0.5;
}
.address-book .actions button.edit {
  color: #33ccff;
}
.address-book .actions button.delete {
  color: #ff1414;
}
.address-book .actions hr {
  transform: rotate(90deg);
}
.address-book .add {
  display: flex;
  justify-content: flex-end;
}
.address-book .add button {
  font-size: 20px;
  color: #fff;
  background-color: #b07943;
  border: 2px solid #b07943;
  border-radius: 5px;
  padding: 10px;
  width: 45%;
  text-transform: capitalize;
  margin: 20px 0;
  white-space: nowrap;
  transition: all 0.5s;
}

.address-book .add button:hover {
  background-color: #fff;
  color: #b07943;
  transition: all 0.5s;
}
@media (max-width: 425px) {
  .address-book .actions {
    margin: 15px 0;
  }
  .address-book .actions hr {
    display: none;
  }
  .address-book .add button {
    width: 100%;
  }
}

/* New Address */
.new-address .address-info input {
  width: 100%;
  border: solid 1px #d8d8d8;
  border-radius: 5px;
  padding: 15px 25px;
  margin-bottom: 25px;
}
.new-address .address-info .save {
  display: flex;
  justify-content: flex-end;
}
.new-address .address-info .save button {
  font-size: 20px;
  color: #fff;
  background-color: #b07943;
  border: 2px solid #b07943;
  border-radius: 5px;
  padding: 10px;
  width: 35%;
  text-transform: capitalize;
  margin: 20px 0;
  white-space: nowrap;
  transition: all 0.5s;
}

.new-address .address-info .save button:hover {
  background-color: #fff;
  color: #b07943;
  transition: all 0.5s;
}
@media (max-width: 425px) {
  .new-address .address-info .save button {
    width: 100%;
  }
}
</style>

<script>
import NavBar from "@/components/Layout/NavBar.vue";
export default {
  name: "AccountView",
  components: {
    NavBar,
  },
};
</script>
