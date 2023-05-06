const lang = document.querySelector('.header__lang');
const path = window.location.pathname;

if (path.startsWith('/en')) {
  lang.textContent = 'RU';
} else {
  lang.textContent = 'EN';
}
