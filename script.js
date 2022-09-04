let outcome

//gets the result based on the button clicked, and then calls game()
const rock = document.querySelector('#Rock');
rock.addEventListener('click', () => {
    game(playRound("Rock", getComputerChoice()));
});

const paper = document.querySelector('#Paper');
paper.addEventListener('click', () => {
    game(playRound("Paper", getComputerChoice()));
});

const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click', () => {
    game(playRound("Scissors", getComputerChoice()));
});

let computerWins = 0;
let playerWins = 0;

function game(result) {
    const results = document.querySelector('#results');
    
    if (result == 1) {
        playerWins++;
        document.getElementById('winner').innerText = "Player Won!";
    }
    else if (result == 2) {
        computerWins++;
        document.getElementById('winner').innerText = "Computer Won!";
    }
    else if (result ==0) {
        document.getElementById('winner').innerText = "It's a Tie!";
    }
    document.getElementById('score').innerText = "The Score is " + playerWins + ":" + computerWins
}

function playRound(playerSelection, computerSelection) {
    let result;
    //Defining the results or the game
    if (playerSelection == "Rock" && computerSelection == "Rock")
        result = 0;

    else if (playerSelection == "Scissors" && computerSelection == "Scissors")
        result = 0;

    else if (playerSelection == "Paper" && computerSelection == "Paper")
        result = 0;

    else if (playerSelection == "Rock" && computerSelection == "Scissors")
        result = 1;

    else if (playerSelection == "Scissors" && computerSelection == "Paper")
        result = 1;

    else if (playerSelection == "Paper" && computerSelection == "Rock")
        result = 1;

    else if (playerSelection == "Rock" && computerSelection == "Paper")
        result = 2;

    else if (playerSelection == "Scissors" && computerSelection == "Rock")
        result = 2;

    else if (playerSelection == "Paper" && computerSelection == "Scissors")
        result = 2;

    //returning the result
    return result;
}


function getComputerChoice() {
    //Declaration
    let randomNum = 1;
    let computerChoice;
    //Assign a number between 0-2
    randomNum = Math.floor(Math.random() * 3);
    //Assign 'choice' to the corresponding number
    if (randomNum == 0) {
        computerChoice = "Rock";
    }
    else if (randomNum == 1) {
        computerChoice = "Paper";
    }
    else if (randomNum == 2) {
        computerChoice = "Scissors";
    }
    //return the value
    console.log("The Computer picked " + computerChoice);
    return computerChoice;
}

function playerSelection() {
    let playerChoice;
    playerChoice = prompt("Pick Rock, Paper or Scissors?");
    //Making sure the input is uniform
    playerChoice = capitalizeFirstLetter(playerChoice.toLowerCase());
    //return the value
    console.log("You picked " + playerChoice)
    return playerChoice;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


