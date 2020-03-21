<template>
  <mapbox
    :access-token="accessToken"
    :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-96, 37.8],
        zoom: 3,
      }"
  />
</template>

<script>
  export default {
    name: 'Map',
    data() {
      return {
        accessToken: process.env.ACCESS_TOKEN
      }
    }
  }
</script>

<style scoped>
  #map {
    width: 100%;
    height: 100%;
  }
</style>
