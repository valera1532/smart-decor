const checkoutBox = document.querySelector('.checkout-tabs');
const tabsContent = document.querySelectorAll('.tab-item');
const tabBtns = checkoutBox.querySelectorAll('[data-tab]');

checkoutBox.onclick = e => {
    const target = e.target;
    if(target.tagName !== 'BUTTON') return;
    if(!target.hasAttribute('data-tab')) return;
    const dataVal = target.dataset.tab;

    tabBtns.forEach(btn => btn.classList.remove('active'));
    target.classList.add('active');

    tabsContent.forEach(item => item.classList.add('disabled'));
    const currentBox = document.querySelector(`.${dataVal}`);
    currentBox.classList.remove('disabled');
}

const deliveryBtns = document.querySelectorAll('.delivery-btn');

deliveryBtns.forEach(btn => {
    btn.onclick = function() {
        deliveryBtns.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    }
});

const paymentBtns = Array.from(document.querySelectorAll('.payment-button'));

paymentBtns.forEach(btn => {
    btn.onclick = function(e) {
        console.log(e.target);
        if(e.target.className === 'attach' || e.target.tagName === 'path'
        || e.target.tagName === 'svg' || e.target.className === 'file') return
        const activeClass = paymentBtns.find(item =>
        item.classList.contains('active'));
        activeClass.classList.remove('active');
        this.classList.add('active');
    }
});


const acordeonBtns = document.querySelectorAll('.acordeon-btn');

acordeonBtns.forEach(btn => {
    const icons = btn.querySelectorAll('svg');
    btn.onclick = () => {
        btn.classList.toggle('active');
        if(btn.classList.contains('active')) {
            btn.nextElementSibling.style.height = `${btn.nextElementSibling.scrollHeight}px`;
            btn.nextElementSibling.style.marginTop = '30px';
            icons[0].style.opacity = '0';
            icons[1].style.opacity = '1';
        } else {
            btn.nextElementSibling.removeAttribute('style');
            icons[0].removeAttribute('style');
            icons[1].removeAttribute('style');
        }
    }
});

const mobilePaymentBtns = Array.from(document.querySelectorAll('.payment-button-mobile'));

mobilePaymentBtns.forEach(btn => {
    btn.onclick = function() {
        const activeClass =  mobilePaymentBtns.find(item =>
        item.classList.contains('active'));
        activeClass.classList.remove('active');
        this.classList.add('active');
    }
})