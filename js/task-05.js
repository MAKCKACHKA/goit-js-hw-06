const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const inputText = event.currentTarget.value;
  if (inputText !== "") {
    output.textContent = inputText;
  } else {
    output.textContent = "Anonymous";
  }
});
