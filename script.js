
function game() {
    let computerWins = 0;
    let playerWins = 0;
    let result = 0;
    for (let i = 0; i < 5; i++) {
        result = playRound(playerSelection(), getComputerChoice())
        if (result == 1) {
            playerWins++;
            console.log("Player Won!")
        }
        else if (result == 2) {
            computerWins++;
            console.log("Computer Won!")
        }
        console.log("The Score is " + playerWins + ":" + computerWins);
    }
    if (playerWins>computerWins)
        console.log("You win!")
    else if (playerWins<computerWins)
        console.log("Computer won!")
    else 
        console.log("It's a Tie!")

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

game();

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


