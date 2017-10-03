<template>
  <div class="tc-register">
    <p>
      <button class="btn btn-2 btn-2a" @click="openRegister">Register</button>
      <router-link to="/" class="btn btn-2 btn-2a">Back To home</router-link>
    </p>
  </div>
</template>

<script>
import './checkout';

    export default {
        name: 'Register',
        methods: {
          openRegister() {
            Instamojo.open("https://www.instamojo.com/ashishpatel/technosearch-test/");
          }
        },
        mounted(){
            //now open modal component
             Instamojo.open("https://www.instamojo.com/ashishpatel/technosearch-test/");
        }
    };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* General button style (reset) */
  .btn {
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: none;
    cursor: pointer;
    padding: 25px 80px;
    display: inline-block;
    margin: 15px 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    position: relative;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }

  .btn:after {
    content: '';
    position: absolute;
    z-index: -1;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }

  /* Button 2 */
  .btn-2 {
    background: #cb4e4e;
    color: #fff;
    box-shadow: 0 6px #ab3c3c;
    -webkit-transition: none;
    -moz-transition: none;
    transition: none;
  }

  /* Button 2a */
  .btn-2a {
    border-radius: 0 0 5px 5px;
  }

  .btn-2a:hover {
    box-shadow: 0 4px #ab3c3c;
    top: 2px;
  }

  .btn-2a:active {
    box-shadow: 0 0 #ab3c3c;
    top: 6px;
  }
</style>
