import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ProductView from "@/views/ProductView.vue";
import CartView from "@/views/CartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import AccountView from "@/views/AccountView.vue";

export default {
  "/": HomeView,
  "/about": AboutView,
  "/login": LoginView,
  "/register": RegisterView,
  "/product": ProductView,
  "/cart": CartView,
  "/checkout": CheckoutView,
  "/account": AccountView,
};
