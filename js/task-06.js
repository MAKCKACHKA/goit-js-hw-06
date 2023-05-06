const validation = document.querySelector("#validation-input");
const lengthValue = validation.getAttribute("data-length");

validation.addEventListener("blur", () => {
  const currentText = validation.value.length;
  if (currentText == lengthValue) {
    validation.classList.add("valid");
    validation.classList.remove("invalid");
  } else {
    validation.classList.remove("valid");
    validation.classList.add("invalid");
  }
  console.log(currentText);
  console.log(lengthValue);
});
