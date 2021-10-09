// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseli = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseli = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numli = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specialCharli = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];
var finalpassword = "";
var passwordarr = [];
var passlength = "";

var lowerconfirm = [];
var upperconfirm = [];
var numconfirm = [];
var specialcharconfirm = [];

var passwordarray = function () {
  if (upperconfirm) {
    passswordarr = passwordarr.concat(upperCaseli);
  }
  if (lowerconfirm) {
    passswordarr = passwordarr.concat(lowerCaseli);
  }
  if (numconfirm) {
    passswordarr = passwordarr.concat(numli);
  }
  if (specialcharconfirm) {
    passswordarr = passwordarr.concat(specialCharli);
  }
  return passwordarr;
};

function random(passwordarr) {
  return passwordarr[Math.floor(Math.random() * passwordarr.length)];
};
// Main password code creating first a prompt followed by the other criteria that can be confirmed
function generatePassword() {
  var pass = "";
  passlength = prompt("How many characters do you want in your password");
  if (!passlength) {
    alert("please enter a length")
    return
  } if (passlength > 128 || passlength < 8) {
    pass += pass.concat(length);
    return;
  }
  upperconfirm = confirm("Do you want lower case characters?");
  lowerconfirm = confirm("Do you want upper case charracters");
  numconfirm = confirm("Do you want numbers?");
  specialcharconfirm = confirm("Do you want special characters?");
  if (!lowerconfirm && !upperconfirm && !numconfirm && !specialcharconfirm) {
    alert("Please choose one");
    return;
  }

  passwordarray()
  for (i = 0; i <= length; i++) {
    finalpassword = finalpassword.concat(random(passwordarr));
  }
  return finalpassword;
};


function writePassword() {
  finalpassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = finalpassword;
}
generateBtn.addEventListener("click", writePassword);
