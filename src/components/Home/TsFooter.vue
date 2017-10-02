<template>
  <div class='footer'>
    <!-- Container -->
    <div class='container text-center'>
      <!--Icons -->
      <div class='icons'>
        <a href='#'><i class="fa fa-facebook fa-2x transition" aria-hidden="true"></i></a>
        <a href='#'><i class="fa fa-twitter fa-2x transition" aria-hidden="true"></i></a>
        <a href='#'><i class="fa fa-google fa-2x transition" aria-hidden="true"></i></a>
        <a href='#'><i class="fa fa-instagram fa-2x transition" aria-hidden="true"></i></a>
        <a href='#'><i class="fa fa-codepen fa-2x transition" aria-hidden="true"></i></a>
      </div>
      <!-- Copy -->
      <div class='copy'>
        <p class='upper'>
          Made With Love <i class="fa fa-heart" aria-hidden="true"></i><br>
          By Manohar Lakkoju and Ashish Patel
        </p>
      </div>
    </div>
    <div class='cr'>
      <router-link to="/">&copy;TECHNOSEARCH'17</router-link>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'TsFooter'
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    font-family: 'Open Sans', sans-serif;
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
    background:#fff;
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
  .footer .container .copy{
    margin:25px 0 0;
    color:#7b77c9
  }
  .footer .container .copy p i {
    color:#F44336;
    animation:heart 4s infinite
  }
  @keyframes heart{
    10%{font-size:20px}
    20%{font-size:16px}
    30%{font-size:20px}
    40%{font-size:16px}
    50%{font-size:20px}
    60%{font-size:16px}
    70%{font-size:20px}
    80%{font-size:16px}
    90%{font-size:20px}
    100%{font-size:20px}
  }
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
  .cr a {
    display:block;
    text-decoration:none;
    width: 20%;
    margin: 20px 40% 0 40%;
    font-size: 18px;
    border-radius: 5px;
    text-align:center;
    transition: all 0.6s ease-in-out;
    color:#7b77c9;
  }

  .cr a:hover {
    font-size: 20px;
  }
</style>
