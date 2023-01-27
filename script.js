// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  generateBtn.log(passwordText);
  passwordText.value = password;

}

function generatePassword() {
  var passLength = window.prompt("Choose length between 8 & 128 characters");
  var lowChar = window.prompt("Would you like lowercase letters?");
  var upChar = window.prompt("Would you like uppercase letters?");
  var numChar = window.prompt("Would you like numbers?");
  var speChar = window.prompt("Would you like special characters?")
  if(!passLength) {
    return;
  }else{
    console.log(passLength);
  }
  if(!lowChar) {
    return;
  }if(lowChar=="no") {
    return;
  }else{
    console.log(lowChar);
  }
  if(!upChar) {
    return;
  }if(upChar=="no") {
    return;
  }else{
    console.log(upChar);
  }
  if(!numChar) {
    return;
  }if(numChar=="no") {
    return;
  }else{
    console.log(numChar);
  }
  if(!speChar) {
    return;
  }if(speChar=="no") {
    return;
  }else{
    console.log(speChar);
  }

  // console.log(passLength);
  // console.log(lowChar);
  // console.log(upChar);
  // console.log(numChar);
  // console.log(speChar);
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);// should be writePassword
