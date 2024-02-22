new Swiper('.about-slider__big', {
    autoplay: true,
});

new Swiper('.about-slider__small', {
    slidesPerView: 2,
    spaceBetween: 70,
    autoplay: true,
    breakpoints: {
        927: {
            spaceBetween: 42,
        },
        1691: {
            spaceBetween: 70,
        }
    }
});


new Swiper('.about-slider-mobile');