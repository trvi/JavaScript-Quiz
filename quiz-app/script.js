// Quiz data
const quizData = [
    {
        question: "What is the correct syntax to print a message in JavaScript?",
        options: [
            "echo('Hello World')",
            "print('Hello World')",
            "console.log('Hello World')",
            "console.print('Hello World')"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Which company developed JavaScript?",
        options: [
            "Netscape",
            "Mozilla",
            "Google",
            "Microsoft"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "What is the result of 2 + '2' in JavaScript?",
        options: [
            "22",
            "4",
            "NaN",
            "Error"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [
            "function myFunction()",
            "create function myFunction()",
            "function:myFunction()",
            "def myFunction()"
        ],
        correctAnswerIndex: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const retryButton = document.getElementById('retry');

// Load the current question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    answersElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => checkAnswer(index));
        answersElement.appendChild(li);
    });
}

// Check the user's answer
function checkAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestionIndex].correctAnswerIndex;
    if (selectedIndex === correctIndex) {
        score++;
    }

    // Disable answers after selecting an option
    const allOptions = answersElement.querySelectorAll('li');
    allOptions.forEach(option => option.style.pointerEvents = 'none');

    // Move to next question
    nextButton.style.display = 'block';
}

// Show the result and score
function showResult() {
    resultElement.style.display = 'block';
    scoreElement.textContent = `Your Score: ${score} / ${quizData.length}`;
    nextButton.style.display = 'none';
}

// Handle next question button click
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        nextButton.style.display = 'none';
    } else {
        showResult();
    }
});

// Handle retry button click
retryButton.addEventListener('click', () => {
    score = 0;
    currentQuestionIndex = 0;
    resultElement.style.display = 'none';
    nextButton.style.display = 'none';
    loadQuestion();
});

// Initial load
loadQuestion();

