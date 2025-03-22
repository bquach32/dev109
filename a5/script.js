let slideIndex = 0;
let timer = 4;
let interval;
let isAutoAdvancing = false;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
const timerElement = document.getElementById("timer");

// Function to show only one slide at a time
function showSlide(n) {
  // Ensure that the slide index is within the bounds of the slides array
  slideIndex = (n + slides.length) % slides.length;

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Remove active dot indicator
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Show only the correct slide
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");

  // Reset the timer if auto-advance is enabled
  if (isAutoAdvancing) {
    resetTimer();
  }
}

// Function for Next button
function nextSlide() {
  showSlide(slideIndex + 1);
  if (isAutoAdvancing) {
    resetTimer(); 
  }
}

// Function for Previous button
function prevSlide() {
  showSlide(slideIndex - 1);
  if (isAutoAdvancing) {
    resetTimer(); // Reset the timer if auto-slide is enabled
  }
}

// Function to reset the timer
function resetTimer() {
  clearInterval(interval);
  timer = 4;
  if (isAutoAdvancing) {
    interval = setInterval(countdown, 1000);
  }
}

// Function for countdown display
function countdown() {
  if (timer === 0) {
    showSlide(slideIndex + 1);
  }
  document.getElementById("timer").textContent = `${timer}s`;
  timer--;
}

// Function to toggle auto-advance based on checkbox
function toggleAutoAdvance() {
  isAutoAdvancing = document.getElementById("autoSlideCheckbox").checked;

  // If auto-advance is enabled, start auto-slide and show the timer
  if (isAutoAdvancing) {
    resetTimer(); 
    timerElement.style.display = "block"; 
    startAutoSlide(); 
  } else {
    clearInterval(interval); 
    timerElement.style.display = "none"; 
  }
}

// Attach event listeners for manual navigation
document.getElementById("prev").addEventListener("click", () => {
  prevSlide();
  clearInterval(interval); 
  if (isAutoAdvancing) resetTimer(); 
});
document.getElementById("next").addEventListener("click", () => {
  nextSlide();
  clearInterval(interval); 
  if (isAutoAdvancing) resetTimer(); 
});


document.getElementById("autoSlideCheckbox").addEventListener("change", toggleAutoAdvance);

// Start with the first slide
showSlide(0);

// Auto-slide every 4 seconds (if auto-advance is on)
function startAutoSlide() {
  if (isAutoAdvancing) {
    interval = setInterval(() => {
      if (isAutoAdvancing) { /
        showSlide(slideIndex + 1);
      }
    }, 4000);
  }
}

startAutoSlide(); 
