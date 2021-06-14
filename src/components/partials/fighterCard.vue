<template>
  <div class="container">
    <div class="box is-rounded">
      <p class=" title is-5">{{value.FirstName +" " + value.LastName}}</p>
      <p class=" title is-6"> {{value.WeightClass}}</p>
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