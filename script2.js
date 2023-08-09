document.addEventListener("DOMContentLoaded", function () {
  const passwordForm = document.getElementById("passwordForm");
  const submitBtn = document.getElementById("submitBtn");

  passwordForm.addEventListener("input", validatePassword);

  function validatePassword() {
    const passwordInput = document.getElementById("password").value;
    const confirmPasswordInput = document.getElementById("confirmPassword").value;

    if (passwordInput === confirmPasswordInput) {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", "true");
    }
  }
});
