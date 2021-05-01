const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.querySelector('.button--sign-up');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

const firstNameParent = firstName.parentElement;
const lastNameParent = lastName.parentElement;
const emailParent = email.parentElement;
const passwordParent = password.parentElement;
const inputContainers = document.querySelectorAll('.input-container');

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

//  When the key is press, remove the invalid class of the input
inputs.forEach((input) => {
  input.addEventListener('keypress', () => {
    let parentInput = input.parentElement;
    parentInput.classList.remove('invalid');
  });
});

// Submit
form.addEventListener('submit', (e) => {
  if (firstName.value === '') {
    firstNameParent.classList.add('invalid');
    let message = firstNameParent.querySelector('.message');
    message.innerHTML = 'First Name cannot be empty';
  } else {
    firstNameParent.classList.remove('invalid');
  }

  if (lastName.value === '') {
    lastNameParent.classList.add('invalid');
    let message = lastNameParent.querySelector('.message');
    message.innerHTML = 'Last Name cannot be empty';
  } else {
    lastNameParent.classList.remove('invalid');
  }

  if (!email.value.match(pattern)) {
    emailParent.classList.add('invalid');
    let message = emailParent.querySelector('.message');
    message.innerHTML = 'Looks like this is not an email';
  } else {
    emailParent.classList.remove('invalid');
  }

  if (password.value === '') {
    passwordParent.classList.add('invalid');
    let message = passwordParent.querySelector('.message');
    message.innerHTML = 'Password cannot be empty';
  } else {
    passwordParent.classList.remove('invalid');
  }

  const messages = document.querySelectorAll('.message');
  const submitSuccessful = form.querySelector('.message-submit');
  messages.forEach((message) => {
    if (message.innerHTML == '') {
      submitSuccessful.innerHTML = 'Submit Successful';
      inputs.forEach((input) => {
        input.value = '';
      });
    }
  });

  e.preventDefault();
});
