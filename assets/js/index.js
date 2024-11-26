document.addEventListener("DOMContentLoaded", () => {
let gameArea = document.getElementById("gamearea");
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

const controlsArea = document.getElementById("controls");
const answerArea = document.getElementById("answer-buttons");
//const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");


//Choose different questions
document.getElementById("action-btn").addEventListener("click", () => {
  loadQuestions("actadvQs");
});
document.getElementById("animation-btn").addEventListener("click", () => {
  loadQuestions("aniQs");
});
document.getElementById("romance-btn").addEventListener("click", () => {
  loadQuestions("romQs");
});
document.getElementById("classics-btn").addEventListener("click", () => {
  loadQuestions("claQs");
});
document.getElementById("horror-btn").addEventListener("click", () => {
  loadQuestions("horQs");
});
document.getElementById("comedy-btn").addEventListener("click", () => {
  loadQuestions("comQs");
});


//Load questions
function loadQuestions(category) {

  //Remove intro, rules, genre selector sections
  const introSectionRemoval = document.getElementById("intro");
  const rulesSectionRemoval = document.getElementById("rules");
  const genreSelectorRemoval = document.getElementById("genre-selector");

  introSectionRemoval.remove();
  rulesSectionRemoval.remove();
  genreSelectorRemoval.remove();

  // Show the game area
  gameArea.classList.remove("hidden");

  // Shuffle and load questions
  shuffledQuestions = questionSets[category].sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;

  // Start the quiz
  setNextQuestion();
}


//Track if answer is selected
let isAnswerSelected = false;

// Variable to track correct answers count
let correctAnswersCount = 0; 


nextButton.addEventListener("click", () => {
  
  if (!isAnswerSelected) {
    alert("Please select an answer first!");
    return;
  }
  console.log("Next button selected");
  currentQuestionIndex++;
  setNextQuestion();
});

function setNextQuestion() {
  console.log("Next question");

  //end game after 10 qs
  if (currentQuestionIndex >= 10 || currentQuestionIndex >= shuffledQuestions.length) {
    //alert("Game complete!");
    endGame();
    return;
  }

  // Reset the flag for following questions
  isAnswerSelected = false; 
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

  let totalScore = document.getElementById('score').innerText;
console.log("Total Score: " + totalScore);

  // Clear the game area
  //questionElement.innerText = "Quiz Completed!";

  // Calculate score percentage
   let passPercentage = 60; 
   let scorePercentage = (correctAnswersCount / 10) * 100;

  // Show final score and pass/fail result
   let resultMessage = scorePercentage >= passPercentage ? "You must be a real movie buff!" : "You need to watch more movies. Better luck next time!";
   questionElement.innerText = `Quiz Completed! ${resultMessage} You got ${scorePercentage.toFixed(2)}% with a score of ${totalScore}!`;


  // Hide answer and next button
  nextButton.classList.add("hidden");
  nextButton.classList.remove("btn");
  answerArea.classList.add("hidden");

  // Add a paragraph to return to home
  const homeLink = document.createElement("p");
  homeLink.innerHTML = 
  `<a href="index.html" aria-label="Go to Home page and choose from the selection of quizzes" class="btn return-link">Click here to return to Homepage</a> `;
  controlsArea.appendChild(homeLink);
}

//Select answer - check if correct or wrong via true/false
function selectAnswer(e) {
  console.log("Answer selected");

  // Mark that an answer has been selected
  isAnswerSelected = true;

  // Disable all answer buttons to prevent changing answers
    const buttons = answerButtonsElement.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);

  //check if answer is correct
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  if (correct) {
    console.log("Correct answer");
    //alert("You got the Correct answer. Well done!");
    incrementScore();
    correctAnswersCount++;
    console.log(correctAnswersCount);

    //Add right answer css class to answer when selected
    selectedButton.classList.add("right-ans");

  } else {  
    console.log("Wrong answer");
    //alert("Incorrect :(");

    //Add incrorrect answer css class to answer when selected
    selectedButton.classList.add("wrong-ans");
  };

}

//function to increment score
function incrementScore() {
  let oldScore = parseInt(document.getElementById('score').innerText);
  document.getElementById('score').innerText = oldScore + 100;
}

/**
 * Updates page color palette
 */
function colorPaletteUpdate() {
  console.log("test")
}

/**
 * Constant for genre color palettes
 */
const genreThemes = {
  "action-adventure-theme": {
      "--primary-color": "#124076", // blue
      "--secondary-color": "#7F9F80", // light green
      "--background-color": "#F9E897", // light yellow
      "--text-color": "#FFC374" // light orange
  },
  "animation-theme": {
      "--primary-color": "#27005D", // Dark violet
      "--secondary-color": "#9400FF", // purple
      "--background-color": "#AED2FF", // light blue
      "--text-color": "#E4F1FF" // lighter blue
  },
  "romance-theme": {
      "--primary-color": "#E72929", // red
      "--secondary-color": "#FF5BAE", // Hot Pink
      "--background-color": "#FFE4CF", // peach
      "--text-color": "#FFFDD7" // light yellow
  },
  "classics-theme": {
      "--primary-color": "#EDDFE0", // light pink
      "--secondary-color": "#F5F5F7", // light gray
      "--background-color": "#B7B7B7", // gray
      "--text-color": "#705C53" // brown
  },
  "horror-theme": {
      "--primary-color": "#0F0F0F", // black
      "--secondary-color": "#232D3F", // navy
      "--background-color": "#005B41", // Dark green
      "--text-color": "#008170" // lighter green
  },
  "comedy-theme": {
      "--primary-color": "#FFF100", // Bright yellow
      "--secondary-color": "#006BFF", // blue
      "--background-color": "#08C2FF", // light blue
      "--text-color": "#BCF2F6" // lighter blue
  }
};

})