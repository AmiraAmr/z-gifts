<template>
  <div>
    <nav-bar />
    <div class="register">
      <div class="container">
        <div class="back">
          <a href="/">
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              id="left-arrow"
              xmlns="http://www.w3.org/2000/svg"
              class="icon line"
            >
              <path
                id="primary"
                d="M21,12H3M6,9,3,12l3,3"
                style="
                  fill: none;
                  stroke: rgb(0, 0, 0);
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 1.5;
                "
              ></path>
            </svg>
            Back to website
          </a>
        </div>

        <div class="container">
          <div class="body">
            <h3>Create an account</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              officia id molestiae, aliquid ea a iure saepe atque? Aliquid
              laudantium a quia placeat. Totam porro qui perspiciatis, quos
              sequi recusandae!
            </p>
            <div class="fields">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <div class="check">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                I agree to the Google Terms of Service and Privacy Policy
              </div>
            </div>
            <button class="register">Register</button>
            <div class="register">
              Already a memeber? <a href="/login">Log In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register {
  padding: 40px 0;
}
.register .back {
  font-size: 17px;
  font-weight: 600;
  text-transform: capitalize;
}

.register .back a {
  color: #000;
  text-decoration: none;
}
.register .body {
  text-align: center;
  padding: 30px 25%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.register .body h3 {
  font-size: 28px;
  font-weight: 600;
}
.register .body p {
  font-size: 13px;
  color: #7d7d7d;
  width: 80%;
  line-height: 1.92;
}
.register .fields {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}
.register .fields input {
  padding: 15px 20px;
  font-size: 16px;
  color: #808080;
  border: solid 1px #d8d8d8;
  border-radius: 5px;
}

.register .body button.register {
  color: #fff;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: #b07943;
  width: 100%;
  padding: 23px 40px;
  font-size: 20px;
  font-weight: 600;
}
.register .body .register {
  font-size: 18px;
}
.register .body .register a {
  font-weight: 600;
  color: #000;
}

@media (max-width: 768px) {
  .register .body {
    padding: 30px;
  }
  .register .body p {
    width: 100%;
  }
}
</style>

<script>
import NavBar from "@/components/Layout/NavBar.vue";
export default {
  name: "RegisterView",
  components: {
    NavBar,
  },
};
</script>
