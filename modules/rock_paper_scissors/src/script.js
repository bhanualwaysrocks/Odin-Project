function getComputerChoice(){
    let val = Math.floor((Math.random()*3));
    return val==0 ? "rock" : (val==1 ? "paper" : "scissors");
}

function printWinLose(playerSelection, computerSelection, win){
    if(win=="win"){
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else{
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
        return "tie";
    }

    switch(playerSelection){
        case "rock":
            if(computerSelection=='scissors'){
                console.log(printWinLose(playerSelection,computerSelection,"win"));
                return "player";
            }
            else{
                console.log(printWinLose(playerSelection,computerSelection,"lose"));
                return "comp";
            }
        case "scissors":
            if(computerSelection=='paper'){
                console.log(printWinLose(playerSelection,computerSelection,"win"));
                return "player";
            }
            else{
                console.log(printWinLose(playerSelection,computerSelection,"lose"));
                return "comp";
            }
        case "paper":
            if(computerSelection=='rock'){
                console.log(printWinLose(playerSelection,computerSelection,"win"));
                return "player";
            }
            else{
                console.log(printWinLose(playerSelection,computerSelection,"lose"));
                return "comp";
            }
    }
}

function game(){
    let playerSelection = prompt("Enter your input: ");
    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    let player = 0;
    let comp = 0;
    for(let i = 0; i<5; i++){
        let playerSelection = prompt("Enter your input: ");
        let computerSelection = getComputerChoice();
        playerSelection = playerSelection.toLowerCase();
        let res = playRound(playerSelection, computerSelection);
        if(res=='tie'){
            i--;
            continue;
        }
        if(res=="player") player++;
        else if(res=="comp") comp++;
    }
    console.log(player);
    console.log(comp);
    if(player==comp){
        console.log("Tie!");
    }
    else if(player>comp){
        console.log("You Win!");
    }
    else{
        console.log("You Lose!");
    }
}

game();