let slideIndex = 0;
let timer = 4;
let interval;
let isAutoAdvancing = false;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
const timerElement = document.getElementById("timer");
const autoSlideCheckbox = document.getElementById("autoSlideCheckbox");

// Function to show only one slide at a time
function showSlide(n) {
  slideIndex = (n + slides.length) % slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");

  if (isAutoAdvancing) {
    resetTimer();
  }
}

// Function for Next button
function nextSlide() {
  showSlide(slideIndex + 1);
  disableAutoAdvance(); // Disable auto-slide on manual interaction
}

// Function for Previous button
function prevSlide() {
  showSlide(slideIndex - 1);
  disableAutoAdvance(); // Disable auto-slide on manual interaction
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
  timerElement.textContent = `${timer}s`;
  timer--;
}

// Function to disable auto-advance when manually clicking
function disableAutoAdvance() {
  isAutoAdvancing = false;
  autoSlideCheckbox.checked = false; // Uncheck the auto-slide checkbox
  clearInterval(interval);
  timerElement.style.display = "none"; // Hide timer
}

// Function to toggle auto-advance based on checkbox
function toggleAutoAdvance() {
  isAutoAdvancing = autoSlideCheckbox.checked;

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
document.getElementById("prev").addEventListener("click", prevSlide);
document.getElementById("next").addEventListener("click", nextSlide);
autoSlideCheckbox.addEventListener("change", toggleAutoAdvance);

// Start with the first slide
showSlide(0);

// Auto-slide every 4 seconds (if auto-advance is on)
function startAutoSlide() {
  if (isAutoAdvancing) {
    interval = setInterval(() => {
      showSlide(slideIndex + 1);
    }, 4000);
  }
}

startAutoSlide();
