console.log("index.js loaded");
let gameArea = document.getElementById("gamearea");
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);


function startGame() {
    console.log("Game started");

    //Remove intro, rules, genre selector sections
    const introSectionRemoval = document.getElementById("intro");
    introSectionRemoval.remove();

    const rulesSectionRemoval = document.getElementById("rules");
    rulesSectionRemoval.remove();
    
    const genreSelectorRemoval = document.getElementById("genre-selector");
    genreSelectorRemoval.remove();

    // Show the game area
    gameArea.classList.remove("hidden");

    //Shuffled question
    shuffledQuestions = actadvQs.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;

    //Upload question
    setNextQuestion();

}

function setNextQuestion() {
  console.log("Next question");
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}


function showQuestion(question) {
  questionElement.innerText = question.question;
}

function selectAnswer() {
  console.log("Answer selected");
}
