"use strict"
window.addEventListener('load', () => {
    // Animation.prototype.menu()
    window.location.href = 'http://127.0.0.1:5500/#home';
    fixedNav()
    navbar();
})

window.addEventListener('scroll', () => {
    // Animation.prototype.menu()
    fixedNav()

})


class Animation {
    menu() {
        const list = document.querySelector('.list').children;

        for (const li of list) {
            li.addEventListener('click', () => {
                li.classList.add('list__li_active');
            })
        }
    }
    slider() {
        const arrowLeft = document.querySelector('.arrow-left img');
    }
}


function fixedNav() {
    const scroll = window.pageYOffset;
    const navbar = document.querySelector('.nav');
    const container = document.querySelectorAll('.container');
    const list = document.querySelector('.list');
    if (scroll > 60) {
        navbar.classList.add('nav-fixed');
        list.setAttribute('style', 'align-items: center;')
        for (let i = 0; i < container.length; i++) {
            console.log(container[i]);
            if (i !== 0) container[i].setAttribute('style', 'padding-top: 93px;')
            
        }

    } else {
        navbar.classList.remove('nav-fixed');
        list.setAttribute('style', 'top: -9px;')
        for (let i = 0; i < container.length; i++) {
            console.log(container[i]);
            if (i !== 0) container[i].setAttribute('style', 'padding-top: 0;')

        }
    }
}

function navbar(item = 0) {
    const li = document.querySelectorAll('.navbar_li');
    for (let i = 0; i < li.length; i++) {
        if (item === i) {
            li[i].classList.add('list__li_active')
        } else {
            li[i].classList.remove('list__li_active')
        }
    }
}

class Slider {
    getRadioIndex(section = 'slider', nextSlide = true) {
        const getClassName = event.path[2].className;

        // if click on errows
        if (getClassName === section) {
            let i = 0;
            const sliderRadio = event.path[2].children[4].children;

            for (const radio of sliderRadio) {
                const prevousRadio = radio.children[0].checked;
                i++;
                if (prevousRadio) {
                    break;
                }
            }
            
            if (nextSlide) { // next slide
                if (sliderRadio.length > i) { // check nextSlide
                    sliderRadio[i].children[0].checked = true;
                } else { // return to start of slider
                    i = 0;
                    sliderRadio[i].children[0].checked = true
                }
            } else { // back
                i -= 2 // get previous radio
                if (i < 0) { // get last radio
                    i = sliderRadio.length - 1
                }
                sliderRadio[i].children[0].checked = true;
            }
            console.log(1);
            
            
            return i
        }
    }

    workWithHeader(section, nextSlide) {
        const radioIndex = this.getRadioIndex(section, nextSlide);
        const title = document.querySelector('.slider__title');
        const subTitle = document.querySelector('.slider__subtitle');

        switch (radioIndex) {
            case 0:
                title.textContent = 'Slide 1';
                subTitle.textContent = 'Subtitle of Slider 1'
                break;

            case 1:
                title.textContent = 'Mileage Made Simple';
                subTitle.textContent = 'otivation And Your Personal Vision An Unbeatable Force'
                break;
            case 2:
                title.textContent = 'Slide 3'
                subTitle.textContent = 'Subtitle of Slider 3'
                break;
        }

    }
}


function getMapData(state) {
    const listMap = document.querySelector('.map__locations').children;
    const li = listMap[state];
    const titleOfActiveState = listMap[state].children[1].children[0];
    const subtitleOfActiveState = listMap[state].children[1].children[1];
    for (let i = 0; i < listMap.length; i++) { // remove style for not active
        if (i !== state) {
            listMap[i].children[1].children[0].classList.remove('description__title_active');
            listMap[i].classList.remove('map__location_active')
            document.querySelectorAll('.map-icon')[i].children[0].classList.remove('location__icon_svg');
            // document.querySelectorAll('.location__icon')[state].children[0].classList.add('location__icon_svg')

        }
        if (i === state) {
            listMap[i].classList.add('map__location_active');
            document.querySelectorAll('.map-icon')[i].children[0].classList.add('location__icon_svg');
        }
    }

    // Set style for active state
    titleOfActiveState.classList.add('description__title_active');



    const subtitleInfo = document.getElementById('map-subtitle');
    subtitleInfo.textContent = subtitleOfActiveState.textContent

    const titleInfo = document.querySelector('.map-details__title');
    titleInfo.textContent = titleOfActiveState.textContent


    initMap(state)
}
// getMapData(1)

const mapCoordinates = [{
        lat: 34.052235,
        lng: -118.243683
    },
    {
        lat: 40.730610,
        lng: -73.935242
    },
    {
        lat: 42.361145,
        lng: -71.057083
    },
    {
        lat: 42.331429,
        lng: -83.045753
    }
]

function initMap(state = 2) {

    // The location of Uluru
    var uluru = {
        lat: 49.84,
        lng: 24.031111
    };

    var image = 'https://firebasestorage.googleapis.com/v0/b/la-piec-f604d.appspot.com/o/1.svg?alt=media&token=52105278-04c6-4f3e-a21e-922b6a615f8b'

    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 18,
            scaleControl: false,
            zoomControl: false,
            center: mapCoordinates[state],
            styles: [

                {
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
                },
                {
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
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                }
            ]
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: mapCoordinates[state],
        map: map,
        icon: image
    });

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
}