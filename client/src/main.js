// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'

// Pages
import Home from './pages/Home';
import ManageUsers from './pages/ManageUsers';

Vue.config.productionTip = false

const Home_page = { template: '<Home />' }
const ManageUsers_page = { template: '<ManageUsers />' }

const routes = {
  '/': Home,
  '/admin': ManageUsers
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound;
    }
  },
  render (h) { return h(this.ViewComponent) }
});