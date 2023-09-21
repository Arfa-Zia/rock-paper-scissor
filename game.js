function getComputerChoice(){
    let randomChoice;
    randomChoice = Math.floor(Math.random()*3+1);
    let computerChoice;

    if( randomChoice === 1){
        computerChoice = "rock";
    }

    if( randomChoice === 2){
        computerChoice = "scissor";
    }

    if( randomChoice === 3){
        computerChoice = "paper";
    }

    return computerChoice;
}

function playRound ( playerSelection , computerSelection ){

    if (computerSelection === playerSelection){

        return "It's a draw";

    }
    if (computerSelection === "rock" && playerSelection === "paper"){
      
        return "You win! Paper beats Rock";

    }

    if (computerSelection === "rock" && playerSelection === "scissor"){
      
        return "You lose! Rock beats Scissor";
        
    }

    if (computerSelection === "scissor" && playerSelection === "rock"){
      
        return "You win! Rock beats Scissor";
        
    }

    if (computerSelection === "scissor" && playerSelection === "paper"){
      
        return "You lose! Scissor beats Paper";
        
    }

    if (computerSelection === "paper" && playerSelection === "scissor"){
      
        return "You Win! Scissor beats Paper";
        
    }
    if (computerSelection === "paper" && playerSelection === "rock"){
      
        return "You lose! Paper beats Rock";
        
    }
}


function game(){

    let computerScore = 0;
    let playerScore = 0;
    let result = "";
        

    for(let i =1 ; i <=5 ; i++) {

        let playerSelection = prompt("Enter your choice form these rock / paper / scissor :").toLowerCase();

        let computerSelection =  getComputerChoice();

        let round= playRound(playerSelection , computerSelection);

        if( round == "You win! Paper beats Rock" ||    round == "You win! Scissor beats Paper" || round == "You win! Rock beats Scissor" ){
         playerScore += 1
        }
        else if( round == "It's a draw"){
        playerScore +=0;
        computerScore +=0;
        }
    
        else{
        computerScore += 1;
        }  

        console.log(round);
    }

      if(playerScore > computerScore){
        result = "You Win by " + playerScore + " / " + computerScore;
        console.log(result);
      }
      
      if(playerScore < computerScore){
        result = "You Lose by " + playerScore + " / " + computerScore;
        console.log(result);
      }

}

    game();
    