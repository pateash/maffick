<template>
  <div class="tc-about">
    <p class="tc-about-text">
      The Wait is finally Over! <br>
      <span class="tc-about-special coral">NIT Bhopal</span> proudly brings you the latest instalment of <br>Central's India's Largest Technical Fest!
      <span class="tc-about-special someblue">TECHNOSEARCH'17</span>
    </p>
  </div>
</template>

<script>
  import ScrollReveal from 'scrollreveal';
  export default {
    name: 'About',
    mounted() {
      window.sr = ScrollReveal({
        reset: true,
        duration: 1000
      });
      sr.reveal('.tc-about-text')
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tc-about {
    padding: 5%;
  }
  .tc-about-text {
    font-family: 'MerriWeather', Serif;
    font-size: 35px;
    font-weight: bold;
    color: #e0e0e0;
  }
  .coral {
    color: #ff7f50;
  }
  .someblue {
    color: #00d1b2;
  }
  .tc-about-anim {
     -webkit-animation: blurFadeIn 2s ease-in 0s backwards;
    -moz-animation: blurFadeIn 1s ease-in 0s backwards;
    -ms-animation: blurFadeIn 2s ease-in 0s backwards;
    animation: blurFadeIn 2s ease-in 0s backwards;
    color: transparent;
    text-shadow: 0px 0px 1px #fff;
  }
  @-webkit-keyframes blurFadeIn{
    0%{
      opacity: 0;
      text-shadow: 0px 0px 40px #fff;
      -webkit-transform: scale(1.3);
    }
    50%{
      opacity: 0.5;
      text-shadow: 0px 0px 10px #fff;
      -webkit-transform: scale(1.1);
    }
    100%{
      opacity: 1;
      text-shadow: 0px 0px 1px #fff;
      -webkit-transform: scale(1);
    }
  }
  @-moz-keyframes blurFadeIn{
    0%{
      opacity: 0;
      text-shadow: 0px 0px 40px #fff;
      -moz-transform: scale(1.3);
    }
    100%{
      opacity: 1;
      text-shadow: 0px 0px 1px #fff;
      -moz-transform: scale(1);
    }
  }
  @keyframes blurFadeIn{
    0%{
      opacity: 0;
      text-shadow: 0px 0px 40px #fff;
      transform: scale(1.3);
    }
    50%{
      opacity: 0.5;
      text-shadow: 0px 0px 10px #fff;
      transform: scale(1.1);
    }
    100%{
      opacity: 1;
      text-shadow: 0px 0px 1px #fff;
      transform: scale(1);
    }
  }

  @media only screen and (max-width: 500px) {
    .tc-about-text {
      font-size: 24px;
    }
  }
</style>
