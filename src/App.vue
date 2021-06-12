<template>
  <div id="app">
    <Header />
     <router-view/>
    <img alt="Vue logo" src="./assets/logo2.png" class="image is-128x128 is-rounded">
    <HelloWorld msg="Welcome to ALL COMBAT SPORTS"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
// import {routes} from '@/router'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
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
  background-image: "public/fondo.jpg"  ;
  background-position: center center;
  background-repeat:  no-repeat;
}
</style>
