function getRadioIndex(section = 'slider', nextSlide = true) {
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

        return i
    }
}


function workWithHeader(section, nextSlide = false, radioIndex = getRadioIndex(section, nextSlide)) {
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