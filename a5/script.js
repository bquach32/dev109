let slideIndex = 0;
let timer = 4;
let interval;

const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

// Function to show only one slide at a time
function showSlide(n) {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Remove active dot indicator
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Set new slide index within valid range
  slideIndex = (n + slides.length) % slides.length;

  // Show only the correct slide
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");

  resetTimer();
}

// Function for Next button
function nextSlide() {
  showSlide(slideIndex + 1);
}

// Function for Previous button
function prevSlide() {
  showSlide(slideIndex - 1);
}

// Function to reset the timer
function resetTimer() {
  clearInterval(interval);
  timer = 4;
  interval = setInterval(countdown, 1000);
}

// Function for countdown display
function countdown() {
  if (timer === 0) {
    showSlide(slideIndex + 1);
  }
  document.getElementById("timer").textContent = `${timer}s`;
  timer--;
}

// Attach event listeners for manual navigation
document.getElementById("prev").addEventListener("click", () => {
  prevSlide();
  resetTimer();
});
document.getElementById("next").addEventListener("click", () => {
  nextSlide();
  resetTimer();
});

// Start with the first slide
showSlide(0);
resetTimer();
setInterval(() => showSlide(slideIndex + 1), 4000); // Auto-slide every 4 seconds
