function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const widget = document.querySelector(".widget");
const color = document.querySelector(".color");
const colorChange = document.querySelector(".change-color");

colorChange.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
});
