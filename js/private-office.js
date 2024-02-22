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



const privateLeft = document.querySelector('.private-left');
const PrivateRightItems = document.querySelectorAll('.private-right-item');

privateLeft.onclick = e => {
    const target = e.target;
    if(target.tagName !== 'BUTTON') return;
    PrivateRightItems.forEach(item => {
        item.classList.add('disabled');
        item.classList.remove('active');
    });
    privateLeft.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('active');
    });
    const dataVal = target.dataset.item;
    const currentContent = document.querySelector(`.${dataVal}`);
    currentContent.classList.add('active');
    target.classList.add('active');
}

const acordeonBtns = document.querySelectorAll('.acordeon-btn');

acordeonBtns.forEach((btn, index) => {
    btn.onclick = function() {
        const icon = this.querySelectorAll('svg');
        this.classList.toggle('active');
        if(this.classList.contains('active')) {
            this.nextElementSibling.style.height = 'auto';
            icon[0].style.opacity = 0;
            icon[1].style.opacity = 1;
            this.nextElementSibling.style.marginTop = '22px';
            if(index === 0) {
                this.nextElementSibling.style.marginTop = '30px';
            }
        } else {
            this.nextElementSibling.removeAttribute('style');
            icon[0].removeAttribute('style');
            icon[1].removeAttribute('style');
        }
    }
});

window.onload = () => {
    acordeonBtns.forEach((btn,index) => {
        const icon = btn.querySelectorAll('svg');
        if(btn.classList.contains('active')) {
            btn.nextElementSibling.style.height = 'auto';
            icon[0].style.opacity = 0;
            icon[1].style.opacity = 1;
            btn.nextElementSibling.style.marginTop = '22px';
            if(index === 0) {
                btn.nextElementSibling.style.marginTop = '30px';
            }
        }
    }) 
}


new Swiper('.order-slider', {
    cssMode: true,
    navigation: {
        prevEl: '.order-slider-prev',
        nextEl: '.order-slider-next'
    }
});

new Swiper('.featured-slider', {
    autoHeight: true,
    navigation: {
        prevEl: '.featured-slider-prev',
        nextEl: '.featured-slider-next'
    }
});

const userAgent = navigator.userAgent;
const orderSlider = document.querySelector('.order-slider');
const featuredSlider = document.querySelector('.featured-slider');


if(userAgent.indexOf('Firefox') !== -1) {
    orderSlider.style.width = 'calc(100% - 48px)';
    featuredSlider.style.width = 'calc(100% - 95px)';
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

const resizeBtns = document.querySelectorAll('.featured-slider-wrapper .resize');

resizeBtns.forEach(btn => 
btn.onclick = () => btn.parentElement.querySelector('a').click());
