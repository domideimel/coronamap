<template>
  <mapbox
    :access-token="accessToken"
    :map-options="{
        style: 'mapbox://styles/mapbox/light-v10',
        center: [10.018343,51.133481],
        zoom: 2
      }"
    @map-init="init"
  />
</template>

<script>
  import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'

  export default {
    name: 'Map',
    data () {
      return {
        accessToken: process.env.ACCESS_TOKEN
      }
    },
    computed: {
      getCountries () {
        const { data: { countries } } = this.$store.state.countries
        return countries
      }
    },
    methods: {
      init (map) {
        map.addControl(
          new MapboxGeocoder({
            mapboxgl: mapboxgl,
            accessToken: this.accessToken
          })
        )
      }
    },
    async beforeMount () {
      await this.$store.dispatch('GET_COUNTRIES')
    }
  }
</script>

<style scoped>
  #map {
    width: 100%;
    height: 100%;
  }
</style>
