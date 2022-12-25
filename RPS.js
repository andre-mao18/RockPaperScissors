function getComputerChoice() {
    choice = Math.floor(Math.random()*3) + 1;
    if (choice === 1)
    {
        return "rock";
    }
    else if (choice === 2)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

let playerWins = 0;
let computerWins = 0;

function playGame(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    if (player === "rock" && computerSelection == "scissors" || 
    player === "scissors" && computerSelection == "paper" || 
    player === "paper" && computerSelection == "rock")
    {
        playerWins++;
        return "You win! " + player + " beats " + computerSelection + "!";
    }
    else if (computerSelection === "rock" && player == "scissors" || 
    computerSelection === "scissors" && player == "paper" || 
    computerSelection === "paper" && player == "rock")
    {
        computerWins++;
        return "You lose! " + computerSelection + " beats " + player + "!";
    }
    else
    {
        return "It's a tie.";
    }
}

const container = document.querySelector('body');
results = document.createElement('div');
content = document.createElement('p');
results.appendChild(content);
container.appendChild(results);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = getComputerChoice();
        alert(playGame(playerSelection, computerSelection));
        content.textContent = "Your wins: " + playerWins + ", Computer Wins: " + computerWins;
        console.log(playerWins);
    });
});