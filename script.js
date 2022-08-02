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


let scoreUser = 0;
let scorePc = 0;

function playRound(player,computer=getComputerChoice()) {
   // player = prompt("Rock, paper or scissors?"); //input
    const choiceResult = document.querySelector(".choiceResult")
    const scoreResult = document.querySelector(".scoreResult");
    player = player.toLowerCase(); //the input is not case sensitive
    if (player=="rock" && computer=="paper") {
        choiceResult.textContent = `You choose ${player}, computer choose ${computer}`;
        scorePc++
        scoreResult.textContent = `Your score is ${scoreUser}, the score of the pc is ${scorePc}`;
    } else if (player=="paper" && computer=="scissors") {
        choiceResult.textContent = `You choose ${player}, computer choose ${computer}`;
        scorePc++
        scoreResult.textContent = `Your score is ${scoreUser}, the score of the pc is ${scorePc}`;
    } else if (player=="scissors" && computer=="rock") {
        choiceResult.textContent = `You choose ${player}, computer choose ${computer}`;
        scorePc++
        scoreResult.textContent = `Your score is ${scoreUser}, the score of the pc is ${scorePc}`;

    } else if (player==computer) {
        choiceResult.textContent = `You choose ${player}, computer choose ${computer}`;
        scoreResult.textContent = ( "TIE!");
    } else {
        choiceResult.textContent = `You choose ${player}, computer choose ${computer}`;
        scoreUser++
        scoreResult.textContent = `Your score is ${scoreUser}, the score of the pc is ${scorePc}`;
    }
} 

//this function has to run the game 5 times
/*function game() {
    for (let i=0;i<5;i++) {
        playRound()
    }
}
game() //Execute the game*/



let whoWin = function() {
    if (scorePc>scoreUser) {
        console.log("PC WINS")
    } else if (scoreUser>scorePc) {
        console.log("YOU WIN!")
    } else {
        console.log("No one wins TIE!")
    }
        
};

//whoWin() //Execute who wins

//EVENT LISTENER
/*const button = document.querySelector("button");

button1.addEventListener("click", () => {
    playRound("rock")
})*/

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

