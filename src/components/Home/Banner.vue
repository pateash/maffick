<template>
  <div class="banner">
    <div class="techno-container techno">
      <div class="techno-content">
        <div id="large-header" class="large-header">
          <canvas id="techno-canvas"></canvas>
          <div class="main-title text-focus-in">
            <img class="main-title-image" src="../../assets/TS-text-white.png" alt="Technosearch'17">
            <!--<h1 class="">TECHNO <span class="thin">SEARCH</span></h1>-->
            <h1 class="dates"><span class="thin">March</span> 16 - 18</h1>
            <div>
              <p style="margin-top: 70px;font-size: 20px;">Starting in</p>
              <Countdown deadline="March 16, 2018"></Countdown>
            </div>
          </div>
        </div>
      </div>
    </div><!-- /techno-container -->
  </div>
</template>

<script>
    //  import Tweenlite from ''
    import BannerAnim from '../../banner-anim';
    import Countdown from '@/components/Home/Countdown';
    export default {
        name: 'Banner',
        components: { Countdown },
        mounted() {
            let width = document.documentElement.clientWidth;
            let height = document.documentElement.clientHeight;

            if(width > 500) {
                BannerAnim();
            } else {
                let lg = document.getElementById('large-header');
                lg.style.height = height+'px';
            }
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
    /*background-image: url('../../assets/demo-1-bg.jpg');*/
    background-image: url('https://vuetifyjs.com/static/doc-images/parallax/material.jpg');
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
    margin-top: -40px;
  }

.techno .main-title {
  text-transform: uppercase;
  font-size: 4.2em;
  letter-spacing: 0.1em;
}
.main-title .thin {
  font-weight: 200;
}
.main-title-image {
  height: 240px;
}
@media only screen and (max-width : 500px) {
  .main-title .dates {
    font-size: 25px;
    margin-top: -10px;
  }
  .main-title-image {
    height: 165px;
  }
}
@media only screen and (max-width : 768px) {
  .techno .main-title {
    font-size: 3em;
  }
}

</style>
