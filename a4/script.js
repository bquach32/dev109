function validateForm() { 
  var validFirstname = false;
  var validLastname = false;
  var validEmail = false;
  var validPhone = false;
  var validUsername = false;
  var validAddress = false;
  var validCity = false;
  var validState = false;
  var validCountry = false;
  var validZipcode = false;
  var validPassword = false;
  var passwordRequirments = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{1,7}$/;

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
  
  document.getElementById("errorMessages").innerHTML = errorMessages;

// First Name validation  
if (firstname==="null" || firstname==="" || firstname.length > 20)
    errorMessages += "The firstname is required and cannot be greater than 20 characters.>";
} else {
    validFirstname = true;
  }

 // Last Name Validation
if (lastname==="null" || lastname==="" || lastname.length > 20)
    errorMessages += "The lastname is required and cannot be greater than 20 characters.";
  } else {
    validLastname = true;
  } 
  
  // Email Validation  
  var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        return false; // Invalid email
    } else {
        return true; // Valid email
    }
}
  
   // Phone Validation
var cleaned = phone.replace(/\D/g, ""); 
  if (isNaN(phone) || phone.lenght >15 || phone===null || phone===""){
document.getElementById("phoneError").innerHTML = "Phone Number should contain only numbers with no more than 15 digits.";
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
if (country === "US") {
if (zipcode === "" || zipcode.length !== 5) {
            errorMessages = "<p>Invalid Zip Code for USA. It must be exactly 5 digits.</p>";
        }
    } else {
        validZipcode = true;
  }
  
  // Focus
  if (firstErrorField) {
    firstErrorField.focus();
    return false;
  }
  
RETURN FINAL VALIDATION RESULT
  return validFirstname && validLastname && validEmail && validPhone && 
    validUsername && validPassword && validAddress && validCity && 
    validState && validCountry && validZipcode;
  
  
  
