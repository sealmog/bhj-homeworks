
Array.from(document.getElementsByClassName('slider')).forEach((slider) => {
    const items = Array.from(slider.getElementsByClassName('slider__item'));
    const dots = Array.from(slider.getElementsByClassName('slider__dot'));

    let activeSlide = items.findIndex((slide) => slide.classList.contains('slider__item_active'));
    const prevArrow = slider.getElementsByClassName('slider__arrow_prev')[0];
    const nextArrow = slider.getElementsByClassName('slider__arrow_next')[0];

    prevArrow.onclick = () => changePrev();
    nextArrow.onclick = () => changeNext();

    dots.forEach((dot,index) => {
            dot.onclick = () => changeSlide(index)
        });

    dots[activeSlide].classList.add('slider__dot_active');

    function changeSlide(newID) {
        if (newID !== activeSlide) {
            items[newID].classList.add('slider__item_active');
            items[activeSlide].classList.remove('slider__item_active');
            dots[newID].classList.add('slider__dot_active');
            dots[activeSlide].classList.remove('slider__dot_active');
            activeSlide = newID;
        }
    }

    function changePrev() {
        let newID = activeSlide - 1;
        if (newID < 0) {
            newID = items.length - 1;
        }
        changeSlide(newID);
    }

    function changeNext() {
        let newID = activeSlide + 1;
        if (newID >= items.length) {
            newID = 0;
        }
        changeSlide(newID);
    }
});
