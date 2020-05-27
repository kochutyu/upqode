//! ----------------------------------------------------------------------
//! WINDOW EVENT
//! ----------------------------------------------------------------------

window.addEventListener('scroll', () => { // SCROLL

    // CALL FUNCTION
    animateRoad();
    // assignScrollForAnimatePoint()
})

window.addEventListener('load', () => { // LOAD

    // GET SOME INFO
    previousScroll = window.pageYOffset;

    // CALL FUNCTION
    animateRoad();
})

//! ----------------------------------------------------------------------
//! CODE
//! ----------------------------------------------------------------------


const sizeRoadInPX = 1216;
const road = document.getElementById('service_road');
const point = document.getElementById('service_point');
let previousScroll = window.pageYOffset;
let durationForAnimateOfPoint = 3;

gsap.registerPlugin(MotionPathPlugin);

let tween = gsap.to("#service_point", { // TWEEN SETTINGS
    duration: 3,
    repeat: 0,
    repeatDelay: 10,
    yoyo: true,
    startAt: -200,
    reversed: false,
    ease: "power1.inOut",
    motionPath: {
        path: "#service_road",
        align: "#service_road",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    }
}).pause();





const animateRoad = () => {
    const newScrollTop = window.pageYOffset;
    const positionRoadBottom = road.getBoundingClientRect().bottom;
    const positionRoadTop = road.getBoundingClientRect().top;
    if (positionRoadBottom > 0 && positionRoadTop < 700) { // GET POSITION FOR START AND FINISH ROAD SVG 
        

        if (previousScroll < newScrollTop) { // SCROLLED DOWN

            tween.play();

            setTimeout(function () {
                tween.pause();
            }, 50);

        } else { // SCROLLED UP

            tween.reverse();

            setTimeout(function () {
                tween.pause();
            }, 50);

        }

    }

    previousScroll = newScrollTop;
}




