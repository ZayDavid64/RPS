let playerText= document.querySelector("#playerText")
        let cpuText= document.querySelector("#cpuText")
        let returnext= document.querySelector("#returnext")
        let playerPoints= document.querySelector("#player");
        let cpuPoints= document.querySelector("#cpu");
        let computerSelection;
        let playerSelection;
        let result;
        const choiceBtn= document.querySelectorAll("button");
        let playerScore= parseInt(0);
        let computerScore= parseInt(0);
        let gameText=document.getElementById("gamer")

        function getComputerChoice(){
            const randomNumber= Math.floor(Math.random()* 3);

                if(randomNumber== 0){
                    computerSelection= "Rock"
                }
                else if(randomNumber== 1){
                    computerSelection= "Paper"
                }
                else if(randomNumber== 2){
                    computerSelection= "Scissors"
                }

            }
            function playRound(playerSelection, computerSelection){
                const win= "You Win!"; 
                const lose="Sorry, You Lost! " + computerSelection + " Beats " + playerSelection; 
                const tie= "Its a tie";
    
                if(playerSelection=="Rock"){
                    if(computerSelection=="Paper"){
                        computerScore++
                        return lose;
                        
                    }
                    else if(computerSelection=="Scissors"){
                        playerScore++
                        return win;
                        
                      
                    }
                    else{
                        return tie;
                    }
                }
                else if(playerSelection=="Paper"){
                    if(computerSelection=="Rock"){
                        playerScore++
                        return win;
                        
                    }
                    else if(computerSelection=="Scissors"){
                        computerScore++
                        return lose;
                       
                    }
                    else{
                        return tie;
                    }
                }
                else if(playerSelection=="Scissors"){
                    if(computerSelection=="Rock"){
                        computerScore++
                        return lose;
                       
                    }
                    else if(computerSelection=="Paper"){
                        playerScore++
                        return win;
                    
                    }
                    else{
                        return tie;
                    }
            }
       }

       function game(){
        for(let i=0; i<5; i++){
            playRound()
            playerText.textContent= `Player: ${playerSelection}`;
            cpuText.textContent= `CPU: ${computerSelection}`;
            resultText.textContent= `Result: ${playRound(playerSelection, computerSelection)}`;
            console.log(playRound(playerSelection, computerSelection));
            if(playerScore>computerScore){
                return "You Win Congrats!"
            }
            else{
                return "Wow You Are Kinda Trash"
            }
        }
    gameText.textContent= `Seems Like ${game()}`
    }

            choiceBtn.forEach(button => button.addEventListener("click", ()=>{
            playerSelection = button.textContent;
            getComputerChoice();
            game()
             }))