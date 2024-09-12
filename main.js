// Function to smoothly scroll to the targeted section
function smoothScroll(target) {
    document.getElementById(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Attach event listeners to all elements with the class 'nav-link' or 'nav-button-magic'
document.querySelectorAll('.nav-link, .nav-button-magic, .banner-button').forEach(button => {
    button.addEventListener('click', function () {
        const section = button.getAttribute('data-section'); // Get the target section
        if (section) {
            smoothScroll(section);
        }
    });
});