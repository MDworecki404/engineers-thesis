<script lang="ts">

    import Map from '@arcgis/core/Map'
    import MapView from '@arcgis/core/views/MapView'
    import esriConfig from '@arcgis/core/config'
    import { onMounted } from 'vue'

    esriConfig.apiKey = 'AAPK6568609d12334beda126e68a83f9cc053TR4Uei1JRWNeorflGviuYx92iXYt6BAJZEOa4Zbb9MMprYAr6oHk0SeuKnmYabu'


        const map = new Map({
            basemap: 'arcgis/imagery'
        })
        const view = new MapView({
            map: map,
            center: [16.57109135732551, 51.35986770935379],
            zoom: 12,
            container: 'app'
        })

</script>
<template lang="pug">

</template>
<style scoped lang="scss">

</style>