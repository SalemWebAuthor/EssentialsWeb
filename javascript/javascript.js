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

function initCarouselScroll() {
    const carousel = document.querySelector('#thirdpage .carousel');
    const scrollAmount = 400; // Adjust this value for desired scroll step

    // Ensure only the carousel is scrollable with the keyboard
    window.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            // Scroll right when the right arrow key is pressed
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth' // Enables smooth scrolling
            });
        } else if (event.key === 'ArrowLeft') {
            // Scroll left when the left arrow key is pressed
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    });

    // Ensure the carousel is focusable
    carousel.setAttribute('tabindex', '0');
}

// <----- THIRD PAGE - END ----->


// <----- FOURTH PAGE - START ----->






// <----- FOURTH PAGE - END ----->

// <----- Contact Page - START ----->
function showContactInfo() {
    const contactDetails = {
        us: {
            phone: "+1 (800) 123-4567",
            email: "FOGsupport.US@gmail.com"
        },
        za: {
            phone: "+27 (800) 987-6543",
            email: "FOGsupport.SA@gmail.com"
        },
        ph: {
            phone: "+63 (800) 456-7890",
            email: "FOGsupport.PH@gmail.com"
        }
    };

    const country = document.getElementById('country').value;
    const contactDetailsElement = document.getElementById('contact-details');

    if (country && contactDetails[country]) {
        const { phone, email } = contactDetails[country];
        contactDetailsElement.innerHTML = `Phone: ${phone} <br> Email: ${email}`;
        contactDetailsElement.classList.remove('hidden');
        contactDetailsElement.classList.add('visible');
    } else {
        contactDetailsElement.innerHTML = "Please select a country/region to have contact details shown.";
        contactDetailsElement.classList.remove('visible');
        contactDetailsElement.classList.add('hidden');
    }
}

// <----- Contact Page - END ----->

// <----- Global Window Load Initialization ----->

// Call the function on window load
window.onload = function() {
    showNextSlide(); // Start the slide show
    initCarouselScroll(); // Initialize carousel scroll only
}; 


