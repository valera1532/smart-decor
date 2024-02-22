const popupOpenBtn = document.querySelector('.tel-btn');
const popup = document.querySelector('.popup');
const popupItem = popup.querySelector('.popup__item');

popupOpenBtn.onclick = () => {
    popup.classList.add('active');
    document.documentElement.style.overflowY = 'hidden';
}
popup.onclick = () => {
    popup.classList.remove('active');
    document.documentElement.removeAttribute('style');
} 
popupItem.onclick = e => e.stopPropagation();