// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseli = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseli = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numli = [0,1,2,3,4,5,6,7,8,9,];
var specialCharli =  ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":"];
var passlength="";
var passwordarr= [];

var lowerconfirm=[];
var upperconfirm=[];
var numconfirm=[];
var specialcharconfirm=[];

var passwordarray = function(){
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
function random(){
  return passwordarray[Math.floor(Math.random() * passwordarray.length)];
};
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function generatePassword(){
  passlength = prompt("How many Characters would you like in your password?");{
    if (passLength<8 || passLength >128) {
      alert("password does not match criteria min 8: max: 128");}
    else 
    lowerconfirm= confirm("Do you want lower case characters?");
    upperconfirm= confirm("Do you want upper case charracters");
    numconfirm= confirm("Do you want numbers?");
    specialcharconfirm= confirm("Do you want special characters?");
    if(!lowercase && !uppercase && !number && !specialChar){
      alert("Please choose one");
      criteria();
    }};
    criteria();
  }


    
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// generateBtn.addEventListener("click", writePassword);
}


// created all my variables for my functions
  // var array=[];
  // var char = "";
  // // these are still showing never read
  // var passLength;
  // var uppercase;
  // var lowercase;
  // var number;
  // var specialchar;
// created first prompt asking telling how many characters my password will generate

// if confirmed this will add a random number,letter,specialchar to pass
// stuff();
// if (lowercase){ char += lowerCaseli};
// if (uppercase){char += upperCaseli};
// if (number){char += numli};
// if (specialchar){char += specialCharli};
//   // makes the choice random
// for (i=0;i<passlength;i++){
//   array[i] = char.charAt(Math.floor(Math.random()* char.length));
// }
// // makes pass a string
// array = array.join(" ");
// return array;