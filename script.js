const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const close = document.getElementById("close");

burger.addEventListener("click", () => {
  menu.className = "menu work";
});

close.addEventListener("click", () => {
  menu.className = "menu";
});

const button = document.getElementById("buy");
const card = document.getElementById("card");
const closeCard = document.getElementById("close-card");

button.addEventListener("click", () => {
  card.className = "card card-work";
});

closeCard.addEventListener("click", () => {
  card.className = "card";
});
