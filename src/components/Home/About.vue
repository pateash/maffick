<template>
  <div class="tc-about">
    <p class="tc-about-text">
      The Wait is finally Over! <br>
      <span class="underline--magical">NIT Bhopal</span> proudly brings you the latest instalment of <br>Central's India's Largest Technical Fest!
      <span class="underline--magical">TECHNOSEARCH'17</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'About',
    mounted() {
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
    font-size: 40px;
    font-weight: bold;
  }

  @media only screen and (max-width: 500px) {
    .tc-about-text {
      font-size: 24px;
    }
  }

.underline--magical {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
}
.underline--magical:hover {
  background-size: 100% 88%;
}
</style>
