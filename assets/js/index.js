/* jshint esversion: 11 */
/**
 * wrapped whole script in domcontentloaded to ensure event listeners are working
 */
document.addEventListener("DOMContentLoaded", () => {

  /**
   * global variables
   */
  let gameArea = document.getElementById("gamearea");
  let shuffledQuestions, currentQuestionIndex;
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");

  const controlsArea = document.getElementById("controls");
  const answerArea = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");

  /**
   * Attach event listeners to buttons for quiz themes to update color palettes (chat gpt)
   */
  const buttons = document.querySelectorAll("[data-type]"); // Select buttons with `data-type`
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const gameType = button.getAttribute("data-type"); // Get `data-type` of the clicked button
      colorPaletteUpdate(gameType); // Update color palette
    });
  });

  /**
   * Choose different genre quiz
   */
  document.getElementById("action-btn").addEventListener("click", () => {
    loadQuestions("actadvQs");
    colorPaletteUpdate();
  });
  document.getElementById("animation-btn").addEventListener("click", () => {
    loadQuestions("aniQs");
    colorPaletteUpdate();
  });
  document.getElementById("romance-btn").addEventListener("click", () => {
    loadQuestions("romQs");
    colorPaletteUpdate();
  });
  document.getElementById("classics-btn").addEventListener("click", () => {
    loadQuestions("claQs");
    colorPaletteUpdate();
  });
  document.getElementById("horror-btn").addEventListener("click", () => {
    loadQuestions("horQs");
    colorPaletteUpdate();
  });
  document.getElementById("comedy-btn").addEventListener("click", () => {
    loadQuestions("comQs");
    colorPaletteUpdate();
  });


  /**
   * Load Questions
   */
  function loadQuestions(category) {


    //Remove intro, rules, genre selector sections to prep page for game
    const introSectionRemoval = document.getElementById("intro");
    const rulesSectionRemoval = document.getElementById("rules");
    const genreSelectorRemoval = document.getElementById("genre-selector");

    introSectionRemoval.remove();
    rulesSectionRemoval.remove();
    genreSelectorRemoval.remove();

    //show game area
    gameArea.classList.remove("hidden");

    //shuffle and load questions
    //questionSets defined in questionArrays.js
    shuffledQuestions = questionSets[category].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;

    // Start the quiz
    setNextQuestion();
  }


  //Track if answer is selected
  let isAnswerSelected = false;
  // Variable to track correct answers count
  let correctAnswersCount = 0;

  /**
   * Next button function to ensure users choose an answer before clicking next
   */
  nextButton.addEventListener("click", () => {

    if (!isAnswerSelected) {
      alert("Please select an answer first!");
      return;
    }
    currentQuestionIndex++;
    setNextQuestion();
  });

  /** 
   * Checks if question limit is reached before calling the showquestion function
  */
  function setNextQuestion() {
    //end game after 10 qs
    if (currentQuestionIndex >= 10 || currentQuestionIndex >= shuffledQuestions.length) {
      endGame();
      return;
    }

    // Reset the flag for following questions
    isAnswerSelected = false;
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

  }

  /** 
   * Loads up question and creates buttons for answers
  */
  function showQuestion(question) {

    // Shuffle the answers before displaying them. Used in shuffle (array function)
    shuffle(question.answers);

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

  /**
   * ensure the order of the answers changes each time a question is shown (CHATGPT)
   */
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  /**
   * Ensures previous answer buttons do not show up for following questions
   */
  function resetState() {
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }

  //End game
  /**
   * Function to end the game, calculate score, message user of result, and displays back to home link
   */
  function endGame() {
    let totalScore = document.getElementById('score').innerText;

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

  /**
   * Select answer - check if correct or wrong via true/false
   */
  function selectAnswer(e) {

    // Mark that an answer has been selected
    isAnswerSelected = true;

    // Disable all answer buttons to prevent changing answers
    const buttons = answerButtonsElement.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);

    //check if answer is correct
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    if (correct) {
      incrementScore();
      correctAnswersCount++;
      //Add right answer css class to answer when selected
      selectedButton.classList.add("right-ans");
    } else {
      //Add incrorrect answer css class to answer when selected
      selectedButton.classList.add("wrong-ans");
    }

  }

  /**
   * function to increment score
   */
  function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = oldScore + 100;
  }

  /**
   * Updates page color palette
   */
  function colorPaletteUpdate(gameType) {
    // Get the root element
    const root = document.querySelector(":root");

    // Get selected theme's color palette from genreThemes
    const themeColors = genreThemes[gameType];

    //Change the style value for the root 
    if (themeColors) {
      // Update only the primary color CSS variable
      root.style.setProperty("--primary-color", themeColors["--primary-color"]);
      root.style.setProperty("--secondary-color", themeColors["--secondary-color"]);
      root.style.setProperty("--background-color", themeColors["--background-color"]);
      root.style.setProperty("--text-color", themeColors["--text-color"]);
    } 
  }

  /**
   * Constant for genre color palettes
   */
  const genreThemes = {
    actadvgame: {
      "--primary-color": "#124076", // blue
      "--secondary-color": "#7F9F80", // light green
      "--background-color": "#124076", // blue
      "--text-color": "#F9E897" // light yellow
    },
    animgame: {
      "--primary-color": "#27005D", // Dark violet
      "--secondary-color": "#9400FF", // purple
      "--background-color": "#27005D", // dark violet
      "--text-color": "#E4F1FF" // lighter blue
    },
    romgame: {
      "--primary-color": "#E72929", // red
      "--secondary-color": "#FF5BAE", // Hot Pink
      "--background-color": "#E72929", // red
      "--text-color": "#FFFDD7" // light yellow
    },
    clagame: {
      "--primary-color": "#EDDFE0", // light pink
      "--secondary-color": "#705C53", // brown
      "--background-color": "#B7B7B7", // gray
      "--text-color": "#705C53" // brown
    },
    horgame: {
      "--primary-color": "#0F0F0F", // black
      "--secondary-color": "#232D3F", // navy
      "--background-color": "#005B41", // Dark green
      "--text-color": "#EEEEEE" // white
    },
    comgame: {
      "--primary-color": "#FFF100", // Bright yellow
      "--secondary-color": "#006BFF", // blue
      "--background-color": "#08C2FF", // light blue
      "--text-color": "#00092C" // black
    }
  };

});