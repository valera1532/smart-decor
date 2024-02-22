const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.top-nav')

burgerBtn.onclick = () => {
    mobileMenu.classList.toggle('active');
    if(mobileMenu.classList.contains('active')) {
        document.documentElement.style.overflowY = 'hidden';
    } else {
        document.documentElement.removeAttribute('style');
    }
}

const dropDownBtns = document.querySelectorAll('.mobile-links button');

dropDownBtns.forEach(btn => {
    btn.onclick = () => {
        btn.classList.toggle('active');
        if(btn.classList.contains('active')) {
            btn.nextElementSibling.style.height = `${btn.nextElementSibling.scrollHeight}px`;
            btn.nextElementSibling.style.marginTop = '15px';
            btn.querySelector('svg').style.transform = 'rotate(46deg)';
        } else {
            btn.nextElementSibling.removeAttribute('style')
            btn.removeAttribute('style');
            btn.querySelector('svg').removeAttribute('style');
        }
    }
})