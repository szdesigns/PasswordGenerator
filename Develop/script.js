// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
var finalpassword='';
var options = {};
var charCount= prompt ("How many characters would you like your password to contain? (8-128)")

if (charCount < 8 || charCount > 128) {
  alert("Length must be 8 -128 characters. Please retry")
  generatePassword()
  
} else{
  var uppercase = confirm("Would you like to use uppercase letters?")
  var lowercase = confirm("Would you like to use lowercase letters?")
  var number = confirm("Would you like to use numbers?")
  var symbol = confirm("Would you like to use special characters?")
  // console.log(uppercase)
  // console.log(lowercase)
  // console.log(number)
  // console.log(symbol)
  if(!uppercase&&!lowercase&&!number&&!symbol) {alert ("You must choose one of the 4 options")}
}

if (uppercase) {options.uppercase = "uppercase";}
if (lowercase) {options.lowercase = "lowercase";}
if (number)  {options.number = "number";}
if (symbol) {options.symbol = "symbol";}

for (let i = 0; i < charCount; i++){
  for (key in options) {
    if(finalpassword.length < charCount){
      if (key==="uppercase"){
        finalpassword+=getrandomupper()
      }
      else if(key==="lowercase"){
        finalpassword+=getrandomlower()
      }
      else if(key==="number"){
        finalpassword+=getrandomnumber();
      }
      else if(key==="symbol"){
      finalpassword+=getrandomsymbol();
    }
    }
    else{
      return finalpassword;
    }
}
  }

// console.log(finalpassword)
// return generatePassword()
}
function getrandomupper(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
 }
 function getrandomlower(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getrandomnumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getrandomsymbol(){
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random()*symbol.length)];
}