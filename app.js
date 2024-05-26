const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

console.log(firstName);

let labels = document.querySelectorAll('label');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  const addErrorContainer = (i, err) => {
    let errorContainer = document.createElement('p');
    errorContainer.className = 'error-container';
    let errorSymbol = document.createElement('img');
    errorSymbol.setAttribute('src', "./images/icon-error.svg");
    let errorLineBreak = document.createElement('br')
    errorContainer.appendChild(errorSymbol);
    errorContainer.appendChild(errorLineBreak);
    
    err.className = 'error-text'
    errorContainer.appendChild(err);
    labels[i].appendChild(errorContainer)
  }

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    const firstNameError = document.createElement('p');
    firstNameError.innerText = 'First Name cannot be empty';
    addErrorContainer(0, firstNameError)
  } else {
    firstName.classList.remove('error');
  }
  
  // Check last name
  if (lName === '') {
    lastName.classList.add('error');
    const lastNameError = document.createElement('p');
    lastNameError.innerText = 'Last Name cannot be empty';
    addErrorContainer(1, lastNameError)
  } else {
    lastName.classList.remove('error');
  }
  
  // Check email
  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    const emailError = document.createElement('p');
    emailError.innerText = 'Looks like this is not an email';
    addErrorContainer(2, emailError);
  } else {
    email.classList.remove('error');
  }

  // Check password
  if (passwordVal === '') {
    password.classList.add('error');
    const passwordError = document.createElement('p');
    passwordError.innerText = 'Password Cannot be empty'
    addErrorContainer(3, passwordError);
    passwordToggler.style.display = 'none';
  } else {
    password.classList.remove('error');
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Password Toggling Feature

let passwordToggler = document.querySelector('.password-toggle');

let eventToListen = 'click';

passwordToggler.addEventListener(`${eventToListen}`, (e) => {
  e.preventDefault();
  password.setAttribute('type', 'text');
  passwordToggler.setAttribute('src', '"./images/eye-slash-solid.svg"');
  
  if (eventToListen == 'click') {
    eventToListen = 'mouseover'
  }
})