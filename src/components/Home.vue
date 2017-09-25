<template>
  <div class="home">
    <Banner></Banner>
    <Events></Events>
  </div>
</template>

<script>
  import Events from '@/components/Events'
  import Banner from '@/components/Banner'
  export default {
    name: 'Home',
    components: {
      Events,
      Banner
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
