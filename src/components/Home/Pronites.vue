<template>
  <div class="pronites">
    <agile :arrows="false" :speed="750"
           :timing="'linear'" :fade="true"
           :autoplay="true" :pauseOnHover="false">
      <div class="slide slide--1"></div>
      <div class="slide slide--2"></div>
      <div class="slide slide--3"></div>
    </agile>
    <!--<agile :infinite="false">-->
      <!--<div class="slide slide&#45;&#45;1"><h3>slide 1</h3></div>-->
      <!--<div class="slide slide&#45;&#45;2"><h3>slide 2</h3></div>-->
      <!--<div class="slide slide&#45;&#45;3"><h3>slide 3</h3></div>-->
      <!--<div class="slide slide&#45;&#45;4"><h3>slide 4</h3></div>-->
      <!--<div class="slide slide&#45;&#45;5"><h3>slide 5</h3></div>-->
      <!--<div class="slide slide&#45;&#45;6"><h3>slide 6</h3></div>-->
    <!--</agile>-->
  </div>
</template>

<script>
  export default {
    name: 'Pronites'
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .agile__dots {
    bottom: 0;
    display: block;
    left: 10px;
    position: absolute;
    width: 30px;
  }
  .agile__dot {
    margin-bottom: 10px;
  }
  .agile__dot button {
    background-color: transparent;
    border: 1px solid #fff;
    margin-top: 10px;
  }
  .agile__dot button:hover {
    background-color: #fff;
  }
  .agile__dot--current button {
    background-color: #fff;
  }


  .agile__arrow {
    height: 100%;
    top: 0;
    width: 80px;
  }
  .agile__arrow:hover {
    background-color: rgba(0, 0, 0, .5);
  }
  .agile__arrow:hover #arrow-svg {
    fill: #fff;
  }
  .agile__arrow[disabled] {
    display: none;
  }
  .agile__arrow #arrow-svg {
    fill: rgba(255, 255, 255, .4);
    height: 25px;
  }


  .slide {
    background-position: center;
    background-size: cover;
    height: 100vh;
  }
  .slide:before {
    background-color: rgba(0, 0, 0, .2);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .slide--1 {
    background-image: url('https://daily.social/wp-content/uploads/2017/03/abhishek-up.jpg');
  }
  .slide--2 {
    background-image: url('https://images.unsplash.com/photo-1493514789931-586cb221d7a7?dpr=1&auto=compress,format&fit=crop&w=1951&h=&q=80&cs=tinysrgb&crop=');
  }

</style>
