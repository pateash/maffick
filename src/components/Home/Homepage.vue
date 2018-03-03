<template>
  <span>
    <nav id="cd-vertical-nav">
      <ul style="list-style: none">
        <li>
          <a href="#section1" data-number="1">
            <span class="cd-dot"></span>
            <span class="cd-label">Intro</span>
          </a>
        </li>
        <li>
          <a href="#section2" data-number="2">
            <span class="cd-dot"></span>
            <span class="cd-label">About</span>
          </a>
        </li>
        <li>
          <a href="#section3" data-number="3">
            <span class="cd-dot"></span>
            <span class="cd-label">Events</span>
          </a>
        </li>
        <li>
          <a href="#section4" data-number="4">
            <span class="cd-dot"></span>
            <span class="cd-label">Gallery</span>
          </a>
        </li>
        <li>
          <a href="#section5" data-number="5">
            <span class="cd-dot"></span>
            <span class="cd-label">Register</span>
          </a>
        </li>
        <li>
          <a href="#section6" data-number="6">
            <span class="cd-dot"></span>
            <span class="cd-label">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
    <a class="cd-nav-trigger cd-img-replace">Open navigation<span></span></a>

    <div id="navigator" style="left: -200px;">
      <ul id="nav">
        <li class="nav_tab">
          <router-link to="/">
             <p>Home  &nbsp;  <i class="fa fa-home"></i></p>
          </router-link>
        </li>
        <li class="nav_tab">
          <router-link to="/events/competitions">
             <p>Events  &nbsp;  <i class="fa fa-star-half-o"></i></p>
          </router-link>
        </li>

         <li class="nav_tab">
           <router-link to="/register">
             <p>Register  &nbsp;  <i class="fa fa-ticket"></i></p>
           </router-link>
        </li>
        <li class="nav_tab">
           <router-link to="/pronites">
             <p>Pro Nites&nbsp;  <i class="fa fa-users"></i></p>
           </router-link>
        </li>
        <li class="nav_tab">
           <a href="javascript:void(0)" id="ts-nav-contact">
             <p>Contact  &nbsp;  <i class="fa fa-at"></i></p>
           </a>
        </li>
        <li class="nav_tab">
           <router-link to="/team">
             <p>Our Team&nbsp;  <i class="fa fa-users"></i></p>
           </router-link>
        </li>
      </ul>
    </div>
    <div class="menu-icon" style="left: 0px;">
      <div class="line_one"></div>
      <div class="line_two"></div>
        <div class="line_three"></div>
        <!--<img src="wp-content/themes/mugs/images/uparrow.png">      -->
    </div>

    <section id="section1" class="cd-section">
      <!--<h1>Vertical Fixed Navigation</h1>-->
      <banner></banner>
      <a href="#section2" class="cd-scroll-down cd-img-replace">scroll down</a>
    </section><!-- cd-section -->

    <section id="section2" class="cd-section tc-about-section">
      <about></about>
      <a href="#section3" class="cd-scroll-down cd-img-replace">scroll down</a>
    </section><!-- cd-section -->

    <section id="section3" class="cd-section">
      <events></events>
      <a href="#section4" class="cd-scroll-down cd-img-replace">scroll down</a>
    </section><!-- cd-section -->

    <section id="section4" class="cd-section">
      <pronites></pronites>
    </section><!-- cd-section -->

    <section id="section5" class="cd-section">
      <register></register>
    </section><!-- cd-section -->

    <section id="section6" class="cd-section">
      <contact></contact>
    </section><!-- cd-section -->
  </span>
</template>

<script>
  import SmoothScroll from 'smooth-scroll';
  import Banner from '@/components/Home/Banner';
  import About from '@/components/Home/About';
  import Events from '@/components/Home/Events';
  import Pronites from '@/components/Home/Pronites';
  import Contact from '@/components/Home/Contact';
  import Register from '@/components/Home/Register';

//  import Slideout from '@/components/Slideout'


  export default {
    name: 'Homepage',
    components: {
      Register,
      Banner,
      About,
      Events,
      Pronites,
      Contact,
    },
    mounted() {
      let contentSections = document.querySelectorAll('.cd-section'),
        navigationItems = document.querySelectorAll('#cd-vertical-nav a');

//      console.log(contentSections, navigationItems)

      updateNavigation();
      window.addEventListener('scroll', function() {
        updateNavigation();
      })

      //smooth scroll to the section
      navigationItems.forEach(item => {
//        console.log(item)
        item.addEventListener('click', navButtonClicked)
      });

      //smooth scroll to second section
      // careful of multiple items with query selector
      const scrolls = document.querySelectorAll('.cd-scroll-down');
      if(scrolls) {
        scrolls.forEach(scroll => {
          scroll.addEventListener('click', function(event) {
            event.preventDefault();
            smoothScroll(this.hash);
          })
        })
      }
//      document.querySelector('.cd-scroll-down').addEventListener('click', function(event) {
//        event.preventDefault();
//        smoothScroll(this.hash);
//      })

      //open-close navigation on touch devices
      const trigger = document.querySelector('.touch .cd-nav-trigger');
//      console.log({ trigger })
      if (trigger) {
        trigger.addEventListener('click', function() {
          document.querySelector('.touch #cd-vertical-nav').classList.toggle('open');
        })

      }

      //close navigation on touch devices when selectin an elemnt from the list
      const x = document.querySelector('.touch #cd-vertical-nav a');
//      console.log({ x })
      if (x) {
        x.addEventListener('click', function() {
          document.querySelector('.touch #cd-vertical-nav').classList.remove('open');
        })

      }

      function updateNavigation() {
        contentSections.forEach(function(section) {
          // vanilla JS window width and height
          const w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            width = w.innerWidth || e.clientWidth || g.clientWidth,
            height = w.innerHeight || e.clientHeight || g.clientHeight,
            scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
          // console.log({ section })
          const elem = document.querySelector('#cd-vertical-nav a[href="#' + section.getAttribute('id') + '"]');
          // console.log({ elem })
          if (elem) {
            let activeSection = elem.dataset.number - 1;
            // console.log(scrollTop, section.offsetTop);
            if ((section.offsetTop - height / 2 < scrollTop) && (section.offsetTop + height - height / 2 > scrollTop)) {
              // let y = navigationItems[activeSection];
              // console.log('to be selected', y);
              navigationItems[activeSection].classList.add('is-selected')
            } else {
              navigationItems[activeSection].classList.remove('is-selected')
            }
          }
        });
      }

      function smoothScroll(target) {
        const scroll = new SmoothScroll();
//        console.log(scroll)
        let anchor = document.querySelector(target);
        scroll.animateScroll(anchor);
      }

      function navButtonClicked(event) {
        event.preventDefault();
        smoothScroll(this.hash);
      }

      let menuIcon = document.querySelector('.menu-icon');
      let navigator = document.getElementById('navigator');
      menuIcon.addEventListener('click', function (event) {
        if(navigator.style.left == "-200px") {
          navigator.style.left = 0

          menuIcon.style.left = "200px"
        } else {
          navigator.style.left = "-200px"
          menuIcon.style.left = 0
        }
        this.classList.toggle('on');
      })
//      $('.menu-icon').click(function () {
//        if ($('#navigator').css("left") == "-250px") {
//          $('#navigator').animate({left: '0px'}, 350);
//          $('.menu-icon').animate({left: '250px'}, 350);
//          $('.menu-text').animate({left: '300px'}, 350).empty().text("Close");
//        }
//        else  {
//          $('#navigator').animate({left: '-250px'}, 350);
//          $(this).animate({left: '0px'}, 350);
//          $('.menu-text').animate({left: '50px'}, 350).empty().text("Menu");
//
//        }
//      });
//      $('.menu-icon').click(function () {
//        $(this).toggleClass("on"); });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /* --------------------------------

  Primary style

  -------------------------------- */
  html * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    font-size: 100%;
    font-family: "Source Sans Pro", sans-serif;
    color: #3e3947;
    /*background-color: white;*/
  }

  body, html {
    height: 100%;
  }

  a {
    color: #3e3947;
    text-decoration: none;
  }

  img {
    /*max-width: 100%;*/
  }

  /* --------------------------------

  Modules - reusable parts of our design

  -------------------------------- */
  .cd-img-replace {
    /* replace text with a background-image */
    display: inline-block;
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap;
  }

  /* --------------------------------

  Main components

  -------------------------------- */
  .cd-section {
    min-height: 100%;
    position: relative;
    padding: 2em 0;
  }
  .cd-section:nth-of-type(odd) {
    /*background-color: #3e3947;*/
  }
  .cd-section:nth-of-type(odd) p {
    /*color: #898099;*/
  }
  .cd-section:nth-of-type(even) {
    /*background-color: #745360;*/
  }
  .cd-section:nth-of-type(even) p {
    /*color: #bda3ad;*/
  }
  .cd-section > h1, .cd-section > p {
    position: absolute;
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    width: 90%;
    max-width: 768px;
    text-align: center;
  }
  .cd-section > h1 {
    color: white;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 20px;
    font-size: 1.25rem;
  }
  .cd-section > p {
    line-height: 1.6;
  }
  @media only screen and (min-width: 768px) {
    .cd-section > h1 {
      font-size: 30px;
      font-size: 1.875rem;
    }
    .cd-section > p {
      font-size: 20px;
      font-size: 1.25rem;
      line-height: 2;
    }
  }

  .cd-scroll-down {
    position: absolute;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    bottom: 20px;
    width: 38px;
    height: 44px;
    background: url("../../assets/cd-arrow-bottom.svg") no-repeat center center;
  }

  /* No touch devices */
  .cd-nav-trigger {
    display: none;
  }

  .no-touch #cd-vertical-nav {
    position: fixed;
    right: 40px;
    top: 50%;
    bottom: auto;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 2;
  }
  .no-touch #cd-vertical-nav li {
    text-align: right;
  }
  .no-touch #cd-vertical-nav a {
    display: inline-block;
    /* prevent weird movements on hover when you use a CSS3 transformation - webkit browsers */
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .no-touch #cd-vertical-nav a:after {
    content: "";
    display: table;
    clear: both;
  }
  .no-touch #cd-vertical-nav a span {
    float: right;
    display: inline-block;
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    -ms-transform: scale(0.6);
    -o-transform: scale(0.6);
    transform: scale(0.6);
  }
  .no-touch #cd-vertical-nav a:hover span {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  .no-touch #cd-vertical-nav a:hover .cd-label {
    opacity: 1;
  }
  .no-touch #cd-vertical-nav a.is-selected .cd-dot {
    background-color: white;
  }
  .no-touch #cd-vertical-nav .cd-dot {
    position: relative;
    /* we set a top value in order to align the dot with the label. If you change label's font, you may need to change this top value*/
    top: 8px;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: #d88683;
    -webkit-transition: -webkit-transform 0.2s, background-color 0.5s;
    -moz-transition: -moz-transform 0.2s, background-color 0.5s;
    transition: transform 0.2s, background-color 0.5s;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  .no-touch #cd-vertical-nav .cd-label {
    position: relative;
    margin-right: 10px;
    padding: .4em .5em;
    color: white;
    font-size: 14px;
    font-size: 0.875rem;
    -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;
    -moz-transition: -moz-transform 0.2s, opacity 0.2s;
    transition: transform 0.2s, opacity 0.2s;
    opacity: 0;
    -webkit-transform-origin: 100% 50%;
    -moz-transform-origin: 100% 50%;
    -ms-transform-origin: 100% 50%;
    -o-transform-origin: 100% 50%;
    transform-origin: 100% 50%;

    text-transform: uppercase;
  }

  /* touch devices */
  .touch .cd-nav-trigger {
    display: block;
    z-index: 10001;
    position: fixed;
    bottom: 30px;
    right: 5%;
    height: 44px;
    width: 44px;
    border-radius: 0.25em;
    background: rgba(255, 255, 255, 0.9);
  }
  .touch .cd-nav-trigger span {
    position: absolute;
    height: 4px;
    width: 4px;
    background-color: #3e3947;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  .touch .cd-nav-trigger span::before, .touch .cd-nav-trigger span::after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    background-color: inherit;
    border-radius: inherit;
  }
  .touch .cd-nav-trigger span::before {
    top: -9px;
  }
  .touch .cd-nav-trigger span::after {
    bottom: -9px;
  }

  .touch #cd-vertical-nav {
    position: fixed;
    z-index: 10000;
    right: 5%;
    bottom: 30px;
    /*width: 90%;*/
    width: 70%;
    max-width: 400px;
    max-height: 90%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    transition-property: transform;
    -webkit-transition-duration: 0.2s;
    -moz-transition-duration: 0.2s;
    transition-duration: 0.2s;
    border-radius: 0.25em;
    background-color: rgba(255, 255, 255, 0.9);
  }
  .touch #cd-vertical-nav ul {
    padding: 0;
  }
  .touch #cd-vertical-nav a {
    display: block;
    padding: 1em;
    border-bottom: 1px solid rgba(62, 57, 71, 0.1);
  }
  .touch #cd-vertical-nav a span:first-child {
    display: none;
  }
  .touch #cd-vertical-nav a.is-selected span:last-child {
    color: #d88683;
  }
  .touch #cd-vertical-nav.open {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  .touch #cd-vertical-nav.open + .cd-nav-trigger {
    background-color: transparent;
  }
  .touch #cd-vertical-nav.open + .cd-nav-trigger span {
    background-color: rgba(62, 57, 71, 0);
  }
  .touch #cd-vertical-nav.open + .cd-nav-trigger span::before, .touch #cd-vertical-nav.open + .cd-nav-trigger span::after {
    background-color: #3e3947;
    height: 3px;
    width: 20px;
    border-radius: 0;
    left: -8px;
  }
  .touch #cd-vertical-nav.open + .cd-nav-trigger span::before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 1px;
  }
  .touch #cd-vertical-nav.open + .cd-nav-trigger span::after {
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
    bottom: 0;
  }
  .touch #cd-vertical-nav li:last-child a {
    border-bottom: none;
  }

  @media only screen and (min-width: 768px) {
    .touch .cd-nav-trigger, .touch #cd-vertical-nav {
      bottom: 40px;
    }
  }

  /* Written by Manohar */
  #section1 {
    padding: 0;
  }
  .cd-scroll-down {
    z-index: 9999;
  }
  .tc-about-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #section2 {
    /*background: none!important;*/
    background-color: #2b2b2b;
    background-image: url("https://vuetifyjs.com/static/doc-images/parallax/material2.jpg");
    box-shadow: 0 0 200px rgba(0,0,0,0.9) inset;
  }

  /* Events */
  #section3 {
    /*background-color: #212121;*/
    /*background: #310404 url(../../assets/red_texture.jpg) repeat top left;*/
    background-color: #58674a;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23d4d2b9' fill-opacity='0.22' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 200px rgba(0,0,0,0.4) inset;
  }

  /* Gallery */
  #section4 {
    padding:0;
  }

  /* Register */
  #section5 {
    padding: 0;
    min-height: 0;
  }

  /* COntact */
  #section6 {
    padding: 0;
    min-height: 500px!important;
    background-color: #2c3e50;
  }
  @media only screen and (max-width: 500px) {
    span.cd-label {
      color: #3e3947;
    }
  }



  /* For the menu */
  .menu-icon {
    width: 150px;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0px;
    margin: 10px;
    z-index: 10099;
    cursor: pointer;
    -webkit-transition: all 0.5s ease-in;
    -moz-transition: all 0.5s ease-in;
    -ms-transition: all 0.5s ease-in;
    -o-transition: all 0.5s ease-in;
    transition: all 0.5s ease-in;
  }
  .menu-icon div {
    width: 40px;
    height: 5px;
    background: #FFFFFF;
    margin: 5px;
    transition: all 0.35s;
    border-radius: 2px;
  }

  #navigator {
    width: 200px;
    height: 100%;
    position: fixed;
    top: 0;
    left: -200px;
    background: rgba(0, 0, 0,0.7);
    float: right;
    z-index: 99999;
    -webkit-transition: all 0.5s ease-in;
    -moz-transition: all 0.5s ease-in;
    -ms-transition: all 0.5s ease-in;
    -o-transition: all 0.5s ease-in;
    transition: all 0.5s ease-in;
    font-family: 'Source Sans Pro', Serif;
  }
  #navigator #nav {
    width: 200px;
    height: auto;
    display: block;
    margin: 0;
    padding: 0;
  }
  #navigator .nav_tab {
    width: 200px;
    height: 40px;
    display: block;
  }
  .nav_tab a p {
    color: rgba(255,255,255,0.8);
    font-size: 18px;
    padding: 11px 11px;
    text-align: right;
    transition: 0.35s ease;
    -webkit-transition: 0.35s ease;
    -moz-transition: 0.35s ease;
  }
  .nav_tab a p:hover {
    background: rgba(255,255,255,0.9);
    color: rgba(0,0,0,1);
    letter-spacing: 2px;
    transition: 0.35s ease;
    -webkit-transition: 0.35s ease;
    -moz-transition: 0.35s ease;
  }
</style>
