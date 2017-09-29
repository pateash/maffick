/* Modernizr */
/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-csstransitions-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */

// import imagesLoaded from 'vue-images-loaded'
!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return-1==n.indexOf(t)&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return-1!=n&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=0,o=i[n];t=t||[];for(var r=this._onceEvents&&this._onceEvents[e];o;){var s=r&&r[o];s&&(this.off(e,o),delete r[o]),o.apply(this,t),n+=s?0:1,o=i[n]}return this}},t.allOff=t.removeAllListeners=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){var t=[];if(Array.isArray(e))t=e;else if("number"==typeof e.length)for(var i=0;i<e.length;i++)t.push(e[i]);else t.push(e);return t}function o(e,t,r){return this instanceof o?("string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=n(e),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(e,t,r)}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&d[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});

import Masonry from 'masonry-layout';
console.log('Masonry',Masonry)

// class helper functions from bonzo https://github.com/ded/bonzo
function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}





/* Grid Gallery */
var docElem = window.document.documentElement,
  transEndEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd',
    'transition': 'transitionend'
  },
  transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
  support = {
    transitions : Modernizr.csstransitions,
    support3d : Modernizr.csstransforms3d
  };

function setTransform( el, transformStr ) {
  el.style.WebkitTransform = transformStr;
  el.style.msTransform = transformStr;
  el.style.transform = transformStr;
}

// from http://responsejs.com/labs/dimensions/
function getViewportW() {
  var client = docElem['clientWidth'],
    inner = window['innerWidth'];

  if( client < inner )
    return inner;
  else
    return client;
}

function extend( a, b ) {
  for( var key in b ) {
    if( b.hasOwnProperty( key ) ) {
      a[key] = b[key];
    }
  }
  return a;
}

function CBPGridGallery( el, options ) {
  this.el = el;
  this.options = extend( {}, this.options );
  extend( this.options, options );
  this._init();
}

CBPGridGallery.prototype.options = {
};

CBPGridGallery.prototype._init = function() {
  // main grid
  this.grid = this.el.querySelector( 'section.grid-wrap > ul.grid' );
  // main grid items
  this.gridItems = [].slice.call( this.grid.querySelectorAll( 'li:not(.grid-sizer)' ) );
  // items total
  this.itemsCount = this.gridItems.length;
  // slideshow grid
  this.slideshow = this.el.querySelector( 'section.slideshow > ul' );
  // slideshow grid items
  this.slideshowItems = [].slice.call( this.slideshow.children );
  // index of current slideshow item
  this.current = -1;
  // slideshow control buttons
  this.ctrlPrev = this.el.querySelector( 'section.slideshow > nav > span.nav-prev' );
  this.ctrlNext = this.el.querySelector( 'section.slideshow > nav > span.nav-next' );
  this.ctrlClose = this.el.querySelector( 'section.slideshow > nav > span.nav-close' );
  // init masonry grid
  this._initMasonry();
  // init events
  this._initEvents();
};

CBPGridGallery.prototype._initMasonry = function() {
  var grid = this.grid;
  imagesLoaded( grid, function() {
    new Masonry( grid, {
      itemSelector: 'li',
      columnWidth: grid.querySelector( '.grid-sizer' )
    });
  });
};

CBPGridGallery.prototype._initEvents = function() {
  var self = this;

  // open the slideshow when clicking on the main grid items
  this.gridItems.forEach( function( item, idx ) {
    item.addEventListener( 'click', function() {
      self._openSlideshow( idx );
    } );
  } );

  // slideshow controls
  this.ctrlPrev.addEventListener( 'click', function() { self._navigate( 'prev' ); } );
  this.ctrlNext.addEventListener( 'click', function() { self._navigate( 'next' ); } );
  this.ctrlClose.addEventListener( 'click', function() { self._closeSlideshow(); } );

  // window resize
  window.addEventListener( 'resize', function() { self._resizeHandler(); } );

  // keyboard navigation events
  document.addEventListener( 'keydown', function( ev ) {
    if ( self.isSlideshowVisible ) {
      var keyCode = ev.keyCode || ev.which;

      switch (keyCode) {
        case 37:
          self._navigate( 'prev' );
          break;
        case 39:
          self._navigate( 'next' );
          break;
        case 27:
          self._closeSlideshow();
          break;
      }
    }
  } );

  // trick to prevent scrolling when slideshow is visible
  window.addEventListener( 'scroll', function() {
    if ( self.isSlideshowVisible ) {
      window.scrollTo( self.scrollPosition ? self.scrollPosition.x : 0, self.scrollPosition ? self.scrollPosition.y : 0 );
    }
    else {
      self.scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
    }
  });
};

CBPGridGallery.prototype._openSlideshow = function( pos ) {
  this.isSlideshowVisible = true;
  this.current = pos;

  classie.addClass( this.el, 'slideshow-open' );

  /* position slideshow items */

  // set viewport items (current, next and previous)
  this._setViewportItems();

  // add class "current" and "show" to currentItem
  classie.addClass( this.currentItem, 'current' );
  classie.addClass( this.currentItem, 'show' );

  // add class show to next and previous items
  // position previous item on the left side and the next item on the right side
  if( this.prevItem ) {
    classie.addClass( this.prevItem, 'show' );
    var translateVal = Number( -1 * ( getViewportW() / 2 + this.prevItem.offsetWidth / 2 ) );
    setTransform( this.prevItem, support.support3d ? 'translate3d(' + translateVal + 'px, 0, -150px)' : 'translate(' + translateVal + 'px)' );
  }
  if( this.nextItem ) {
    classie.addClass( this.nextItem, 'show' );
    var translateVal = Number( getViewportW() / 2 + this.nextItem.offsetWidth / 2 );
    setTransform( this.nextItem, support.support3d ? 'translate3d(' + translateVal + 'px, 0, -150px)' : 'translate(' + translateVal + 'px)' );
  }
};

CBPGridGallery.prototype._navigate = function( dir ) {
  if( this.isAnimating ) return;
  if( dir === 'next' && this.current === this.itemsCount - 1 ||  dir === 'prev' && this.current === 0  ) {
    this._closeSlideshow();
    return;
  }

  this.isAnimating = true;

  // reset viewport items
  this._setViewportItems();

  var self = this,
    itemWidth = this.currentItem.offsetWidth,
    // positions for the centered/current item, both the side items and the incoming ones
    transformLeftStr = support.support3d ? 'translate3d(-' + Number( getViewportW() / 2 + itemWidth / 2 ) + 'px, 0, -150px)' : 'translate(-' + Number( getViewportW() / 2 + itemWidth / 2 ) + 'px)',
    transformRightStr = support.support3d ? 'translate3d(' + Number( getViewportW() / 2 + itemWidth / 2 ) + 'px, 0, -150px)' : 'translate(' + Number( getViewportW() / 2 + itemWidth / 2 ) + 'px)',
    transformCenterStr = '', transformOutStr, transformIncomingStr,
    // incoming item
    incomingItem;

  if( dir === 'next' ) {
    transformOutStr = support.support3d ? 'translate3d( -' + Number( (getViewportW() * 2) / 2 + itemWidth / 2 ) + 'px, 0, -150px )' : 'translate(-' + Number( (getViewportW() * 2) / 2 + itemWidth / 2 ) + 'px)';
    transformIncomingStr = support.support3d ? 'translate3d( ' + Number( (getViewportW() * 2) / 2 + itemWidth / 2 ) + 'px, 0, -150px )' : 'translate(' + Number( (getViewportW() * 2) / 2 + itemWidth / 2 ) + 'px)';
  }
  else {
    transformOutStr = support.support3d ? 'translate3d( ' + Number( (getViewportW() * 2) / 2 + itemWidth / 2 ) + 'px, 0, -150px )' : 'translate(' + Number( (getViewportW() * 2) / 2 + itemWidth / 2 ) + 'px)';
    transformIncomingStr = support.support3d ? 'translate3d( -' + Number( (getViewportW() * 2) / 2 + itemWidth / 2 ) + 'px, 0, -150px )' : 'translate(-' + Number( (getViewportW() * 2) / 2 + itemWidth / 2 ) + 'px)';
  }

  // remove class animatable from the slideshow grid (if it has already)
  classie.removeClass( self.slideshow, 'animatable' );

  if( dir === 'next' && this.current < this.itemsCount - 2 || dir === 'prev' && this.current > 1 ) {
    // we have an incoming item!
    incomingItem = this.slideshowItems[ dir === 'next' ? this.current + 2 : this.current - 2 ];
    setTransform( incomingItem, transformIncomingStr );
    classie.addClass( incomingItem, 'show' );
  }

  var slide = function() {
    // add class animatable to the slideshow grid
    classie.addClass( self.slideshow, 'animatable' );

    // overlays:
    classie.removeClass( self.currentItem, 'current' );
    var nextCurrent = dir === 'next' ? self.nextItem : self.prevItem;
    classie.addClass( nextCurrent, 'current' );

    setTransform( self.currentItem, dir === 'next' ? transformLeftStr : transformRightStr );

    if( self.nextItem ) {
      setTransform( self.nextItem, dir === 'next' ? transformCenterStr : transformOutStr );
    }

    if( self.prevItem ) {
      setTransform( self.prevItem, dir === 'next' ? transformOutStr : transformCenterStr );
    }

    if( incomingItem ) {
      setTransform( incomingItem, dir === 'next' ? transformRightStr : transformLeftStr );
    }

    var onEndTransitionFn = function( ev ) {
      if( support.transitions ) {
        if( ev.propertyName.indexOf( 'transform' ) === -1 ) return false;
        this.removeEventListener( transEndEventName, onEndTransitionFn );
      }

      if( self.prevItem && dir === 'next' ) {
        classie.removeClass( self.prevItem, 'show' );
      }
      else if( self.nextItem && dir === 'prev' ) {
        classie.removeClass( self.nextItem, 'show' );
      }

      if( dir === 'next' ) {
        self.prevItem = self.currentItem;
        self.currentItem = self.nextItem;
        if( incomingItem ) {
          self.nextItem = incomingItem;
        }
      }
      else {
        self.nextItem = self.currentItem;
        self.currentItem = self.prevItem;
        if( incomingItem ) {
          self.prevItem = incomingItem;
        }
      }

      self.current = dir === 'next' ? self.current + 1 : self.current - 1;
      self.isAnimating = false;
    };

    if( support.transitions ) {
      self.currentItem.addEventListener( transEndEventName, onEndTransitionFn );
    }
    else {
      onEndTransitionFn();
    }
  };

  setTimeout( slide, 25 );
}

CBPGridGallery.prototype._closeSlideshow = function( pos ) {
  // remove class slideshow-open from the grid gallery elem
  classie.removeClass( this.el, 'slideshow-open' );
  // remove class animatable from the slideshow grid
  classie.removeClass( this.slideshow, 'animatable' );

  var self = this,
    onEndTransitionFn = function( ev ) {
      if( support.transitions ) {
        if( ev.target.tagName.toLowerCase() !== 'ul' ) return;
        this.removeEventListener( transEndEventName, onEndTransitionFn );
      }
      // remove classes show and current from the slideshow items
      classie.removeClass( self.currentItem, 'current' );
      classie.removeClass( self.currentItem, 'show' );

      if( self.prevItem ) {
        classie.removeClass( self.prevItem, 'show' );
      }
      if( self.nextItem ) {
        classie.removeClass( self.nextItem, 'show' );
      }

      // also reset any transforms for all the items
      self.slideshowItems.forEach( function( item ) { setTransform( item, '' ); } );

      self.isSlideshowVisible = false;
    };

  if( support.transitions ) {
    this.el.addEventListener( transEndEventName, onEndTransitionFn );
  }
  else {
    onEndTransitionFn();
  }
};

CBPGridGallery.prototype._setViewportItems = function() {
  this.currentItem = null;
  this.prevItem = null;
  this.nextItem = null;

  if( this.current > 0 ) {
    this.prevItem = this.slideshowItems[ this.current - 1 ];
  }
  if( this.current < this.itemsCount - 1 ) {
    this.nextItem = this.slideshowItems[ this.current + 1 ];
  }
  this.currentItem = this.slideshowItems[ this.current ];
}

// taken from https://github.com/desandro/vanilla-masonry/blob/master/masonry.js by David DeSandro
// original debounce by John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
CBPGridGallery.prototype._resizeHandler = function() {
  var self = this;
  function delayed() {
    self._resize();
    self._resizeTimeout = null;
  }
  if ( this._resizeTimeout ) {
    clearTimeout( this._resizeTimeout );
  }
  this._resizeTimeout = setTimeout( delayed, 50 );
}

CBPGridGallery.prototype._resize = function() {
  if ( this.isSlideshowVisible ) {
    // update width value
    if( this.prevItem ) {
      var translateVal = Number( -1 * ( getViewportW() / 2 + this.prevItem.offsetWidth / 2 ) );
      setTransform( this.prevItem, support.support3d ? 'translate3d(' + translateVal + 'px, 0, -150px)' : 'translate(' + translateVal + 'px)' );
    }
    if( this.nextItem ) {
      var translateVal = Number( getViewportW() / 2 + this.nextItem.offsetWidth / 2 );
      setTransform( this.nextItem, support.support3d ? 'translate3d(' + translateVal + 'px, 0, -150px)' : 'translate(' + translateVal + 'px)' );
    }
  }
}

// add to global namespace
window.CBPGridGallery = CBPGridGallery;

export default CBPGridGallery;
