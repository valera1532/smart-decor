const userAgent = navigator.userAgent;
const media = window.matchMedia('(max-width: 1440px)');

if (userAgent.indexOf('Mac OS X') !== -1 && userAgent.indexOf('Chrome') !== -1) {
    if(media.matches) {
        document.querySelector('.container').style.maxWidth = '1200px';
    }
}