// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Arrays for each character type
let lowerCaseLetters = [ "a", 'b', 'c', 'd', 'e', "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
let upperCaseLetters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
let numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", '9'];
let specialCharacters = ["!", "@", '"', "'", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", "`", "~", "<", ">", "?", ",", "." ];
arr = [];

// need to ask user for their chosen password options
function getUsersPasswordOptions() {
  // variable for password length
  let passwordLength = parseInt(prompt('How many characters would you like your password to be? Must choose between 8 and 128 characters.'), 10)
  // check if password length entered is a number
  if (Number.isNaN(passwordLength)) {
    alert("Password length must be a number.")
    return;
  }
  // Check that password is long enough
  if (passwordLength < 8) {
    alert("Password is not long enough.")
    return;
  }
  // Check that password is not too long
if (passwordLength > 128) {
  alert("Password is too long.")
  return;
}
  // Variables to store whether user has selected an individual option
  let includeSpecialCharacters = confirm("Hit OK to include special characters");
  if (includeSpecialCharacters === true) {
    arr = arr.concat(specialCharacters);
  };
  let includesLowerCaseLetters = confirm("Hit OK to include lower case letter");
  if (includesLowerCaseLetters === true) {
    arr = arr.concat(lowerCaseLetters);
  };
  let includesUpperCaseLetters = confirm("Hit OK to unclude upper case letters");
  if (includesUpperCaseLetters === true) {
    arr = arr.concat(upperCaseLetters);
  };
  let includesNumbers = confirm("Hit OK to include numbers");
  if (includesNumbers === true) {
    arr = arr.concat(numbers);
  };


if (includeSpecialCharacters == false && includesLowerCaseLetters == false && includesUpperCaseLetters == false && includesNumbers == false) {
    alert("Must select at least one character type");
};
//If/when condition is met, generate password
    generatePassword();

}
let index = 0; 
let randomElement = ""; 

function generatePassword() {
    for (let i= choice; i < passwordLength; i++) {
        index = Math.floor(Math.random() * arr.length);
        randomElement = arr[index];
        
    }
}


  // Object to group users selections
  let usersPasswordOptions = {
    passwordLength: passwordLength,
    includeSpecialCharacters: includeSpecialCharacters,
    includesUpperCaseLetters: includesUpperCaseLetters,
    includesLowerCaseLetters: includesLowerCaseLetters,
    includesNumbers: includesNumbers
  }
  return usersPasswordOptions


// Function to get random element from array 
function getRandomArrayElement(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  let randomElement = arr[randomIndex]
  return randomElement
}

// Function to generate password
function generatePassword() {
  let usersOptions = getUsersPasswordOptions();
  // Check to see if we have any options
  if (!usersOptions) {
    return;
  }
  // variable to store the password as we build it
  let result = []


// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}