function computerPlay(){
    let idx = Math.floor(Math.random()*3);
    const options = ["Rock", "Paper", "Scissors"];
    return options[idx];
}

function playRound (playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase()[0] + playerSelection.toLowerCase().slice(1);
    const winningMessage = "Congratulations!";
    const loosingMessage = "Bad Luck!";
    const drawMessage = "It's a Dead Heat!";

    switch (playerSelection){
        case computerSelection:
            return `${drawMessage} ${playerSelection} draws with ${computerSelection}`;
            break;
        case "Rock":
            return (computerSelection === "Paper") ? `${loosingMessage} ${computerSelection} beats ${playerSelection}` : `${winningMessage} ${playerSelection} beats ${computerSelection}`;
            break;
        case "Paper":
            return (computerSelection === "Scissors") ? `${loosingMessage} ${computerSelection} beats ${playerSelection}` : `${winningMessage} ${playerSelection} beats ${computerSelection}`;
            break;
        case "Scissors":
            return (computerSelection === "Rock") ? `${loosingMessage} ${computerSelection} beats ${playerSelection}` : `${winningMessage} ${playerSelection} beats ${computerSelection}`;
            break;
        default:
            return "Invalid Selection";
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));