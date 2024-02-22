let counter;
const minusBtns = document.querySelectorAll('.minus');
const plusBtns = document.querySelectorAll('.plus');

minusBtns.forEach(minusBtn => {
    minusBtn.onclick = function() {
        if(this.nextElementSibling.textContent < 2) return;
        counter = +this.nextElementSibling.textContent;
        counter -= 1;
        this.nextElementSibling.textContent = counter;
    }
});

plusBtns.forEach(plusBtn => {
    plusBtn.onclick = function() {
        counter = +this.previousElementSibling.textContent;
        counter += 1;
        this.previousElementSibling.textContent = counter;
    }
});