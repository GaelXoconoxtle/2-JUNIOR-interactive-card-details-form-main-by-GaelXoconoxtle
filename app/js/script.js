console.log("HELLO")

const form = document.getElementById("form");
const completeSection = document.getElementById("completeSection");
const inputCardName = document.getElementById("cardholderName");
const inputCardNumber = document.getElementById("cardNumber");
const inputExpDateMM = document.getElementById("expDateMM");
const inputExpDateYY = document.getElementById("expDateYY");
const inputCvc = document.getElementById("cvc");

const onCardCardNumber = document.getElementById('onCardCardNumber');
const onCardCardName = document.getElementById('onCardCardName');
const onCardExpDateMM = document.getElementById('onCardExpDateMM');
const onCardExpDateYY = document.getElementById('onCardExpDateYY');
const onCardCvc = document.getElementById('onCardCvc');

//Validating Functions
const isRequired = value => value === '' ? false : true;
const isLengthValid = (length, max) => length < max ? false : true;
const isNumber00 = value => value === '00' ? false : true;

//Show Error or Succes Functions
const showError = (input, message) => {
  const formField = input.parentElement;

  formField.classList.remove('success');
  formField.classList.add('error');

  const error = formField.querySelector('small');
  error.textContent = message;
}

const showSuccess = (input) => {
  const formField = input.parentElement;

  formField.classList.remove('error');
  formField.classList.add('success');

  const error = formField.querySelector('small');
  error.textContent = '';
}


//Validate inputs
const checkCardName = () => {

  let valid = false;
  const cardName = inputCardName.value.trim();

  if (!isRequired(cardName)) {
    showError(inputCardName, 'Name cannot be blank.');
  } else {
    showSuccess(inputCardName);
    valid = true;
  }

  return valid;
}

const checkCardNumber = () => {

  let valid = false;
  const max = 19;
  const cardNumber = inputCardNumber.value.trim();

  if (!isRequired(cardNumber)) {
    showError(inputCardNumber, 'Card Number cannot be blank.');
  } else if (!isLengthValid(cardNumber.length, max)) {
    showError(inputCardNumber, `Card Number must be 16 digits.`);
  } else {
    showSuccess(inputCardNumber);
    valid = true;
  }

  return valid;
}

const checkExpDateMMYY = () => {

  let valid = false;
  let expDateMMValid = false;
  let expDateYYValid = false;
  const max = 2;
  const expDateMM = inputExpDateMM.value.trim();
  const expDateYY = inputExpDateYY.value.trim();

  if (!isRequired(expDateMM)) {
    showError(inputExpDateMM, 'The Month cannot be blank.');
  } else if (!isLengthValid(expDateMM.length, max)) {
    showError(inputExpDateMM, 'The Month must have 2 digits.');
  } else if (!isNumber00(expDateMM)) {
    showError(inputExpDateMM, 'The Month cannot be 00.');
  } else {
    showSuccess(inputExpDateMM);
    expDateMMValid = true;
  }

  if (!isRequired(expDateYY)) {
    showError(inputExpDateYY, 'The Year cannot be blank.');
  } else if (!isLengthValid(expDateYY.length, max)) {
    showError(inputExpDateYY, 'The Year must have 2 digits.');
  } else if (!isNumber00(expDateYY)) {
    showError(inputExpDateYY, 'The Year cannot be 00.');
  } else {
    showSuccess(inputExpDateYY);
    expDateYYValid = true;
  }

  valid = expDateYYValid && expDateMMValid;
  // console.log("EXP DATE: " + valid);
  return valid;
}

const checkCvc = () => {

  let valid = false;
  const max = 3;
  const cardCvc = inputCvc.value.trim();

  if (!isRequired(cardCvc)) {
    showError(inputCvc, 'Card Cvc cannot be blank.');
  } else if (!isLengthValid(cardCvc.length, max)) {
    showError(inputCvc, `Card Cvc must be 3 digits.`);
  } else {
    showSuccess(inputCvc);
    valid = true;
  }

  return valid;
}


//Format the text when the users writes
const onlyNumbers = (event) => {
  const value = event.target.value;
  const newValue = value.replace(/[^0-9]/g, '').trim();
  event.target.value = newValue;
}

inputCardNumber.addEventListener('input', (event) => {
  const value = event.target.value;
  const newValue = value.replace(/[^0-9]/g, '').replace(/(.{4})/g, '$1 ').trim();
  event.target.value = newValue;
});

inputExpDateMM.addEventListener('input', onlyNumbers);
inputExpDateYY.addEventListener('input', onlyNumbers);
inputCvc.addEventListener('input', onlyNumbers);


//DOM changes on the cards:
inputCardName.addEventListener('input', (event) => {
  onCardCardName.textContent = event.target.value.toUpperCase();
})

inputCardNumber.addEventListener('input', (event) => {
  onCardCardNumber.textContent = event.target.value;
})

inputExpDateMM.addEventListener('input', (event) => {
  onCardExpDateMM.textContent = event.target.value;
})

inputExpDateYY.addEventListener('input', (event) => {
  onCardExpDateYY.textContent = event.target.value;
})

inputCvc.addEventListener('input', (event) => {
  onCardCvc.textContent = event.target.value;
})


//Validate Form
form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isCardNameValid = checkCardName(),
      isCardNumberValid = checkCardNumber(),
      isExpDateMMYYValid = checkExpDateMMYY(),
      isCardCvcValid = checkCvc();

  let isFormValid = isCardNameValid &&
                    isCardNumberValid &&
                    isExpDateMMYYValid &&
                    isCardCvcValid;

  if (isFormValid) {
    form.classList.add('hidden');
    completeSection.classList.remove('hidden');
  }
})
