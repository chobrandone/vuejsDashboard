import Vue from 'vue'
import App from './App.vue'
import Dashboard from './views/Dashboard.vue'
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from './router'
Vue.config.productionTip = false

const routes = {
  '/dashboard': Dashboard
}
new Vue({
  data: {
    currentRoute: window.location.pathname
  },

  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || Dashboard
    }
  },

  router,
  render: h => h(App)
}).$mount('#app')
