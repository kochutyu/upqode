//? --------------
//? INIT LIBS
//? --------------
AOS.init();

//! ----------------------------------------------------------------------
//! WINDOW EVENT
//! ----------------------------------------------------------------------

window.addEventListener('scroll', () => { // SCROLL

    // CALL FUNCTION
    // fixedNav()
})

window.addEventListener('load', () => { // LOAD

    // CALL FUNCTION
    // fixedNav()
    // navbar();
})

//! ----------------------------------------------------------------------
//! CODE
//! ----------------------------------------------------------------------

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