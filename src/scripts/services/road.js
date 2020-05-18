
//! ----------------------------------------------------------------------
//! WINDOW EVENT
//! ----------------------------------------------------------------------

window.addEventListener('scroll', () => { // SCROLL

    // CALL FUNCTION
    animateRoad();
    getStartPosotionOfPoint();
})

window.addEventListener('load', () => { // LOAD

    // GET SOME INFO
    previousScroll = window.pageYOffset;

    // CALL FUNCTION
    getStartPosotionOfPoint();
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

const tween = gsap.to("#service_point", { // TWEEN SETTINGS
    duration: durationForAnimateOfPoint,
    repeat: 0,
    repeatDelay: 10,
    yoyo: true,
    ease: "power1.inOut",
    motionPath: {
        path: "#service_road",
        align: "#service_road",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    }
});





const animateRoad = () => {
    const newScrollTop = window.pageYOffset;
    const positionRoadBottom = road.getBoundingClientRect().bottom;
    const positionRoadTop = road.getBoundingClientRect().top;

    if (positionRoadBottom > 0 && positionRoadTop < 800) { // GET POSITION FOR START AND FINISH ROAD SVG 


        if (previousScroll < newScrollTop) { // SCROLLED DOWN

            tween.play();

            setTimeout(function () {
                tween.pause();
            }, 350);

        } else { // SCROLLED UP

            tween.reverse();

            setTimeout(function () {
                tween.pause();
            }, 500);

        }

    }

    previousScroll = newScrollTop;
}





const getStartPosotionOfPoint = () => {
    const positionRoadBottom = road.getBoundingClientRect().bottom;

    if (positionRoadBottom > 0 && positionRoadBottom < sizeRoadInPX / 2) { // GET 1/2 (POSITION POINT FOR FINISH ROAD)
        
        durationForAnimateOfPoint = 0;
        tween.play();
    }

    durationForAnimateOfPoint = 3;
}