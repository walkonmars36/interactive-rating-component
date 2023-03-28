const form = document.getElementById("rating-form");
const ratings = document.querySelectorAll('input[name="rating"]');
const ratingNumber = document.querySelector(".card__rating-selection-number");
const initialCardState = document.querySelector(".card__content-start");
const finishCardState = document.querySelector(".card__content-finish");
const errorMessage = document.querySelector(".error-message");

const displayFinishCardState = function () {
  initialCardState.style.display = "none";
  finishCardState.style.display = "flex";
};

const getRatingValue = function () {
  let checkedRating = null;
  ratings.forEach((rating) => {
    if (rating.checked) {
      checkedRating = rating.value;
    }
  });
  if (checkedRating) {
    ratingNumber.textContent = checkedRating;
    displayFinishCardState();
    hideErrorMessage();
  } else {
    ratingNumber.textContent = "";
    displayErrorMessage("Please select a rating");
  }
};

const hideErrorMessage = function () {
  errorMessage.style.display = "none";
};

const displayErrorMessage = function (message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getRatingValue();
});

ratings.forEach((rating) => {
  rating.addEventListener("click", function () {
    hideErrorMessage();
  });
});
