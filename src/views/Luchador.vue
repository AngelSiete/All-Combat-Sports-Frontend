<template>
  <div>
    <FighterCard v-bind="luchador" :key="luchador._id" :value="luchador"/>
     
  </div>
</template>

<script>
import FighterCard from "../components/partials/fighterCard.vue"
export default {
  name:"Luchador",
  components: {
    FighterCard
  },data(){
    return {
      luchador: Object
    }
  },
   async beforeMount() {
    try {
      this.luchador = await this.$api.luchador.list()
    } catch (error) {
      console.log(error);
    }
  },
  

}
</script>
