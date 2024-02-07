'use strict';
//Random number to guess between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayContent(htmlClass, content) {
  document.querySelector('' + htmlClass).textContent = content;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayContent('.message', '⚠️ No Number!');
    //When player wins
  } else if (guess === secretNumber) {
    displayContent('.message', '🎉 Correct Number!');
    displayContent('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //Setting the highscore
    highscore = score > highscore ? score : highscore;
    displayContent('.highscore', highscore);
    //When guess is too high or too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayContent('.message', guess > secretNumber ? '🔥 Too high!' : '❄️ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayContent('.message', '❌ You lost the game!');
      displayContent('.score', 0);
    }
  }
})

//Restart! burron event to reset the game
document.querySelector('.restart').addEventListener('click', function () {
  //Reset the score to default value: 20
  score = 20
  displayContent('.score', score);
  //Reset the checkbox number
  document.querySelector('.guess').value = '';
  //Reset the message
  displayContent('.message', 'Start guessing...');
  //Reset the background color
  document.querySelector('body').style.backgroundColor = '#222';
  //Reset the width of the secret number
  document.querySelector('.number').style.width = '15rem';
  //Reset the question mark for the secret number
  displayContent('.number', '?');
  //Reset the secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
})