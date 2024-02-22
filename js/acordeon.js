const tabBtns = document.querySelectorAll('.acordeon__item button');
tabBtns.forEach(btn => {
    btn.onclick = () => {
        btn.classList.toggle('active');
        if(btn.classList.contains('active')) {
            btn.nextElementSibling.style.height = `${btn.nextElementSibling.scrollHeight}px`;
            btn.nextElementSibling.style.marginTop = '10px';
            btn.querySelectorAll('img').forEach(icon => {
                icon.style.transform = 'rotate(-180deg)';
            });
        } else {
            btn.nextElementSibling.removeAttribute('style');
            btn.querySelector('img').removeAttribute('style');
            btn.querySelectorAll('img').forEach(icon => {
                icon.removeAttribute('style');
            });
        }
    }
})