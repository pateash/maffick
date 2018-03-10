<template>
  <div class="events">
    <div class="events-heading">
      <h1>More than 10+ Events. Amazing Pro Shows</h1>
    </div>
    <div class="events-container">
      <figure class="tc-event red"><img src="http://res.cloudinary.com/ashishpatel0720/image/upload/v1520169317/competions.png" alt="Technosearch"/>
        <figcaption>
          <h2><span>EVENTS</span></h2>
        </figcaption><router-link to="/events/general"></router-link>
      </figure>
      <!--<figure class="tc-event green"><img src="../../assets/Categories/informal.png" alt="Technosearch"/>-->
        <!--<figcaption>-->
          <!--<h2><span>INFORMALS</span></h2>-->
        <!--</figcaption><router-link to="/events/informals"></router-link>-->
      <!--</figure>-->
      <!--<figure class="tc-event navy"><img src="../../assets/Categories/workshop.png" alt="Technosearch"/>-->
        <!--<figcaption>-->
          <!--<h2><span>WORKSHOPS</span></h2>-->
        <!--</figcaption><router-link to="/events/workshops"></router-link>-->
      <!--</figure>-->
      <!--<figure class="tc-event navy"><img src="../../assets/Categories/lectures.png" alt="Technosearch"/>-->
        <!--<figcaption>-->
          <!--<h2><span>LECTURES</span></h2>-->
        <!--</figcaption><router-link to="/events/lectures"></router-link>-->
      <!--</figure>-->
      <!--<figure class="tc-event navy"><img src="../../assets/Categories/exhibitons.png" alt="Technosearch"/>-->
        <!--<figcaption>-->
          <!--<h2><span>EXHIBITIONS</span></h2>-->
        <!--</figcaption><router-link to="/events/exhibitions"></router-link>-->
      <!--</figure>-->
      <figure class="tc-event navy"><img src="http://res.cloudinary.com/ashishpatel0720/image/upload/v1520169317/Pronite.png" alt="Technosearch"/>
        <figcaption>
          <h2><span>PRONITES</span></h2>
        </figcaption><router-link to="/pronites"></router-link>
      </figure>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Events',
    data() {
      return {
        events: [],
        'imageUrl': 'https://www2.warwick.ac.uk/fac/sci/maths/gallery/lecture.jpg?maxWidth=362&maxHeight=261'
      }
    }
  };
</script>

<style scoped>

  /*for the animation*/
  .events {
    /*background-color: #2c3e50;*/
    /*display: flex;*/
    /*align-items: center;*/
  }
  @media screen and (min-width: 500px){
    .events {
      /*background-color: #2c3e50;*/
      /*display: flex;*/
      /*align-items: center;*/
      /*justify-content:center;*/
      /*flex-direction: column;*/
    }
  }
  .events-heading {

  }
  .events-container {

  }

  /*@import url(https://fonts.googleapis.com/css?family=Raleway:400,800);*/
  figure.tc-event {
    font-family: 'Source Sans Pro', Arial, sans-serif;
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
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 26px;
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
    /*-webkit-transform: rotate(-45deg) translateY(-50%) scale(0.9);*/
    /*transform: rotate(-45deg) translateY(-50%) scale(0.9);*/
  }

  figure.tc-event:hover figcaption:before,
  figure.tc-event.hover figcaption:before,
  figure.tc-event:hover figcaption:after,
  figure.tc-event.hover figcaption:after {
    width: 200%;
  }

  .events {
    /*background-color: #212121;*/
    text-align: center;
  }
  .events-heading h1 {
    font-size: 40px;
    font-family: 'Source Sans Pro', serif;
    font-weight: bold;
    color: #E5D4B7;
    margin-bottom: 20px;

    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
    0px 8px 13px rgba(0,0,0,0.1),
    0px 18px 23px rgba(0,0,0,0.1);
    /*text-shadow: 0 1px 0 #ccc,*/
    /*0 2px 0 #c9c9c9,*/
    /*0 3px 0 #bbb,*/
    /*0 4px 0 #b9b9b9,*/
    /*0 5px 0 #aaa,*/
    /*0 6px 1px rgba(0,0,0,.1),*/
    /*0 0 5px rgba(0,0,0,.1),*/
    /*0 1px 3px rgba(0,0,0,.3),*/
    /*0 3px 5px rgba(0,0,0,.2),*/
    /*0 5px 10px rgba(0,0,0,.25),*/
    /*0 10px 10px rgba(0,0,0,.2),*/
    /*0 20px 20px rgba(0,0,0,.15);*/
  }
</style>
