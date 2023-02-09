const submit = document.querySelector("#submit");
const inputs = document.querySelectorAll(".form__input");
const errorsBlock = document.querySelectorAll(".form__row-error");
const form = document.querySelector("#siminar-form");

form.addEventListener("submit", (e) => {
  let isValid = true;

  errorsBlock.forEach((errorBlock) => {
    errorBlock.innerHTML = "";
  });

  inputs.forEach((input) => {
    if (!input.value) {
      isValid = false;
      setErrorMessage(
        input.closest(".form__row").querySelector(".form__row-error"),
        "Заполните поле"
      );
    }

    if (input.name === "email") {
      if (!isEmailAddress(input.value)) {
        isValid = false;
        setErrorMessage(
          input.closest(".form__row").querySelector(".form__row-error"),
          "Некорректный EMail"
        );
      }
    }
  });

  if (!isValid) e.preventDefault();
});

function isEmailAddress(email) {
  const emailPattern = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  return emailPattern.test(email);
}

function setErrorMessage(block, message) {
  block.innerHTML = message;
}
