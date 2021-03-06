var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');

// Show the modal when the user clicks on a package.
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
});

// Show the side navigation.
toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

ctaButton.addEventListener('animationstart', function(event) {
    console.log('Animation started', event);
});

ctaButton.addEventListener('animationend', function(event) {
    console.log('Animation ended', event);
});

ctaButton.addEventListener('animationiteration', function(event) {
    console.log('Animation iteration', event);
});

// Close the modal when the user clicks on the backdrop.
function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}
