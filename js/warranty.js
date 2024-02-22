const tabsBtns = document.querySelector('.tab-btns');
const btns = Array.from(tabsBtns.querySelectorAll('.tab-btns button'));
const tabItems = document.querySelectorAll('.warranty-content__item');
tabsBtns.onclick = e => {
    const target = e.target;
    if(target.tagName !== 'BUTTON') return;
    btns.forEach(btn => {
        btn.classList.remove('active');
    });
    target.classList.add('active');

    const currentIndex = btns.indexOf(target);
    if(currentIndex !== 0) {
        tabItems.forEach(item => item.style.borderRadius = '10px');
    } else {
        tabItems.forEach(item => item.removeAttribute('style'));
    }
    const dataVal = target.dataset.tab;
    const currentContent = document.querySelector(`.${dataVal}`);
    tabItems.forEach(item => {
        item.classList.add('disabled');
    });
    currentContent.classList.remove('disabled');
}

const accordeonBtns = document.querySelectorAll('.accordeon button');

accordeonBtns.forEach(btn => {
    const svg = btn.querySelectorAll('svg line');
    btn.onclick = () => {
        btn.classList.toggle('active');
        if(btn.classList.contains('active')) {
            svg[1].style.opacity = 0;
            btn.nextElementSibling.style.height = `${btn.nextElementSibling.scrollHeight}px`;
            btn.nextElementSibling.style.paddingTop = '5px';
        } else {
            svg[1].removeAttribute('style');
            btn.nextElementSibling.removeAttribute('style');
        }
    }
});

