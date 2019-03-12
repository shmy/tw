import 'whatwg-fetch' // A window.fetch JavaScript polyfill https://github.com/github/fetch
import Vue from 'vue' // The Progressive JavaScript Framework https://vuejs.org/
import App from './App.vue'
import router from './router'
import '@/assets/style.scss'
import '@/assets/font-icons/fonts.css'
import clickOutside from '@/directives/clickoutside'
Vue.config.productionTip = false
Vue.directive('clickoutside', clickOutside)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
