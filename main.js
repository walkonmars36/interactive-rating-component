const form = document.getElementById("rating-form");
const rating = document.getElementsByName("rating");
const ratingNumber = document.querySelector(".card__rating-selection-number");
const initialCardState = document.querySelector(".card__content-start");
const finishCardState = document.querySelector(".card__content-finish");

const displayFinishCardState = () => {
  initialCardState.style.display = "none";
  finishCardState.style.display = "flex";
};

const getRatingValue = () => {
  for (let i = 0; i < rating.length; i++) {
    if (rating[i].checked) {
      ratingNumber.textContent = rating[i].value;
      displayFinishCardState();
    }
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getRatingValue();
});
