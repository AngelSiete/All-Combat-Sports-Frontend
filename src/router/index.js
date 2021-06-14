import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Luchadores from '../views/Luchadores'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: "Home",
    component: Home,
    

  },
  {
    path: '/luchadores',
    name: 'Luchadores',
    component: Luchadores,
  }
]
const router = new VueRouter({
  mode: 'history',
  base: "http://localhost:8080/",
  // base: process.env.BASE_URL,
  routes 
})




export default router