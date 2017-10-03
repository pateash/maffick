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
    name: 'Pricing',
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
    font-family: 'Source Sans Pro', Serif;
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

  @media only screen and (max-width: 500px) {
    .tc-about-text {
      font-size: 24px;
    }
  }
</style>
