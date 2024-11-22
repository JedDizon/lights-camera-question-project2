/**
 * global variables
 * dom variables
 * score variables
 * current question
 * questionset variable
 * 
 * function to run/start game (set game up)
 */

// Global variables
let currentQuestion = 0;
let score = 0;
let incorrectScore = 0;
let correctScore = 0;
let questionSet = []; //array of questions from questionArray.js
let startButtons = document.getElementsByClassName("genre-btn");
let gameArea = document.getElementById("gamearea");

//const questionElement = document.getElementById("question");
//const answerButtonsElement = document.getElementsByClassName("choice-answers");

/**
 * For loop to start the game (ChatGPT)
 */
for (let button of startButtons) {
    button.addEventListener("click", function() {
        startGame(button); 
    });
}


//Plan
//1. Create a function to choose genre
//1. Create a function that will run/start the game
//2. Create a function that will display the questions for each genre
//3. Create a function that will check the answers
//4. Create a function that will increment the score

//5. **Create a function that will increment the incorrect score
//6. **Create a function that will increment the correct score

//7. Create a function that will display the final score

// Wait for DOM to finish loading before running the game
// Get the button elements and add event listeners
/**
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    let genreButton = document.getElementById("genre-btn");

    for (let button of buttons) {
        //as the button is clicked, the code inside will run
        button.addEventListener("click", function(){
            if (this.id === genreButton.id) {
                console.log("genre button clicked");
                startGame();
            } else {
                alert("Please choose a valid genre");
            }
        });
    }
})
     */


/**
 * The main game loop
 * Starts game for the selected genre and loads relevant questions
 */
function startGame(button) {
    let gameType = button.getAttribute("data-type");
    console.log("Starting game for: " + gameType);

    //Remove intro, rules, genre selector sections
    const introSectionRemoval = document.getElementById("intro");
    introSectionRemoval.remove();

    const rulesSectionRemoval = document.getElementById("rules");
    rulesSectionRemoval.remove();
    
    const genreSelectorRemoval = document.getElementById("genre-selector");
    genreSelectorRemoval.remove();

    // Show the game area
    gameArea.classList.remove("hidden");

    //update question and game area class with relevant genre
    gameArea.classList.add(gameType);

    //Display questions
    displayQuestions(gameType);

    //start at first question
    currentQuestionIndex = 0;         
}


//display question function 
function displayQuestions(gameType) {

        /** 
     * Choose genre questions
     * */
        if (gameType === "actadvgame") {
            console.log("Action Adventure quiz selected");
            console.log(questionSet);
            //Display the first question
            displayActAdvQuestions();
        }  
        else if (gameType === "animgame") {
            console.log("Animation quiz selected");
            console.log(questionSet);
            //Display the first question
            displayActAdvQuestions();
        } else {
            alert(`Unknown game type: ${gameType}`);
            throw `Unknown game type: ${gameType} aborting`;
        }

    /**
    //Get the questions for the selected genre
    questionSet = getQuestions(gameType);
    console.log(questionSet);
    //Display the first question
    showQuestion();
     */

}
//do i have any qs to display (check value of current question)/ if current q > questionset.length, call game over.
//populate question set to dom


// Get the question element and answers container
let questionElement = document.getElementById("question-area");
let answersElement = document.getElementById("choices-area");

/**
//Display questions functions
function displayActAdvQuestions() {
    console.log("Displaying Action/Adventure questions");
    
    //chatGPT Code
    // Clear any previous answers (if the function is called again)
    answersElement.innerHTML = '';
    // Display the question
    questionElement.textContent = actadvQs[0].question;

}
*/

function displayActAdvQuestions() {
    console.log("Displaying Action/Adventure questions");

    // Clear any previous answers (if the function is called again)
    answersElement.innerHTML = '';

    // Get the current question object from the actadvQs array
    const currentQuestion = actadvQs[currentQuestion];

    // Display the question
    questionElement.textContent = currentQuestion.question;

    // Display the answers as buttons
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');

        // If the answer is correct, mark it in the button's data
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        // Add an event listener to handle answer selection
        button.addEventListener('click', selectAnswer);

        // Append the button to the answers element
        answersElement.appendChild(button);
    });
}

function displayAniQuestions() {
    console.log("Displaying Animation questions");

}



//event listeners on buttons (click) --> calls check answer function


function checkAnswer(e) {
    //if e.innerhtml === correct answer, increment score
    //if not, display incorrect
    //then calls display question function.
}

