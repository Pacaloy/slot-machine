const DISPLAY_COUNT = 3; // Count of the slot machine's display
const IMAGE_COUNT = 6; // Count of the images in the assets directory
const DEFAULT_Y_POSITION = 50; // Default Y Position of slot images in percentage.

/**
 * Renders the slot display's current image.
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

/**
 * Returns a random number between 0 (inclusive) and the 'limit' (exclusive).
 * @param {number} limit Upper number limit.
 */
const getRandom = (limit) => {
  return Math.floor(Math.random() * limit);
}

export {
  DISPLAY_COUNT,
  IMAGE_COUNT,
  DEFAULT_Y_POSITION,
  renderImage,
  getRandom,
}
