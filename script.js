// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseli = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseli = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numli = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specialCharli = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];
var finalpassword = "";
var passwordarr = [];
var passlength = "";

var lowerconfirm;
var upperconfirm;
var numconfirm;
var specialcharconfirm;

var passwordarray = function () {
  if (upperconfirm) {
    passwordarr = passwordarr.concat(upperCaseli);
  }
  if (lowerconfirm) {
    passwordarr = passwordarr.concat(lowerCaseli);
  }
  if (numconfirm) {
    passwordarr = passwordarr.concat(numli);
  }
  if (specialcharconfirm) {
    passwordarr = passwordarr.concat(specialCharli);
  }
};

function random(passwordarr) {
  return passwordarr[Math.floor(Math.random() * passwordarr.length)];
};
// Main password code creating first a prompt followed by the other criteria that can be confirmed
function generatePassword() {
  // var pass = "";
  passlength = prompt("How many characters do you want in your password");
  console.log(passlength);
  if (passlength === null) {
    return;
  }
  passlength = parseInt(passlength);

  if (!passlength || isNaN(passlength)) {
    alert("please enter a length")
    return generatePassword();
  } if (passlength > 128 || passlength < 8) {
    alert("Please enter a number within 8 and 128")
    // pass += pass.concat(length);
    return generatePassword();
  }
  upperconfirm = confirm("Do you want lower case characters?");
  lowerconfirm = confirm("Do you want upper case charracters");
  numconfirm = confirm("Do you want numbers?");
  specialcharconfirm = confirm("Do you want special characters?");
  if (!lowerconfirm && !upperconfirm && !numconfirm && !specialcharconfirm) {
    alert("Please choose one");
    return generatePassword();
  }

  passwordarray()
  console.log(passwordarr)
  for (i = 0; i < passlength; i++) {
    let char = random(passwordarr)
    console.log(char)
    finalpassword += char;
    console.log(finalpassword)
  }
  // return (finalpassword)
};


function writePassword() {
  // finalpassword = generatePassword();
  generatePassword()
  console.log(finalpassword)
  if (!finalpassword) {
    return;
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = finalpassword;
}
generateBtn.addEventListener("click", writePassword);
