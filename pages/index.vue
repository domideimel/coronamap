<template>
  <div class="container">
    <covid-19-map />
  </div>
</template>

<script>
  import Map from '~/components/Map'

  export default {
    components: {
      'covid-19-map': Map
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>

<style scoped>

  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
