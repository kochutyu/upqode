"use strict";function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,n,i=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){a=!0,n=e},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw n}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}AOS.init(),window.addEventListener("load",function(){fixedNav(),navbar()}),window.addEventListener("scroll",function(){fixedNav()});var Animation=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"menu",value:function(){var e,t=document.querySelector(".list").children,r=_createForOfIteratorHelper(t);try{var o=function(){var t=e.value;t.addEventListener("click",function(){t.classList.add("list__li_active")})};for(r.s();!(e=r.n()).done;)o()}catch(e){r.e(e)}finally{r.f()}}},{key:"slider",value:function(){document.querySelector(".arrow-left img")}}]),e}(),mapCoordinates=[{lat:34.052235,lng:-118.243683},{lat:40.73061,lng:-73.935242},{lat:42.361145,lng:-71.057083},{lat:42.331429,lng:-83.045753}];function getMapData(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,t=document.querySelector(".map__locations").children,r=(t[e],t[e].children[1].children[0]),o=t[e].children[1].children[1],n=0;n<t.length;n++)n!==e&&(t[n].children[1].children[0].classList.remove("description__title_active"),t[n].classList.remove("map__location_active"),document.querySelectorAll(".map-icon")[n].children[0].classList.remove("location__icon_svg")),n===e&&(t[n].classList.add("map__location_active"),document.querySelectorAll(".map-icon")[n].children[0].classList.add("location__icon_svg"));r.classList.add("description__title_active"),document.getElementById("map-subtitle").textContent=o.textContent,document.querySelector(".map-details__title").textContent=r.textContent,initMap(e)}function initMap(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,t=new google.maps.Map(document.getElementById("map"),{zoom:18,scaleControl:!1,zoomControl:!1,center:mapCoordinates[e],styles:[{featureType:"administrative.country",elementType:"geometry.fill",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#f2f2f2"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#e6e6e6"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#e6e6e6"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.fill",stylers:[{color:"#e6e6e6"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#e6e6e6"}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{color:"#e9e9e9"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#88eaad"}]},{featureType:"water",elementType:"labels.text",stylers:[{color:"#9ca09a"}]},{featureType:"poi.attraction",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",elementType:"geometry.fill",stylers:[{visibility:"off"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"poi.government",stylers:[{visibility:"off"}]},{featureType:"poi.medical",stylers:[{visibility:"off"}]},{featureType:"poi.park",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",stylers:[{visibility:"off"}]},{featureType:"poi.school",stylers:[{visibility:"off"}]},{featureType:"poi.sports_complex",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#ef4b91"},{visibility:"off"}]}]});new google.maps.Marker({position:mapCoordinates[e],map:t,icon:"https://firebasestorage.googleapis.com/v0/b/la-piec-f604d.appspot.com/o/1.svg?alt=media&token=52105278-04c6-4f3e-a21e-922b6a615f8b"})}function fixedNav(){var e=window.pageYOffset,t=document.querySelector(".nav"),r=document.querySelectorAll(".container"),o=document.querySelector(".list");if(e>0){t.classList.add("nav-fixed"),o.setAttribute("style","align-items: center;");for(var n=0;n<r.length;n++)0!==n&&r[n].setAttribute("style","padding-top: 93px;")}else{t.classList.remove("nav-fixed"),o.setAttribute("style","top: -9px;");for(var i=0;i<r.length;i++)0!==i&&r[i].setAttribute("style","padding-top: 0;")}}function navbar(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=document.querySelectorAll(".navbar_li"),r=0;r<t.length;r++)e===r?t[r].classList.add("list__li_active"):t[r].classList.remove("list__li_active")}function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,n,i=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){a=!0,n=e},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw n}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function getRadioIndex(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"slider",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(event.path[2].className===e){var r,o=0,n=event.path[2].children[4].children,i=_createForOfIteratorHelper(n);try{for(i.s();!(r=i.n()).done;){var a=r.value.children[0].checked;if(o++,a)break}}catch(e){i.e(e)}finally{i.f()}return t?n.length>o?n[o].children[0].checked=!0:n[o=0].children[0].checked=!0:((o-=2)<0&&(o=n.length-1),n[o].children[0].checked=!0),console.log(o),o}}function workWithHeader(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:getRadioIndex(e,t),o=document.querySelector(".slider__title"),n=document.querySelector(".slider__subtitle");switch(r){case 0:o.textContent="Slide 1",n.textContent="Subtitle of Slider 1";break;case 1:o.textContent="Mileage Made Simple",n.textContent="otivation And Your Personal Vision An Unbeatable Force";break;case 2:o.textContent="Slide 3",n.textContent="Subtitle of Slider 3"}}
//# sourceMappingURL=main-min.js.map
