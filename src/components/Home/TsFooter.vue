<template>
  <div class='footer'>
    <!-- Container -->
    <div class='container text-center'>
      <!--Icons -->
      <div class='icons'>
        <a href='https://www.facebook.com/mafficknitbhopal/'><i class="fa fa-facebook fa-2x transition" aria-hidden="true"></i></a>
        <a href='#'><i class="fa fa-twitter fa-2x transition" aria-hidden="true"></i></a>
        <!--<a href='#'><i class="fa fa-google fa-2x transition" aria-hidden="true"></i></a>-->
        <a href='#'><i class="fa fa-youtube fa-2x transition" aria-hidden="true"></i></a>
        <!--<a href='#'><i class="fa fa-instagram fa-2x transition" aria-hidden="true"></i></a>-->
        <!--<a href='#'><i class="fa fa-codepen fa-2x transition" aria-hidden="true"></i></a>-->
      </div>
    </div>
    <div class='footer-logo'>
      <a href="#section1" id="ts-footer-logo">
        <img src="../../assets/TS-text-white.png" alt="Maffick'18">
      </a>
      <!--<router-link to="/" class="cd-scroll-down">-->
      <!--</router-link>-->
      <!--<router-link to="/">&copy;TECHNOSEARCH'17</router-link>-->
    </div>
    <!-- Copy -->
    <div class='copy'>
      <p class='upper' style="font-family:Comfortaa,cursive,'DejaVu Sans'">
        Made With <i class="fa fa-heart" aria-hidden="true"></i>
        By <a href="//ashish.live" target="_blank">Ashish Patel</a>
        and <a href="#">Manohar Lakkoju</a>
      </p>
    </div>
    <div class='copy'>
      <p class='upper'>
        &copy;copyright 2018. Maffick'18, All rights reserved.
      </p>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'TsFooter',
    mounted() {
      let footerlogo = document.getElementById('ts-footer-logo');
      if(footerlogo) {
        footerlogo.addEventListener('click', (event) => {
          event.preventDefault();
          window.scrollTo(0,0)
        })
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    font-family: 'Source Sans Pro', sans-serif;
    text-align: center;
  }

  .transition {
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
  }

  .footer {
    width:100%;
    height:300px;
    padding:20px 0 25px;
    overflow:hidden;
    background: #2c3e50;
    text-align: center;
  }

  .footer .container .icons {
    margin:20px 0 0;
    color:rgba(123,119,201,0.84)
  }
  .footer .container .icons a i{
    margin-right:15px;
    color:#7b77c9;
    font-size:32px;
    padding:8px
  }
  .footer .container .icons a i:hover{
    font-size:40px;
    padding:0
  }
  .footer .copy{
    margin:25px 0 0;
    color:#7b77c9
  }
  .footer .copy p i {
    color:#F44336;
    animation:heart 4s infinite
  }
  /*@keyframes heart{*/
    /*10%{font-size:20px}*/
    /*20%{font-size:16px}*/
    /*30%{font-size:20px}*/
    /*40%{font-size:16px}*/
    /*50%{font-size:20px}*/
    /*60%{font-size:16px}*/
    /*70%{font-size:20px}*/
    /*80%{font-size:16px}*/
    /*90%{font-size:20px}*/
    /*100%{font-size:20px}*/
  /*}*/
  /*-webkit-@keyframes heart {*/
    /*10{font-size:16px}*/
    /*20%{font-size:20px}*/
    /*30%{font-size:16px}*/
    /*40%{font-size:20px}*/
    /*50%{font-size:16px}*/
    /*60%{font-size:20px}*/
    /*70%{font-size:16px}*/
    /*80%{font-size:20px}*/
    /*90%{font-size:16px}*/
    /*100%{font-size:20px}*/
  /*}*/


  /* Site */
  /*.cr a {*/
    /*display:block;*/
    /*text-decoration:none;*/
    /*width: 20%;*/
    /*margin: 20px 40% 0 40%;*/
    /*font-size: 18px;*/
    /*border-radius: 5px;*/
    /*text-align:center;*/
    /*transition: all 0.6s ease-in-out;*/
    /*color:#7b77c9;*/
  /*}*/

  /*.cr a:hover {*/
    /*font-size: 20px;*/
  /*}*/

  .footer-logo img {
    height: 100px;
  }
  @media screen and (max-width: 500px){
    .footer-logo img {
      height: 60px;
      margin-top: 20px;
    }
    .footer {
      height:250px;
    }
  }
  .upper a{
    color: white;
    font-weight: bolder;
    font-size: 1.1em;
  }
</style>
