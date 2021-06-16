<template>
  <div>
    <FightCard v-for="lucha in calendario" :key="lucha._id" :value="lucha"/>
     
  </div>
</template>

<script>
import FightCard from "../components/partials/fightCard.vue"
export default {
  name:"Home",
  components: {
    FightCard
  },data(){
    return {
      calendario:[]
    }
  },
   async beforeMount() {
    try {
      this.calendario = await this.$api.calendario.list()
    } catch (error) {
      console.log(error);
    }
  },

}
</script>
