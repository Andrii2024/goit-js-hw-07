function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputElement = document.querySelector('.input-t-6');
const btn1Element = document.querySelector('.btn-1-t-6');
const btn2Element = document.querySelector('.btn-2-t-6');
const boxesElement = document.querySelector('.boxes-t-6');

btn1Element.addEventListener('click', onCreate);
btn2Element.addEventListener('click', onDestroy);
function onCreate(e) {
  const amount = +inputElement.value;
  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert('Введіть число від 1 до 100.');
    return;
  }
  onDestroy();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesElement.appendChild(box);
    size += 10;
  }

  inputElement.value = '';
}
function onDestroy() {
  boxesElement.innerHTML = '';
}
