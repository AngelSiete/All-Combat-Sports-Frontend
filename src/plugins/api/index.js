// import Auth from './resource/auth'
import Luchas from './resource/luchas'

import axios from 'axios'

export default {
  install: (Vue, options) => {

    axios.defaults.baseURL = options.baseURL
    
    Vue.prototype.$api = {
    //  auth: new Auth(axios),
      luchas: new Luchas(axios),
    }
  }
}