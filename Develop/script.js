// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare variables for uppercase, lowercase, numeric, and special characters.
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var special = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordLength;
var upperChar;
var lowerChar;
var specialChar;
var numChar;

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

// Let's ask the user what character types to include in their password (must include at least one type)
function charType() {
  upperChar = confirm("Click OK to include Upper case characters");
  lowerChar = confirm("click OK to include lower case characters");
  specialChar = confirm("Click OK to include special characters");
  numChar = confirm("Click OK to include numbers");

// Alert to notify user that at least one character type must be selected
  if (!(upperChar || lowerChar || specialChar || numChar)) {
  return alert("You must select at least one character type");
  }
}

// Function to generate password using the user-selected input(s)
function generatePassword(){
  chooseLength();
  charType();
  console.log(passwordLength);

    var chars = "";
    var password = "";

  if (upperChar){
  chars += upperCase;
  }

  if (lowerChar){
    chars += lowerCase;
  }

  if (specialChar){
      chars += special;
  }
  
  if (numChar){
  chars += numeric;
  } 

    for(var i = 0; i < passwordLength; i++){
    password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password1 ="";
  password1 = generatePassword();
  //document.getElementById("password").innerHTMLML = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password1;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//document.getElementById("generate").addEventListener("click", writePassword);
