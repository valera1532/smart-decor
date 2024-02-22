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

new Swiper('.portfolio-desc__slider', {
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        prevEl: '.portfolio-desc-prev',
        nextEl: '.portfolio-desc-next'
    }
});

new Swiper('.portfolio-desc__slider-tablet', {
    autoHeight: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 87,
    initialSlide: 1,
    navigation: {
        prevEl: '.portfolio-desc__slider-tablet-prev',
        nextEl: '.portfolio-desc__slider-tablet-next'
    }
});

new Swiper('.portfolio-desc__slider-mobile', {
    navigation: {
        prevEl: '.portfolio-desc__slider-mobile-prev',
        nextEl: '.portfolio-desc__slider-mobile-next'
    }
});

const userAgent = navigator.userAgent;
const portfolioMobile = document.querySelector('.portfolio-desc__slider-mobile');

if(userAgent.indexOf('Firefox') !== -1) {
    portfolioMobile.style.width = 'calc(100% - 94px)';
}