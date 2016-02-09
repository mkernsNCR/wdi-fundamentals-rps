////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerMove;

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = randomPlay();
    if (move == "rock" || move == "Rock"){
      playerMove = "rock";
      console.log("rock");
      return "rock";
    }

    else if (move == "paper" || move == "Paper"){
      playerMove = "paper";
      console.log("paper");
      return "paper";
    }

    else if (move == "scissors" || move == "Scissors"){
      playerMove = "scissors";
      console.log("scissors");
      return "scissors";
    }

    else {
      getInput();
    }

    return move;
}

var computerMove;

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

    move= randomPlay();
    if (move == "rock"){
      computerMove = "rock";
      console.log("rock");
      return "rock";
    }

    else if (move == "paper"){
      computerMove = "paper";
      console.log("paper");
      return "paper";
    }

    else if (move == "scissors"){
      computerMove = "scissors";
      console.log("scissors");
      return "scissors"
    }

    else {
      randomPlay();
    }

    return move;

}

function getWinner(getPlayerMove,getComputerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (getPlayerMove == "rock" && getComputerMove == "scissors") {
      winner = "player";

    } else if (getPlayerMove == "rock" && getComputerMove == "paper") {
      winner = "computer";

    }
    else if (getPlayerMove == "rock" && getComputerMove == "rock") {
      winner = "tie";

    }
    else if (getPlayerMove == "paper" && getComputerMove == "rock") {
      winner = "player";

    }
    else if (getPlayerMove == "paper" && getComputerMove == "scissors") {
      winner = "computer";

    }
    else if (getPlayerMove == "paper" && getComputerMove == "paper") {
      winner = "tie";

    }
    else if (getPlayerMove == "scissors" && getComputerMove == "paper") {
      winner = "player";

    }
    else if (getPlayerMove == "scissors" && getComputerMove == "rock") {
      winner = "computer";

    }
    else if (getPlayerMove == "scissors" && getComputerMove == "scissors") {
      winner = "tie";

    }
    else {
      getInput();
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    if (playerWins()) {
      return "playerWins";
    }
    if (computerWins()) {
      return "computerWins";
    }
    return null;
    return [playerWins, computerWins];
}
