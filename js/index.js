import { greet } from './script.js';

document.addEventListener('DOMContentLoaded', () => {
  const displays = document.getElementsByClassName('display');
  const spinButton = document.getElementById('spin-button');

  greet();
  initialize(displays);
  spinButton.onclick = () => spin(displays);
});

function initialize(displays) {
  for (let i = 0; i < displays.length; i++) {
    const startDisplay = document.createElement('img');
    startDisplay.src = './assets/img0.webp';
    startDisplay.style.position = 'absolute';
    startDisplay.style.top = '50%';
    startDisplay.style.left = '50%';
    startDisplay.style.transform = 'translate(-50%, -50%)';
    displays[i].appendChild(startDisplay);
  }
}

function spin(displays) {
  console.log('spinnnn');

  console.log(displays[0]);
  
  for (let i = 0, delay = 0; i < displays.length; i++, delay += 200) {
    const image = displays[i].getElementsByTagName('img');
    let position = 50;

    setTimeout(() => {
      setInterval(() => {
        position += 5;
        image[0].style.top = position + '%';
  
        if (position > 130) {
          position = -30;
        }
      }, 5)
    }, delay)
  }
}
