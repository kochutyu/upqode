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



const getMapData = (state = 2) => {
    const listMap = document.querySelector('.map__locations').children;
    const li = listMap[state];
    const titleOfActiveState = listMap[state].children[1].children[0];
    const subtitleOfActiveState = listMap[state].children[1].children[1];
    for (let i = 0; i < listMap.length; i++) { // remove style for not active
        if (i !== state) {
            listMap[i].children[1].children[0].classList.remove('description__title_active');
            listMap[i].classList.remove('map__location_active')
            document.querySelectorAll('.map-icon')[i].children[0].classList.remove('location__icon_svg');

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





const initMap = (state = 2) => {
    // The location of Uluru
    const uluru = {
        lat: 49.84,
        lng: 24.031111
    };

    const image = 'https://firebasestorage.googleapis.com/v0/b/la-piec-f604d.appspot.com/o/1.svg?alt=media&token=52105278-04c6-4f3e-a21e-922b6a615f8b';

    // The map, centered at Uluru
    const map = new google.maps.Map(
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
    const marker = new google.maps.Marker({
        position: mapCoordinates[state],
        map: map,
        icon: image
    });
}