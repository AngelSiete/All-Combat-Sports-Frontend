<template>
  <div id="app" class= "has-background-black" >
    <Header/>
     <router-view class= "has-background-black"/>
    <div  class="is-red">
    <strong > All combat sports 1.0.0 © Todos los derechos reservados</strong>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

import {routes} from "./router/index"
export default {
  name: "App",
  data(){
    return {
     
    }
  },
  components: {
    
    Header,
   
  }
}
</script>

<style>
#app {
  height: 100vh;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font-family: 'Barlow Condensed', sans-serif;
  text-align: center;
}

.is-red{
  background-color: #E81F00;
}
</style>
</style>


