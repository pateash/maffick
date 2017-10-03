<template>
  <div class="zap-slideout"
       :class="{ isOpen: isOpen }">
    <div class="zap-slideout-opener"
         @click="toggle">{{openerText}}</div>
    <ul class="zap-slideout-menu">
      <li class="zap-slideout-menu-item">
        <img class="zap-emoji" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/19332/zap-emoji.svg" alt="Zap Emoji" />
      </li>
      <li class="zap-slideout-menu-item"
          v-for="item in menu">{{item}}</li>
      <li class="zap-slideout-menu-item--small"
          v-for="item in smallMenu">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Slideout',
    data() {
      return {
        openerText: 'Open',
        isOpen: false,
        menu: [ 'Home', 'Work', 'Contact' ],
        smallMenu: [ 'Tips', 'Resources', 'Shenanigans' ]
      }
    },
    methods: {
      open() {
        this.openerText = 'Close';
        this.isOpen = true;
      },
      close() {
        this.openerText = 'Open';
        this.isOpen = false;
      },
      toggle() {
        if (this.isOpen) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  strong {
    font-weight: 600;
  }

  .info {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    text-align: center;
  }

  .title {
    font-size: 24px;
    font-weight: 600;
  }

  .description {
    margin-top: 20px;
  }

  /*
  Our Zap Slideout styles...
   */
  .zap-slideout {
    position: relative;
    width: 240px;
    height: 100vh;
    padding: 30px;
    background-color: #34495e;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: -webkit-transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .zap-slideout.isOpen {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  .zap-slideout-opener {
    position: absolute;
    top: 20px;
    left: 100%;
    margin-left: 20px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #fff;
    cursor: pointer;
  }
  .zap-slideout-opener:hover {
    text-decoration: underline;
  }

  .zap-slideout-menu {
    font-weight: 600;
    color: #fff;
  }

  .zap-slideout-menu-item,
  .zap-slideout-menu-item--small {
    cursor: pointer;
  }
  .zap-slideout-menu-item:hover,
  .zap-slideout-menu-item--small:hover {
    text-decoration: underline;
  }
  .zap-slideout-menu-item + .zap-slideout-menu-item,
  .zap-slideout-menu-item--small + .zap-slideout-menu-item, .zap-slideout-menu-item +
  .zap-slideout-menu-item--small,
  .zap-slideout-menu-item--small +
  .zap-slideout-menu-item--small {
    margin-top: 20px;
  }

  .zap-slideout-menu-item {
    font-size: 36px;
  }
  .zap-slideout-menu-item + .zap-slideout-menu-item--small {
    margin-top: 30px;
  }

  .zap-slideout-menu-item--small {
    font-size: 18px;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #ecf0f1;
  }

  /* The famed Zap agency logo (TM) */
  .zap-emoji {
    height: 120px;
  }

</style>
