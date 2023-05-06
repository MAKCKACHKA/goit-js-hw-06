const form = document.querySelector(".login-form");

form.addEventListener("submit", () => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    //   return
    alert("Увага, всі поля повинні бути заповнені!");
    event.currentTarget.reset();
  }
  if (email.value !== "" || password.value !== "") {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
    event.currentTarget.reset();
  }
});
