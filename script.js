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
function playGame(player,computer) {
    if (player=="rock" && computer=="paper") {
        return `You lose, ${computer} beats ${player}`;
    } else if (player=="paper" && computer=="scissors") {
        return `You lose, ${computer} beats ${player}`;
    } else if (player=="scissors" && computer=="rock") {
        return `You lose, ${computer} beats ${player}`;
    } else if (player==computer) {
        return "TIE!"
    } else {
        return `You win, ${player} beats ${computer}`;
    }
} 

let player = "rock";
let computer = getComputerChoice()

console.log(playGame(player,computer));
