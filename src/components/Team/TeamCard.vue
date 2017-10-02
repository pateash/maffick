<template>
  <figure class="tc-team-img"><img :src="image" alt="profile-sample1" class="background"/>
    <img :src="image" alt="profile-sample1" class="profile"/>
    <figcaption>
      <h3>{{name}}<span>{{role}}</span></h3>
      <div class="icons"><a href="#"><i class="ion-social-reddit-outline"></i></a><a href="#"> <i class="ion-social-twitter-outline"></i></a><a href="#"> <i class="ion-social-vimeo-outline"></i></a></div>
    </figcaption>
  </figure>
</template>

<script>
  export default {
    name: "TeamCard",
    props: ['name', 'image', 'role']
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
