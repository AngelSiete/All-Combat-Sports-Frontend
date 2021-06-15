// import Auth from './resource/auth'
import Luchas from './resource/luchas'
import LuchasBox from "./resource/luchasBox"
import LuchasMMA from "./resource/luchasMMA"
import Calendario from "./resource/calendario"
import Luchadores from "./resource/luchadores"
import Luchador from "./resource/luchador"
import axios from 'axios'

export default {
  install: (Vue, options) => {
      axios.defaults.baseURL = options.baseURL
      
      Vue.prototype.$api = {
             luchas: new Luchas(axios),
             luchasBox: new LuchasBox(axios),
             luchasMMA: new LuchasMMA(axios),
             calendario: new Calendario(axios),
             luchadores: new Luchadores(axios),
             luchador: new Luchador(axios)
          // auth: new Auth(axios),
          // products: new Product(axios), 
          // orders: new Order(axios)
      }
  }
}