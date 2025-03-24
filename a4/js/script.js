function validateForm() {
  // 1) Create a variable to control status of each field. Assume that they are not valid
  var validFirstname = false;
  var validLastname = false;
  var validEmail = false;
  var validPhone = false;
  var validUsername = false;
  var validPassword = false;
  var validAddress = false;
  var validCity = false;
  var validState = false;
  var validCountry = false;
  var validZipcode = false;
  var firstErrorField = null;
  var passwordRequirments = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{1,7}$/;

  // 2) Get the values from the form
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

  // 3) Validation

  // Firstname Validation
  if (firstname === "" || firstname.length > 20) {
    document.getElementById("firstnameError").innerHTML = "The first name is required and cannot be greater than 20 characters.";
    if (!firstErrorField) firstErrorField = document.getElementById("firstname");
  } else {
    validFirstname = true;
  }

  // Lastname Validation
  if (lastname === "" || lastname.length > 20) {
    document.getElementById("lastnameError").innerHTML = "The last name is required and cannot be greater than 20 characters.";
    if (!firstErrorField) firstErrorField = document.getElementById("lastname");
  } else {
    validLastname = true;
  }

  // Email Validation
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    document.getElementById("emailError").innerHTML = "Invalid email address.";
    if (!firstErrorField) firstErrorField = document.getElementById("email");
  } else {
    validEmail = true;
  }

  // Phone Validation
  var cleanPhone = phone.replace(/\D/g, ""); 
  if (isNaN(cleanPhone) || cleanPhone.length > 15 || cleanPhone === "") {
    document.getElementById("phoneError").innerHTML = "Phone number should contain only numbers with no more than 15 digits.";
    if (!firstErrorField) firstErrorField = document.getElementById("phonenumber");
  } else {
    validPhone = true;
  }

  // Username Validation
  if (username === "" || username.length > 12) {
    document.getElementById("usernameError").innerHTML = "The username is required and cannot be greater than 12 characters.";
    if (!firstErrorField) firstErrorField = document.getElementById("username");
  } else {
    validUsername = true;
  }

  // Password Validation
  if (!password.match(passwordRequirments)) {
    document.getElementById("passwordError").innerHTML = "The password is required and cannot be greater than 7 characters, 1 upper, 1 lower, 1 number, and 1 special character.";
    if (!firstErrorField) firstErrorField = document.getElementById("password");
  } else {
    validPassword = true;
  }

  // Address Validation
  if (address === "") {
    document.getElementById("addressError").innerHTML = "The address is required.";
    if (!firstErrorField) firstErrorField = document.getElementById("address");
  } else {
    validAddress = true;
  }

  // City Validation
  if (city === "") {
    document.getElementById("cityError").innerHTML = "The city is required.";
    if (!firstErrorField) firstErrorField = document.getElementById("city");
  } else {
    validCity = true;
  }

  // State Validation
  if (state === "") {
    document.getElementById("stateError").innerHTML = "The state is required.";
    if (!firstErrorField) firstErrorField = document.getElementById("state");
  } else {
    validState = true;
  }

  // Country Validation
  if (country === "") {
    document.getElementById("countryError").innerHTML = "The country is required.";
    if (!firstErrorField) firstErrorField = document.getElementById("country");
  } else {
    validCountry = true;
  }

  // Zipcode Validation
  if (country === "US") { 
    if (zipcode === "" || zipcode.length !== 5 || isNaN(zipcode)) {
      document.getElementById("zipcodeError").innerHTML = "The zipcode is required (and must be 5 digits) if you live in the United States.";
      if (!firstErrorField) firstErrorField = document.getElementById("zipcode");
    } else {
      validZipcode = true;
    }
  } else {
    validZipcode = true; 
  }

  // 4) If there's an error, focus the first invalid field
  if (firstErrorField) {
    firstErrorField.focus();
    return false; 
  }

  // Clear any error messages before submitting
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

  // 5) Return true if everything is valid, otherwise return false
  return validFirstname && validLastname && validEmail && validPhone && 
    validUsername && validPassword && validAddress && validCity && 
    validState && validCountry && validZipcode;
}

function formatPhoneNumber() {
  var phone = document.getElementById("phonenumber").value;
  var cleanPhone = phone.replace(/\D/g, ""); // Remove non-numeric characters

  if (cleanPhone.length <= 3) {
    phone = cleanPhone;
  } else if (cleanPhone.length <= 6) {
    phone = cleanPhone.slice(0, 3) + "-" + cleanPhone.slice(3);
  } else {
    phone = cleanPhone.slice(0, 3) + "-" + cleanPhone.slice(3, 6) + "-" + cleanPhone.slice(6, 15);
  }

  document.getElementById("phonenumber").value = phone;
}
