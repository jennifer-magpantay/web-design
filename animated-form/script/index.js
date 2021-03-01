// add a scritp to deal with the dark mode style when the toggke button is pressed

// window.addEventListener("load", (event) => { });

// declare global variables
const html = document.querySelector('html');
const toggle = document.querySelector('#toggle__btn');
// inverted: tagging all elements that wont be affect by the filter
const inverted = document.querySelector('.inverted');
const btnLogin = document.querySelector('#button-login');
const form = document.querySelector('.form__container');

// add event listeners
// setting an event when the toggle is clicked to set the dark mode
toggle.addEventListener("change", event => {
    event.target.checked ? setDarkMode() : setDefaultMode();
})

// add event when login button is clicked, managing aimation forms
btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    // when the login button is clicked, add a class is added to form:
    form.classList.add('form-hidden');
});

// setting an event to hide the form when the animation ends
form.addEventListener('animationend', (event) => {
    // set which animation has to be listened
    if (event.animationName == 'hiding-form') {
        form.style.display = 'hidden';
    }
})

function setDarkMode() {
    // Add class dark-mode to html by using classList():
    html.classList.add('dark-mode');

    // set on the class inverted the styles:
    // obs: set.Attribute for styles is not a best practice
    inverted.style.filter = 'invert(1) hue-rotate(180deg)';
    inverted.style.transition = 'all 0.1s ease-in-out';
}

function setDefaultMode() {
    // removing the style filter from elements
    html.removeAttribute('class');
    inverted.removeAttribute('style');
}