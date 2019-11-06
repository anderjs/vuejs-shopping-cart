import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Router)
Vue.use(BootstrapVue)

/**
 * @implements Component
 */
import App from '../App.vue'

const routes = [
  { path: '/', component: App },
]

export default new Router({
  routes,
  mode: 'history'
})
