<template>
  <div>
    <main class="cd-main-content">
      <div class="center">
        <h1>Ink Transition Effect</h1>
        <a href="#0" class="cd-btn cd-modal-trigger">Start Effect</a>
      </div>
    </main> <!-- .cd-main-content -->

    <div class="cd-modal">
      <div class="modal-content">
        <h1>My Modal Content</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad modi repellendus, optio eveniet eligendi molestiae? Fugiat, temporibus! A rerum pariatur neque laborum earum, illum voluptatibus eum voluptatem fugiat, porro animi tempora? Sit harum nulla, nesciunt molestias, iusto aliquam aperiam est qui possimus reprehenderit ipsam ea aut assumenda inventore iste! Animi quaerat facere repudiandae earum quisquam accusamus tempora, delectus nesciunt, provident quae aliquam, voluptatum beatae quis similique in maiores repellat eligendi voluptas veniam optio illum vero! Eius, dignissimos esse eligendi veniam.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis saepe amet sit fugit rerum, corporis minus vitae officia quaerat incidunt voluptate, blanditiis ea est quibusdam voluptas animi quasi totam magni, commodi praesentium. Possimus quam illo ipsam iste unde totam cupiditate deleniti, impedit assumenda hic eligendi natus tempora dolores quod mollitia ab non sunt eaque adipisci, suscipit quas aliquid officiis beatae. Necessitatibus voluptatibus, perferendis tenetur perspiciatis adipisci nesciunt eum ex fuga commodi iure numquam enim rem ullam labore nisi magni sint voluptatem quos! Eum iure exercitationem voluptates repellendus culpa doloremque laborum animi illum, sint fugit soluta possimus a fuga veritatis molestias corporis placeat illo pariatur dolor reiciendis earum, sapiente omnis. Placeat maiores omnis, porro officia, laborum eos. Fugiat mollitia inventore consequuntur odit eaque, rerum recusandae, eum sint molestiae consequatur culpa deserunt quae aliquid dolor tempora tenetur architecto repellendus enim quasi atque, odio voluptas. Tenetur repellendus explicabo ipsum inventore quia aut eos expedita necessitatibus asperiores blanditiis! Delectus nisi laudantium ipsum! Quasi blanditiis corrupti dicta maiores placeat laboriosam delectus ipsum facere voluptas, magnam voluptatibus, perferendis alias ullam saepe, perspiciatis recusandae voluptates, dolores praesentium?
        </p>
      </div> <!-- .modal-content -->

      <a href="#0" class="modal-close">Close</a>
    </div> <!-- .cd-modal -->

    <div class="cd-transition-layer">
      <div class="bg-layer"></div>
    </div> <!-- .cd-transition-layer -->
  </div>
</template>

<script>
  export default {
    name: 'Sponsors',
    mounted() {
      /* doc ready */
/*      (function(funcName, baseObj) {
        "use strict";
        // The public function name defaults to window.docReady
        // but you can modify the last line of this function to pass in a different object or method name
        // if you want to put them in a different namespace and those will be used instead of
        // window.docReady(...)
        funcName = funcName || "docReady";
        baseObj = baseObj || window;
        var readyList = [];
        var readyFired = false;
        var readyEventHandlersInstalled = false;

        // call this when the document is ready
        // this function protects itself against being called more than once
        function ready() {
          if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
              // if a callback here happens to add new ready handlers,
              // the docReady() function will see that it already fired
              // and will schedule the callback to run right after
              // this event loop finishes so all handlers will still execute
              // in order and no new ones will be added to the readyList
              // while we are processing the list
              readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
          }
        }

        function readyStateChange() {
          if ( document.readyState === "complete" ) {
            ready();
          }
        }

        // This is the one public interface
        // docReady(fn, context);
        // the context argument is optional - if present, it will be passed
        // as an argument to the callback
        baseObj[funcName] = function(callback, context) {
          if (typeof callback !== "function") {
            throw new TypeError("callback for docReady(fn) must be a function");
          }
          // if ready has already fired, then just schedule the callback
          // to fire asynchronously, but right away
          if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
          } else {
            // add the function and context to the list
            readyList.push({fn: callback, ctx: context});
          }
          // if document already ready to go, schedule the ready function to run
          // IE only safe when readyState is "complete", others safe when readyState is "interactive"
          if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
            setTimeout(ready, 1);
          } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
              // first choice is DOMContentLoaded event
              document.addEventListener("DOMContentLoaded", ready, false);
              // backup is window load event
              window.addEventListener("load", ready, false);
            } else {
              // must be IE
              document.attachEvent("onreadystatechange", readyStateChange);
              window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
          }
        }
      })("docReady", window);

      /!* end of doc ready*!/
      window.docReady(function () {

      })*/

      var modalTrigger = document.querySelector('.cd-modal-trigger'),
        transitionLayer = document.querySelector('.cd-transition-layer'),
        transitionBackground = transitionLayer.children[0],
        modalWindow = document.querySelector('.cd-modal');

      console.log(modalTrigger,
        transitionLayer,
        transitionBackground,
        modalWindow)


      var frameProportion = 1.78, //png frame aspect ratio
        frames = 25, //number of png frames
        resize = false;

      //set transitionBackground dimentions
      setLayerDimensions();
      window.addEventListener('resize', function() {
        if (!resize) {
          resize = true;
          (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300): window.requestAnimationFrame(setLayerDimensions);
        }
      })

      //open modal window
      modalTrigger.addEventListener('click', startEffect);

      function startEffect(event) {
        if(event) event.preventDefault();
        console.log('start effect called', transitionLayer)

        transitionLayer.classList.add('visible');
        transitionLayer.classList.add('opening');

//        let noanim = document.querySelectorAll('.no-cssanimations');
//        var delay = (noanim.length > 0) ? 0 : 600;
//        setTimeout(function() {
//          modalWindow.classList.add('visible');
//        }, delay);
        setTimeout(()=> {
          endEffect();
        }, 600)
      }

      //      close modal window
      let modClose = document.querySelector('.modal-close');
      const animEndEventNames = {
        'WebkitAnimation' : 'webkitAnimationEnd',// Saf 6, Android Browser
        'MozTAnimation'   : 'animationend',      // only for FF < 15
        'animation'       : 'animationend'       // IE10, Opera, Chrome, FF 15+, Saf 7+
      };
      let animEndEventName = animEndEventNames[ Modernizr.prefixed('animation') ];
      modClose.addEventListener('click', endEffect);

      function endEffect(event) {
        if(event) {
          event.preventDefault();
        }
        console.log('end stuff called', transitionLayer)

        transitionLayer.classList.add('closing');
        setTimeout(() => {
          modalWindow.classList.remove('visible');

        },0)
        console.log('modal window', modalWindow)
        transitionBackground.addEventListener(animEndEventName, removeStuff);
      }

      function removeStuff() {
        console.log('remove stuff called', transitionLayer)
        transitionLayer.classList.remove('closing');
        transitionLayer.classList.remove('opening');
        transitionLayer.classList.remove('visible');
        transitionBackground.removeEventListener(animEndEventName, removeStuff);
      }

      function setLayerDimensions() {
        const w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          width = w.innerWidth || e.clientWidth || g.clientWidth,
          height = w.innerHeight || e.clientHeight || g.clientHeight;

        var windowWidth = width,
          windowHeight = height,
          layerHeight, layerWidth;

        if (windowWidth / windowHeight > frameProportion) {
          layerWidth = windowWidth;
          layerHeight = layerWidth / frameProportion;
        } else {
          layerHeight = windowHeight * 1.2;
          layerWidth = layerHeight * frameProportion;
        }

        // transitionBackground.css({
        //     'width': layerWidth * frames + 'px',
        //     'height': layerHeight + 'px',
        // });
        transitionBackground.style.width = layerWidth * frames + 'px';
        transitionBackground.style.height = layerHeight + 'px';

        resize = false;

      }
        startEffect();
//        endEffect();
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* --------------------------------

  Primary style

  -------------------------------- */
  *, *::after, *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: "PT Sans", sans-serif;
    color: #242322;
    background-color: #ffffff;
  }

  a {
    color: #a5c4bc;
    text-decoration: none;
  }

  /* --------------------------------

  Patterns - reusable parts of our design

  -------------------------------- */
  .cd-btn {
    display: inline-block;
    padding: 1.6em 2.4em;
    font-size: 1.4rem;
    letter-spacing: .15em;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    background-color: #a5c4bc;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-transition: box-shadow 0.3s;
    -moz-transition: box-shadow 0.3s;
    transition: box-shadow 0.3s;
  }
  .no-touch .cd-btn:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  /* --------------------------------

  Typography

  -------------------------------- */
  h1 {
    font-size: 2.6rem;
    line-height: 1;
    margin-bottom: 1em;
    font-family: "IM Fell Double Pica", serif;
    font-style: italic;
  }
  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 5rem;
    }
  }

  /* --------------------------------

  Main Content

  -------------------------------- */
  .cd-main-content {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100vh;
    /* vertically align its content */
    display: table;
    background-color: #e4dcca;
  }
  .cd-main-content .center {
    /* vertically align inside parent element */
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  /* --------------------------------

  Modal window

  -------------------------------- */
  .cd-modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: #402f44 url(../../assets/modal-bg.jpg) no-repeat center center;
    background-size: cover;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: opacity 0.3s 0s, visibility 0s 0.3s;
    -moz-transition: opacity 0.3s 0s, visibility 0s 0.3s;
    transition: opacity 0.3s 0s, visibility 0s 0.3s;
  }
  .cd-modal .modal-content {
    height: 100%;
    overflow-y: auto;
    padding: 3em 5%;
    color: #e4dcca;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .cd-modal h1 {
    text-align: center;
  }
  .cd-modal h1::after {
    /* ink/brush separation */
    content: '';
    display: block;
    width: 130px;
    height: 18px;
    background: url(../../assets/ink-separation.svg) no-repeat center center;
    margin: .2em auto 0;
  }
  .cd-modal p {
    line-height: 1.6;
    margin: 2em auto;
    max-width: 800px;
  }
  .cd-modal .modal-close {
    /* 'X' icon */
    position: absolute;
    z-index: 1;
    top: 20px;
    right: 5%;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.3) url(../../assets/cd-icon-close.svg) no-repeat center center;
    /* image replacement */
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap;
    visibility: hidden;
    opacity: 0;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    -webkit-transition: -webkit-transform 0.3s 0s, visibility 0s 0.3s, opacity 0.3s 0s;
    -moz-transition: -moz-transform 0.3s 0s, visibility 0s 0.3s, opacity 0.3s 0s;
    transition: transform 0.3s 0s, visibility 0s 0.3s, opacity 0.3s 0s;
  }
  .no-touch .cd-modal .modal-close:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .cd-modal.visible {
    opacity: 1;
    visibility: visible;
    -webkit-transition: opacity 0.7s, visibility 0s;
    -moz-transition: opacity 0.7s, visibility 0s;
    transition: opacity 0.7s, visibility 0s;
  }
  .cd-modal.visible .modal-content {
    /* this fixes the buggy scrolling on webkit browsers - mobile devices only - when overflow property is applied */
    -webkit-overflow-scrolling: touch;
  }
  .cd-modal.visible .modal-close {
    visibility: visible;
    opacity: 1;
    -webkit-transition: -webkit-transform 0.3s 0s, visibility 0s 0s, opacity 0.3s 0s;
    -moz-transition: -moz-transform 0.3s 0s, visibility 0s 0s, opacity 0.3s 0s;
    transition: transform 0.3s 0s, visibility 0s 0s, opacity 0.3s 0s;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  @media only screen and (min-width: 1100px) {
    .cd-modal .modal-content {
      padding: 6em 5%;
    }
    .cd-modal .modal-close {
      height: 60px;
      width: 60px;
    }
    .cd-modal p {
      font-size: 2rem;
    }
  }

  /* --------------------------------

  Transition Layer

  -------------------------------- */
  .cd-transition-layer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100%;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
  }
  .cd-transition-layer .bg-layer {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translateY(-50%) translateX(-2%);
    -moz-transform: translateY(-50%) translateX(-2%);
    -ms-transform: translateY(-50%) translateX(-2%);
    -o-transform: translateY(-50%) translateX(-2%);
    transform: translateY(-50%) translateX(-2%);
    /* its dimentions will be overwritten using jQuery to proportionally fit the viewport */
    height: 100%;
    /* our sprite is composed of 25 frames */
    width: 2500%;
    background: url(../../assets/ink.png) no-repeat 0 0;
    background-size: 100% 100%;
  }
  .cd-transition-layer.visible {
    opacity: 1;
    visibility: visible;
  }
  .cd-transition-layer.opening .bg-layer {
    -webkit-animation: cd-sequence 0.8s steps(24);
    -moz-animation: cd-sequence 0.8s steps(24);
    animation: cd-sequence 0.8s steps(24);
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  .cd-transition-layer.closing .bg-layer {
    -webkit-animation: cd-sequence-reverse 0.8s steps(24);
    -moz-animation: cd-sequence-reverse 0.8s steps(24);
    animation: cd-sequence-reverse 0.8s steps(24);
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  .no-cssanimations .cd-transition-layer {
    display: none;
  }

  @-webkit-keyframes cd-sequence {
    0% {
      /* translateX(-2%) is used to horizontally center the first frame inside the viewport */
      -webkit-transform: translateY(-50%) translateX(-2%);
    }
    100% {
      /* translateX(-98%) (2% + 96) is used to horizontally center the last frame inside the viewport  */
      -webkit-transform: translateY(-50%) translateX(-98%);
    }
  }
  @-moz-keyframes cd-sequence {
    0% {
      /* translateX(-2%) is used to horizontally center the first frame inside the viewport */
      -moz-transform: translateY(-50%) translateX(-2%);
    }
    100% {
      /* translateX(-98%) (2% + 96) is used to horizontally center the last frame inside the viewport  */
      -moz-transform: translateY(-50%) translateX(-98%);
    }
  }
  @keyframes cd-sequence {
    0% {
      /* translateX(-2%) is used to horizontally center the first frame inside the viewport */
      -webkit-transform: translateY(-50%) translateX(-2%);
      -moz-transform: translateY(-50%) translateX(-2%);
      -ms-transform: translateY(-50%) translateX(-2%);
      -o-transform: translateY(-50%) translateX(-2%);
      transform: translateY(-50%) translateX(-2%);
    }
    100% {
      /* translateX(-98%) (2% + 96) is used to horizontally center the last frame inside the viewport  */
      -webkit-transform: translateY(-50%) translateX(-98%);
      -moz-transform: translateY(-50%) translateX(-98%);
      -ms-transform: translateY(-50%) translateX(-98%);
      -o-transform: translateY(-50%) translateX(-98%);
      transform: translateY(-50%) translateX(-98%);
    }
  }
  @-webkit-keyframes cd-sequence-reverse {
    0% {
      -webkit-transform: translateY(-50%) translateX(-98%);
    }
    100% {
      -webkit-transform: translateY(-50%) translateX(-2%);
    }
  }
  @-moz-keyframes cd-sequence-reverse {
    0% {
      -moz-transform: translateY(-50%) translateX(-98%);
    }
    100% {
      -moz-transform: translateY(-50%) translateX(-2%);
    }
  }
  @keyframes cd-sequence-reverse {
    0% {
      -webkit-transform: translateY(-50%) translateX(-98%);
      -moz-transform: translateY(-50%) translateX(-98%);
      -ms-transform: translateY(-50%) translateX(-98%);
      -o-transform: translateY(-50%) translateX(-98%);
      transform: translateY(-50%) translateX(-98%);
    }
    100% {
      -webkit-transform: translateY(-50%) translateX(-2%);
      -moz-transform: translateY(-50%) translateX(-2%);
      -ms-transform: translateY(-50%) translateX(-2%);
      -o-transform: translateY(-50%) translateX(-2%);
      transform: translateY(-50%) translateX(-2%);
    }
  }

</style>
