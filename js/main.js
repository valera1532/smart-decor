const marker = document.querySelector('.indicator');
const links = document.querySelectorAll('.bottom-nav__link');
const nav = marker.closest('ul');
const categories = document.querySelector('.categories');
const markerWidth = marker.offsetWidth;

function positionMarker(element) {
    const linkRect = element.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    const navLeft = navRect.left;
    const navRight = navRect.right;

    if (element === links[0]) {
        marker.style.left = `${Math.max(0, linkRect.left - navLeft)}px`;
    } else if (element === links[links.length - 1]) {
        const maxRight = navRect.width - markerWidth;
        marker.style.left = `${Math.max(0, Math.min(linkRect.left - navLeft, maxRight))}px`;
    } else {
        const targetLeftPosition = linkRect.left + (linkRect.width - markerWidth) / 2 - navLeft;
        marker.style.left = `${Math.max(0, Math.min(targetLeftPosition, navRect.width - markerWidth))}px`;
    }
}

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        categoriesShow();
        positionMarker(link);
        marker.classList.add('active');
    });

    link.addEventListener('touchstart', () => {
        categoriesShow();
        positionMarker(link);
        marker.classList.add('active');
    });

    link.addEventListener('mouseout', () => {
        marker.classList.remove('active');
        categoriesHide();
    });
});

document.addEventListener('click', () => {
    if(categories.classList.contains('active')) {
        categories.classList.remove('active');
        marker.classList.remove('active');
    }
});

function categoriesShow() {
    categories.classList.add('active');
}

function categoriesHide() {
    categories.classList.remove('active');
}

categories.addEventListener('mouseover', categoriesShow);
categories.addEventListener('mouseout', categoriesHide);

const topSlider = new Swiper('.slider-top', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


new Swiper('.portfolio-slider__big', {
    autoplay: true,
    scrollbar: {
        el: '.portfolio-slider-scroll'
    }
});

new Swiper('.portfolio-slider__small', {
    slidesPerView: 2,
    spaceBetween: 72,
    autoplay: true,
    breakpoints: {
        927: {
            spaceBetween: 42,
        },
        1691: {
            spaceBetween: 72,
        }
    }
});

new Swiper('.portfolio-slider-mobile')

const noveltiesSlider = new Swiper('.novelties-slider', {
    slidesPerView: 3,
    spaceBetween: 93,
    breakpoints: {
        927: {
            spaceBetween: 40, 
        },
        1692: {
            spaceBetween: 92, 
        }
    },
});

const noveltiesSlidertablet = new Swiper('.novelties-slider-tablet', {
    slidesPerView: 'auto',
    spaceBetween: 89,
    centeredSlides: 'auto',
    initialSlide: 1,
    navigation: {
        prevEl: '.novelties-slider-tablet-prev',
        nextEl: '.novelties-slider-tablet-next',
    }
});

const noveltiesSliderMobile = new Swiper('.novelties-slider-mobile', {
    autoHeight: true,
    navigation: {
        prevEl: '.novelties-slider-mobile-prev',
        nextEl: '.novelties-slider-mobile-next',
    },
});

const productColors =  new Swiper('.product-colors', {
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
            spaceBetween: 44, 
        }
    }
});

const servicesSlider =  new Swiper('.services-slider', {
    spaceBetween: 45,
    scrollbar: {
        el: '.services-slider-scrollbar',
    },
    navigation: {
        prevEl: ".services-slider__prev",
        nextEl: ".services-slider__next",
    },
});

new Swiper('.social-slider__big', {
    autoplay: true,
    scrollbar: {
        el: '.social-slider-scrollbar'
    }
});
new Swiper('.social-slider__small', {
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

const socialSliderMobile = new Swiper('.social-slider-mobile', {
    autoHeight: true,
    navigation: {
        prevEl: '.social-slider-mobile-prev',
        nextEl: '.social-slider-mobile-next'
    },
    scrollbar: {
        el: '.social-slider-mobile-scrollbar'
    }
});

const telWrapper = document.querySelector('.tel');
const telIcon = document.querySelector('.tel-icon');
const telBtn = document.querySelector('.tel-btn');

telIcon.onclick = () => {
    telBtn.classList.toggle('active');
    telWrapper.classList.toggle('active');
}

const userAgent = navigator.userAgent;
const noveltiesMobile = document.querySelector('.novelties-slider-mobile');
const socialMobile = document.querySelector('.social-slider-mobile');

if(userAgent.indexOf('Firefox') != -1) {
    noveltiesMobile.style.width = 'calc(100% - 96px)';
    socialMobile.style.width = 'calc(100% - 94px)';
    socialMobile.style.maxHeight = '810px';
}