'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;



let score = 20;
let hightScore = 0;

function displayMessage(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){

    const guess = Number(document.querySelector('.guess').value);

   if(!guess){
    //    document.querySelector('.message').textContent = '⛔️ Not a number'; 
    displayMessage('⛔️ Not a number');
   }
   else if( guess === secretNumber){
    document.querySelector('.message').textContent = '🎉 Correct Guess'; 
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    if(score > hightScore){
        
        hightScore = score;   document.querySelector('.highscore').textContent = score;
        
    }
   }
   else if( guess !== secretNumber){
    if(score > 1){
        // document.querySelector('.message').textContent = guess > secretNumber ?'📈 Too Hight !' : '📉 Too Low !';
        displayMessage(guess > secretNumber ?'📈 Too Hight !' : '📉 Too Low !'); 
    score--;
    document.querySelector('.score').textContent = score;
  
       }
       else{
        // document.querySelector('.message').textContent = '😭 You Lose the game !';
        displayMessage('😭 You Lose the game !');
        document.querySelector('.score').textContent = '0';
        document.querySelector('body').style.backgroundColor = 'red';
       }
    

   }
  
});

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    // document.querySelector('.message').textContent = 'Start guessing...'; 
    displayMessage('Start guessing...');

     secretNumber = Math.trunc(Math.random()*20)+1;
     document.querySelector('.number').style.width = '15rem';



})
