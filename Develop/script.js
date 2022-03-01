// Assignment Code 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input only do generate password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* we need to generate a password */
generatePassword