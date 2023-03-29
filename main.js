const form = document.getElementById("rating-form");
const ratings = document.querySelectorAll('input[name="rating"]');
const ratingNumber = document.querySelector(".card__rating-selection-number");
const initialCardState = document.querySelector(".card__start");
const finishCardState = document.querySelector(".card__finish");
const errorMessage = document.querySelector(".error-message");
const submitBtn = document.querySelector("[type='submit']");
const resetBtn = document.querySelector(".card__reset-btn");

//////////// FUNCTIONS //////////////

const displayFinishCardState = function () {
  initialCardState.style.display = "none";
  finishCardState.style.display = "flex";
  resetBtn.style.visibility = "visible";
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
    hideErrorMessage();
    displayFinishCardState();
  } else {
    ratingNumber.textContent = "";
    submitBtn.style.opacity = 0.3;
    submitBtn.ariaDisabled = true;
    submitBtn.disabled = true;
    submitBtn.style.cursor = "not-allowed";
    displayErrorMessage("Please select a rating");
  }
};

const hideErrorMessage = function () {
  // update aria hidden to true
  errorMessage.style.display = "none";
  submitBtn.style.opacity = 1;
  submitBtn.ariaDisabled = false;
  submitBtn.disabled = false;
  submitBtn.style.cursor = "pointer";
};

const displayErrorMessage = function (message) {
  // update aria hidden to false

  errorMessage.textContent = message;
  errorMessage.style.display = "block";
};

const resetForm = function () {
  ratings.forEach((rating) => {
    rating.checked = false;
  });

  initialCardState.style.display = "flex";
  finishCardState.style.display = "none";
  resetBtn.style.visibility = "hidden";
};

//////////// EVENT LISTENERS //////////////

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getRatingValue();
});

ratings.forEach((rating) => {
  rating.addEventListener("click", function () {
    hideErrorMessage();
  });
});

resetBtn.addEventListener("click", resetForm);
