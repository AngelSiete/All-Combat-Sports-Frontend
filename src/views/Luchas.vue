<template>
  <div>
    <FightCard v-for="lucha in luchas" :key="lucha._id" :value="lucha"/>
     
  </div>
</template>

<script>
import FightCard from "../components/partials/fightCard.vue"
export default {
  name:"Luchas",
  components: {
    FightCard
  },data(){
    return {
      luchas:[]
    }
  },
   async beforeMount() {
    try {
      this.luchas = await this.$api.luchas.list()
    } catch (error) {
      console.log(error);
    }
  },
  

}
</script>
