<template>
  <div>
    <FighterCard v-for="luchador in luchadores" :key="luchador._id" :value="luchador"/>
     
  </div>
</template>

<script>
import FighterCard from "../components/partials/fighterCard.vue"
export default {
  name:"Luchadores",
  components: {
    FighterCard
  },data(){
    return {
      luchadores:[]
    }
  },
   async beforeMount() {
    try {
      this.luchadores = await this.$api.luchadores.list()
    } catch (error) {
      console.log(error);
    }
  },
  

}
</script>
