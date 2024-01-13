const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
const inputText = () => {
  const inputValue = nameInput.value;
  if (inputValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = inputValue;
  }
};
nameInput.addEventListener('input', inputText);
