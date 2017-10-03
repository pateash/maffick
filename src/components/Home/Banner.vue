<template>
  <div class="banner">
    <div class="techno-container techno">
      <div class="techno-content">
        <div id="large-header" class="large-header">
          <canvas id="techno-canvas"></canvas>
          <div class="main-title text-focus-in">
            <h1 class="">TECHNO <span class="thin">SEARCH</span></h1>
            <h1 class="dates"><span class="thin">OCTOBER</span> 12-15</h1>
          </div>
        </div>
      </div>
    </div><!-- /techno-container -->
  </div>
</template>

<script>
//  import Tweenlite from ''
  import BannerAnim from '../../banner-anim';
  export default {
    name: 'Banner',
    mounted() {
      BannerAnim();
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /**, *:after, *:before { -webkit-box-sizing: border-box; box-sizing: border-box; }*/
  /*.clearfix:before, .clearfix:after { content: ''; display: table; }*/
  /*.clearfix:after { clear: both; }*/

  .banner {
    background: #fff;
    color: #383a3c;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.25;
    font-family: 'Source Sans Pro', Calibri, Arial, sans-serif;
  }

  /* Header */
  .banner .techno-container {
    padding: 0;
  }

  .large-header {
    position: relative;
    width: 100%;
    background: #333;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    z-index: 1;
    height: 100vh;
  }

  .techno .large-header {
    background-image: url('../../assets/demo-1-bg.jpg');
  }

  .main-title {
    position: absolute;
    margin: 0;
    padding: 0;
    color: #f9f1e9;
    text-align: center;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
  }

  .main-title h1 {
    font-size: 1em;
    margin: 0;

  }
  .text-focus-in {
    -webkit-animation: text-focus-in 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    animation: text-focus-in 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  }
  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }


  .main-title .dates {
    font-size: 40px;
  }

  .techno .main-title {
    text-transform: uppercase;
    font-size: 4.2em;
    letter-spacing: 0.1em;
  }
  .main-title .thin {
    font-weight: 200;
  }

  @media only screen and (max-width : 768px) {
    .techno .main-title {
      font-size: 3em;
    }
  }
</style>
