'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = Number(document.querySelector(`.score`).textContent);

function displayMessage(message) {
  document.querySelector(`.message`).textContent = message;
}

document.querySelector(`.check`).addEventListener('click', () => {
  const message = document.querySelector(`.message`);
  if (score < 1) {
    displayMessage(`💥 You lost the game!`);
    document.querySelector('body').style.backgroundColor = '#ff0000ff';
    return;
  }
  const guess = Number(document.querySelector(`.guess`).value);
  if (!guess) {
    displayMessage(`⛔ No Number`);
  } else if (guess === secretNumber) {
    displayMessage(`✅ Correct Number`);
    document.querySelector('body').style.backgroundColor = '#60b374';
    document.querySelector('.number').textContent = guess;
    document.querySelector('.number').style.width = '30rem';
    const highScore = Number(document.querySelector(`.highscore`).textContent);
    if (score > highScore) {
      document.querySelector(`.highscore`).textContent = score;
    }
  } else if (guess > 20) {
    displayMessage(`⛔ Invalid Guess!`);
  } else if (guess !== secretNumber) {
    score--;
    document.querySelector(`.score`).textContent = score;
    displayMessage(guess > secretNumber ? `⛔ Too High!` : `⛔ Too Low!`);
  }
});

document.querySelector(`.again`).addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector(`.score`).textContent = 20;
  score = 20;
  document.querySelector(`.guess`).value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector(`.message`).textContent = `Start guessing...`;
});
