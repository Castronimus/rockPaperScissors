//Following what the assignment says

//return rock, paper or scissors randomly
/*Use math.random inside a variable with the function floor to generate a random number between 0 and 2
if the number is 0 return rock, if it is 1 return paper and if it is 2 return scissors */
function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3); //return 0,1 or 2
    if (computer==0) {
        return "rock";
    } else if (computer==1) {
        return "paper";
    } else {
        return "scissors"
    }
}

//Write a function that only plays one round of rock, paper and scissors
/*Make a function with two parameters, the player choice and the computer choice
if player puts rock and computer choose paper put "You lose, paper beats rock!"
that's the logic, you have to make too that the parameter player can receive input without
case sensitive*/ 

function check1() {
    if (scoreUser==5 || scorePc==5) {
        const choiceResult = document.querySelector(".choiceResult")
        const scoreResult = document.querySelector(".scoreResult")
        const question = document.querySelector(".question");
        const button = document.querySelectorAll("button");
        choiceResult.textContent = "";
        scoreResult.textContent = "";
        question.textContent = "";
        button.textContent = "";
    }
}

let check = function() {
    console.log("CHEQUEADO UWU shy shy shy")
    console.log(`PC SCORE: ${scorePc}`)
    console.log(`USER SCORE: ${scoreUser}`)
    if (scorePc==5 || scoreUser==5) {
        const choiceResult = document.querySelector(".choiceResult")
        const scoreResult = document.querySelector(".scoreResult")
        const question = document.querySelector(".question");
        const buttons = document.querySelectorAll("button");
        const yesButton = document.createElement("button");
        const buttonContainer = document.querySelector("body");
        const oldButtons = document.querySelector(".button-container");
        buttonContainer.appendChild(yesButton);
        buttons.forEach((button) => {
            button.parentElement.remove("button");
        });
        if (scorePc>scoreUser) {
            choiceResult.textContent = `PC WINS!`;
            scoreResult.textContent = "F";
            question.textContent = "Wanna play again?";
            yesButton.textContent = "YES"
            yesButton.addEventListener("click", () => {
                scorePc = 0;
                scoreUser = 0;
                buttonContainer.removeChild(yesButton);
                choiceResult.textContent = ``;
                scoreResult.textContent = "";
                question.textContent = "Choose rock, paper or scissors";
                buttonContainer.appendChild(oldButtons);
            })


        } else {
            choiceResult.textContent = `YOU WIN!`;
            scoreResult.textContent = "GG"
            question.textContent = "Wanna play again?"
            yesButton.textContent = "YES"
            yesButton.addEventListener("click", () => {
                scorePc = 0;
                scoreUser = 0;
                yesButton.textContent = "OWO";
                buttonContainer.removeChild(yesButton);
                choiceResult.textContent = ``;
                scoreResult.textContent = "";
                question.textContent = "Choose rock, paper or scissors";
                buttonContainer.appendChild(oldButtons);
            })

        }
    }
};

let scorePc = 0;
let scoreUser = 0;

let playRound = function(player,computer=getComputerChoice()) {
   // player = prompt("Rock, paper or scissors?"); //input
    const choiceResult = document.querySelector(".choiceResult")
    const scoreResult = document.querySelector(".scoreResult");
    player = player.toLowerCase(); //the input is not case sensitive
    if (player=="rock" && computer=="paper") {
        choiceResult.textContent = `You choose ${player}, computer choose ${computer}`;
        scorePc++
        scoreResult.textContent = `Your score is ${scoreUser}, the score of the pc is ${scorePc}`;
        check();
        

    } else if (player=="paper" && computer=="scissors") {
        choiceResult.textContent = `You choose ${player}, computer choose ${computer}`;
        scorePc++
        scoreResult.textContent = `Your score is ${scoreUser}, the score of the pc is ${scorePc}`;
        check();
        

    } else if (player=="scissors" && computer=="rock") {
        choiceResult.textContent = `You choose ${player}, computer choose ${computer}`;
        scorePc++
        scoreResult.textContent = `Your score is ${scoreUser}, the score of the pc is ${scorePc}`;
        check();
        

    } else if (player==computer) {
        choiceResult.textContent = `You choose ${player}, computer choose ${computer}`;
        scoreResult.textContent = ( "TIE!");
        

    } else {
        choiceResult.textContent = `You choose ${player}, computer choose ${computer}`;
        scoreUser++
        scoreResult.textContent = `Your score is ${scoreUser}, the score of the pc is ${scorePc}`;
        check();
        

    }
} 



const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent=="ROCK") {
            playRound("rock");
        } else if (button.textContent=="PAPER") {
            playRound("paper");
        } else {
            playRound("scissors")
        }        
    });
});








