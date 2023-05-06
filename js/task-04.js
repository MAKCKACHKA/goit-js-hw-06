const plusBtn = document.querySelector('[data-action="increment"]');
const minusBtn = document.querySelector('[data-action="decrement"]');
const counterElement = document.querySelector("#value");
let counterValue = 0;
plusBtn.addEventListener("click", () => {
  counterValue += 1;
  counterElement.textContent = counterValue;
});
minusBtn.addEventListener("click", () => {
  counterValue -= 1;
  counterElement.textContent = counterValue;
});
