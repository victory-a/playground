// require('dotenv').config();
// console.log(process.env.victory);

// controls the functionality for toggling mobile nav
function toggleMobileNav() {
  return document.getElementById('mobile-nav').classList.toggle('open');
}

// controls the visibility tab bar avatar and username
const emptyStickyDiv = document.querySelector('.empty');
function toggleTabLeftSection() {
    if (window.pageYOffset > 515) {
        emptyStickyDiv.classList.add('visible');
    } else {
        emptyStickyDiv.classList.remove('visible');
    }
}
window.addEventListener('scroll', () => toggleTabLeftSection());

