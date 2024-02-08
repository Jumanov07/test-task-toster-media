const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const close = document.getElementById("close");

burger.addEventListener("click", () => {
  menu.className = "menu work";
});

close.addEventListener("click", () => {
  menu.className = "menu";
});

const reviews = document.getElementById("circle-down-arrow");

reviews.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});

const startTimer = (duration, display) => {
  let timer = duration;
  let hours, minutes, seconds;

  const intervalId = setInterval(() => {
    hours = Math.floor(timer / (60 * 60));
    minutes = Math.floor((timer % (60 * 60)) / 60);
    seconds = Math.floor(timer % 60);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(intervalId);
      alert("00:00:00");
    }
  }, 1000);
};

const timerDisplay = document.getElementById("timer");
const durationInSeconds = 17 * 60 * 60 + 34 * 60 + 53;

startTimer(durationInSeconds, timerDisplay);

const button = document.getElementById("buy");
const card = document.getElementById("card");
const closeCard = document.getElementById("close-card");

button.addEventListener("click", () => {
  const buttonRect = button.getBoundingClientRect();
  const buttonPosition = {
    top: buttonRect.top + window.pageYOffset,
    left: buttonRect.left + window.pageXOffset,
  };

  card.style.display = "block";
  card.style.top = buttonPosition.top + "px";
  card.style.left = buttonPosition.left + "px";
});

closeCard.addEventListener("click", () => {
  card.style.display = "none";
});

const firstIcon = document.getElementById("first-icon");
const secondIcon = document.getElementById("second-icon");
const dropDown = document.getElementById("drop-down");

firstIcon.addEventListener("click", () => {
  firstIcon.style.display = "none";
  secondIcon.style.display = "inline";
  dropDown.style.display = "block";
});

secondIcon.addEventListener("click", () => {
  firstIcon.style.display = "inline";
  secondIcon.style.display = "none";
  dropDown.style.display = "none";
});

secondIcon.style.display = "none";
dropDown.style.display = "none";

const paragraph = document.getElementById("text");
const readMoreButton = document.getElementById("readMoreButton");

readMoreButton.addEventListener("click", function () {
  if (paragraph.classList.contains("collapsed")) {
    paragraph.classList.remove("collapsed");
    readMoreButton.textContent = "Read less";
  } else {
    paragraph.classList.add("collapsed");
    readMoreButton.textContent = "Read more";
  }
});
