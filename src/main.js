import Vue from 'vue'
import routes from './routes'
// import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// new Vue({
//   // router,
//   // store
//   render: h => h(App),
// }).$mount('#app')


const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        // ? require('./pages/' + matchingView + '.vue')
        // : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
