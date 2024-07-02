import { IMAGE_COUNT, DEFAULT_Y_POSITION } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const displays = document.getElementsByClassName('display');
  const spinButton = document.getElementById('spin-button');

  initialize(displays);
  spinButton.onclick = () => spin(displays);
});

function initialize(displays) {
  for (let i = 0; i < displays.length; i++) {
    const starterImage = document.createElement('img');
    starterImage.src = './assets/img0.webp';
    starterImage.style.position = 'absolute';
    starterImage.style.top = DEFAULT_Y_POSITION + '%';
    starterImage.style.left = '50%';
    starterImage.style.transform = 'translate(-50%, -50%)';
    displays[i].appendChild(starterImage);
  }
}

function spin(displays) {
  const results = [];

  for (let i = 0, delay = 0; i < displays.length; i++, delay += 200) {
    results.push(Math.floor(Math.random() * IMAGE_COUNT));
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
          const nextImage = document.createElement('img');
          nextImage.src = `./assets/img${imageIndex}.webp`;
          nextImage.style.position = 'absolute';
          nextImage.style.top = yPosition + '%';
          nextImage.style.left = '50%';
          nextImage.style.transform = 'translate(-50%, -50%)';
          displays[i].appendChild(nextImage);
        }

        if (spinTimeout > (1000 * (i + 1)) && results[i] === imageIndex && yPosition >= DEFAULT_Y_POSITION) {
          currentImage[0].style.top = DEFAULT_Y_POSITION + '%';
          clearInterval(intervalId);
        }
      }, interval)
    }, delay)
  }
  console.log(results)
}
