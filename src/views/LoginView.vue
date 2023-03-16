<template>
  <div>
    <nav-bar />
    <div class="login">
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
            <h3>Log in</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              officia id molestiae, aliquid ea a iure saepe atque? Aliquid
              laudantium a quia placeat. Totam porro qui perspiciatis, quos
              sequi recusandae!
            </p>
            <div class="fields">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <div class="options">
                <div class="check">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                  Keep me signed in
                </div>
                <div class="forget-pass">
                  <a href="/reset-password">forgot password?</a>
                </div>
              </div>
            </div>
            <div class="login-media">
              <button class="facebook" href="//facebook.com" target="_blank">
                <svg
                  fill="#FFF"
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"
                  />
                </svg>
                Facebook
              </button>
              <button class="gmail" href="//gmail.com" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Gmail"
                  width="30px"
                  height="30px"
                  role="img"
                  viewBox="0 0 512 512"
                >
                  <path fill="#f2f2f2" d="M120 392V151.075h272V392" />
                  <path fill-opacity=".05" d="M256 285L120 392l-4-212" />
                  <path
                    fill="#d54c3f"
                    d="M120 392H97c-12 0-22-10-22-23V143h45z"
                  />
                  <path fill-opacity=".08" d="M317 392h77V159H82" />
                  <path fill="#f2f2f2" d="M97 121h318L256 234" />
                  <path
                    fill="#b63524"
                    d="M392 392h23c12 0 22-10 22-23V143h-45z"
                  />
                  <path
                    fill="none"
                    stroke="#de5145"
                    stroke-linecap="round"
                    stroke-width="44"
                    d="M97 143l159 115 159-115"
                  />
                </svg>
                Gmail
              </button>
            </div>
            <button class="login">Login</button>
            <div class="register">
              Not a memeber yet? <a href="/register">Registeration</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login {
  padding: 40px 0;
}
.login .back {
  font-size: 17px;
  font-weight: 600;
  text-transform: capitalize;
}

.login .back a {
  color: #000;
  text-decoration: none;
}

.login .body {
  text-align: center;
  padding: 30px 25%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.login .body h3 {
  font-size: 28px;
  font-weight: 600;
}
.login .body p {
  font-size: 13px;
  color: #7d7d7d;
  width: 80%;
  line-height: 1.92;
}
.login .fields {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}
.login .fields input {
  padding: 15px 20px;
  font-size: 16px;
  color: #808080;
  border: solid 1px #d8d8d8;
  border-radius: 5px;
}
.login .fields .options {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  font-size: 16px;
}
.login .fields .options .forget-pass a {
  color: #000;
  opacity: 0.6;
  text-transform: capitalize;
  transition: all 0.5s;
}
.login .fields .options .forget-pass a:hover {
  text-decoration: none;
  opacity: 1;
  transition: all 0.5s;
}

.login .body .login-media {
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.login .body .login-media button {
  width: 50%;
  padding: 23px 40px;
  border-radius: 5px;
  border-color: transparent;
  font-size: 17px;
  font-weight: 600;
  white-space: nowrap;
  text-align: center;
  transition: all 0.5s;
}
.login .body .login-media button.facebook {
  background-color: #3b5998;
  color: #fff;
}
.login .body .login-media button.gmail {
  background-color: #fff;
  color: #000;
  border-color: #f1584d;
}
.login .body .login-media button:hover {
  background-color: #000;
  border-color: #000;
  color: #fff;
}
.login .body button.login {
  color: #fff;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: #b07943;
  width: 100%;
  padding: 23px 40px;
  font-size: 20px;
  font-weight: 600;
}
.login .body .register {
  font-size: 18px;
}
.login .body .register a {
  font-weight: 600;
  color: #000;
}

@media (max-width: 768px) {
  .login .body {
    padding: 30px;
  }
  .login .body p {
    width: 100%;
  }
  .login .body .login-media {
    flex-direction: column;
    margin-bottom: 15px;
  }

  .login .body .login-media button {
    width: 100%;
  }
}
@media (max-width: 425px) {
  .login .fields .options {
    flex-direction: column;
  }
}
</style>

<script>
import NavBar from "@/components/Layout/NavBar.vue";
export default {
  name: "LoginView",
  components: {
    NavBar,
  },
};
</script>
