<template>
  <!--<div class="home">-->
    <Homepage></Homepage>
    <!--<Banner></Banner>-->
    <!--<Events></Events>-->
  <!--</div>-->
</template>

<script>
  import Events from '@/components/Events'
  import Banner from '@/components/Banner'
  import Homepage from '@/components/Home/Homepage'
  export default {
    name: 'Home',
    components: {
      Events,
      Banner,
      Homepage
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
