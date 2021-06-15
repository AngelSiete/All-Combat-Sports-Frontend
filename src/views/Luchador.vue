<template>
  <div>
    <FighterCard  :value="luchador.data.data[0]"/>
    <h1>Peleas MMA</h1>
     <FightCard v-for="lucha in luchador.data.data[0].PeleasMMA" :key="lucha._id" :value="lucha"/>
     <h1>Peleas PeleasBox</h1>
     <FightCard v-for="lucha in luchador.data.data[0].PeleasBox" :key="lucha._id" :value="lucha"/>
     
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
      luchador: Object
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
  

}
</script>
