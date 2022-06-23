// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare variables for uppercase, lowercase, numeric, and special characters.
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var special = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordLength;

// Function to check password length
function chooseLength() {
  passwordLength = prompt("How many characters would you like to include in your password?");

  // Use conditionals to restrict user to select password length between 8 and 128 characters inclusive

    if (passwordLength<8){
    alert("Password length must be at least 8 characters long");
    chooseLength();
    }else if (passwordLength>128){
    alert("Password length must be less than 129 characters");
    chooseLength();
    }else if (isNaN(passwordLength)){
    alert("Password length must be a number between 8-128 characters");
    chooseLength();
    }else{
    alert("Please select what character types you would like to be included in your password.");
    }
    return passwordLength;

}

function generatePassword(){
  chooseLength();
  console.log(passwordLength);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
