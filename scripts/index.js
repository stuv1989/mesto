const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elementsContainer = document.querySelector(".elements");
const elementTemplate = document.querySelector("#template").content;

const elementInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});

function renderElement({ name, link }) {
  const cardElement = elementTemplate.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__title").textContent = name;
  cardElement.querySelector(".element__image").src = link;

  elementsContainer.append(cardElement);
}

function render() {
  elementInfo.forEach(renderElement);
}

render();



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


