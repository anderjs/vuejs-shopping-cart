<template id="navbar">
  <nav class="uk-navbar-container uk-navbar-danger" uk-navbar>
    <div v-bind:title="title" v-text="title" class="navbar-title"></div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    props: {
      title: String
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Antic+Slab');  

  .navbar-title {
    font-family: 'Antic Slab', serif;
    font-size: 1.5em;
    background-color: #212121 !important;
    height: 1.6em;
    color: #F5F5F5 !important;
    display: flex;
    justify-content: center;
  }
</style>

