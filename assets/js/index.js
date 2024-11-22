let gameArea = document.getElementById("gamearea");
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
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
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}


function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  //nextButton.classList.add("hidden");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}


//Select answer - check if correct or wrong via true/false
function selectAnswer(e) {
  console.log("Answer selected");
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    console.log("Correct answer");
    alert("Correct answer");
  } else {
    console.log("Wrong answer");
    alert("Wrong answer");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
