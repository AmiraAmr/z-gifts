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
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  data-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
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
                  id="v-pills-messages-tab"
                  data-toggle="pill"
                  data-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Messages
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
                </button>
                <button
                  class="nav-link"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  data-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  Settings
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
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
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
  padding: 30px;
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

/* Details tab */
.details {
  display: flex;
  flex-direction: column;
}
.details h3 {
  font-size: 37px;
  text-transform: capitalize;
  font-weight: normal;
}
.details hr {
  width: 100%;
  margin-bottom: 20px;
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
  border: 1px solid #b07943;
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
