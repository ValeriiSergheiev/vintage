import Vue from 'vue'
import App from './App.vue'

import TabKiev from './components/tabs/TabKiev'
import TabNY from './components/tabs/TabNY'
import TabGuangzhou from './components/tabs/TabGuangzhou'
import TabBarcelona from './components/tabs/TabBarcelona'

import './assets/fonts.scss'

Vue.config.productionTip = false

Vue.component('tab-kiev', TabKiev)
Vue.component('tab-newyork', TabNY)
Vue.component('tab-guangzhou', TabGuangzhou)
Vue.component('tab-barcelona', TabBarcelona)

new Vue({
  render: h => h(App),
}).$mount('#app')
