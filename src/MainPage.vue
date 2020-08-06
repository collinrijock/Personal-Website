<template>
     <div id="main-page" data-relative-input="true" data-pointer-events="false">
          <img data-depth="0.1" id="logo" src="./assets/cpr_logo.svg"></img>
          <img data-depth="0.1" class="box" src="./assets/whitebox.svg">
          <div data-depth="0.6" id="first-name">
                    <span>C</span><span>o</span><span>l</span><span>l</span><span>i</span><span>n</span>
               </div>
          <div data-depth="0.6" id="last-name">
                    <span>R</span><span>i</span><span>j</span><span>o</span><span>c</span><span>k</span><span>.</span>
               </div>
     </div>
</template>

<script>
global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;
import anime from "animejs";
import Parallax from "parallax-js";
export default {
     data() {
          return {};
     },
     methods: {
          initialAnimation() {
               this.animateName();
               this.initializeParallax();
          },
          animateName() {
               anime({
                    targets: "span",
                    translateY: -100,
                    duration: 1400,
                    delay: anime.stagger(50),
                    opacity: [{ value: 0, duration: 100 }, { value: 1 }],
               });
          },
          initializeParallax() {
               var scene = $("#main-page").get(0);
               var parallaxInstance = new Parallax(scene);
          },
     },
     mounted() {
          this.initialAnimation();
     },
};
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
     overflow: hidden;
     background: #ffea46;
     height: 100vh;
     width: 100vw;
     position: relative;
     display: grid;
     grid-template-columns: repeat(12, 1fr);
     grid-template-rows: repeat(12, 1fr);
     #logo {
          height: 7vh;
          grid-column: 2;
          grid-row: 2;
     }
     .box {
          opacity: 0.8;
          height: 70vh;
          grid-column: 7;
          grid-row: 4;
     }
     span {
          opacity: 0;
          display: block;
          @extend .clear;
          font-family: "tofino";
          color: #65002f;
          font-size: 4rem;
     }
     #last-name {
          grid-column: 10;
          grid-row: 10;
          display: flex !important;
          flex-flow: row nowrap;
          width: 50% !important;
          height: 100% !important;
          position: relative !important;
     }
     #first-name {
          grid-column: 9;
          grid-row: 10 ;
          @extend #last-name;
          padding-right: 2vw;
     }
}
</style>