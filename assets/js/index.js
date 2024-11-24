document.addEventListener("DOMContentLoaded", () => {
let gameArea = document.getElementById("gamearea");
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

const controlsArea = document.getElementById("controls");
const answerArea = document.getElementById("answer-buttons");
const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const nextButton = document.getElementById("next-btn");
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
  console.log("Next button selected");
  currentQuestionIndex++;
  setNextQuestion();
});

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

  //end game after 10 qs
  if (currentQuestionIndex >= 10 || currentQuestionIndex >= shuffledQuestions.length) {
    alert("Game complete!");
    endGame();
    return;
  }

  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  
}


function showQuestion(question) {

  // Shuffle the answers before displaying them
  const shuffledAnswers = shuffle(question.answers);

  //Display question text
  questionElement.innerText = question.question;

  //create buttons for each answer
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

  //ensure the order of the answers changes each time a question is shown (CHATGPT)
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

function resetState() {
  //nextButton.classList.add("hidden");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

//End game
function endGame() {
  console.log("Game Over");

  // Clear the game area
  questionElement.innerText = "Quiz Completed!";

  // Hide answer and next button
  nextButton.classList.add("hidden");
  answerArea.classList.add("hidden");

  // Add a paragraph to return to home
  const homeLink = document.createElement("p");
  homeLink.innerHTML = '<a href="index.html" aria-label="Go to Home page and choose from the selection of quizzes" class="btn">Click here to return to Homepage</a>';
  controlsArea.appendChild(homeLink);
}

//Select answer - check if correct or wrong via true/false
function selectAnswer(e) {
  console.log("Answer selected");

  //check if answer is correct
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  if (correct) {
    console.log("Correct answer");
    alert("You got the Correct answer. Well done!");
    incrementScore();
  } else {  
    console.log("Wrong answer");
    alert("Incorrect :( Better luck next time!");
  };
}

//function to increment score
function incrementScore() {
  let oldScore = parseInt(document.getElementById('score').innerText);
  document.getElementById('score').innerText = oldScore + 100;
}

})