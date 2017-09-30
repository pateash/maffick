<template>
  <!--<div class="events">
    <h1 class="text-secondary">Events</h1>
    <section class="ev-content">
      <h2 class="ev-content__title">Events</h2>
      <div class="grid grid&#45;&#45;effect-hamal">
        <a href="#" class="grid__item grid__item&#45;&#45;c1">
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
            &lt;!&ndash;<div class="ev-column ev-column&#45;&#45;left">&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">Period</span>&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">Subjects</span>&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">Result</span>&ndash;&gt;
            &lt;!&ndash;</div>&ndash;&gt;
            &lt;!&ndash;<div class="ev-column ev-column&#45;&#45;right">&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">2045</span>&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">133456</span>&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">Positive</span>&ndash;&gt;
            &lt;!&ndash;</div>&ndash;&gt;
          </div>
        </a>
        <a href="#" class="grid__item grid__item&#45;&#45;c2">
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
            &lt;!&ndash;<div class="ev-column ev-column&#45;&#45;left">&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">Period</span>&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">Subjects</span>&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">Result</span>&ndash;&gt;
            &lt;!&ndash;</div>&ndash;&gt;
            &lt;!&ndash;<div class="ev-column ev-column&#45;&#45;right">&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">2045</span>&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">133456</span>&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">Positive</span>&ndash;&gt;
            &lt;!&ndash;</div>&ndash;&gt;
          </div>
        </a>
        <a href="#" class="grid__item grid__item&#45;&#45;c3">
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
            &lt;!&ndash;<div class="ev-column ev-column&#45;&#45;left">&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">Period</span>&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">Subjects</span>&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">Result</span>&ndash;&gt;
            &lt;!&ndash;</div>&ndash;&gt;
            &lt;!&ndash;<div class="ev-column ev-column&#45;&#45;right">&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">2045</span>&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">133456</span>&ndash;&gt;
              &lt;!&ndash;<span class="ev-column__text">Positive</span>&ndash;&gt;
            &lt;!&ndash;</div>&ndash;&gt;
          </div>
        </a>
      </div>
    </section>
    <div style="background-color: white;">
      <div class="button-group">
        <button v-for="(val, key) in option.getFilterData" class="button" :class="[key===filterOption? 'is-checked' : '']" @click="filter(key)">{{key}}
        </button>
      </div>
      <isotope ref="cpt" :options='option' :list="events" @filter="filterOption=arguments[0]">
        <div v-for="event in events" :key="event.id">
          {{event.event_name}}
        </div>
      </isotope>
    </div>
  </div>-->

  <div class="events">
    <div class="events-heading">
      <h1>More than 50+ EVENTS</h1>
    </div>
    <figure class="tc-event red"><img :src="imageUrl" alt="Technosearch"/>
      <figcaption>
        <h2><span>COMPETITIONS</span></h2>
      </figcaption><a href="#"></a>
    </figure>
    <figure class="tc-event green"><img :src="imageUrl" alt="Technosearch"/>
      <figcaption>
        <h2><span>INFORMALS</span></h2>
      </figcaption><a href="#"></a>
    </figure>
    <figure class="tc-event navy"><img :src="imageUrl" alt="Technosearch"/>
      <figcaption>
        <h2><span>WORKSHOPS</span></h2>
      </figcaption><a href="#"></a>
    </figure>
    <figure class="tc-event navy"><img :src="imageUrl" alt="Technosearch"/>
      <figcaption>
        <h2><span>LECTURES</span></h2>
      </figcaption><a href="#"></a>
    </figure>
    <figure class="tc-event navy"><img :src="imageUrl" alt="Technosearch"/>
      <figcaption>
        <h2><span>EXHIBITIONS</span></h2>
      </figcaption><a href="#"></a>
    </figure>
  </div>

</template>

<script>
  import HamalFx from '../../anim';
  import isotope from 'vueisotope';

  export default {
    name: 'Events',
    components: {
      isotope
    },
    data() {
      return {
        events: [],
        filterOption: "show all",
        option: {
          getFilterData: {
            "show all": function () {
              return true;
            },
            "Pajero": function (el) {
              console.log(el);
              return el['category'] === 'Pajero';
            }
          }
        },
        'imageUrl': 'https://www2.warwick.ac.uk/fac/sci/maths/gallery/lecture.jpg?maxWidth=362&maxHeight=261'
      }
    },
    methods: {
      filter: function(key) {
        this.$refs.cpt.filter(key);
      }
    },
    created(){
      console.log('comp has been created');
      let data = [
        {
        "id": 1,
        "event_name": "Hatity",
        "category": "Challenger"
      }, {
        "id": 2,
        "event_name": "Andalax",
        "category": "Cobalt SS"
      }, {
        "id": 3,
        "event_name": "Treeflex",
        "category": "Optima"
      }, {
        "id": 4,
        "event_name": "Lotlux",
        "category": "RAV4"
      }, {
        "id": 5,
        "event_name": "Otcom",
        "category": "Continental GT"
      }, {
        "id": 6,
        "event_name": "Temp",
        "category": "Mystique"
      }, {
        "id": 7,
        "event_name": "Rank",
        "category": "Tempo"
      }, {
        "id": 8,
        "event_name": "Zoolab",
        "category": "Endeavor"
      }, {
        "id": 9,
        "event_name": "Lotstring",
        "category": "Grand Vitara"
      }, {
        "id": 10,
        "event_name": "Zathin",
        "category": "Thunderbird"
      }, {
        "id": 11,
        "event_name": "Stronghold",
        "category": "Optima"
      }, {
        "id": 12,
        "event_name": "Kanlam",
        "category": "CR-V"
      }, {
        "id": 13,
        "event_name": "Toughjoyfax",
        "category": "MPV"
      }, {
        "id": 14,
        "event_name": "Fintone",
        "category": "Golf"
      }, {
        "id": 15,
        "event_name": "Job",
        "category": "Pajero"
      }, {
        "id": 16,
        "event_name": "Duobam",
        "category": "Blazer"
      }, {
        "id": 17,
        "event_name": "Vagram",
        "category": "Prelude"
      }, {
        "id": 18,
        "event_name": "Otcom",
        "category": "Pajero"
      }, {
        "id": 19,
        "event_name": "Alpha",
        "category": "E-Series"
      }, {
        "id": 20,
        "event_name": "Voyatouch",
        "category": "Pajero"
      }];
      this.events.push(...data);
      console.log('data', this.events);
    },
    mounted(){
      console.log('component has been createddd', document);


      [].slice.call(document.querySelectorAll('.grid--effect-hamal > .grid__item')).forEach(function(stackEl) {
        new HamalFx(stackEl);
      });
    },
  };
</script>

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
  .events {
    background-color: #2c3e50;
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
  .ev-content {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 0 1em;
  }

  .ev-content:not(:first-child) {
    padding: 4em 0;
  }

  .ev-content.ev-content--padded {
    padding: 4em 0 8em;
  }

  .ev-content__title {
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

  .ev-column {
    width: 50%;
    padding: 0 0.5em;
    opacity: 0;
  }

  .ev-column--left {
    text-align: right;
  }

  .ev-column--right {
    text-align: left;
  }

  .ev-column__text {
    font-size: 0.85em;
    display: block;
    color: #fff;
  }

  .ev-column--left .ev-column__text {
    font-weight: bold;
  }

  .ev-column--right .ev-column__text {
    color: #b0adad;
  }

  /* Individual effects */

  /* Hamal */
  .grid--effect-hamal {
    perspective: none;
  }

  .grid--effect-hamal .ev-column {
    opacity: 1;
  }


  /*.media-item {*/
    /*font-size: 0.85em;*/
    /*display: inline-block;*/
    /*padding: 1em 2vw;*/
    /*vertical-align: top;*/
    /*transition: color 0.3s;*/
  /*}*/

  /*.media-item__img {*/
    /*max-width: 100%;*/
    /*opacity: 0.6;*/
    /*transition: opacity 0.3s;*/
  /*}*/

  /*.media-item:hover .media-item__img,*/
  /*.media-item:focus .media-item__img {*/
    /*opacity: 1;*/
  /*}*/

  /*.media-item__title {*/
    /*font-size: 1em;*/
    /*margin: 0;*/
    /*padding: 0.5em;*/
  /*}*/





  @import url(https://fonts.googleapis.com/css?family=Raleway:400,800);
  figure.tc-event {
    font-family: 'Raleway', Arial, sans-serif;
    position: relative;
    display: inline-block;
    margin: 10px 5px;
    min-width: 220px;
    max-width: 300px;
    max-height: 300px;
    width: 100%;
    overflow: hidden;
    text-align: center;
    background: #000000;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }

  figure.tc-event * {
    -webkit-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
  }

  figure.tc-event img {
    opacity: 0.25;
    max-width: 100%;
    position: relative;
    top: 0;
    left: 0;
  }

  figure.tc-event figcaption {
    position: absolute;
    top: 50%;
    left: 30px;
    right: 30px;
    -webkit-transform: rotate(0deg) translateY(-50%) scale(1);
    transform: rotate(0deg) translateY(-50%) scale(1);
    -webkit-transform-origin: center 0;
    transform-origin: center 0;
  }

  figure.tc-event figcaption h2 {
    top: 50%;
    letter-spacing: -1px;
    color: #ffffff;
    text-transform: uppercase;
    padding: 10px 0;
    margin: 0;
    font-weight: 400;
  }

  figure.tc-event figcaption h2 span {
    font-weight: 800;
  }

  figure.tc-event figcaption:before,
  figure.tc-event figcaption:after {
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    height: 2px;
    position: absolute;
    content: "";
    display: block;
    -webkit-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
  }

  figure.tc-event figcaption:before {
    left: 0;
    top: 0;
  }

  figure.tc-event figcaption:after {
    bottom: 0;
    right: 0;
  }

  figure.tc-event.blue {
    background: #091b27;
  }

  figure.tc-event.red {
    background: #2e0e0a;
  }

  figure.tc-event.yellow {
    background: #4f3204;
  }

  figure.tc-event.green {
    background: #061c10;
  }

  figure.tc-event.navy {
    background: #000000;
  }

  figure.tc-event a {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  figure.tc-event:hover img,
  figure.tc-event.hover img {
    opacity: 1;
  }

  figure.tc-event:hover figcaption,
  figure.tc-event.hover figcaption {
    -webkit-transform: rotate(-45deg) translateY(-50%) scale(0.9);
    transform: rotate(-45deg) translateY(-50%) scale(0.9);
  }

  figure.tc-event:hover figcaption:before,
  figure.tc-event.hover figcaption:before,
  figure.tc-event:hover figcaption:after,
  figure.tc-event.hover figcaption:after {
    width: 200%;
  }

  /* Demo purposes only */
  .events {
    background-color: #212121;
    text-align: center;
  }
  .events-heading h1 {
    font-size: 40px;
    font-family: 'MerriWeather', serif;
    font-weight: bold;
    color: lightgray;
  }
</style>
