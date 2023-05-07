let popupButtonOpen = document.querySelector('.profile__button-edit');
let popupButtonClose = document.querySelector('.popup__button-close');
let popupForm = document.querySelector('.popup__form');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup'); 
let popupName = document.getElementById('name');
let popupJob = document.getElementById('job');
let tooglePopup = (popupToToggle) => popupToToggle.classList.toggle("popup_opened")

function openPopup () {
  tooglePopup(popup);
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileJob.textContent = popupJob.value;
  tooglePopup(popup);
};

popupButtonOpen.addEventListener('click', (openPopup));
popupButtonClose.addEventListener('click', () => tooglePopup(popup));
popupForm.addEventListener('submit', handleFormSubmit);
