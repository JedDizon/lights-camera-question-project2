/**
 * glbal variables
 * dom variables
 * score variables
 * current question
 * questionset variable
 * 
 * function to run/start game (set game up)
 */

//Global Variables
let currentQuestion = 0;
let score = 0;
let questionSet = 0;
let questionsForQuiz = [];
let incorrectansForQuiz = [];
let correctansForQuiz = [];


// Wait for DOM to finish loading before running the game
// Get the button elements and add event listeners

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        //as the button is clicked, the code inside will run
        button.addEventListener("click", function(){
            if (this.getAttribute("type") === "submit") {
                alert("You clicked an answer!");
                console.log("You clicked a button");
            } else {
                
            }
        })
    }

    /**Check what genre to load relevant qs */
    let gameElement = document.getElementById("question");
    let gameType = gameElement.getAttribute("data-type"); 
    document.onload = runGame(gameType);
})

/**
 * The main game loop, called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    questionSet = gameType;
    if (gameType === "actadvgame") {
        displayActAdvQuestions(
            //input question (set qs, score to zero)
            console.log("Test if working"),
            console.log(questionsForQuiz),
            console.log(incorrectansForQuiz),
            console.log(correctansForQuiz),
            )
    }  
    else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType} aborting`;
    }
}

//display question function 
//do i have any qs to display (check value of current question)/ if current q > questionset.length, call game over.
//populate question set to dom


//event listeners on buttons (click) --> calls check answer function


function checkAnswer(e) {
    //if e.innerhtml === correct answer, increment score
    //if not, display incorrect
    //then calls display question function.
}


//can put into checkAnswer() function
function checkCorrectAnswer() {
}
function incrementCorrectScore() {
}
function incrementIncorrectScore() {
}

//Display questions functions
function displayActAdvQuestions() {

}

function displayHorQuestions() {

}

function displayAniQuestions() {

}

function displayComQuestions() {

}

function displayClaQuestions() {

}

function displayRomQuestions() {

}


