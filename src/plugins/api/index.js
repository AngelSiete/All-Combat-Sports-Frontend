// import Auth from './resource/auth'
import Luchas from './resource/luchas'
import Calendario from "./resource/calendario"
import Luchadores from "./resource/luchadores"
import axios from 'axios'

export default {
  install: (Vue, options) => {
      axios.defaults.baseURL = options.baseURL
      
      Vue.prototype.$api = {
             luchas: new Luchas(axios),
             calendario: new Calendario(axios),
             luchadores: new Luchadores(axios)
          // auth: new Auth(axios),
          // products: new Product(axios), 
          // orders: new Order(axios)
      }
  }
}