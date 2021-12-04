
   let playerScore = 0;
   let computerScore = 0;
   const score = [playerScore, computerScore];
   const buttons = document.querySelectorAll('button');
   const button = document.querySelectorAll('#btn')

    buttons.forEach((button) => {
        button.addEventListener('click',() => {
          let playerChoice = button.className;
          let computerChoice = computerPlay();
          playRound(playerChoice,computerChoice,score);
          
          
          document.getElementById("playerScoreCard").innerText = score[0];
          document.getElementById("computerScoreCard").innerText = score[1];
          
          if (score[0] >= 5){
            document.getElementById("gameText").innerText = 'Congratulations: You have successfuly saved the Metaverse!';
            
            document.getElementById("playerScoreCard").innerText = score[0];
            document.getElementById("computerScoreCard").innerText = score[1];
            score[0] = 0;
            score[1] = 0;
            
          } 
          else if(score[1] >= 5)
          {
            document.getElementById("gameText").innerText='Game Over: The Computer has Destroyed the Metaverse!';
            
            document.getElementById("playerScoreCard").innerText = score[0];
            document.getElementById("computerScoreCard").innerText = score[1];
            score[0] = 0;
            score[1] = 0;
          }
              
          
        })
    });

    

  function computerPlay(){
      let computerChoices = ['rock','paper','scissors'];
      let randomChoice = Math.floor(Math.random() * computerChoices.length);
      return computerChoices[randomChoice];
    }
  
      
  function playRound(playerChoice,computerChoice, score){
               
               playerSelection = playerChoice;
               computerSelection = computerChoice;
                
               if(playerSelection === computerSelection){
                document.getElementById("roundText").innerText = 'Draw Round';
               }

               if(playerSelection === "rock" && computerSelection === "scissors")
              { document.getElementById("roundText").innerText = 'Rock beats Scissors: Player wins the round';
                score[0]++;
              }

              if(computerSelection === 'rock' && playerSelection === 'scissors'){
                document.getElementById("roundText").innerText = 'Rock beats Scissors: Computer wins the round';
                score[1]++;
              }

              if(playerSelection === 'paper' && computerSelection === 'rock'){
                document.getElementById("roundText").innerText = 'Paper beats Rock: Player wins the round';
                score[0]++;
              }

              if(computerSelection === 'paper' && playerSelection === 'rock'){
                document.getElementById("roundText").innerText = 'Paper beats Rock: Computer wins the round';
                score[1]++;
              }

              if(playerSelection === 'scissors' && computerSelection === 'paper'){
                document.getElementById("roundText").innerText = 'Scissors beats Paper: Player wins the round';
                score[0]++;
              }

              if(computerSelection === 'scissors' && playerSelection === 'paper'){
                document.getElementById("roundText").innerText = 'Scissors beats Paper: Computer wins the round';
                score[1]++;
              }
            
              return score;
            }