// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passlength="";
var passwordarr= [];

var lowerconfirm=[];
var upperconfirm=[];
var numconfirm=[];
var specialcharconfirm=[];

var arrayforall= function() {
  if (lowerconfirm) {
    passwordarr = passwordarr.concat(lowercase);
  if (lowerconfirm) {
    passwordarr = passwordarr.concat(lowercase);
  if (lowerconfirm) {
    passwordarr = passwordarr.concat(lowercase);
  if (lowerconfirm) {
    passwordarr = passwordarr.concat(lowercase);
  }
return passwordarr;
};



// Write password to the #password input
function generatePassword(){
  
  function criteria() {
  passlength = prompt("How many Characters would you like in your password?");{
    if (passlength<8 || passlength >128) {
      alert("password does not match criteria min 8: max: 128");}
      criteria();
  }};
  criteria();

  function stuff(){
    lowerconfirm= confirm("Do you want lower case characters?");
    upperconfirm= confirm("Do you want upper case charracters");
    numconfirm= confirm("Do you want numbers?");
    specialconfirm= confirm("Do you want special characters?");
    if(!lowercase && !uppercase && !num && !specialChar){
      alert("Please choose one");
      stuff();
    }};
    stuff();
  }


    




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


