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