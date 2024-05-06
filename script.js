function getComputerChoice()  {

    let randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {

    let humanChoice;

    while (true) {

        humanChoice = prompt("Select 'rock', 'paper', or 'scissors'").toLowerCase();

        if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
            break;
        }
        
        else {
            alert ("Choice is invalid, select 'rock', 'paper', or 'scissors'")
        }
 
    }

    return humanChoice;
    
}