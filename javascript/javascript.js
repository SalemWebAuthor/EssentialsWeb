// <----- HERO SECTION - START -----> 

let slideIndex = 0;

const slides = document.querySelectorAll('.slide');
const slideDuration = 5000; // 5 seconds

function showNextSlide() {
    // Hide all slides
    slides.forEach((slide) => {
        slide.style.opacity = '0';
    });

    // Increment the slide index
    slideIndex = (slideIndex + 1) % slides.length;

    // Show the next slide
    slides[slideIndex].style.opacity = '1';

    // Repeat the function after the duration
    setTimeout(showNextSlide, slideDuration);
}

// Start the slider
window.onload = showNextSlide;

// <----- HERO SECTION - END ----->


// <----- SECOND PAGE - START -----> 






// <----- SECOND PAGE - END -----> 


// <----- THIRD PAGE - START ----->


// <----- THIRD PAGE - END ----->


// <----- FOURTH PAGE - START ----->






// <----- FOURTH PAGE - END ----->
