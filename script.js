// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passlength="";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  
  

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passlength = prompt("How many Characters would you like in your password?");
    if (passlength<8 || passlength >128) {
      alert("password does not match criteria");
      return generatePassword();
      
    }
  }
