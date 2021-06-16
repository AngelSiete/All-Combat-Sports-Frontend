<template>
  <div>
    <FighterCard  :value="luchador.data.data[0]"/>
    <div v-if="luchasMMA">
    <h1>Peleas MMA</h1>
     <FightCard  v-for="lucha in luchador.data.data[0].PeleasMMA" :key="lucha._id" :value="lucha"/>
     </div>
     <div v-if="luchasBOX">
     <h1>Peleas Boxeo</h1>
     <FightCard v-for="lucha in luchador.data.data[0].PeleasBox" :key="lucha._id" :value="lucha"/>
     </div>
  </div>
</template>

<script>
import FighterCard from "../components/partials/fighterCard.vue"
import FightCard from "../components/partials/fightCard.vue"
export default {
  props: ['luchador_name'],
  name:"Luchador",
  components: {
    FighterCard,
    FightCard
  },data(){
    return {
      luchador: Object,
    }
  },
   async beforeMount() {
    try {
     // this.luchador = await this.$api.luchador.list()
     this.luchador = await this.axios.get("/luchador/" + this.luchador_name);
    } catch (error) {
      console.log(error);
    }
  },
  computed:{
    luchasMMA(){
      if (this.luchador.data.data[0].PeleasMMA != 0){
        return true
      }
      else return false
    },
    luchasBOX(){
      if (this.luchador.data.data[0].PeleasBox != 0){
        return true
      }
      else return false
    }
  }

}
</script>
<style>
h1{
  font-weight: bolder;
  color: black;
  background-color: #E81F00;
}
</style>