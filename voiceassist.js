// script.js
const themeToggle = document.getElementById('theme-toggle');
const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const voiceBtn = document.getElementById('voice-btn');
let isDarkTheme = false;

// Questions and Answers
const quizQuestions = [
  { question: "What is the capital of France? 🏰", answer: "Paris" },
  { question: "What is 2 + 2? ➕", answer: "4" },
  { question: "Who wrote 'Romeo and Juliet'? 🖋️", answer: "William Shakespeare" },
  { question: "What is the largest planet in our solar system? 🪐", answer: "Jupiter" },
  { question: "What is the chemical symbol for water? 💧", answer: "H2O" },
  { question: "Hello", answer: "Hi, How may I help you?" },
  { question: "what is your name", answer: "I am your quiz master. Ask me anything you want." },
  { question: "2+2", answer: "4" },
  { question: "what is the value of 2+2?", answer: "4" },{ question: "what is the value of 2+2", answer: "4" },
  { question: "what is 2+2", answer: "Its the addition process and it's value is 4" },
];

// Theme Toggle
themeToggle.addEventListener('click', () => {
  isDarkTheme = !isDarkTheme;
  document.body.classList.toggle('dark-theme', isDarkTheme);
  themeToggle.textContent = isDarkTheme ? "🌙" : "🌞";
});

// Chatbot Logic
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const userMessage = userInput.value.trim();
    if (userMessage.toLowerCase() === 'start quiz') {
      startQuiz();
    } else {
      const botResponse = getBotResponse(userMessage);
      appendMessage('user', userMessage);
      appendMessage('bot', botResponse);
    }
    userInput.value = '';
  }
});

// Voice Assistant
voiceBtn.addEventListener('click', () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = (event) => {
    const userMessage = event.results[0][0].transcript;
    userInput.value = userMessage;
    const botResponse = getBotResponse(userMessage);
    appendMessage('user', userMessage);
    appendMessage('bot', botResponse);
  };
});

// Append Messages to Chat Window
function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(sender);
  messageElement.textContent = message;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Get Bot Response
function getBotResponse(userMessage) {
  const question = quizQuestions.find(q => q.question.toLowerCase().includes(userMessage.toLowerCase()));
  return question ? question.answer : "I'm not sure about that. Try asking something else! 🤔";
}

// Start Quiz
function startQuiz() {
  quizQuestions.forEach((q, index) => {
    setTimeout(() => {
      appendMessage('bot', q.question);
    }, index * 2000);
  });
}