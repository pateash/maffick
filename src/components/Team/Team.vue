<template>
  <div class="container">
    <header class="clearfix">
      <router-link to="/">TECHNO SEARCH'17</router-link>
      <nav class="ts-team-nav">
        <router-link to="/" class="bp-icon bp-icon-prev" data-info="Home"><span>Home</span></router-link>
        <!--a href="" class="bp-icon bp-icon-next" data-info="next Blueprint"><span>Next Blueprint</span></a-->
        <!--<a href="http://tympanus.net/codrops/?p=18699" class="bp-icon bp-icon-drop" data-info="back to the Codrops article"><span>back to the Codrops article</span></a>-->
        <router-link to="/register" class="bp-icon bp-icon-archive" data-info="Register"><span>Register</span></router-link>
      </nav>
    </header>

    <div id="team">
      <h1>Our Team</h1>
      <ul class="two">
        <TeamCard :member="member" :key='member.name' v-for="member in team" style="margin-bottom:2em;margin-top:2em;"></TeamCard>
      </ul>
    </div>
  </div>

</template>

<script>
    import axios from 'axios';
    import TeamCard from '@/components/Team/TeamCard';
    export default {
        name: 'Team',
        components: {
            TeamCard
        },
        data() {
            return {
                team: []
            }
        },
        created() {
            let url='//34.236.39.39/api/';
            axios.get(url+'team')
                .then(response=>{
                    console.log(response.data);
                    let data = response.data.data;
                    [data[5], data[6]] = [data[6],data[5]]
                    this.team = data;
                })
                .catch(response=>{
                    console.error("Error in getting team");
                });
        }
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

  .ts-team-nav {
    /*float: right;*/
    text-align: center;
  }

  .ts-team-nav a {
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

  .ts-team-nav a > span {
    display: none;
  }

  .ts-team-nav a:hover:before {
    content: attr(data-info);
    color: #47a3da;
    position: absolute;
    width: 600%;
    top: 120%;
    text-align: right;
    right: 0;
    pointer-events: none;
  }

  .ts-team-nav a:hover {
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

  .ts-team-nav .bp-icon:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 2;
    text-indent: 0;
  }

  .ts-team-nav a:hover:after {
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
    .ts-team-nav {
      float: none;
    }

    .container > header > span,
    .container > header h1 {
      text-align: center;
    }

    .ts-team-nav {
      margin: 0 auto;
    }

    .container > header > span {
      text-indent: 30px;
    }
  }


  ul {
    margin: 0;
    padding: 0;
  }

  .ts-team-nav a {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1em;

  }
</style>
