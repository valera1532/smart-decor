new Swiper('.series-products__slider', {
    slidesPerView: 3,
    spaceBetween: 93,
    scrollbar: {
        el: '.series-product-scrollbar',
    },
    breakpoints: {
        927: {
            spaceBetween: 20,
        },
        1691: {
            spaceBetween: 93, 
        }
    }
});

new Swiper('.product-colors', {
    slidesPerView: 3,
    spaceBetween: 45,
    scrollbar: {
        el: '.product-slider-scrollbar',
    },
    breakpoints: {
        319: {
            spaceBetween: 19,
        },
        928: {
            spaceBetween: 45, 
        }
    }
});

new Swiper('.series-product-slider-tablet', {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 91,
    initialSlide: 1,
    navigation: {
        prevEl: '.series-product-tablet-prev',
        nextEl: '.series-product-tablet-next',
    }
});

new Swiper('.series-product-slider-mobile', {
    autoHeight: true,
    navigation: {
        prevEl: '.series-product-mobile-prev',
        nextEl: '.series-product-mobile-next',
    },
});

const userAgent = navigator.userAgent;
const seriesSliderMobile = document.querySelector('.series-product-slider-mobile');

if(userAgent.indexOf('Firefox') !== -1) {
    seriesSliderMobile.style.width = 'calc(100% - 94px)';
}

Fancybox.bind("[data-fancybox='gallery']", {
    contentClick: "iterateZoom",
        Images: {
            Panzoom: {
            maxScale: 2,
        },
    },
});
Fancybox.bind("[data-fancybox='gallery2']", {
    contentClick: "iterateZoom",
        Images: {
            Panzoom: {
            maxScale: 2,
        },
    },
});

const resizeBtns = document.querySelectorAll('.series-product-slider-mobile .product-card__top button');

resizeBtns.forEach(btn => 
btn.onclick = () => btn.previousElementSibling.click());