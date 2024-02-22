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


new Swiper('.product-left__slider', {
    navigation: {
        prevEl: '.product-left-slider-prev',
        nextEl: '.product-left-slider-next',
    },
    thumbs: {
        swiper: {
            el: '.product-left__thumbs',
            slidesPerView: 7,
            spaceBetween: 28,
            navigation: {
                prevEl: '.product-left-thumb-prev',
                nextEl: '.product-left-thumb-next',
            },
            breakpoints: {
        319: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        927: {
           slidesPerView: 7,
           spaceBetween: 17, 
        },
        1301: {
           spaceBetween: 28,  
        }
    }
        },
    },
});
new Swiper('.product-left__thumbs', {
    slidesPerView: 7,
    spaceBetween: 28,
    navigation: {
        prevEl: '.product-left-thumb-prev',
        nextEl: '.product-left-thumb-next',
    },
    breakpoints: {
        319: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        927: {
           slidesPerView: 7,
           spaceBetween: 17, 
        },
        1301: {
           spaceBetween: 28,  
        }
    }
});

const rightAcordeonBtns = document.querySelectorAll('.product-right__acordeon button');

rightAcordeonBtns.forEach(btn => {
    btn.onclick = () => {
        btn.classList.toggle('active');
        if(btn.classList.contains('active')) {
            btn.nextElementSibling.style.height = `${btn.nextElementSibling.scrollHeight}px`;
            btn.nextElementSibling.style.marginTop = '10px';
            btn.querySelector('svg').style.transform = 'rotate(-180deg)';
        } else {
            btn.nextElementSibling.removeAttribute('style');
            btn.querySelector('svg').removeAttribute('style');
        }
    }
});

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

new Swiper('.designer-recomend-slider-tablet', {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 91,
    initialSlide: 1,
    navigation: {
        prevEl: '.designer-recomend-tablet-prev',
        nextEl: '.designer-recomend-tablet-next',
    }
});

new Swiper('.series-product-slider-mobile', {
    autoHeight: true,
    navigation: {
        prevEl: '.series-product-mobile-prev',
        nextEl: '.series-product-mobile-next',
    },
});

new Swiper('.designer-recomend-slider-mobile', {
    autoHeight: true,
    navigation: {
        prevEl: '.designer-recomend-prev-mobile',
        nextEl: '.designer-recomend-next-mobile',
    },
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

new Swiper('.popular-slider-tablet', {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 91,
    initialSlide: 1,
    navigation: {
        prevEl: ".popular-slider-tablet-prev",
        nextEl: ".popular-slider-tablet-next",
    },
});

new Swiper('.popular-slider-mobile', {
    autoHeight: true,
    navigation: {
        prevEl: ".popular-slider-mobile-prev",
        nextEl: ".popular-slider-mobile-next",
    },
});


const tabsLeftContent = document.querySelector('.tabs-content__left');
const tabsContent = document.querySelectorAll('.tabs-content__item');

tabsLeftContent.onclick = e => {
    const target = e.target;
    if(target.tagName !== 'BUTTON') return;
    const dataVal = target.dataset.tab;
    
    const tabButtons = Array.from(document.querySelectorAll('.tabs-content__left button'));
    tabButtons.forEach(btn => btn.classList.remove('active'));
    target.classList.add('active');
    const currentIndex = tabButtons.indexOf(target);
    if(currentIndex !== 0) {
        tabsContent.forEach(item => item.style.borderRadius = '10px');
    } else {
        tabsContent.forEach(item => item.removeAttribute('style'));
    }

    const tabContents = document.querySelectorAll('.tabs-content__item');
    tabContents.forEach(item => item.classList.add('disabled'));

    const currentContent = document.querySelector(`.${dataVal}`);
    currentContent.classList.remove('disabled');
}


const mobileBtns = document.querySelectorAll('.mobile-acordeon button');

mobileBtns.forEach(acordeon => {
    const svg = acordeon.querySelectorAll('line');
    acordeon.onclick = () => {
        acordeon.classList.toggle('active');
        if(acordeon.classList.contains('active')) {
            svg[1].style.transform = 'scaleY(0)';
            acordeon.nextElementSibling.style.height = `${acordeon.nextElementSibling.scrollHeight + 10}px`;
            acordeon.nextElementSibling.style.paddingTop = '5px';
            acordeon.nextElementSibling.style.paddingBottom = '5px';
        } else {
            svg[1].removeAttribute('style');
            acordeon.nextElementSibling.removeAttribute('style');
        }
    }
});

const userAgent = navigator.userAgent;
const productSlider = document.querySelector('.product-left__slider');
const productSliderSlide = document.querySelector('.product-left__slider .swiper-slide');
const productThumbs = document.querySelector('.product-left__thumbs');
const seriesSliderMobile = document.querySelector('.series-product-slider-mobile');
const recomendSliderMobile = document.querySelector('.designer-recomend-slider-mobile');
const popularSliderMobile = document.querySelector('.popular-slider-mobile');
const media1300 = window.matchMedia('(max-width: 1300px)');
const media926 = window.matchMedia('(max-width: 926px)');


if(userAgent.indexOf('Firefox') !== -1) {
    productSlider.style.maxHeight = '244px';
    productSlider.style.width = 'calc(100% - 126px)';
    productThumbs.style.width = 'calc(100% - 131px)';
    seriesSliderMobile.style.width = 'calc(100% - 94px)';
    recomendSliderMobile.style.width = 'calc(100% - 94px)';
    popularSliderMobile.style.width = 'calc(100% - 94px)';
    if(media1300.matches) {
        productSlider.style.width = 'calc(100% - 72px)';
        productThumbs.style.width = 'calc(100% - 81px)';
    } 
    if(media926.matches) {
        productSlider.style.width = 'calc(100% - 47px)';
        productSliderSlide.style.maxHeight = '244px';
        productThumbs.style.width = 'calc(100% - 67px)';
    }
}

Fancybox.bind("[data-fancybox='gallery']", {
    Thumbs : {
        type: "classic"
    },
    contentClick: "iterateZoom",
        Images: {
            Panzoom: {
            maxScale: 2,
        },
    },
});

document.querySelector('.product-left__btn').onclick = () => {
    document.querySelector('.swiper-slide-active a').click();
}

Fancybox.bind("[data-fancybox='gallery2']", {
    contentClick: "iterateZoom",
        Images: {
            Panzoom: {
            maxScale: 2,
        },
    },
});
Fancybox.bind("[data-fancybox='gallery3']", {
    contentClick: "iterateZoom",
        Images: {
            Panzoom: {
            maxScale: 2,
        },
    },
});
Fancybox.bind("[data-fancybox='gallery4']", {
    contentClick: "iterateZoom",
        Images: {
            Panzoom: {
            maxScale: 2,
        },
    },
});
Fancybox.bind("[data-fancybox='gallery5']", {
    contentClick: "iterateZoom",
        Images: {
            Panzoom: {
            maxScale: 2,
        },
    },
});
Fancybox.bind("[data-fancybox='gallery6']", {
    contentClick: "iterateZoom",
        Images: {
            Panzoom: {
            maxScale: 2,
        },
    },
});
Fancybox.bind("[data-fancybox='gallery7']", {
    contentClick: "iterateZoom",
        Images: {
            Panzoom: {
            maxScale: 2,
        },
    },
});

const resizeBtns = document.querySelectorAll('.product-card__top button:nth-child(3)');
resizeBtns.forEach(btn => 
btn.onclick = () => btn.previousElementSibling.click());