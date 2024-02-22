new Swiper('.our-work__slider', {
    navigation: {
        prevEl: '.our-work-prev',
        nextEl: '.our-work-next'
    },
    scrollbar: {
        el: '.our-work-scrollbar'
    },
});

new Swiper('.our-work__slider-big', {
    autoplay: true,
    scrollbar: {
        el: '.our-work-scrollbar-mobile'
    }
});
new Swiper('.our-work__slider-small', {
    slidesPerView: 2,
    spaceBetween: 40,
    autoplay: true,
});

new Swiper('.mobile-slider', {
    navigation: {
        prevEl: '.our-mobile-prev',
        nextEl: '.our-mobile-next'
    },
});

const userAgent = navigator.userAgent;
const mobileSlider = document.querySelector('.mobile-slider')

if(userAgent.indexOf('Firefox') !== -1) {
    mobileSlider.style.maxHeight = '804px';
    mobileSlider.style.width = 'calc(100% - 104px)';
}