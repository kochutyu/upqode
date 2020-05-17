"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

AOS.init();
window.addEventListener('load', function () {
  fixedNav();
  navbar();
});
window.addEventListener('scroll', function () {
  fixedNav();
});

var Animation = /*#__PURE__*/function () {
  function Animation() {
    _classCallCheck(this, Animation);
  }

  _createClass(Animation, [{
    key: "menu",
    value: function menu() {
      var list = document.querySelector('.list').children;

      var _iterator = _createForOfIteratorHelper(list),
          _step;

      try {
        var _loop = function _loop() {
          var li = _step.value;
          li.addEventListener('click', function () {
            li.classList.add('list__li_active');
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "slider",
    value: function slider() {
      var arrowLeft = document.querySelector('.arrow-left img');
    }
  }]);

  return Animation;
}();
var mapCoordinates = [{
  lat: 34.052235,
  lng: -118.243683
}, {
  lat: 40.730610,
  lng: -73.935242
}, {
  lat: 42.361145,
  lng: -71.057083
}, {
  lat: 42.331429,
  lng: -83.045753
}];

function getMapData() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var listMap = document.querySelector('.map__locations').children;
  var li = listMap[state];
  var titleOfActiveState = listMap[state].children[1].children[0];
  var subtitleOfActiveState = listMap[state].children[1].children[1];

  for (var i = 0; i < listMap.length; i++) {
    // remove style for not active
    if (i !== state) {
      listMap[i].children[1].children[0].classList.remove('description__title_active');
      listMap[i].classList.remove('map__location_active');
      document.querySelectorAll('.map-icon')[i].children[0].classList.remove('location__icon_svg');
    }

    if (i === state) {
      listMap[i].classList.add('map__location_active');
      document.querySelectorAll('.map-icon')[i].children[0].classList.add('location__icon_svg');
    }
  } // Set style for active state


  titleOfActiveState.classList.add('description__title_active');
  var subtitleInfo = document.getElementById('map-subtitle');
  subtitleInfo.textContent = subtitleOfActiveState.textContent;
  var titleInfo = document.querySelector('.map-details__title');
  titleInfo.textContent = titleOfActiveState.textContent;
  initMap(state);
}

function initMap() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  // The location of Uluru
  var uluru = {
    lat: 49.84,
    lng: 24.031111
  };
  var image = 'https://firebasestorage.googleapis.com/v0/b/la-piec-f604d.appspot.com/o/1.svg?alt=media&token=52105278-04c6-4f3e-a21e-922b6a615f8b'; // The map, centered at Uluru

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    scaleControl: false,
    zoomControl: false,
    center: mapCoordinates[state],
    styles: [{
      "featureType": "administrative.country",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#f2f2f2"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#f2f2f2"
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#f2f2f2"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#ffffff"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#e6e6e6"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#e6e6e6"
      }]
    }, {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#e6e6e6"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#e6e6e6"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#e9e9e9"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#88eaad"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [{
        "color": "#9ca09a"
      }]
    }, {
      "featureType": "poi.attraction",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.attraction",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.business",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.government",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.medical",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.park",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.place_of_worship",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.school",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.sports_complex",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#ef4b91"
      }, {
        "visibility": "off"
      }]
    }]
  }); // The marker, positioned at Uluru

  var marker = new google.maps.Marker({
    position: mapCoordinates[state],
    map: map,
    icon: image
  });
}
function fixedNav() {
  var scroll = window.pageYOffset;
  var navbar = document.querySelector('.nav');
  var container = document.querySelectorAll('.container');
  var list = document.querySelector('.list');

  if (scroll > 0) {
    navbar.classList.add('nav-fixed');
    list.setAttribute('style', 'align-items: center;');

    for (var i = 0; i < container.length; i++) {
      // console.log(container[i]);
      if (i !== 0) container[i].setAttribute('style', 'padding-top: 93px;');
    }
  } else {
    navbar.classList.remove('nav-fixed');
    list.setAttribute('style', 'top: -9px;');

    for (var _i = 0; _i < container.length; _i++) {
      if (_i !== 0) container[_i].setAttribute('style', 'padding-top: 0;');
    }
  }
}

function navbar() {
  var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var li = document.querySelectorAll('.navbar_li');

  for (var i = 0; i < li.length; i++) {
    if (item === i) {
      li[i].classList.add('list__li_active');
    } else {
      li[i].classList.remove('list__li_active');
    }
  }
}
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function getRadioIndex() {
  var section = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'slider';
  var nextSlide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var getClassName = event.path[2].className; // if click on errows

  if (getClassName === section) {
    var i = 0;
    var sliderRadio = event.path[2].children[4].children;

    var _iterator = _createForOfIteratorHelper(sliderRadio),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var radio = _step.value;
        var prevousRadio = radio.children[0].checked;
        i++;

        if (prevousRadio) {
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (nextSlide) {
      // next slide
      if (sliderRadio.length > i) {
        // check nextSlide
        sliderRadio[i].children[0].checked = true;
      } else {
        // return to start of slider
        i = 0;
        sliderRadio[i].children[0].checked = true;
      }
    } else {
      // back
      i -= 2; // get previous radio

      if (i < 0) {
        // get last radio
        i = sliderRadio.length - 1;
      }

      sliderRadio[i].children[0].checked = true;
    }

    console.log(i);
    return i;
  }
}

function workWithHeader(section) {
  var nextSlide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var radioIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getRadioIndex(section, nextSlide);
  var title = document.querySelector('.slider__title');
  var subTitle = document.querySelector('.slider__subtitle');

  switch (radioIndex) {
    case 0:
      title.textContent = 'Slide 1';
      subTitle.textContent = 'Subtitle of Slider 1';
      break;

    case 1:
      title.textContent = 'Mileage Made Simple';
      subTitle.textContent = 'otivation And Your Personal Vision An Unbeatable Force';
      break;

    case 2:
      title.textContent = 'Slide 3';
      subTitle.textContent = 'Subtitle of Slider 3';
      break;
  }
}
//# sourceMappingURL=main.js.map
