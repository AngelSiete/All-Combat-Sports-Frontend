<template>
  <div class="container my-2">
    <div class="box is-rounded has-background-white">
      <p class=" title is-5 has-text-dark">{{value.Name}}</p>
      <br>
      <p class=" title is-6 has-text-dark">{{value.DateTime|dateFormat}}</p>
    </div>
  </div>

</template>
<script>
export default {
  name: "FightCard",
  props: {
    value: Object
  }
};
</script>