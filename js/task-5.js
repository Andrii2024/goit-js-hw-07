function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyElement = document.body;
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', onRandomColor);
function onRandomColor(e) {
  const randomColor = getRandomHexColor();

  bodyElement.style.backgroundColor = randomColor;
  divElement.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}
