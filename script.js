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
function playRound(player,computer=getComputerChoice()) {
    player = prompt("Rock, paper or scissors?");
    player = player.toLowerCase(); 
    if (player=="rock" && computer=="paper") {
        console.log( `You lose, ${computer} beats ${player}`);
    } else if (player=="paper" && computer=="scissors") {
        console.log( `You lose, ${computer} beats ${player}`);
    } else if (player=="scissors" && computer=="rock") {
        console.log( `You lose, ${computer} beats ${player}`);
    } else if (player==computer) {
        console.log( "TIE!")
    } else {
        console.log( `You win, ${player} beats ${computer}`);
    }
} 

/*let player = "ScisSORS";
console.log(playRound(player,computer));*/
//computer = getComputerChoice()

//this function has to run the game 5 times
function game() {
    for (let i=0;i<5;i++) {
        playRound()
    }
}

game()