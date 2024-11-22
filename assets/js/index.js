console.log("index.js loaded");
let gameArea = document.getElementById("gamearea");

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

    setNextQuestion();

}

function setNextQuestion() {
  console.log("Next question");
}

function selectAnswer() {
  console.log("Answer selected");
}
