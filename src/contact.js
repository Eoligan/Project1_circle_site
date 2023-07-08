document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  function validateEmail(input) {
    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validRegex.test(input);
  }

  form.addEventListener("submit", (event) => {
    const inputEmail = document.getElementById("email");
    const emailContainer = document.getElementById("email-container");
    console.log("emailContainer:", emailContainer);

    var isValid = validateEmail(inputEmail.value);

    if (!isValid) {
      event.preventDefault();
      console.log("No valid");
      emailContainer.classList.add("invalid");
      inputEmail.focus();
    } else {
      console.log("Valid");
      form.submit();
    }

    inputEmail.addEventListener("input", () => {
      if (emailContainer.classList.contains("invalid")) {
        emailContainer.classList.remove("invalid");
      }
    });
  });
});
