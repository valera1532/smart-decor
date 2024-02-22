const searchBtn = document.querySelector('.search-btn');
const mobileSearch = document.querySelector('.mobile-search');

searchBtn.onclick = () => {
    mobileSearch.classList.add('active');
    document.documentElement.style.overflowY = 'hidden'; 
}

mobileSearch.onclick = e => {
    if(e.target.classList.contains('mobile-search')) {
        mobileSearch.classList.remove('active');
        document.documentElement.removeAttribute('style');
    }
}