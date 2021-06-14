<template>
  <div>
    <FightCard v-for="lucha in luchasMMA" :key="lucha._id" :value="lucha"/>
     
  </div>
</template>

<script>
import FightCard from "../components/partials/fightCard.vue"
export default {
  name:"LuchasMMA",
  components: {
    FightCard
  },data(){
    return {
      luchasMMA:[]
    }
  },
   async beforeMount() {
    try {
      this.luchasMMA = await this.$api.luchasMMA.list()
    } catch (error) {
      console.log(error);
    }
  },
  

}
</script>
