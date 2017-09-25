<template>
  <div class="hello">
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
    mounted() {
      console.log('component has been created', document);


      [].slice.call(document.querySelectorAll('.grid--effect-hamal > .grid__item')).forEach(function(stackEl) {
        new HamalFx(stackEl);
      });
    },
  };
</script>

<style>
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

  /* Hamal */
  .grid--effect-hamal {
    perspective: none;
  }

  .grid--effect-hamal .column {
    opacity: 1;
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

</style>
