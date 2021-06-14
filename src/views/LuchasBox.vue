<template>
  <div>
    <FightCard v-for="lucha in luchasBox" :key="lucha._id" :value="lucha"/>
     
  </div>
</template>

<script>
import FightCard from "../components/partials/fightCard.vue"
export default {
  name:"LuchasBox",
  components: {
    FightCard
  },data(){
    return {
      luchasBox:[]
    }
  },
   async beforeMount() {
    try {
      this.luchasBox = await this.$api.luchasBox.list()
    } catch (error) {
      console.log(error);
    }
  },
  

}
</script>
