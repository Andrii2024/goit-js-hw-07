const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const userEmail = form.elements.email.value;
  const userPassword = form.elements.password.value;
  if (userEmail === '' || userPassword === '') {
    alert('All form fields must be filled in');
    return;
  }
  const formObj = {
    email: userEmail,
    password: userPassword,
  };
  console.log(formObj);
  form.reset();
}
