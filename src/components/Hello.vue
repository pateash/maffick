<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <!--<h2>Essential Links</h2>-->
    <!--<ul>-->
      <!--<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>-->
      <!--<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>-->
      <!--<li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>-->
      <!--<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>-->
      <!--<br>-->
      <!--<li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>-->
    <!--</ul>-->
    <!--<h2>Ecosystem</h2>-->
    <!--<ul>-->
      <!--<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>-->
      <!--<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>-->
      <!--<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>-->
      <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>-->
    <!--</ul>-->
    <section class="content">
      <h2 class="content__title">_003</h2>
      <div class="grid grid--effect-hamal">
        <a href="#" class="grid__item grid__item--c1">
          <div class="stack">
            <div class="stack__deco"></div>
            <div class="stack__deco"></div>
            <div class="stack__deco"></div>
            <div class="stack__deco"></div>
            <div class="stack__figure">
              <img class="stack__img" src="../assets/1.png" alt="Image" />
            </div>
          </div>
          <div class="grid__item-caption">
            <h3 class="grid__item-title">anaerobic</h3>
            <div class="column column--left">
              <span class="column__text">Period</span>
              <span class="column__text">Subjects</span>
              <span class="column__text">Result</span>
            </div>
            <div class="column column--right">
              <span class="column__text">2045</span>
              <span class="column__text">133456</span>
              <span class="column__text">Positive</span>
            </div>
          </div>
        </a>
        <a href="#" class="grid__item grid__item--c2">
          <div class="stack">
            <div class="stack__deco"></div>
            <div class="stack__deco"></div>
            <div class="stack__deco"></div>
            <div class="stack__deco"></div>
            <div class="stack__figure">
              <img class="stack__img" src="../assets/2.png" alt="Image" />
            </div>
          </div>
          <div class="grid__item-caption">
            <h3 class="grid__item-title">exothermic</h3>
            <div class="column column--left">
              <span class="column__text">Period</span>
              <span class="column__text">Subjects</span>
              <span class="column__text">Result</span>
            </div>
            <div class="column column--right">
              <span class="column__text">2045</span>
              <span class="column__text">133456</span>
              <span class="column__text">Positive</span>
            </div>
          </div>
        </a>
        <a href="#" class="grid__item grid__item--c3">
          <div class="stack">
            <div class="stack__deco"></div>
            <div class="stack__deco"></div>
            <div class="stack__deco"></div>
            <div class="stack__deco"></div>
            <div class="stack__figure">
              <img class="stack__img" src="../assets/3.png" alt="Image" />
            </div>
          </div>
          <div class="grid__item-caption">
            <h3 class="grid__item-title">diatomic</h3>
            <div class="column column--left">
              <span class="column__text">Period</span>
              <span class="column__text">Subjects</span>
              <span class="column__text">Result</span>
            </div>
            <div class="column column--right">
              <span class="column__text">2045</span>
              <span class="column__text">133456</span>
              <span class="column__text">Positive</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
  import HamalFx from '../anim';

  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    mounted() {
      console.log('component has been created', document);


      [].slice.call(document.querySelectorAll('.grid--effect-hamal > .grid__item')).forEach(function(stackEl) {
        new HamalFx(stackEl);
      });
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}



  /*for the animation*/
.hello {
  background-color: #2c3e50;
}


*,
*::after,
*::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: 'Overpass Mono', monospace;
  color: #edecf2;
  background: #37373e;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  color: #ff3d53;
  outline: none;
  transition: color 0.2s;
}

a:hover,
a:focus {
  color: #fff;
}

.hidden {
  position: absolute;
  overflow: hidden;
  width: 0;
  height: 0;
  pointer-events: none;
}

/* Icons */
.icon {
  display: block;
  width: 1.5em;
  height: 1.5em;
  margin: 0 auto;
  fill: currentColor;
}

.message-mobile {
  font-size: 0.85em;
  display: none;
  width: 100%;
  padding: 0.5em;
  text-align: center;
  background: #ff3d53;
}

/* Header */
.codrops-header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: 1.5em 1.5em 4em;
  text-align: left;
}

.codrops-header__title {
  font-size: 1.15em;
  margin: 0;
  padding: 0 0.5em;
}

.codrops-header__tagline {
  font-size: 0.85em;
  width: 100%;
  margin: 0;
  color: #b0adad;
}

.codrops-header__tagline::before {
  content: '> ';
}

.github {
  font-size: 0.85em;
  font-weight: bold;
  margin: 0 0 0 auto;
}

/* Top Navigation Style */
.codrops-links {
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
}

.codrops-links::after {
  content: '';
  position: absolute;
  top: 20%;
  left: 50%;
  width: 1px;
  height: 60%;
  background: #b0adad;
  transform: rotate3d(0, 0, 1, 22.5deg);
}

.codrops-icon {
  display: inline-block;
  margin: 0.25em 0 0.25em 0.25em;
  padding: 0.35em 0 0.35em 0.35em;
}

.codrops-icon:first-child {
  margin: 0.25em 0.25em 0.25em 0;
  padding: 0.35em 0.35em 0.35em 0;
}

/* Content */
.content {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 0 1em;
}

.content:not(:first-child) {
  padding: 4em 0;
}

.content.content--padded {
  padding: 4em 0 8em;
}

.content__title {
  font-size: 0.85em;
  position: absolute;
  top: 18%;
  left: 2em;
  width: 5em;
  margin: 0.75em 0;
  color: #b0adad;
}

/* Grid */
.grid {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 7em;
  perspective: 800px;
  perspective-origin: 50% 100%;
}

.grid__item {
  position: relative;
  display: block;
  flex: none;
  width: 250px;
  margin: 1.5em 2vw;
  cursor: default;
  transform-style: preserve-3d;
}

.grid__item:hover,
.grid__item:focus {
  outline: none;
}

.grid__item--c1,
.grid__item--c1:hover,
.grid__item--c1:focus {
  color: #52649e;
}

.grid__item--c2,
.grid__item--c2:hover,
.grid__item--c2:focus {
  color: #ee7074;
}

.grid__item--c3,
.grid__item--c3:hover,
.grid__item--c3:focus {
  color: #f7f295;
}

.stack {
  position: relative;
  width: 100%;
  height: 200px;
  transform-style: preserve-3d;
}

.stack__deco {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: currentColor;
  transform-origin: 50% 100%;
}

.stack__deco:first-child {
  opacity: 0.2;
}

.stack__deco:nth-child(2) {
  opacity: 0.4;
}

.stack__deco:nth-child(3) {
  opacity: 0.6;
}

.stack__deco:nth-child(4) {
  opacity: 0.8;
}

.stack__figure {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transform-origin: 50% 100%;
}

.stack__img {
  position: relative;
  display: block;
  flex: none;
}

.grid__item-caption {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  transform-style: preserve-3d;
}

.grid__item-title {
  font-size: 1.15em;
  width: 100%;
  margin: 1em 0;
  text-align: left;
  color: #fff;
}

.column {
  width: 50%;
  padding: 0 0.5em;
  opacity: 0;
}

.column--left {
  text-align: right;
}

.column--right {
  text-align: left;
}

.column__text {
  font-size: 0.85em;
  display: block;
  color: #fff;
}

.column--left .column__text {
  font-weight: bold;
}

.column--right .column__text {
  color: #b0adad;
}

/* Individual effects */

/* Vega */
.grid--effect-vega .column {
  opacity: 1;
}

/* Castor */
.grid--effect-castor .stack__figure,
.grid--effect-castor .stack__deco {
  transform-origin: 50% 50%;
}

.grid--effect-castor .column {
  opacity: 1;
}

/* Hamal */
.grid--effect-hamal {
  perspective: none;
}

.grid--effect-hamal .column {
  opacity: 1;
}

/* polaris */
.grid--effect-polaris {
  perspective-origin: 100% -100%;
}

.grid--effect-polaris .column {
  opacity: 1;
}

/* Alphard */
.grid--effect-alphard {
  perspective: none;
}

.grid--effect-alphard .column {
  opacity: 1;
}

.grid--effect-alphard .stack__figure,
.grid--effect-alphard .stack__deco {
  transform-origin: 50% 150%;
}

/* Altair */
.grid--effect-altair {
  perspective-origin: 50% -50%;
}

.grid--effect-altair .column {
  opacity: 1;
}

.grid--effect-altair .stack__figure,
.grid--effect-altair .stack__deco {
  transform-origin: 50% 100%;
}

/* rigel */
.grid--effect-rigel {
  perspective-origin: 50% 100%;
}

.grid--effect-rigel .column {
  opacity: 1;
}

/* Canopus */
.grid--effect-canopus {
  perspective-origin: 50% 0%;
}

.grid--effect-canopus .column {
  opacity: 1;
}

.grid--effect-canopus .stack__figure,
.grid--effect-canopus .stack__deco {
  transform-origin: 50% 100%;
}

/* pollux */
.grid--effect-pollux {
  perspective: 1000px;
  perspective-origin: 50% -70%;
}

.grid--effect-pollux .column {
  opacity: 1;
}

.grid--effect-pollux .stack__figure,
.grid--effect-pollux .stack__deco {
  transform-origin: 50% 50%;
}

.grid--effect-pollux .grid__item-caption > .grid__item-title {
  transform-origin: 50% -200%;
}

/* deneb */
.grid--effect-deneb {
  perspective: none;
}

.grid--effect-deneb .stack__figure,
.grid--effect-deneb .stack__deco {
  transform-origin: 50% 50%;
}

.grid--effect-deneb .grid__item-caption > .column {
  transform-origin: 50% -200%;
}

/* Related demos */
.content.content--related {
  font-weight: bold;
  justify-content: center;
  min-height: 0;
  padding-bottom: 10em;
  text-align: center;
  background: #5d5d66;
}

.content--related a {
  color: #b0adad;
}

.content--related a:hover,
.content--related a:focus {
  color: #fff;
}

.content--related p:first-child {
  padding: 6em 0 2em;
}

.content--related p {
  width: 100%;
  color: #37373e;
}

.media-item {
  font-size: 0.85em;
  display: inline-block;
  padding: 1em 2vw;
  vertical-align: top;
  transition: color 0.3s;
}

.media-item__img {
  max-width: 100%;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.media-item:hover .media-item__img,
.media-item:focus .media-item__img {
  opacity: 1;
}

.media-item__title {
  font-size: 1em;
  margin: 0;
  padding: 0.5em;
}

@media screen and (max-width: 42em) {
  .codrops-header {
    display: block;
    text-align: center;
  }
  .github {
    width: 100%;
    margin: 0;
    padding: 0.5em 0;
  }
  .message-mobile {
    display: block;
  }
}

</style>
