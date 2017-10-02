<template>
  <div class="tc-contact">
    <div class="mapouter">
      <!--<div class="gmap_canvas">-->
        <!--<iframe width="100%" height="500" id="gmap_canvas"-->
                <!--src="https://maps.google.com/maps?q=Maulana%20Azad%20National%20Institute%20of%20Technology%2C%20Bhopal&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>-->
      <!--</div>-->

    </div>
    <div class="google-maps">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10222.577028784523!2d77.39981020179475!3d23.214072713391662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc74245bb15638ab9!2sMaulana+Azad+National+Institute+of+Technology!5e0!3m2!1sen!2sin!4v1506938764263" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    <!--<iframe-->
      <!--width="100%"-->
      <!--height="450"-->
      <!--frameborder="0" style="border:0"-->
      <!--src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBfLnx9-urkGZWb095GwCRCRX_s8KVN6To-->
    <!--?q=Maulana%20Azad%20National%20Institute%20of%20Technology%2C%20Bhopal" allowfullscreen>-->
    <!--</iframe>-->
  </div>
</template>

<script>
  export default {
    name: 'Contact'
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .mapouter{overflow:hidden;height:500px;width:600px;}
  .gmap_canvas {background:none!important;height:500px;width:600px;}

  .google-maps {
    position: relative;
    padding-bottom: 75%; // This is the aspect ratio
  height: 0;
    overflow: hidden;
  }
  .google-maps iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    /*height: 100% !important;*/
    height: 400px !important;
  }

</style>
