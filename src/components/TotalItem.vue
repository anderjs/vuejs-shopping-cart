<template>
  <span 
    class="uk-badge relative" 
    v-bind:totalItem="totalItem" 
    v-text="totalItem"
    >
    </span>
</template>

<script>
  export default {
    name: "TotalItem",
    props: {
      totalItem: Number
    }
  }
</script>

<style scoped>
  .relative {
    position: relative;
    top: -30px;
  }
</style>
