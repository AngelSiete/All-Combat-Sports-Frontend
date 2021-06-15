import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Luchadores from '../views/Luchadores'
import Luchador from "../views/Luchador"
import Luchas from '../views/Luchas'
import LuchasBox from '../views/LuchasBox'
import LuchasMMA from '../views/LuchasMMA'

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
  },{
    path: '/luchador/:luchador_name',
    name: 'Luchador',
    component: Luchador,
    props: true
  },
  {
    path: '/luchas',
    name: 'Luchas',
    component: Luchas,
  },
  {
    path: '/luchasBox',
    name: 'LuchasBox',
    component: LuchasBox,
  },
  {
    path: '/luchasMMA',
    name: 'LuchasMMA',
    component: LuchasMMA,
  }
]
const router = new VueRouter({
  mode: 'history',
  // base: "http://localhost:8080/",
  // base: process.env.BASE_URL,
  routes 
})




export default router