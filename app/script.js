'use strict';
//Random number to guess between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⚠️ No Number!'
    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!'
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //Setting the highscore
    highscore = score > highscore ? score : highscore;
    document.querySelector('.highscore').textContent = highscore;
    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔥 Too high!'
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❌ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '❄️ Too low!'
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❌ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
})

//Restart! burron event to reset the game
document.querySelector('.restart').addEventListener('click', function () {
  //Reset the score to default value: 20
  score = 20
  document.querySelector('.score').textContent = score;
  //Reset the checkbox number
  document.querySelector('.guess').value = '';
  //Reset the message
  document.querySelector('.message').textContent = 'Start guessing...'
  //Reset the background color
  document.querySelector('body').style.backgroundColor = '#222';
  //Reset the width of the secret number
  document.querySelector('.number').style.width = '15rem';
  //Reset the question mark for the secret number
  document.querySelector('.number').textContent = '?';
  //Reset the secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
})