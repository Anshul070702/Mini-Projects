const container = document.querySelector(".container");
const signupbutton = document.querySelector(".green-bg button");

signupbutton.addEventListener("click", () => {
  container.classList.toggle("change");
});
