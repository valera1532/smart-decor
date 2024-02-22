const footerBtns = document.querySelectorAll('.mobile-footer button');

footerBtns.forEach(btn => {
    btn.onclick = () => {
        btn.classList.toggle('active');
        if(btn.classList.contains('active')) {
            btn.nextElementSibling.style.height = `${btn.nextElementSibling.scrollHeight}px`;
            btn.querySelector('svg').style.transform = 'rotate(46deg)';
            btn.nextElementSibling.style.marginTop = '10px';
        } else {
            btn.nextElementSibling.removeAttribute('style');
            btn.querySelector('svg').removeAttribute('style');
        }
    }
});