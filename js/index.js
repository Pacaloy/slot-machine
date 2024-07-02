import {
  IMAGE_COUNT,
  DEFAULT_Y_POSITION,
  renderImage,
  getRandom,
} from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const displays = document.getElementsByClassName('display');
  const spinButton = document.getElementById('spin-button');

  initialize(displays);
  spinButton.onclick = () => spin(displays);
  spin(displays, true);
});

function initialize(displays) {
  for (let i = 0; i < displays.length; i++) {
    renderImage(displays[i])
  }
}

function spin(displays, isWelcomeSpin = false) {
  let isWinner = Math.random() < 0.3;
  const winnerNumber = getRandom(IMAGE_COUNT);
  let results = [];

  for (let i = 0, delay = 0; i < displays.length; i++, delay += 200) {
    results.push(isWinner ? winnerNumber : getRandom(IMAGE_COUNT));

    if (isWelcomeSpin) results = [0, 0, 0];

    const currentImage = displays[i].getElementsByTagName('img');
    const interval = 5;
    let spinTimeout = interval;
    let yPosition = DEFAULT_Y_POSITION;
    let imageIndex = 0;

    setTimeout(() => {
      const intervalId = setInterval(() => {
        yPosition += 10;
        currentImage[0].style.top = yPosition + '%';
        spinTimeout += interval;

        if (yPosition > 130) {
          yPosition = -30;
          imageIndex++;

          if (imageIndex > IMAGE_COUNT - 1) imageIndex = 0;

          displays[i].removeChild(currentImage[0]);
          renderImage(displays[i], imageIndex, yPosition);
        }

        if (
          spinTimeout > (1000 * (i + 1))
          && results[i] === imageIndex
          && yPosition >= DEFAULT_Y_POSITION
        ) {
          currentImage[0].style.top = DEFAULT_Y_POSITION + '%';
          clearInterval(intervalId);
        }
      }, interval)
    }, isWelcomeSpin ? 0 : delay)
  }
  console.log(results)
}
