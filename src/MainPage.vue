<template>
     <div id="main-page">
          <img src="./assets/cpr_logo.svg"></img>
          <h1>Collin P Rijock</h1>
     </div>
</template>

<script>
export default {
     data () {
          return {
  
          }
     },
     methods: {
  
     },
     mounted() {
  
     },
}
</script>

<style lang="scss">
@import url("./assets/Tofino Pro Wide/stylesheet.css");
.clear {
     margin: 0px;
     padding: 0px;
}
body {
     @extend .clear;
}
#main-page {
     background: #FFEA46;
     height: 100vh;
     width: 100vw;
     display: grid;
     place-items: center;
     position: relative;
     img {
          height: 6%;
          position: absolute;
          top: 6%;
          left: 6%;

     }
     h1 {
          font-family: 'tofino';
          color: #65002F;
          font-size: 4rem;
     }
}

</style>