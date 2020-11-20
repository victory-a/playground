// require('dotenv').config();
// console.log(process.env.victory);

//selector functions
const selectId = function (id) {
    return document.getElementById(id);
};

const selectElement = function (element) {
    return document.querySelector(element);
};

// elements
let menuToggler = selectElement('.nav-toggle');
console.log(menuToggler)
let body = selectElement('body');

// add eventlisteners
menuToggler.addEventListener('click', function () {
    body.classList.toggle('open')
});
