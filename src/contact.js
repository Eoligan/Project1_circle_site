const myForm = document.getElementById("contact-form-id");

function validateEmail(input) {
  var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validRegex.test(input);
}

myForm.addEventListener("submit", (event) => {
  const inputEmail = document.getElementById("email");
  const emailContainer = document.getElementById("email-container");
  const inputFullName = document.getElementById("fullName");
  const fullNameContainer = document.getElementById("fullname-container");

  var isValid = validateEmail(inputEmail.value);

  if (!isValid) {
    event.preventDefault();
    console.log("No valid");
    emailContainer.classList.add("invalid");
    inputEmail.focus();
    event.preventDefault();
  }

  if (!inputFullName.value) {
    event.preventDefault();
    console.log("No valid");
    fullNameContainer.classList.add("invalid");
    inputFullName.focus();
  }

  inputEmail.addEventListener("input", () => {
    if (emailContainer.classList.contains("invalid")) {
      emailContainer.classList.remove("invalid");
    }
  });
  inputFullName.addEventListener("input", () => {
    if (fullNameContainer.classList.contains("invalid")) {
      fullNameContainer.classList.remove("invalid");
    }
  });

  if (isValid && inputFullName.value) {
    myForm.submit();
  }
});
