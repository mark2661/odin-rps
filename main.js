function computerPlay(){
    // return either rock, paper or scissors at random
    let idx = Math.floor(Math.random()*3);
    const options = ["Rock", "Paper", "Scissors"];
    return options[idx];
}

function playRound (playerSelection, computerSelection){
    // makes the users code case-insenstive by converting it to the form: capital latter + remiander of work in lower case e.g. Rock or Paper
    playerSelection = playerSelection.toUpperCase()[0] + playerSelection.toLowerCase().slice(1);

    // logic to decide if the play won, lost or drew the round
    switch (playerSelection){
        // test for a draw
        case computerSelection:
            return getDrawMessage(playerSelection, computerSelection);
            break;
        // test for win or loss depending on the player and computer choice
        case "Rock":
            return (computerSelection === "Paper") ? getLosingMessage(playerSelection, computerSelection) : getWinningMessage(playerSelection, computerSelection);
            break;
        case "Paper":
            return (computerSelection === "Scissors") ? getLosingMessage(playerSelection, computerSelection) : getWinningMessage(playerSelection, computerSelection);
            break;
        case "Scissors":
            return (computerSelection === "Rock") ? getLosingMessage(playerSelection, computerSelection) : getWinningMessage(playerSelection, computerSelection);
            break;
        default:
            return "Invalid Selection";
    }
}

function getWinningMessage(playerSelection, computerSelection){
    return `Congratulations! ${playerSelection} beats ${computerSelection}`;
}

function getLosingMessage(playerSelection, computerSelection){
    return `"Bad Luck! ${computerSelection} beats ${playerSelection}`;
}

function getDrawMessage(playerSelection, computerSelection){
    return `It's a Dead Heat! ${playerSelection} draws with ${computerSelection}`;
}

function game(){
    // define initial player and computer scores as zero.
    let playerScore = 0;
    let computerscore = 0;

    // play a round of rock paper scissors 5 times and increment scores based on the result of the game
    for (let i=0; i<5; i++){
        result = playRound(prompt("Choose Rock, Paper, or Scissors!"), computerPlay())
        console.log(result);
        // if player wins increment player score by one
        if (result.startsWith("Congratulations!")){
            playerScore += 1;
        }else if (result.startsWith("Bad Luck!")){ // if player loses increment player score by one
            computerscore += 1;
        }
    }
    // return a message to inform of the final result after five rounds of RPS
    return (playerScore === computerscore) ? "Draw!": (playerScore > computerscore) ? "You Win!": "You Lose!";
}

console.log(game());