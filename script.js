// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseli = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseli = "abcdefghijklmnopqrstuvwxyz";
var numli = "0123456789";
var specialCharli = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// var passlength="";
// var passwordarr= [];

// var lowerconfirm=[];
// var upperconfirm=[];
// var numconfirm=[];
// var specialcharconfirm=[];



// Write password to the #password input
function generatePassword(){

  // var passwordarr=[];
  var charAvail = "";
  var passLength;
  var uppercase;
  var lowercase;
  var number;
  var specialchar;

  function criteria() {
  passlength = prompt("How many Characters would you like in your password?");{
    if (passLength<8 || passLength >128) {
      alert("password does not match criteria min 8: max: 128");}
      criteria();
  }};
  criteria();

  function stuff(){
    lowercase= confirm("Do you want lower case characters?");
    uppercase= confirm("Do you want upper case charracters");
    number= confirm("Do you want numbers?");
    specialchar= confirm("Do you want special characters?");
    if(!lowercase && !uppercase && !number && !specialChar){
      alert("Please choose one");
      stuff();
    }};
    stuff();
  }

stuff();
if (lowercase){ charAvail += lowerCaseli};
if (uppercase){charAvail += upperCaseli};
if (number){charAvail += numli};
if (specialchar){charAvail += specialCharli};
  
for (i=0;i<passlength;i++){
  passwordarray[i] = charAvail.charAt(Math.floor(Math.random()* charAvail.length));
}


    




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
