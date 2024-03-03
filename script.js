const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateEmail() {
  const emailValue = emailInput.value.trim();
  if (emailValue.length < 3 || !emailValue.includes('@') || !emailValue.includes('.')) {
    emailError.textContent = 'Email must be more than 3 characters and contain "@" and "."';
  } else {
    emailError.textContent = '';
  }
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();
  if (passwordValue.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
  } else {
    passwordError.textContent = '';
  }
}

function showSuccessMessage() {
  const allGoodMessage = document.createElement('p');
  allGoodMessage.textContent = 'All good to go!';
  allGoodMessage.classList.add('success');
  form.insertBefore(allGoodMessage, form.lastElementChild);
}

function handleSubmit(event) {
  event.preventDefault();
  if (emailError.textContent || passwordError.textContent) {
    return;
  }

  showSuccessMessage();

  if (confirm('Are you sure you want to sign up?')) {
    alert('Successful signup!');
  } else {
    window.location.reload();
  }
}

emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
form.addEventListener('submit', handleSubmit);