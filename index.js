// require('dotenv').config();
// console.log(process.env.victory);

const emptyStickyDiv = document.querySelector('.empty');
console.log(emptyStickyDiv);
function tobbleMobileNav() {
    return document.getElementById('mobile-nav').classList.toggle('open');
}

function scream() {
    if (window.pageYOffset > 515) {
        emptyStickyDiv.classList.add('visible');
    } else {
        emptyStickyDiv.classList.remove('visible');
    }
}

window.addEventListener('scroll', () => scream());
