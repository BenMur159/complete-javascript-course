'use strict';

// Selecting Elements
const btnRoll = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector(`.btn--new`);
const btnHold = document.querySelector(`.btn--hold`);

const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const current0El = document.querySelector(`#current--0`);
const current1El = document.querySelector(`#current--1`);
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

let currentScore, isRolling, isPlaying, activePlayer, scores;

const startNewGame = function () {
  currentScore = 0;
  isRolling = false;
  isPlaying = true;
  activePlayer = 0;
  scores = [0, 0];

  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');
  player1El.classList.remove(`player--winner`);
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--active`);
  player0El.classList.add(`player--active`);
};

const switchPlayers = function () {
  currentScore = 0;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
  currentScore = 0;
};

startNewGame();

btnRoll.addEventListener('click', () => {
  if (isRolling === false && isPlaying === true) {
    isRolling = true;
    diceEl.classList.remove('hidden');
    let roll = 0;
    const rollingInterval = setInterval(() => {
      roll = Math.trunc(Math.random() * 6 + 1);
      diceEl.src = `dice-${roll}.png`;
    }, 250);
    setTimeout(() => {
      clearInterval(rollingInterval);
      if (roll !== 1) {
        currentScore += roll;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
      } else {
        currentScore = 0;
        scores[activePlayer] = 0;
        switchPlayers();
      }
      isRolling = false;
    }, 1000);
  }
});

btnHold.addEventListener('click', () => {
  if (isPlaying === true) {
    scores[activePlayer] += currentScore;
    if (scores[activePlayer] >= 100) {
      isPlaying = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayers();
    }
  }
});

btnNewGame.addEventListener('click', startNewGame);
