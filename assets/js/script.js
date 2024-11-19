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
    if (gameType === "actadvgame") {
        displayActAdvQuestions(
            //input question
            console.log("Test if working"),
            console.log(questionsForQuiz)
            )
    }  
    else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType} aborting`;
    }
}


function checkAnswer() {

}

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


