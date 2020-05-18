const fixedNav = () => {

    const scroll = window.pageYOffset;
    const navbar = document.querySelector('.nav');
    const container = document.querySelectorAll('.container');
    const list = document.querySelector('.list');

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

    const li = document.querySelectorAll('.navbar_li');

    for (let i = 0; i < li.length; i++) {

        if (item === i) li[i].classList.add('list__li_active')
        else li[i].classList.remove('list__li_active')
    }
}