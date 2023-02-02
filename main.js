const form = document.getElementById("rating-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
});
