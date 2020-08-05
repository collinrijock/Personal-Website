import Vue from 'vue'
import App from './MainPage.vue'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) }
}).$mount('#app')
