import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProductView from "@/views/ProductView.vue";
import CartView from "@/views/CartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";

export default {
  "/": HomeView,
  "/about": AboutView,
  "/product": ProductView,
  "/cart": CartView,
  "/checkout": CheckoutView,
};
