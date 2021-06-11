<template>
  <div>
    <fightCard v-for="lucha in luchas" :key="lucha._id" :value="lucha" />
  </div>
</template>

<script>
import fightCard from "../components/partials/fightCard.vue"
export default {
  name:"Home",
  components: {
    fightCard
  },data(){
    return {
      luchas: []
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
