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
let questionSet = gameType;
let questionsForQuiz = [];
let incorrectansForQuiz = [];
let correctansForQuiz = [];


//Plan
//1. Create a function to choose genre
//1. Create a function that will run/start the game
//2. Create a function that will display the questions for each genre
//3. Create a function that will check the answers
//4. Create a function that will increment the score

//5. **Create a function that will increment the incorrect score
//6. **Create a function that will increment the correct score




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
 * Choose genre function
 */
function chooseGenre() {
    //Check what genre user choses
    let genre = prompt("Please choose a genre: Action/Adventure, Horror, Animation, Comedy, Classic, Romance");
    if (genre === "Action/Adventure") {
        return "actadvgame";
    } else if (genre === "Horror") {
        return "horgame";
    } else if (genre === "Animation") {
        return "anigame";
    } else if (genre === "Comedy") {
        return "comgame";
    } else if (genre === "Classic") {
        return "clagame";
    } else if (genre === "Romance") {
        return "romgame";
    } else {
        alert("Please choose a valid genre");
        return chooseGenre();
    }




        //checks for addition game type
        if (gameType === 'addition') {
            displayAdditionQuestion(num1, num2);
        } else if (gameType === 'multiply') {
            displayMultiplyQuestion(num1, num2);
        } else if (gameType === 'subtract') {
            displaySubtractQuestion(num1, num2);
        } else if (gameType === 'division') {
            displayDivideQuestion(num3, num1);
        } else {
            alert(`Unknown game type: ${gameType}`);
            throw `Unknown game type: ${gameType}. Aborting!`;
        }
}


/**
 * The main game loop
 */
function runGame(gameType) {
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


