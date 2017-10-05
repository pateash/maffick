<template>
  <div class="container">
    <header class="clearfix">
      <router-link to="/">TECHNO SEARCH'17</router-link>

      <div class="ts-category">

        <!--Event dropdown-->
        <div class="style-1">
          <label>Event Category</label>
          <div class="select-container">
            <select v-model="currentCategory" @change="updateEventData">
              <option :value="category.name" v-for="category in categories">{{category.name}} </option>
            </select>
          </div>
        </div>

        <!--<div class="field">-->

        <!--<div class="control">-->
        <!--<label>Event Category</label>-->
        <!--<div class="select">-->
        <!--<select v-model="currentCategory" @change="updateEventData">-->
        <!--<option :value="category.name" v-for="category in categories">{{category.name}} </option>-->
        <!--</select>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->

        <!--end of dropdown-->
        <nav>
          <router-link to="/" class="bp-icon bp-icon-prev" data-info="Home"><span>Home</span></router-link>
          <!--a href="" class="bp-icon bp-icon-next" data-info="next Blueprint"><span>Next Blueprint</span></a-->
          <!--<a href="http://tympanus.net/codrops/?p=18699" class="bp-icon bp-icon-drop" data-info="back to the Codrops article"><span>back to the Codrops article</span></a>-->
          <router-link to="/register" class="bp-icon bp-icon-archive" data-info="Register"><span>Register</span></router-link>
        </nav>
      </div>

    </header>
    <div id="grid-gallery" class="grid-gallery">
      <section class="grid-wrap">
        <ul class="grid">
          <li class="grid-sizer"></li><!-- for Masonry column width -->
          <li v-for="event in events" :key="event.id">
            <figure>
              <img :src="event.avatar_url" alt="img01"/>
              <figcaption><h3>{{event.name}}</h3></figcaption>
            </figure>
          </li>
        </ul>
      </section><!-- // grid-wrap -->
      <section class="slideshow">
        <ul>
          <li v-for="event in events" :key="event.id">
            <figure>
              <img :src="event.avatar_url" :alt="event.name"/>
              <figcaption>
                <h3>{{event.name}}</h3>
                <h2>Description</h2>
                <p>{{event.description}}</p>
              </figcaption>
            </figure>
          </li>
        </ul>
        <nav>
          <span class="icon nav-prev"></span>
          <span class="icon nav-next"></span>
          <span class="icon nav-close"></span>
        </nav>
        <div class="info-keys icon">Navigate with arrow keys</div>
      </section><!-- // slideshow -->
    </div><!-- // grid-gallery -->
  </div>
</template>

<script>
    import CBPGridGallery from './gridGallery';
    import axios from 'axios';
    //  import imagesLoaded from 'vue-images-loaded'
    export default {
        name: 'EventList',
        data() {
            return {
                eventsAll: [],
                events: [],
                categories:[],
                currentCategory:this.$route.params.category //will be modeled with dropdown
            }
        },
        methods:{
            updateEventData(){
                this.events=this.eventsAll.filter((event)=>event.category==this.currentCategory);
            }
        },
        created() {

            let urlbase = "http://34.236.39.39/api/";
            //get categories
            axios.get(urlbase+"categories")
                .then((response)=> {
              console.log(response.data.data)
                    this.categories=response.data.data;//last data was part of our api
                })
                .catch(function (response) {
                    console.error("error in getting categories");
                });


            //get Events data
            axios.get(urlbase+'events')
                .then((response) => {
                    this.eventsAll.push(...response.data.data);
                    this.updateEventData();
//                    console.log(response.data.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        updated() {
            if(CBPGridGallery !== undefined) {
                if(this.events.length !== 0) {
                    let x = new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
                }
                console.log(this.events.length)
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* General Blueprint Style */
  /*@import url(http://fonts.googleapis.com/css?family=Lato:300,400,700);*/

  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');

  @font-face {
    font-family: 'bpicons';
    src:url('../../../static/fonts/bpicons/bpicons.eot');
    src:url('../../../static/fonts/bpicons/bpicons.eot?#iefix') format('embedded-opentype'),
    url('../../../static/fonts/bpicons/bpicons.woff') format('woff'),
    url('../../../static/fonts/bpicons/bpicons.ttf') format('truetype'),
    url('../../../static/fonts/bpicons/bpicons.svg#bpicons') format('svg');
    font-weight: normal;
    font-style: normal;
  } /* Made with http://icomoon.io/ */

  *, *:after, *:before { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
  body, html { font-size: 100%; padding: 0; margin: 0;}

  /* Clearfix hack by Nicolas Gallagher: http://nicolasgallagher.com/micro-clearfix-hack/ */
  .clearfix:before, .clearfix:after { content: " "; display: table; }
  .clearfix:after { clear: both; }

  body {
    font-family: 'Source Sans Pro', Calibri, Arial, sans-serif;
    color: #47a3da;
  }

  a {
    color: #f0f0f0;
    text-decoration: none;
    outline: none;
  }

  a:hover {
    color: #000;
  }

  .container > header {
    width: 90%;
    max-width: 69em;
    margin: 0 auto;
    padding: 2.875em 1.875em 1.875em;
  }

  .container > header h1 {
    font-size: 2.125em;
    line-height: 1.3;
    margin: 0 0 0.6em 0;
    float: left;
    font-weight: 400;
  }

  .container > header > a {
    color: #000;
    display: block;
    position: relative;
    z-index: 200;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    padding: 0 0 0.6em 0.1em;
  }

  .container > header > span span:after {
    width: 30px;
    height: 30px;
    left: -12px;
    font-size: 50%;
    top: -8px;
    font-size: 75%;
    position: relative;
  }

  .container > header > span span:hover:before {
    content: attr(data-content);
    text-transform: none;
    text-indent: 0;
    letter-spacing: 0;
    font-weight: 300;
    font-size: 110%;
    padding: 0.8em 1em;
    line-height: 1.2;
    text-align: left;
    left: auto;
    margin-left: 4px;
    position: absolute;
    color: #fff;
    background: #47a3da;
  }

  .container > header nav {
    float: right;
    text-align: center;
  }

  .container > header nav a {
    display: inline-block;
    position: relative;
    text-align: left;
    width: 2.5em;
    height: 2.5em;
    background: #fff;
    border-radius: 50%;
    margin: 0 0.1em;
    border: 4px solid #47a3da;
  }

  .container > header nav a > span {
    display: none;
  }

  .container > header nav a:hover:before {
    content: attr(data-info);
    color: #47a3da;
    position: absolute;
    width: 600%;
    top: 120%;
    text-align: right;
    right: 0;
    pointer-events: none;
  }

  .container > header nav a:hover {
    background: #47a3da;
  }

  .bp-icon:after {
    font-family: 'bpicons';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    text-align: center;
    color: #47a3da;
    -webkit-font-smoothing: antialiased;
  }

  .container > header nav .bp-icon:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 2;
    text-indent: 0;
  }

  .container > header nav a:hover:after {
    color: #fff;
  }

  .bp-icon-next:after {
    content: "\e000";
  }
  .bp-icon-drop:after {
    content: "\e001";
  }
  .bp-icon-archive:after {
    content: "\e002";
  }
  .bp-icon-about:after {
    content: "\e003";
  }
  .bp-icon-prev:after {
    content: "\e004";
  }

  @media screen and (max-width: 55em) {

    .container > header h1,
    .container > header nav {
      float: none;
    }

    .container > header > span,
    .container > header h1 {
      text-align: center;
    }

    .container > header nav {
      margin: 0 auto;
    }

    .container > header > span {
      text-indent: 30px;
    }
  }

  /* Component */
  @font-face {
    font-family: 'fontawesome';
    src:url('../../../static/fonts/fontawesome/fontawesome.eot?-e43dk9');
    src:url('../../../static/fonts/fontawesome/fontawesome.eot?#iefix-e43dk9') format('embedded-opentype'),
    url('../../../static/fonts/fontawesome/fontawesome.woff?-e43dk9') format('woff'),
    url('../../../static/fonts/fontawesome/fontawesome.ttf?-e43dk9') format('truetype'),
    url('../../../static/fonts/fontawesome/fontawesome.svg?-e43dk9#fontawesome') format('svg');
    font-weight: normal;
    font-style: normal;
  } /* Made with http://icomoon.io/app */

  /* General style */
  .grid-gallery ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .grid-gallery figure {
    margin: 0;
  }

  .grid-gallery figure img {
    display: block;
    width: 100%;
  }

  .grid-gallery figcaption h3 {
    margin: 0;
    padding: 0 0 0.5em;
  }

  .grid-gallery figcaption p {
    margin: 0;
  }

  /* Grid style */
  .grid-wrap {
    max-width: 69em;
    margin: 0 auto;
    padding: 0 1em 1.875em;
  }

  .grid {
    margin: 0 auto;
  }

  .grid li {
    width: 25%;
    float: left;
    cursor: pointer;
  }

  .grid figure {
    padding: 15px;
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
  }

  .grid li:hover figure {
    opacity: 0.7;
  }

  .grid figcaption {
    background: #e4e4e4;
    padding: 25px;
  }

  /* Slideshow style */
  .slideshow {
    position: fixed;
    background: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 500;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    -webkit-perspective: 1000px;
    perspective: 1000px;
    -webkit-transition: opacity 0.5s, visibility 0s 0.5s;
    transition: opacity 0.5s, visibility 0s 0.5s;
  }

  .slideshow-open .slideshow {
    opacity: 1;
    visibility: visible;
    -webkit-transition: opacity 0.5s;
    transition: opacity 0.5s;
  }

  .slideshow ul {
    width: 100%;
    height: 100%;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: translate3d(0,0,150px);
    transform: translate3d(0,0,150px);
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
  }

  .slideshow ul.animatable li {
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
  }

  .slideshow-open .slideshow ul {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }

  .slideshow li {
    width: 660px;
    height: 560px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -280px 0 0 -330px;
    visibility: hidden;
  }

  .slideshow li.show {
    visibility: visible;
  }

  .slideshow li:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255,255,255,0.8);
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }

  .slideshow li.current:after {
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity 0.3s, visibility 0s 0.3s;
    transition: opacity 0.3s, visibility 0s 0.3s;
  }

  .slideshow figure {
    width: 100%;
    height: 100%;
    background: #fff;
    border: 40px solid #fff;
    overflow: scroll;
  }

  .slideshow figcaption {
    padding-bottom: 20px;
  }

  .slideshow figcaption h3 {
    font-weight: 300;
    font-size: 200%;
  }

  /* Navigation */
  .slideshow nav span {
    position: fixed;
    z-index: 1000;
    color: #59656c;
    text-align: center;
    padding: 3%;
    cursor: pointer;
    font-size: 2.2em;
    color: #31373a;
  }

  .slideshow nav span.nav-prev,
  .slideshow nav span.nav-next {
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  /* Added as a fix. Didnt exist before */
  .slideshow nav span.nav-prev {
    left: 0;
  }

  .slideshow nav span.nav-next {
    right: 0;
  }

  .slideshow nav span.nav-close {
    top: 0;
    right: 0;
    padding: 0.5em 1em;
    color: #31373a;
  }

  .icon:before,
  .icon:after {
    font-family: 'fontawesome';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  span.nav-prev:before {
    content: "\e601";
  }

  span.nav-next:before  {
    content: "\e600";
  }

  span.nav-close:before {
    content: "\e602";
  }

  /* Info on arrow key navigation */
  .info-keys {
    position: fixed;
    top: 10px;
    left: 10px;
    width: 60px;
    font-size: 8px;
    padding-top: 20px;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 1px;
    text-align: center;
  }

  .info-keys:before,
  .info-keys:after {
    position: absolute;
    top: 0;
    width: 16px;
    height: 16px;
    border: 1px solid #fff;
    text-align: center;
    line-height: 14px;
    font-size: 12px;
  }

  .info-keys:before {
    left: 10px;
    content: "\e603";
  }

  .info-keys:after {
    right: 10px;
    content: "\e604";
  }

  /* Example media queries (reduce number of columns and change slideshow layout) */

  @media screen and (max-width: 60em) {
    /* responsive columns; see "Element sizing" on http://masonry.desandro.com/options.html */
    .grid li {
      width: 33.3%;
    }

    .slideshow li {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      margin: 0;
    }

    .slideshow li figure img {
      width: auto;
      margin: 0 auto;
      max-width: 100%;
    }

    .slideshow nav span,
    .slideshow nav span.nav-close {
      font-size: 1.8em;
      padding: 0.3em;
    }

    .info-keys {
      display: none;
    }

  }

  @media screen and (max-width: 35em) {
    .grid li {
      width: 50%;
    }
  }

  @media screen and (max-width: 24em) {
    .grid li {
      width: 100%;
    }
  }

  .icon-data-arrow-back {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iIAogICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIKICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAJPGcgaWQ9ImFycm93LWJhY2siPjxwYXRoIGQ9Ik0yMCwxMUg3LjhsNS42LTUuNkwxMiw0bC04LDhsOCw4bDEuNC0xLjRMNy44LDEzSDIwVjExeiIvPjwvZz4KPC9zdmc+Cgo=)!important;
  }
  .tc-back-btn {
    /*width: 40px;*/
    /*height: 40px;*/
    /*background-color: #fff;*/
    /*background-repeat: no-repeat;*/
    /*background-position: 5px 5px;*/
    /*padding: 6px;*/
    /*cursor: pointer;*/
    /*display: inline-block;*/
    /*vertical-align: top;*/
    /*margin: 8px;*/
    /*border: 0;*/

    /*display: inline-block;*/
    /*position: relative;*/
    /*text-align: left;*/
    /*width: 2.5em;*/
    /*height: 2.5em;*/
    /*background: #fff;*/
    /*border-radius: 50%;*/
    /*margin: 0 0.1em;*/
    /*border: 4px solid #47a3da;*/
  }

  div[class^="style"] {
    margin-bottom: 1rem;
  }

  label {
    line-height: 1.5;
  }

  /* Select Container : All Styles */
  .select-container {
    position: relative;
    display: inline-block;
  }

  /* Select Container : Select : All Styles */
  .select-container > select {
    font-size: 1em;
    padding: .5em 3em .5em .5em;
    float: right;
    color: #333;
    background-color: #ffffff;
    background-image: none;
    border: 1px solid #9e9e9e;
    border-radius: 0;
    -ms-word-break: normal;
    word-break: normal;
    cursor: pointer;
    /* Hide Browser Default */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* Style 1 : Down Chevron + Left Border */
  .style-1 {
    display: flex;
    align-items: center;
  }
  .style-1 label {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
    margin-right: 10px;
    font-weight: bold;
  }
  .style-1 .select-container:after {
    position: absolute;
    content: '\f078';
    font-family: FontAwesome;
    color: #9e9e9e;
    right: 0;
    padding: .4em .5em;
    border-left: 1px solid #9e9e9e;
    pointer-events: none;
  }

  .select-group {
    display: flex;
  }

  .select-group .select-container:not(:last-child) select {
    border-right: none;
  }

  .select-group .select-container:not(:first-child) select {
    border-left: none;
  }

  .select-group .select-container select::after {
    content: ' | ';
    font-size: 2em;
  }

  /* Browser Overrides */
  select::-ms-expand {
    display: none;
  }

  select:focus {
    outline: none;
  }

  .ts-category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  @media screen and (max-width: 500px) {
    .ts-category {
      flex-direction: column;
    }
  }


</style>
