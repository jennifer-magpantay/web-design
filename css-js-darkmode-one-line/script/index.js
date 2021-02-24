// add a scritp to deal with the dark mode style when the toggke button is pressed
// window.addEventListener("load", (event) => { });

// global variables
    const html = document.querySelector('html');
    const toggle = document.querySelector('#toggle__btn');
    // tagging all elements that wont be affect by the filter
    const inverted =  document.querySelector('.inverted');

// setting an event when the toggle is clicked
    toggle.addEventListener("change", event => {
        event.target.checked ? setDarkMode() : setDefaultMode();
    })

function setDarkMode() {
    // html.setAttribute('style', 'filter: invert(100%); transition: all 0.1s ease-in-out;');
    // html.setAttribute('style', 'filter: invert(1) hue-rotate(180deg); transition: all 0.1s ease-in-out;');

    // setting filter and transition to elements by using .style. - best practice
    html.style.filter='invert(1) hue-rotate(180deg)';
    html.style.transition = 'all 0.1s ease-in-out';

    inverted.style.filter='invert(1) hue-rotate(180deg)';
    inverted.style.transition = 'all 0.1s ease-in-out';
}

function setDefaultMode() {
    // removing the style filter from elements
    html.removeAttribute('style');
    inverted.removeAttribute('style');
}