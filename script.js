// Quiz Functionality
const quizQuestions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Rome"], answer: "Paris" },
    { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { question: "What is the color of the sky?", options: ["Blue", "Green", "Red"], answer: "Blue" },
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const feedback = document.getElementById("feedback");
    if (selectedOption === quizQuestions[currentQuestionIndex].answer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Wrong!";
        feedback.style.color = "red";
    }
}

document.getElementById("next-btn").onclick = () => {
    currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
    loadQuestion();
    document.getElementById("feedback").textContent = "";
};

loadQuestion();

// Image Carousel
let slideIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll(".slides img");
    slides[slideIndex].style.display = "none";
    slideIndex = (slideIndex + direction + slides.length) % slides.length;
    slides[slideIndex].style.display = "block";
}

// Joke API
async function fetchJoke() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const data = await response.json();
    document.getElementById("joke").textContent = data.joke;
}

document.getElementById("new-joke-btn").onclick = fetchJoke;

// Fetch the first joke
fetchJoke();
