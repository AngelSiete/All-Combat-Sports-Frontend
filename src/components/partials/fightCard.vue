<template>
  <div class="container">
    <div class="box is-rounded">
      <p class=" title is-5">{{value.Name}}</p>
      <p class=" title is-6">{{value.DateTime}}</p>
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