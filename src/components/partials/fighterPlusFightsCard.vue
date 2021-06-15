<template>
  <div class="container my-2">
    <div class="box is-rounded has-background-white">
      <p class=" title is-5 has-text-black">{{value.Data.FirstName +" " + value.Data.LastName}}</p>
      <p class=" title is-6 red is-italic "> {{value.Nickname}}</p>
      <p class=" title is-6 has-text-black"> {{value.WeightClass}}</p>
    </div>
  </div>

</template>
<script>
export default {
  name: "FighterCard",
  props: {
    value: Object
  }
};
</script>
<style>
.red{
  color: #E81F00;
}
</style>