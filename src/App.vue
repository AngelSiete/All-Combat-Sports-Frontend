<template>
  <div id="app" class= "has-background-black" style="background-image: url(public/fondo.jpg);">

    <Header  />

     <router-view class= "has-background-black"/>
    
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>


