// Assignment Code 
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function getRandomItem(list) {
    return list[randomInt(0, list.length - 1)]
}
  

  function generatePassword() {
    
    var userInput = window.prompt('How long do you want your password to be?');

    var passwordLength = parseInt(userInput)
    
    if (isNaN(passwordLength)){
      window.alert('That is not a number!')
      return
    } 

    if (passwordLength < 8 || passwordLength >128) {
      window.alert('Password length must be between 8 and 128 characters')
      return
    }

    var userneedsUppercase = window.confirm("Do you want to have uppercase letters in your password?? Ok - Yes Cancel - No")
    var userneedsLowercase = window.confirm("Do you want to have lowercase letters in your password? Ok - Yes Cancel - No")
    var userneedsNumbers = window.confirm("Do you want to have numbers in your password? Ok - Yes Cancel - No")
    var userneedsSymbols = window.confirm("Do you want to have symbols in your password? Ok - Yes Cancel - No")

    var uppercaseList = ['A', 'B', 'C' , 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var lowercaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
    var numbersList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var symbolsList = ['!', '@', '#', '$', '^', '*', '<', '?'] 

    var allcharactersList = []

    //consider a for loop for changing lowercase char. to uppercase characters.
   
    if (userneedsUppercase === true) (
      allcharactersList.push(uppercaseList)
    )

    if (userneedsLowercase === true) (
      allcharactersList.push(lowercaseList)
    )

    if (userneedsNumbers === true) (
      allcharactersList.push(numbersList)
    )

    if (userneedsSymbols === true) (
      allcharactersList.push(symbolsList)
    ) 
    
     var newPassword = ''

     for (var i = 0; i < passwordLength; i++) {
       var randomOptionsList = getRandomItem(allcharactersList)//stopped here
     }
       var randomChar = getRandomItem(randomList)
  }

  



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

                                   //"add variable here
//a for loop   for (var i = 0; i <  symbolsList[i].