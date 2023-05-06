const inputRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputRange.addEventListener("input", () => {
  const valueRange = inputRange.value;
  text.style.fontSize = `${valueRange}px`;
});
