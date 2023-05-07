let popupButtonOpen = document.querySelector('.profile__button-edit');
let popupButtonClose = document.querySelector('.popup__button-close');
let popupButtonSave = document.querySelector('.popup__button-save');
let popupForm = document.querySelector('.popup__form');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup'); 
let nameInput = document.querySelector('.popup__value_name');
let nameJob = document.querySelector('.popup__value_job');

popupButtonOpen.addEventListener('click', () => 
popup.classList.add('popup__opened'),
nameInput.value = profileName.textContent,
nameJob.value = profileJob.textContent);

popupButtonClose.addEventListener('click', () =>
popup.classList.remove('popup__opened'));

popupButtonSave.addEventListener('click', () =>
popup.classList.remove('popup__opened'));

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = nameJob.value;
}

popupForm.addEventListener('submit', handleFormSubmit);