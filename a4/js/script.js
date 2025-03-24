function validateForm() {
//1) Create a variable to control status of each field. Assume that they are not valid
  var validFirstname = false;
  var validLastname = false;
  var validEmail = false;
  var validPhone = false;
  var validUsername = false;
  var firstErrorField = null;
  var validAddress = false;
  var validCity = false;
  var validState = false;
  var validCountry = false;
  var validZipcode = false;
  var validPassword = false;
  var passwordRequirments = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{1,7}$/;

//2) Create variables to read the values from html text inputs
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phonenumber").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  var zipcode = document.getElementById("zipcode").value;

  //3) Do the validation
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
  var cleanPhone = phone.replace(/\D/g, ""); // Remove non-numeric characters
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
  
  // Address validation
  if (address === "") {
    document.getElementById("addressError").innerHTML = "The address is required.";
    if (!firstErrorField) firstErrorField = document.getElementById("address");
  } else {
    validAddress = true;
  }
  
  // City validation
  if (city === "") {
    document.getElementById("cityError").innerHTML = "The city is required.";
    if (!firstErrorField) firstErrorField = document.getElementById("city");
  } else {
    validCity = true;
  }
  
  // State validation
  if (state === "") {
    document.getElementById("stateError").innerHTML = "The state is required.";
    if (!firstErrorField) firstErrorField = document.getElementById("state");
  } else {
    validState = true;
  }
  
  // Country validation
  if (country === "") {
    document.getElementById("countryError").innerHTML = "The country is required.";
    if (!firstErrorField) firstErrorField = document.getElementById("country");
  } else {
    validCountry = true;
  }
  
  // Zipcode validate
if (country === "US") { // Use "US" for United States
  if (zipcode === "" || zipcode.length !== 5 || isNaN(zipcode)) {
    document.getElementById("zipcodeError").innerHTML = "The zipcode is required (and must be 5 digits) if you live in the United States.";
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

  //5) return the status of each field
  return validFirstname && validLastname && validEmail && validPhone && 
    validUsername && validPassword && validAddress && validCity && 
    validState && validCountry && validZipcode;
}


function formatPhoneNumber() {
  var phone = document.getElementById("phonenumber").value;
  var phoneError = document.getElementById("phoneError");

  var cleanPhone = phone.replace(/\D/g, "");

  if (cleanPhone.length <= 3) {
    phone = cleanPhone;
  } else if (cleanPhone.length <= 6) {
    phone = cleanPhone.slice(0, 3) + "-" + cleanPhone.slice(3);
  } else {
    phone = cleanPhone.slice(0, 3) + "-" + cleanPhone.slice(3, 6) + "-" + cleanPhone.slice(6, 15);
  }

  document.getElementById("phonenumber").value = phone;
}
