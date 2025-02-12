const questions = [
  { question: "What is 12 + 15?", options: ["25", "27", "30", "22"], answer: "27" },
  { question: "What is 20 - 7?", options: ["10", "13", "15", "17"], answer: "13" },
  { question: "What is 8 × 9?", options: ["72", "64", "81", "56"], answer: "72" },
  { question: "What is 100 ÷ 10?", options: ["5", "10", "15", "20"], answer: "10" },
  { question: "What is 15 × 2?", options: ["20", "25", "30", "35"], answer: "30" },
  // Add more than 50 questions here...
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;
let shuffledQuestions = [];

const questionElement = document.getElementById("question");
const optionsElement = document.querySelectorAll(".option");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endSessionButton = document.getElementById("end-session");
const resultElement = document.getElementById("result");
const finalScoreElement = document.getElementById("final-score");
const retryButton = document.getElementById("retry");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

function shuffleQuestions() {
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timeElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame(); // End game if timer runs out
    }
  }, 1000);
}

function loadQuestion() {
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.forEach((option, index) => {
    option.textContent = currentQuestion.options[index];
    option.onclick = () => checkAnswer(currentQuestion.options[index], currentQuestion.answer);
    option.classList.remove("correct", "wrong"); // Reset button styles
  });
  timeLeft = 30;
  timeElement.textContent = timeLeft;
  startTimer();
}

function checkAnswer(selectedOption, correctAnswer) {
  clearInterval(timer); // Stop the timer
  const selectedButton = Array.from(optionsElement).find(button => button.textContent === selectedOption);
  if (selectedOption === correctAnswer) {
    score += 10;
    correctSound.play();
    if (selectedButton) selectedButton.classList.add("correct"); // Green animation
  } else {
    score -= 5;
    wrongSound.play();
    if (selectedButton) selectedButton.classList.add("wrong"); // Red animation
    // Highlight correct answer
    Array.from(optionsElement).find(button => button.textContent === correctAnswer).classList.add("correct");
  }
  scoreElement.textContent = score;
  setTimeout(nextQuestion, 1000); // Delay for animation
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    loadQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  clearInterval(timer);
  questionElement.textContent = "Quiz Over!";
  optionsElement.forEach(option => option.style.display = "none");
  resultElement.classList.remove("hidden");
  finalScoreElement.textContent = score;
}

function resetGame() {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.textContent = score;
  resultElement.classList.add("hidden");
  optionsElement.forEach(option => {
    option.style.display = "block";
    option.classList.remove("correct", "wrong");
  });
  shuffleQuestions();
  loadQuestion();
}

endSessionButton.addEventListener("click", endGame);
retryButton.addEventListener("click", resetGame);

// Initialize the game
shuffleQuestions();
loadQuestion();