// Assignment Code 
var generateBtn = document.querySelector("#generate");

function generatePassword() {
   console.log("you pressed button");

//WHEN prompted for password criteria
//THEN I choose a length of at least 8 characters 
var characters = "012345678910abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
var passwordLength = 128
var password = "";
for (let i = 0; i < passwordLength; i++) {
var randomNumber = Math.floor(Math.random() * characters.length);
password += characters.substring(randomNumber, randomNumber + 1);
}
 document.getElementById("password").value = password

 return "Generated Password wil go here!";
}

//and no more than 128 characters  //and they are lc,uc, num., spc charac.
//THEN my input should be validated and at least one character type should be selected
//THEN a password is generated that matches the selected criteria
//THEN the password is either displayed in an alert or written to the page
  

// Write password to the #password input only do generate password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* we need to generate a password */
console.log("generatePassword");