import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const obj = {
  email: '',
  message: '',
};

formEl.addEventListener('input', throttle(onTextInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onTextInput(evt) {
  const email = evt.currentTarget.email.value;
  const message = evt.currentTarget.message.value;

  obj.email = email;
  obj.message = message;

  const objJSON = JSON.stringify(obj);
  localStorage.setItem('feedback-form-state', objJSON);
}

if (localStorage.getItem('feedback-form-state')) {
  const { email, message } = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  formEl.email.value = email;
  formEl.message.value = message;

  obj.email = email;
  obj.message = message;
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();

  console.log(obj);

  localStorage.removeItem('feedback-form-state');
}
