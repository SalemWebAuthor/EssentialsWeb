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

const toggleTexts = document.querySelectorAll('.toggle-text');
let currentIndex = 0;

setInterval(() => {
  // Fade out current text
  toggleTexts[currentIndex].classList.add('fade-out');
    
  // Wait for the fade-out animation to finish
  setTimeout(() => {
      toggleTexts[currentIndex].style.display = 'none'; // Hide current
      
      // Move to next index
      currentIndex = (currentIndex + 1) % toggleTexts.length;

      // Show next text
      toggleTexts[currentIndex].style.display = 'inline';
      
      // Fade in the next text
      toggleTexts[currentIndex].classList.remove('fade-out'); // Remove fade-out class
      toggleTexts[currentIndex].classList.add('fade-in'); // Add fade-in class
  }, 500); // Match this timeout with the fade duration
}, 2000); // Change every 2 seconds




// <----- SECOND PAGE - END -----> 


// <----- THIRD PAGE - START ----->


// <----- THIRD PAGE - END ----->


// <----- FOURTH PAGE - START ----->






// <----- FOURTH PAGE - END ----->
