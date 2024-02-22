new Swiper('.interior-slider__big', {
    autoplay: true,
});
new Swiper('.interior-slider__small', {
    slidesPerView: 2,
    spaceBetween: 70,
    autoplay: true,
    breakpoints: {
        927: {
            spaceBetween: 40,
        },
        1691: {
            spaceBetween: 70,
        }
    }
});

new Swiper('.interior-slider-mobile');