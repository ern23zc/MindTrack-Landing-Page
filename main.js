function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}

// Function to smoothly scroll to the targeted section
function smoothScroll(target) {
    document.getElementById(target).scrollIntoView({
        behavior: 'smooth'
    });
    closeNav();
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