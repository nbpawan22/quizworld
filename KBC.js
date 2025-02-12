// Audio files for correct and wrong answers
const correctSound = new Audio('Correct Answer sound effect.mp3'); // Replace with your correct sound file
const wrongSound = new Audio('Wrong Answer sound effect.mp3'); // Replace with your wrong sound file

// Questions pool (50+ questions)
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris",
        level: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
        level: 1
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare",
        level: 2
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean",
        level: 2
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O",
        level: 3
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan",
        level: 3
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci",
        level: 4
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        answer: "2",
        level: 4
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen",
        level: 5
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        answer: "Nile River",
        level: 5
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Lithium", "Oxygen"],
        answer: "Hydrogen",
        level: 1
    },
    {
        question: "Who discovered gravity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        answer: "Isaac Newton",
        level: 2
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Dollar"],
        answer: "Yen",
        level: 3
    },
    {
        question: "Which country hosted the 2020 Summer Olympics?",
        options: ["China", "Japan", "Brazil", "USA"],
        answer: "Japan",
        level: 4
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        answer: "Blue Whale",
        level: 5
    },
    {
        question: "Which is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        answer: "Mount Everest",
        level: 1
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra",
        level: 2
    },
    {
        question: "Which is the largest desert in the world?",
        options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
        answer: "Antarctic Desert",
        level: 3
    },
    {
        question: "Who is known as the father of computers?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        answer: "Charles Babbage",
        level: 4
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
        answer: "300,000 km/s",
        level: 5
    },
    {
        question: "Which is the largest country in the world by area?",
        options: ["Russia", "Canada", "China", "USA"],
        answer: "Russia",
        level: 1
    },
    {
        question: "Who is known as the 'Father of the Nation' in India?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"],
        answer: "Mahatma Gandhi",
        level: 2
    },
    {
        question: "Which is the smallest continent in the world?",
        options: ["Australia", "Europe", "Africa", "Antarctica"],
        answer: "Australia",
        level: 3
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au",
        level: 4
    },
    {
        question: "Which planet is known as the 'Morning Star'?",
        options: ["Venus", "Mercury", "Mars", "Jupiter"],
        answer: "Venus",
        level: 5
    },
    {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
        answer: "Alexander Graham Bell",
        level: 1
    },
    {
        question: "Which is the longest river in India?",
        options: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
        answer: "Ganga",
        level: 2
    },
    {
        question: "Which is the largest desert in the world?",
        options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
        answer: "Antarctic Desert",
        level: 3
    },
    {
        question: "Who wrote the play 'Hamlet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare",
        level: 4
    },
    {
        question: "Which is the fastest land animal?",
        options: ["Cheetah", "Lion", "Tiger", "Leopard"],
        answer: "Cheetah",
        level: 5
    },
    {
        question: "Which is the largest mammal in the world?",
        options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale",
        level: 1
    },
    {
        question: "Which is the national animal of India?",
        options: ["Tiger", "Lion", "Elephant", "Peacock"],
        answer: "Tiger",
        level: 2
    },
    {
        question: "Which is the largest ocean in the world?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean",
        level: 3
    },
    {
        question: "Which is the smallest planet in the solar system?",
        options: ["Mercury", "Mars", "Venus", "Earth"],
        answer: "Mercury",
        level: 4
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"],
        answer: "Alexander Fleming",
        level: 5
    },
    {
        question: "Which is the national flower of India?",
        options: ["Lotus", "Rose", "Sunflower", "Jasmine"],
        answer: "Lotus",
        level: 1
    },
    {
        question: "Which is the largest island in the world?",
        options: ["Greenland", "Australia", "Borneo", "Madagascar"],
        answer: "Greenland",
        level: 2
    },
    {
        question: "Which is the largest bone in the human body?",
        options: ["Femur", "Tibia", "Fibula", "Humerus"],
        answer: "Femur",
        level: 3
    },
    {
        question: "Which is the largest bird in the world?",
        options: ["Ostrich", "Emu", "Albatross", "Penguin"],
        answer: "Ostrich",
        level: 4
    },
    {
        question: "Which is the largest lake in the world?",
        options: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Baikal"],
        answer: "Caspian Sea",
        level: 5
    },
    {
        question: "Which is the largest waterfall in the world?",
        options: ["Angel Falls", "Niagara Falls", "Victoria Falls", "Iguazu Falls"],
        answer: "Angel Falls",
        level: 1
    },
    {
        question: "Which is the largest volcano in the world?",
        options: ["Mauna Loa", "Mount Etna", "Mount Vesuvius", "Mount Kilimanjaro"],
        answer: "Mauna Loa",
        level: 2
    },
    {
        question: "Which is the largest diamond in the world?",
        options: ["Cullinan Diamond", "Koh-i-Noor", "Hope Diamond", "Orlov Diamond"],
        answer: "Cullinan Diamond",
        level: 3
    },
    {
        question: "Which is the largest stadium in the world?",
        options: ["Rungrado 1st of May Stadium", "Michigan Stadium", "Beaver Stadium", "Ohio Stadium"],
        answer: "Rungrado 1st of May Stadium",
        level: 4
    },
    {
        question: "Which is the largest museum in the world?",
        options: ["Louvre Museum", "British Museum", "Metropolitan Museum of Art", "Hermitage Museum"],
        answer: "Louvre Museum",
        level: 5
    },
    {
        question: "Which is the largest library in the world?",
        options: ["Library of Congress", "British Library", "New York Public Library", "National Library of China"],
        answer: "Library of Congress",
        level: 1
    },
    {
        question: "Which is the largest airport in the world?",
        options: ["King Fahd International Airport", "Denver International Airport", "Dallas/Fort Worth International Airport", "Beijing Capital International Airport"],
        answer: "King Fahd International Airport",
        level: 2
    },
    {
        question: "Which is the largest city in the world by population?",
        options: ["Tokyo", "Delhi", "Shanghai", "São Paulo"],
        answer: "Tokyo",
        level: 3
    },
    {
        question: "Which is the largest religion in the world?",
        options: ["Christianity", "Islam", "Hinduism", "Buddhism"],
        answer: "Christianity",
        level: 4
    },
    {
        question: "Which is the largest democracy in the world?",
        options: ["India", "USA", "Brazil", "Indonesia"],
        answer: "India",
        level: 5
    }
];

let currentQuestionIndex = 0;
let score = 0;
let prize = 0;
let timer;
let timeLeft = 30;
let fiftyFiftyUsed = false;
let askAudienceUsed = false;
let usedQuestions = [];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const prizeElement = document.getElementById('prize');
const timeLeftElement = document.getElementById('time-left');
const restartButton = document.getElementById('restart-button');

const prizeStructure = [0, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000];

// Function to start the game
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    prize = 0;
    fiftyFiftyUsed = false;
    askAudienceUsed = false;
    usedQuestions = [];
    prizeElement.textContent = prize;
    loadRandomQuestion();
    startTimer();
}

// Function to load a random question
function loadRandomQuestion() {
    if (usedQuestions.length === questions.length) {
        alert(`Congratulations! You have answered all questions. You won ₹${prize}`);
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(randomIndex));

    usedQuestions.push(randomIndex);
    const currentQuestion = questions[randomIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('div');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, currentQuestion.answer));
        optionsElement.appendChild(button);
    });
}

// Function to check the answer
function checkAnswer(selectedOption, correctAnswer) {
    clearInterval(timer);
    if (selectedOption === correctAnswer) {
    
        score++;
        prize = prizeStructure[score];
        prizeElement.textContent = prize;
        optionsElement.querySelectorAll('.option').forEach(option => {
            if (option.textContent === selectedOption) {
                option.classList.add('correct');
            }
        });
        // Play correct sound
        correctSound.play();
    } else {

        optionsElement.querySelectorAll('.option').forEach(option => {
            if (option.textContent === selectedOption) {
                option.classList.add('wrong');
            }
            if (option.textContent === correctAnswer) {
                option.classList.add('correct');
            }
        });
        // Play wrong sound
        wrongSound.play();
        alert(`Game Over! You won ₹${prize}`);
        startGame();
        return;
    }
    optionsElement.querySelectorAll('.option').forEach(option => {
        option.style.pointerEvents = 'none';
    });
    setTimeout(() => {
        currentQuestionIndex++;
        loadRandomQuestion();
        startTimer();
    }, 1000);
}

// Function to start the timer
function startTimer() {
    timeLeft = 30;
    timeLeftElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timeLeftElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up!");
            checkAnswer("", "");
        }
    }, 1000);
}

// Function to use the 50:50 lifeline
function useFiftyFifty() {
    if (fiftyFiftyUsed) return;
    fiftyFiftyUsed = true;
    const currentQuestion = questions[usedQuestions[usedQuestions.length - 1]];
    const incorrectOptions = currentQuestion.options.filter(option => option !== currentQuestion.answer);
    const optionsToRemove = incorrectOptions.sort(() => Math.random() - 0.5).slice(0, 2);
    optionsElement.querySelectorAll('.option').forEach(option => {
        if (optionsToRemove.includes(option.textContent)) {
            option.style.display = 'none';
        }
    });
}

// Function to use the Ask the Audience lifeline
function useAskAudience() {
    if (askAudienceUsed) return;
    askAudienceUsed = true;
    const currentQuestion = questions[usedQuestions[usedQuestions.length - 1]];
    const audienceResponse = currentQuestion.options.map(option => ({
        option,
        percentage: option === currentQuestion.answer ? Math.floor(Math.random() * 50) + 50 : Math.floor(Math.random() * 30)
    }));
    alert(`Audience Response:\n${audienceResponse.map(res => `${res.option}: ${res.percentage}%`).join('\n')}`);
}

// Start the game when the page loads
startGame();