const form = document.getElementById('sign-up');
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const error = document.querySelector('small');


passwordConfirm.addEventListener('input', e => {
  if(passwordConfirm.value !== password.value) {
    console.log('reached');
    error.classList.remove('hidden');
  } else {
    error.classList.add('hidden');
  }
})