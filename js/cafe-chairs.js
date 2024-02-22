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

const optionsBtn = document.querySelector('.options__btn-desktop');
const options = document.querySelector('.categories-bottom');

optionsBtn.onclick = () => {
    options.classList.toggle('active');
    optionsBtn.classList.toggle('active');
    if(options.classList.contains('active')) {
        options.style.height = `${options.scrollHeight + 57}px`;
        optionsBtn.querySelector('svg').style.transform = 'rotate(46deg)';
    } else {
        options.removeAttribute('style');
        optionsBtn.querySelector('svg').removeAttribute('style');
    }
}

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
            spaceBetween: 45, 
        }
    }
});

const mobileBtns = document.querySelectorAll('[data-btn]');
const optionsList = document.querySelector('.options-popup ul');
const typePopup = document.querySelector('.type-popup');
const closeBtns = document.querySelectorAll('.products-popup__top button');
const backBtns = document.querySelectorAll('.options-popup__bottom button');


function popupClose(popup) {
    popup.classList.remove('active');
    document.documentElement.removeAttribute('style');
}

mobileBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const dataVal =  btn.dataset.btn;
        const currentPopup = document.querySelector(`.${dataVal}`);
        currentPopup.classList.add('active');
        document.documentElement.style.overflowY = 'hidden';
        
        currentPopup.addEventListener('click', () => popupClose(currentPopup));
        currentPopup.querySelector('.products-popup__item').onclick = e => e.stopPropagation();
    }); 
});

optionsList.onclick = e => {
    if(e.target.tagName === 'BUTTON' || e.target.tagName === 'svg') {
        typePopup.classList.add('active');
        document.documentElement.style.overflowY = 'hidden';
    }
    typePopup.addEventListener('click', () => popupClose(typePopup));
    typePopup.querySelector('.products-popup__item').onclick = e => e.stopPropagation();
}

closeBtns.forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.products-popup')
        .forEach(item => {popupClose(item)})
    }
});

backBtns.forEach(btn => btn.onclick = () => popupClose(typePopup));