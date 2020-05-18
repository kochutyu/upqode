"use strict"

AOS.init();

window.addEventListener('load', () => {
    fixedNav()
    navbar();
})

window.addEventListener('scroll', () => {
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


