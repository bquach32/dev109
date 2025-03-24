// Gurkirat
let startTime = 0; // start time
let typedCorrect = 0; // score (maintained across sentences)
let mistakes = 0;
let timer;
let timeLimit = 30; // Set a time limit for the test (30 seconds)
let isTestRunning = false; 
// Variables for name changing (Duy)
const developers = ["Duy Anh Nguyen", "Gurkirat Kaur", "Buu Quach"];
let index = 0;

// More sentences (Duy)
let sentences = [
    "This is a test",
    "This is another test",
    "The quick brown fox jumps over the lazy dog",
    "Typing fast requires practice and accuracy",
    "JavaScript is a versatile programming language",
    "Never stop learning and improving your skills",
    "Coding challenges help sharpen problem-solving abilities",
    "A journey of a thousand miles begins with a single step",
    "Success comes to those who work hard and never give up",
    "Practice makes perfect, so keep typing every day",
    "Errors are just stepping stones to mastery",
    "A smooth sea never made a skilled sailor",
    "Stay focused and type with precision",
    "Speed and accuracy go hand in hand",
    "Keep your fingers light and let them flow",
    "Hard work beats talent when talent doesn't work hard",
    "Fast fingers and a sharp mind make a great typist",
    "Every great achievement begins with a single keystroke",
    "Patience and persistence lead to perfection",
    "Don't just type fast, type correctly",
    "Programming is like writing a book, but debugging is like editing it",
    "Great typists make fewer mistakes, not just type faster",
    "Time flies when you're focused on improving your skills",
    "The best way to predict the future is to create it",
    "Creativity and logic come together in programming",
    "A good keyboard makes typing more enjoyable",
    "The only way to get better is to keep practicing",
    "Accuracy first, then speed will follow",
    "Type with confidence and see your speed improve",
    "Your words per minute reflect your dedication to practice",
    "Typing tests are a fun way to challenge yourself",
    "Mistakes help you learn, so don't fear them",
    "A well-paced typist is better than a reckless one",
    "Small improvements each day lead to big results",
    "Focus on one word at a time and build momentum",
    "A typist's best tool is muscle memory",
    "The secret to fast typing is rhythm and consistency",
    "Stay relaxed, and let your fingers do the work",
    "Typing is an essential skill in the digital age",
    "Mastering the keyboard takes time and effort",
    "A good typist reads ahead while typing",
    "Words flow better when you're not overthinking",
    "Typing in silence helps improve focus and precision",
    "Speed improves when you stop second-guessing yourself",
    "Let your fingers glide over the keys effortlessly",
    "Perseverance turns slow typists into speed demons",
    "Each keystroke brings you closer to mastery",
    "Typing without looking at the keyboard is a game changer"
];

// DOM elements
let sentenceDisplayed = document.getElementById('sentence'); //display sentence to type
let userInput = document.getElementById('input');//user input
let timeDisplayed = document.getElementById('time');//displays time
let mistakeCounter = document.getElementById('mistakes');
let results = document.getElementById('result');//displays result

// Function to show a new sentence
function newSentence() { //to display a new sentenece
    let randomIndex = Math.floor(Math.random() * sentences.length); // Get a random sentence
    sentenceDisplayed.textContent = sentences[randomIndex]; // Display the random sentence
    userInput.value = ''; // Clear the input field 
}

newSentence();  // sentence is displayed 
userInput.disabled = false; //enables the input field 
userInput.addEventListener('input', checkInput); // Event listenre for user input

// Function to check the user input
function checkInput() { 
    let typedText = userInput.value; // Get the text typed by the user
    let sentence = sentenceDisplayed.textContent; // Get the current sentence that is displayed for user to type
    
    // Start the timer if it hasn't started yet
    if (!isTestRunning) { //if the test is NOT running
        startTime = new Date().getTime(); //then start the timer 
        isTestRunning = true; // Set the flag to indicate the test is running
        timer = setInterval(updateTime, 1000); // Update timer every second (1000ms)
    }
    
    // to count for mistakes
    mistakes = 0;
    let currentScore = 0; // Track correct score for the current sentence (Duy)
    for (let i = 0; i < typedText.length; i++) {  // Loop through the typed text
        if (typedText[i] !== sentence[i]) { // Compare each character with the sentence
            mistakes++; //when theres a mismatch, then increment the mistakes counter
        } else {
            currentScore++; // Increment the correct character count on match
        }
    }

    // Update typedCorrect based on the input
    mistakeCounter.textContent = mistakes; // Display the number of mistakes
    document.getElementById('typedCorrect').textContent = typedCorrect + currentScore; // the correct number is updated in the html
    
    // Check if the user has completed typing the sentence
    if (typedText === sentence) {  //if the typed text is equal to the sentence that was displayedd
        // Add correct characters of this sentence to the total score (Duy)
        typedCorrect += currentScore; 
        document.getElementById('typedCorrect').textContent = typedCorrect;
        newSentence(); // chnage the sentence to another one from the array
    }
}

// Function to update the timer
function updateTime() {
    const currentTime = new Date().getTime();// Get the current time to calculate hwo much time has passed 
    const timeTaken = Math.floor((currentTime - startTime) / 1000); // Calculate the time passed (in seconds)
    const timeRemaining = timeLimit - timeTaken; // Calculate the remaining time

    if (timeRemaining >= 0) {
        timeDisplayed.textContent = timeRemaining; // Display the remaining time
    } else {
        timeDisplayed.textContent = 0; // Display 0 when time is up
    }

    if (timeRemaining <= 0) { //if the time remaining is less than or equal to 0
        clearInterval(timer); // Clear the timer
        userInput.disabled = true; // Disable input field when time is up
        displayResults(); // Show results after time is up
    }
}

// Add a function to display the result (Duy)
function displayResults() {
  document.getElementById('result').textContent = `Test complete! Total correct: ${typedCorrect + getCurrentScore()}, Total mistakes: ${mistakes}`;}
  
// Add a function to help keep track of the current score to add up (Duy)
function getCurrentScore() {
    let typedText = userInput.value;
    let sentence = sentenceDisplayed.textContent;
    let currentScore = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === sentence[i]) {
            currentScore++;
        }
    }
    return currentScore;
}

// Function to change names (Duy)
function cycleNames() {
    document.getElementById("developer-name").textContent = developers[index];
    index = (index + 1) % developers.length; // Loop back after last name
}

// Change name (Duy)
setInterval(cycleNames, 2000);
