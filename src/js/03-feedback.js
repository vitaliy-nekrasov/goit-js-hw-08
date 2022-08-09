import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
let resultObj = {};
getFromStorage();

formEl.addEventListener('input', throttle(onTextInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onTextInput(evt) {
  resultObj[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(resultObj));
}

function getFromStorage() {
  let persistedItem = localStorage.getItem('feedback-form-state');
  if (persistedItem) {
    persistedItem = JSON.parse(persistedItem);
    Object.entries(persistedItem).forEach(([name, value]) => {
      resultObj[name] = value;
      formEl.elements[name].value = value;
    });
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();

  console.log(resultObj);

  localStorage.removeItem('feedback-form-state');
}
