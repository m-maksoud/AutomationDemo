document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");
  const submitBtn = document.getElementById("submitBtn");
  
  registrationForm.addEventListener("input", validateForm);

  function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const secondName = document.getElementById("secondName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const birthdateInput = document.getElementById("birthdate");
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    if (firstName && secondName && lastName && email && birthdate && age >= 18) {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", "true");
    }
  }
});
