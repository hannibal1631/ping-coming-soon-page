const input = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');
const errorText = document.getElementById('error-text');

// function for validating email
const isValidEmail = (input) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(input);
};

submitBtn.addEventListener('click', function () {
  let hasErrors = false;

  // validate email for errors
  if (input.value.trim() === '' || !isValidEmail(email.value.trim())) {
    errorText.innerText = `Please provide a valid email address`;
    hasErrors = true;
  } else {
    errorText.innerText = `Your registration was successfull`;
    hasErrors = false;
  }
});
