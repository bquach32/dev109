const images = [ // Array of images (gurkirat)
  { src: "image/keyboards.png", alt: "Image of a keyboard" },
  { src: "image/keyboards2.png", alt: "Image of a keyboard" },
  { src: "image/keyboards4.png", alt: "Image of a keyboard" },
  { src: "image/keyboards5.png", alt: "Image of a keyboard" },
  { src: "image/keyboards6.png", alt: "Image of a keyboard" },
  { src: "image/keyboards7.png", alt: "Image of a keyboard" }
];

// (Buu)
let currentIndex = 0;
const carouselImages = document.querySelector('.carousel-images');
const elapsedTimeDisplay = document.getElementById("elapsed-time"); // Timer display
let timeLeft = 3; // Start timer at 3 seconds
let autoSlideInterval, timerInterval;

// Create audio elements (Duy)
const rewindSound = new Audio("https://antonidimes.github.io/grp109/team_project/sounds/old-radio-button-click-97549.mp3");
const advanceSound = new Audio("https://antonidimes.github.io/grp109/team_project/sounds/minecraft_click.mp3");

// Function to update the carousel position (Buu)
function updateCarousel() {
  const imageWidth = document.querySelector('.carousel-images img').clientWidth;
  const offset = -currentIndex * imageWidth;
  carouselImages.style.transform = `translateX(${offset}px)`;
}

// Function to go to the next slide (Buu)
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
  resetTimer(); // Reset timer when manually navigating
}

// Function to go to the previous slide (Buu)
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
  resetTimer(); // Reset timer when manually navigating
}

// Auto-slide function (Buu)
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 3000);
}

// Timer countdown function (Duy)
function updateTimer() {
  timeLeft--;
  elapsedTimeDisplay.textContent = ` ${timeLeft}`; // Update UI

  if (timeLeft === 0) {
    nextSlide();
  }
}

// Function to reset the timer when an action occurs (Duy)
function resetTimer() {
  timeLeft = 3; // Reset timer to 3 seconds
  elapsedTimeDisplay.textContent = ` ${timeLeft}`;
  
  // Clear previous intervals and restart (Buu)
  clearInterval(autoSlideInterval);
  clearInterval(timerInterval);
  startAutoSlide();
  timerInterval = setInterval(updateTimer, 1000);
}

// Event listeners for buttons (Buu)
document.querySelector('.prev').addEventListener('click', function () {
  prevSlide();
  rewindSound.play(); // Play rewind sound (Duy)
});

document.querySelector('.next').addEventListener('click', function () {
  nextSlide();
  advanceSound.play(); // Play advance sound (Duy)
});

// Start carousel and timer on page load (Buu)
startAutoSlide();
timerInterval = setInterval(updateTimer, 1000);
updateCarousel();
