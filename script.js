'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.message').textContent);

//

// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let randInt = Math.floor(Math.random() * 20) + 1;
let score = 20;
let max = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  // if (!guess) {
  //   document.querySelector('.message').textContent = 'No number!';
  // } else {
  //   // when the guess is correct
  //   if (guess === randInt) {
  //     document.querySelector('.message').textContent = 'Correct!';
  //     document.querySelector('body').style.backgroundColor = '#60b347';
  //     document.querySelector('.number').style.width = '30rem';
  //     document.querySelector('.number').textContent = randInt;
  //     if (score > max) {
  //       max = score;
  //     }
  //     document.querySelector('.highscore').textContent = max;
  //   } else if (guess > 20 || guess < 1) {
  //     document.querySelector('.message').textContent =
  //       'You can only guess a number between 1 and 20. Try again.';
  //   } else if (guess > randInt) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         'Too high. Keep guessing!';
  //       score -= 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Game over. You lost!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < randInt) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         'Too low. Keep guessing!';
  //       score -= 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Game over. You lost!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  // }

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else {
    if (score > 1) {
      if (guess === randInt) {
        document.querySelector('.message').textContent = 'Correct!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = randInt;
        if (score > max) {
          max = score;
        }
        document.querySelector('.highscore').textContent = max;
      } else {
        document.querySelector('.message').textContent =
          guess > randInt
            ? 'Too high. Keep guessing!'
            : 'Too low. Keep guessing!';
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = 'Game over. You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20; // needs to be assigned to reset score value
  randInt = Math.floor(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
