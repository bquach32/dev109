document.addEventListener("DOMContentLoaded", function() {
  const form = document.forms["myContact"];

  form.addEventListener("submit", function(event) {
    let isValid = true;
    let firstErrorField = null;

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");

    // Reset error messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";

    // Name field validation (empty or invalid)
    if (nameInput.value.trim() === "") {
      nameError.innerHTML = "Name is required.";
      if (!firstErrorField) firstErrorField = nameInput;
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(nameInput.value.trim()) || nameInput.value.length > 20) {
      nameError.innerHTML = "Name must contain only letters and spaces, max 20 characters.";
      if (!firstErrorField) firstErrorField = nameInput;
      isValid = false;
    }

    // Email field validation (empty or invalid)
    if (emailInput.value.trim() === "") {
      emailError.innerHTML = "Email is required.";
      if (!firstErrorField) firstErrorField = emailInput;
      isValid = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailInput.value.trim())) {
      emailError.innerHTML = "Invalid email address.";
      if (!firstErrorField) firstErrorField = emailInput;
      isValid = false;
    }

    // Focus on the first invalid field
    if (firstErrorField) {
      firstErrorField.focus();
    }

    // Prevent form submission if invalid
    if (!isValid) {
      event.preventDefault();
    }
  });
});
