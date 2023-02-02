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
  var lengthPrompt = window.prompt("Choose length between 8 & 128 characters");
  var lowCharPrompt = window.prompt("Would you like lowercase letters?");
  var upCharPrompt = window.prompt("Would you like uppercase letters?");
  var numCharPrompt = window.prompt("Would you like numbers?");
  var speCharPrompt = window.prompt("Would you like special characters?")

  var passMinLength = 8;
  var passMaxLength = 128;
  var upCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  var numCharacters = "0123456789".split("");
  var speCharacters = "!@#$%^&*()-_".split("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);// should be writePassword
