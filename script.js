// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable declaration for password criteria
var passwordLength = 0;
var passwordLowercase = false;
var passwordUppercase = false;
var passwordNumeric = false;
var passwordSpecial = false;

// Set available characters into separate strings
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNum = "0123456789";
var charSpecial = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\\";

passwordLength = prompt("Please enter a length for your password between 8 and 128 characters: ");

// Nested if for criteria verification
if (passwordLength < 8) {
  alert("The desired password of " + passwordLength + " characters is too short. Please enter a length that is between 8 and 128 characters.");
}
else if (passwordLength > 128) {
  alert("The desired password of " + passwordLength + " characters is too long. Please enter a length that is between 8 and 128 characters.");
}
else {
  passwordLowercase = confirm("Would you like your password to include lowercase characters?");
  
  passwordUppercase = confirm("Would you like your password to include uppercase characters?");
  
  passwordNumeric = confirm("Would you like your password to include numeric characters?");

  passwordSpecial = confirm("Would you like your password to include special characters?");
}

generatePassword();
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generates Password based on User Preference
function generatePassword() {

  var passwordOptions = [""];
  var finalPassword = [""];

  if (passwordLowercase) {
    passwordOptions = passwordOptions + charLower;
  }
  if (passwordUppercase) {
    passwordOptions = passwordOptions + charUpper;
  }
  if (passwordNumeric) {
    passwordOptions = passwordOptions + charNum;
  }
  if (passwordSpecial) {
    passwordOptions = passwordOptions + charSpecial;
  }

  for (var i = 0; i < passwordLength; i++) {
    finalPassword = finalPassword + passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
  }

  console.log(passwordOptions);
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
