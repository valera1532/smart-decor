const tabsContent = document.querySelector('.tabs-content__btns');

tabsContent.onclick = e => {
    if(e.target.tagName !== 'BUTTON') return
    const buttons = tabsContent.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    const tabs = document.querySelectorAll('.tabs-content__item');
    tabs.forEach(tab => tab.classList.add('disabled'));
    const dataValue = e.target.dataset.tab;
    const currentTab = document.querySelector(`.${dataValue}`);
    currentTab.classList.remove('disabled');
}