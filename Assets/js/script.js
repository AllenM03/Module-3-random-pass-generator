// Assignment Code 
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max)  {
    max = min
    min = 0
  }
   var randomSet = Math.random()
   return Math.floor(min*(1 - randomSet) + randomSet*max)
}

function getRandomItem(list) {
   return list[randomInt(list.length)]
}
  

  function generatePassword() {
    
    var userInput = window.prompt("How long do you want your password to be?")

    var passwordLength = parseInt(userInput)
    
    if (isNaN(passwordLength)){
      window.alert("That is not a number!")
      return
    } 

    if (passwordLength < 8 || passwordLength >128) {
      window.alert("Password length must be between 8 and 128 characters!")
      return
    }

    var userNeedsUppercase = window.confirm("Do you want to have uppercase letters in your password?                Ok: Yes      Cancel: No")
    var userNeedsLowercase = window.confirm("Do you want to have lowercase letters in your password?                Ok: Yes      Cancel: No")
    var userNeedsNumbers = window.confirm("Do you want to have numbers in your password?                            Ok: Yes      Cancel: No")
    var userNeedsSymbols = window.confirm("Do you want to have symbols in your password?                                 Ok: Yes        Cancel: No")

    var uppercaseList = ['A', 'B', 'C' , 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var lowercaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
    var numbersList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var symbolsList = ['!', '@', '#', '$', '^', '*', '<', '?', '%', '&'] 

    var allCharactersList = []

    //consider a for loop for changing lowercase char. to uppercase characters.
   
    if (userNeedsUppercase === true) {
      allCharactersList.push(uppercaseList)
    }

    if (userNeedsLowercase === true) {
      allCharactersList.push(lowercaseList)
    }

    if (userNeedsNumbers === true) {
      allCharactersList.push(numbersList)
    }

    if (userNeedsSymbols === true) {
      allCharactersList.push(symbolsList)
    } 
    
    if (allCharactersList.length === 0) {
      allCharactersList.push(uppercaseList)
    }

    var generatedPassword = ""

    for (var i = 0; i < passwordLength; i++) {
       var randomList = getRandomItem(allCharactersList)
       var randomCharacters = getRandomItem(randomList)
       generatedPassword += randomCharacters;
      }
return generatedPassword  
}


// Write password to the #password input
  function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);