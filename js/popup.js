const searchButton = document.querySelector(".button-search-hotel");
let  popup = document.querySelector(".modal");
const form = document.querySelector(".search-form");
const data = form.querySelector(".entry-input");
const popupClose = document.querySelector(".modal-show")

popup.classList.add("popup-close");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("popup-close");
});

form.addEventListener("submit", function (evt) {
  if (!data.value || !people.value) {
    evt.preventDefault();
    popup.classList.add("error");
  }
});