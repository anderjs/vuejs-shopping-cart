// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './route'
import BootstrapVue from 'bootstrap-vue';
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
import './css/bootstrap.css';
import '@vuikit/theme';

// Middlewares
Vue.use(BootstrapVue);
Vue.use(VuikitIcons);
Vue.use(Vuikit);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  BootstrapVue,
}).$mount('#app')