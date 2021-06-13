<template>
  <div>
    <FightCard />
    <!-- v-for="lucha in calendario" :key="lucha._id"  -->
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
      value: Object
    }
  },
  //  async beforeMount() {
  //   try {
  //     calendario = await this.$api.calendario.list()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  // async asyncData(context){
  //   try{
  //     const calendario = await context.app.$api.calendario.list();
  //     return(calendario)
  //   }catch(error){
  //     console.error(error.message)
  //   }
  // }

}
</script>
