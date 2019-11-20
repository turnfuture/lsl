import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import globalComponents from './components/basic/globalComponents.js'
Vue.use(globalComponents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
