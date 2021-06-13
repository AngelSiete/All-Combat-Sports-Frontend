import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ACSApi from './plugins/api/index'

axios.defaults.baseURL = "https://all-combat-sports.herokuapp.com/API"
Vue.use(VueAxios, axios)

Vue.use(ACSApi, {baseURL: "https://all-combat-sports.herokuapp.com/API"})

Vue.filter("dateFormat", (date) => {
  return new Date(date).toLocaleString()
})

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
