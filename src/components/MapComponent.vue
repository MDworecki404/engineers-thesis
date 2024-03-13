<script lang="ts">
import displayMap from '../scripts/displayMap';
import gsap from 'gsap';

const coverAnimation = () =>{
  gsap.to('.cover', {opacity: 0, duration: 2})
  gsap.to('.cover', {visibility: 'hidden', delay: 2})
}

export default {
  mounted: () => {
    displayMap()
    coverAnimation()
  }
}



</script>
<template lang="pug">
.cover
#map
</template>
<style scoped lang="scss">
@import url('https://js.arcgis.com/4.29/esri/themes/light/main.css');
#map{
	width: 100vw;
	height: 100vh;
  border: none;
}

.cover{
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(79, 178, 219, 1);
}
</style>