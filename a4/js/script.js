function validateForm() {
  //1) Create a variable to control status of each field. Assume that they are not valid
  var validFirstname = false;
  var validLastname = false;
  var validEmail = false;
  var validPhone = false;
  var validUsername = false;
  var firstErrorField = null; // Focus textbox
  var validPassword = false;
  var passwordRequirments = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{1,7}$/;
  var validAddress = false;
  var validCity = false;
  var validState = false;
  var validCountry = false;
  var validZipcode = false;

 //2) Create variables to read the values from html text inputs
  var firstname = document.getElementById("firstname").value.trim();
  var lastname = document.getElementById("lastname").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phonenumber").value.trim();
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();
  var address = document.getElementById("address").value.trim();
  var city = document.getElementById("city").value.trim();
  var state = document.getElementById("state").value.trim();
  var country = document.getElementById("country").value.trim();
  var zipcode = document.getElementById("zipcode").value.trim();

  resetErrorMessages();

 //3) Do the validation
  // Firstname Validation
  if (!/^[A-Za-z]+$/.test(firstname) || firstname.length > 20) {
    showError("firstnameError", "First name must contain only letters and be no more than 20 characters.");
    if (!firstErrorField) firstErrorField = document.getElementById("firstname");
  } else {
    validFirstname = true;
  }

  // Lastname Validation
  if (!/^[A-Za-z]+$/.test(lastname) || lastname.length > 20) {
    showError("lastnameError", "Last name must contain only letters and be no more than 20 characters.");
    if (!firstErrorField) firstErrorField = document.getElementById("lastname");
  } else {
    validLastname = true;
  }

 // Email Validation
  if (!isValidEmail(email)) {
    showError("emailError", "Invalid email address.");
    if (!firstErrorField) firstErrorField = document.getElementById("email");
  } else {
    validEmail = true;
  }

  // Phone Validation
  var cleanPhone = phone.replace(/\D/g, ""); // Remove non-numeric characters
  if (isNaN(cleanPhone) || cleanPhone.length > 15 || cleanPhone === "") {
    showError("phoneError", "Phone number should contain only numbers with no more than 15 digits.");
    if (!firstErrorField) firstErrorField = document.getElementById("phonenumber");
  } else {
    validPhone = true;
  }

  // Username Validation
  if (username === "" || username.length > 12) {
    showError("usernameError", "The username is required and cannot be greater than 12 characters.");
    if (!firstErrorField) firstErrorField = document.getElementById("username");
  } else {
    validUsername = true;
  }

  // Password Validation
  if (!password.match(passwordRequirments)) {
    showError("passwordError", "The password must contain 1 upper, 1 lower, 1 number, 1 special character, and be at most 7 characters.");
    if (!firstErrorField) firstErrorField = document.getElementById("password");
  } else {
    validPassword = true;
  }

  // Address validation
  if (address === "") {
    showError("addressError", "The address is required.");
    if (!firstErrorField) firstErrorField = document.getElementById("address");
  } else {
    validAddress = true;
  }

  // City validation
  if (city === "") {
    showError("cityError", "The city is required.");
    if (!firstErrorField) firstErrorField = document.getElementById("city");
  } else {
    validCity = true;
  }

  // State validation
  if (state === "") {
    showError("stateError", "The state is required.");
    if (!firstErrorField) firstErrorField = document.getElementById("state");
  } else {
    validState = true;
  }

  // Country validation
  if (country === "") {
    showError("countryError", "The country is required.");
    if (!firstErrorField) firstErrorField = document.getElementById("country");
  } else {
    validCountry = true;
  }

  // Zipcode validation (Required only if country is "US")
  if (country === "US") {
    if (zipcode === "" || zipcode.length !== 5 || isNaN(zipcode)) {
      showError("zipcodeError", "Zipcode must be 5 digits if you live in the United States.");
      if (!firstErrorField) firstErrorField = document.getElementById("zipcode");
    } else {
      validZipcode = true;
    }
  } else {
    validZipcode = true;
  }

  if (firstErrorField) {
    firstErrorField.focus();
    return false;
  }

 
 //4) Send error messages 
function resetErrorMessages() {
  document.getElementById("firstnameError").innerHTML = "";
  document.getElementById("lastnameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("usernameError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";
  document.getElementById("addressError").innerHTML = "";
  document.getElementById("cityError").innerHTML = "";
  document.getElementById("stateError").innerHTML = "";
  document.getElementById("countryError").innerHTML = "";
  document.getElementById("zipcodeError").innerHTML = "";
}

  
  //5) return the status of each field
  return validFirstname && validLastname && validEmail && validPhone && 
         validUsername && validPassword && validAddress && validCity && 
         validState && validCountry && validZipcode;
}


function showError(elementId, message) {
  document.getElementById(elementId).innerHTML = message;
}

function isValidEmail(email) {
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  return atpos > 1 && dotpos > atpos + 2 && dotpos + 2 < email.length;
}
