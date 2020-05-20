let selectLi = undefined;
let savedHash = undefined;
//! ----------------------------------------------------------------------
//! WINDOW EVENT
//! ----------------------------------------------------------------------

window.addEventListener('scroll', () => { // SCROLL

    // CALL FUNCTION
    fixedNav();
    closeMenu();
    resizeDropDownMenu();
    navigateURL();


})

window.addEventListener('load', () => { // LOAD

    // CALL FUNCTION
    fixedNav();
    resizeDropDownMenu();
    window.scrollTo(0, 0)
})


window.addEventListener('resize', () => {

    // CALL FUNCTION
    resizeDropDownMenu();
    closeMenu();
})

//! ----------------------------------------------------------------------
//! CODE
//! ----------------------------------------------------------------------
const fixedNav = () => {

    const scroll = window.pageYOffset;
    const navbar = document.querySelector('.nav');
    const container = document.querySelectorAll('.container');
    const list = document.querySelector('.list');
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {}

    if (scroll > 0) { // SCROLLED DOWN

        navbar.classList.add('nav-fixed');
        list.setAttribute('style', 'align-items: center;')

        for (let i = 0; i < container.length; i++) {

            if (i !== 0) container[i].setAttribute('style', 'padding-top: 93px;')

        }

    } else { // SCROLLED UP

        navbar.classList.remove('nav-fixed');
        list.setAttribute('style', 'top: -9px;')

        for (let i = 0; i < container.length; i++) {

            if (i !== 0) container[i].setAttribute('style', 'padding-top: 0;')

        }
    }
}




const navbar = (item = 0) => {
    navigateByURL = false;
    const li = document.querySelectorAll('.navbar_li');
    for (let i = 0; i < li.length; i++) {

        if (item === i) {
            li[i].classList.add('list__li_active');
            selectLi = li[i]
            savedHash = li[i].children[0].textContent.toLocaleLowerCase();
            dropDownMenu();
            setTimeout(() => {
                navigateByURL = true;
            }, 2000);
        } else li[i].classList.remove('list__li_active')
    }
}


let closeDropDownMenu = true;
const dropDownMenu = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1024) {
        if (closeDropDownMenu) { //OPEN DROP MENU
            gsap.to('list', {
                top: 0
            })
            document.getElementById('drop-menu').classList.remove('list__drop-down-menu_hiden');
            animateNavBtn().setStyle();
            closeDropDownMenu = false;
        } else { // CLOSE DROP MENU
            gsap.to('list', {
                top: 0
            })
            document.getElementById('drop-menu').classList.add('list__drop-down-menu_hiden');
            animateNavBtn().resetStyle();
            closeDropDownMenu = true;
        }
    }
}

const animateNavBtn = () => {
    const setStyle = (duration = 1) => {
        gsap.to(".list__li-drop-down_row-2", {
            duration: duration,
            opacity: 0
        })
        gsap.to(".list__li-drop-down_row-1, .list__li-drop-down_row-3", {
            duration: duration,
            backgroundColor: '#d35c5c'
        })
        gsap.to(".list__li-drop-down_row-1", {
            duration: duration,
            rotate: '45deg',
            x: 0,
            y: 10
        })
        gsap.to(".list__li-drop-down_row-3", {
            duration: duration,
            rotate: '-45deg',
            x: 0,
            y: -10
        })
    }

    const resetStyle = (duration = 1) => {
        closeDropDownMenu = false;
        gsap.to(".list__li-drop-down_row-1, .list__li-drop-down_row-3", {
            duration: duration,
            backgroundColor: '#fff',
            rotate: '0',
            x: 0,
            y: 0
        })
        gsap.to(".list__li-drop-down_row-2", {
            duration: duration,
            opacity: 1
        })
    }

    return {
        resetStyle,
        setStyle
    }
}




const resizeDropDownMenu = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1024) {
        document.getElementById('drop-menu').classList.add('list__drop-down-menu_hiden', 'list__drop-down-menu_open');
    } else if (windowWidth >= 1024) {
        document.getElementById('drop-menu').classList.remove('list__drop-down-menu_hiden', 'list__drop-down-menu_open');
    }
}





const closeMenu = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1024) {
        animateNavBtn().resetStyle();
        dropDownMenu();
    }
}


let navigateByURL = true;
const navigateURL = () => {
    if (navigateByURL) {
        const windowHeight = window.innerHeight;
        const nav = document.querySelector('.list').children;
        const headerTop = document.querySelector('.header').getBoundingClientRect().top;
        const servicesTop = document.querySelector('.services').getBoundingClientRect().top;
        const teamTop = document.querySelector('.team').getBoundingClientRect().top;
        const mapTop = document.querySelector('.map').getBoundingClientRect().top;

        const headerBotom = document.querySelector('.header').getBoundingClientRect().bottom;
        const servicesBotom = document.querySelector('.services').getBoundingClientRect().bottom;
        const teamBotom = document.querySelector('.team').getBoundingClientRect().bottom;
        const mapBotom = document.querySelector('.map').getBoundingClientRect().bottom;


        if (headerTop < windowHeight && headerBotom > 0) {
            window.location.hash = '#home'
        } else if (servicesTop < windowHeight && servicesBotom > 0) {
            window.location.hash = '#services'
        } else if (teamTop < windowHeight && teamBotom > 0) {
            window.location.hash = '#team'
        } else if (mapTop < windowHeight && mapBotom > 0) {
            window.location.hash = '#contact'
        }

        const locationHash = window.location.hash.slice(1);

        for (let i = 0; i < nav.length; i++) {
            const li = nav[i];
            const a = nav[i].children[0].textContent.toLocaleLowerCase()

            if (a.includes(locationHash)) {
                // console.log(a);
                navigateByURL = false;

                nav[i].classList.add('list__li_active');
                navigateByURL = true;

            } else {
                nav[i].classList.remove('list__li_active');
            }
        }
    }

}