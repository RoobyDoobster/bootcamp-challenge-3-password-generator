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
  var lengthPrompt = prompt("Choose length between 8 & 128 characters");
  var lowCharPrompt = confirm("Would you like lowercase letters?");
  var upCharPrompt = confirm("Would you like uppercase letters?");
  var numCharPrompt = confirm("Would you like numbers?");
  var speCharPrompt = confirm("Would you like special characters?")

  var passMinLength = 8;
  var passMaxLength = 128;
  var upCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  var numCharacters = "0123456789".split("");
  var speCharacters = "!@#$%^&*()-_".split("");

  var results = [];

  if (upCharPrompt){
    results = results + upCharacters;
  }
  if (lowCharPrompt){
    results = results + lowCharacters;
  }
  if (numCharPrompt){
    results = results + numCharacters;
  }
  if (speCharPrompt){
    results = results + speCharacters;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);// should be writePassword
