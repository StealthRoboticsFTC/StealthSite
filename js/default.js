document.addEventListener('DOMContentLoaded', () => {
    // Select all elements to apply the fade-in effect
    const fadeInElements = document.querySelectorAll('.header, .text-body, .label');

    // Initialize elements with default styles
    fadeInElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // Add scroll event listener to apply the fade-in effect
    window.addEventListener('scroll', () => {
        fadeInElements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    });
});
