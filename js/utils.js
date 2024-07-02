const IMAGE_COUNT = 6;
const DEFAULT_Y_POSITION = 50; // Default Y Position of slot images in percentage.

/**
 * Renders the slot machine's current image.
 * @param {HTMLElement} parent The element where the image is appended.
 * @param {number} imageIndex The image's file path (ie. `./assets/img${imageIndex}.webp`).
 * @param {number} yPosition The image's top value in percentage.
 */
const renderImage = (parent, imageIndex = 0, yPosition = DEFAULT_Y_POSITION) => {
  const image = document.createElement('img');
  image.src = `./assets/img${imageIndex}.webp`;
  image.style.position = 'absolute';
  image.style.top = yPosition + '%';
  image.style.left = '50%';
  image.style.transform = 'translate(-50%, -50%)';
  parent.appendChild(image);
}

export {
  IMAGE_COUNT,
  DEFAULT_Y_POSITION,
  renderImage,
}
