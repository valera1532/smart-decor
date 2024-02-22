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


const loginTabs = document.querySelector('.login-tabs');
const tabBtns = Array.from(loginTabs.querySelectorAll('button'));
const forms = Array.from(document.querySelectorAll('.mobile-form'));


loginTabs.onclick = e => {
    const target = e.target;
    if(target.tagName !== 'BUTTON') return
    const activeBtn = tabBtns.find(btn => btn.classList.contains('active'));
    activeBtn.classList.remove('active');
    target.classList.add('active');

    const activeContent = forms.find(item => item.classList.contains('active'));
    activeContent.classList.remove('active');
    const dataVal = target.dataset.tab;
    const currentContent = document.querySelector(`.${dataVal}`);
    currentContent.classList.add('active');
}