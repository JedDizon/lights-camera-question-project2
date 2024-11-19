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
            } 
        })
    }
})

function runGame() {

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

