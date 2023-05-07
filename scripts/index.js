let popupButtonOpen = document.querySelector('.profile__button-edit');
let popupButtonClose = document.querySelector('.popup__button-close');
let popupButtonSave = document.querySelector('.popup__button-save');
let popupForm = document.querySelector('.popup__form');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup'); 
// let nameName = document.querySelector('Name');
// let nameJob = document.querySelector('Job');

popupButtonOpen.addEventListener('click', () => 
popup.classList.add('popup_opened'));

popupButtonClose.addEventListener('click', () =>
popup.classList.remove('popup_opened'));

popupButtonSave.addEventListener('click', () =>
popup.classList.remove('popup_opened'));

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameName.value;
  profileJob.textContent = nameJob.value;
}

popupForm.addEventListener('submit', handleFormSubmit);

// ,
// nameName.value = profileName.textContent,
// nameJob.value = profileJob.textContent