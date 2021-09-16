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

  var array=[];
  var char = "";
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
if (lowercase){ char += lowerCaseli};
if (uppercase){char += upperCaseli};
if (number){char += numli};
if (specialchar){char += specialCharli};
  
for (i=0;i<passlength;i++){
  array[i] = char.charAt(Math.floor(Math.random()* char.length));
}

array = array.join(" ");
return array;

    
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


generateBtn.addEventListener("click", writePassword);
}
