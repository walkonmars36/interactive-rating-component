const form = document.getElementById("card__rating-form");
const ratings = document.querySelectorAll('input[name="rating"]');
const ratingNumber = document.querySelector(".card__rating-selection-number");
const initialCardState = document.querySelector(".card__start");
const finishCardState = document.querySelector(".card__finish");
const errorMessage = document.querySelector(".card__error-message");
const submitBtn = document.querySelector("[type='submit']");
const resetBtn = document.querySelector(".card__reset-btn");

//////////// FUNCTIONS //////////////

// display finish card state
const displayFinishCardState = function () {
  initialCardState.style.display = "none";
  finishCardState.style.display = "flex";
  resetBtn.style.visibility = "visible";
  resetBtn.setAttribute("aria-hidden", "false");
};

// get rating value
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
    displayErrorMessage();
  }
};

// hide error message
const hideErrorMessage = function () {
  errorMessage.style.display = "none";
  submitBtn.style.opacity = 1;
  submitBtn.ariaDisabled = false;
  submitBtn.disabled = false;
  submitBtn.style.cursor = "pointer";
};

// display error message
const displayErrorMessage = function () {
  errorMessage.style.display = "block";
};

// reset form
const resetForm = function () {
  ratings.forEach((rating) => {
    rating.checked = false;
  });

  initialCardState.style.display = "flex";
  finishCardState.style.display = "none";
  resetBtn.setAttribute("aria-hidden", "true");
  resetBtn.style.visibility = "hidden";
};

// handle submit
const handleSubmit = function (e) {
  e.preventDefault();
  getRatingValue();
};

// handle rating click
const handleRatingClick = function () {
  hideErrorMessage();
};

//////////// EVENT LISTENERS //////////////

form.addEventListener("submit", handleSubmit);

ratings.forEach((rating) => {
  rating.addEventListener("click", handleRatingClick);
});

resetBtn.addEventListener("click", resetForm);
