'use strict';

const number = 24;
let score = 20;
let highscore = 0;
document.querySelector(`.number`).textContent = number;

//change display message with this function
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // guess = no input
  if (!guess) {
    displayMessage('No number!');
  }
  // when player guesses right.
  else if (guess === number) {
    displayMessage(`Correccttt!`);
    if (score > highscore) {
      highscore = score;
      document.querySelectory(`.highscore`).textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector(`.number`).style.width = `30rem`;
  }
  // when guess is wrong
  else if (guess !== number) {
    if (score > 1) {
      document.querySelector(`.message`).textContent =
        guess > number ? `Too high!` : `Too low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`You couldn't guess my age right! Try again`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
