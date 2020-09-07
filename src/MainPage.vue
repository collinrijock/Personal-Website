<template>
     <div id="main-page">
          <section id="hero">
               <div class="horizontal-div">
                    <h1>Collin Rijock</h1>
                    <h3>Software Developer</h3>
                    <p>I'm a dev from Miami studying CS at Stony Brook University.</p>
               </div>
               <div class="horizontal-div">
                    <img src="./assets/me.png">
               </div>
          </section>
          <section>
               <h1>Skills</h1>
               <h1>Projects</h1>
               <h1>Extras</h1>
          </section>
     </div>
</template>

<script>
export default {
     data() {
          return {
          }
     },
     methods: {
     },
}
</script>

<style lang="scss">
$medium: #757575;
.clear {
     margin: 0px;
     padding: 0px;
}
body {
     @extend .clear;
     font-family: system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
     color:#292929; 
}

#main-page {
     background: white;
     width: 100vw;
     display: flex;
     flex-flow: column nowrap;
     padding: 9vh 19vw;
     box-sizing: border-box;

     #hero {
          display: flex;
          flex-flow: row wrap;
          .horizontal-div {
               h1 {
                    @extend .clear;
                    font-size: 4rem;
               }
               h3 {
                    @extend h1;
                    color: $medium;
                    font-size: 2rem;
                    font-weight: 600;
                    margin-top: 15px;
               }
               img {
                    height: 260px;
                    border-radius: 7px;
               }
          }
         .horizontal-div + .horizontal-div {
              margin-left: auto;
              margin-top: 15px;
         } 
     }
}

</style>