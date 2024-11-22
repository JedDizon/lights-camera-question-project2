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

    /** 
     * Choose genre questions
     * */
    if (gameType === "actadvgame") {
        
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


