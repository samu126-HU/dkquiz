import questions from "./questions.js";

function shuffleQuestions(array) {
    array.sort(() => Math.random() - 0.5)
}

shuffleQuestions(questions)


let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    const shuffledOptions = [...currentQuestion.options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-200 w-full bg-gray-700 hover:bg-gray-600";
        button.onclick = () => selectAnswer(button, option, currentQuestion.answer);
        optionsElement.appendChild(button);
    });

    nextButton.classList.add("hidden");
}

function selectAnswer(button, selected, correct) {
    const buttons = optionsElement.children;
    for (let btn of buttons) {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.classList.add("bg-green-500");
        } else if (btn.textContent === selected) {
            btn.classList.add("bg-red-500");
        }
    }
    if (selected === correct) score++;
    nextButton.classList.remove("hidden");
}

nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
};

function showResults() {
    questionElement.textContent = "Kvíz vége!";
    optionsElement.innerHTML = `<p class="text-xl">Pontszámod: ${score} / ${questions.length}</p>`;
    nextButton.classList.add("hidden");
}

const totalQuestions = questions.length;
let currentQuestion = 0;

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    progressBar.style.width = progress + "%";
}

document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
        updateProgressBar();
    }
});

updateProgressBar();

loadQuestion();
