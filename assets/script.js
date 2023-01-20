
// Arrays for each character type
let lowerCaseLetters = [ "a", 'b', 'c', 'd', 'e', "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
let upperCaseLetters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
let numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", '9'];
let specialCharacters = ["!", "@", '"', "'", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", "`", "~", "<", ">", "?", ",", "." ];
arr = [];
var count = 1;
var password = [];
let generateBtn = document.querySelector("#generate");
var passwordLength;
var randomPassword;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Need to ask user for their chosen password options
function getUsersPasswordOptions() {
  // Variable for password length
  passwordLength = prompt('How many characters would you like your password to be? Must choose between 8 and 128 characters.');
  // Check if password length entered is a number
  if (Number.isNaN(passwordLength)) {
    alert("Password length must be a number!")
    return;
  }
  // Check that password is long enough
  if (passwordLength < 8) {
    alert("Password is not long enough!")
    return;
  }
  // Check that password is not too long
if (passwordLength > 128) {
  alert("Password is too long!")
  return;
}
else {
// Variables to store whether user has selected an individual option
let includeSpecialCharacters = confirm("Hit OK to include special characters.");
  if (includeSpecialCharacters === true) {
    arr = arr.concat(specialCharacters);
    randomPassword += randomElement(specialCharacters);
    count += 1;
  };
  let includesLowerCaseLetters = confirm("Hit OK to include lower case letter.");
  if (includesLowerCaseLetters === true) {
    arr = arr.concat(lowerCaseLetters);
    randomPassword += randomElement(lowerCaseLetters);
    count += 1
  };
  let includesUpperCaseLetters = confirm("Hit OK to unclude upper case letters.");
  if (includesUpperCaseLetters === true) {
    arr = arr.concat(upperCaseLetters);
    randomPassword += randomElement(upperCaseLetters);
    count += 1;
  };
  let includesNumbers = confirm("Hit OK to include numbers.");
  if (includesNumbers === true) {
    arr = arr.concat(numbers);
    randomPassword += randomElement(numbers);
    count += 1;
  };
};

if (includeSpecialCharacters == false && includesLowerCaseLetters == false && includesUpperCaseLetters == false && includesNumbers == false) {
    alert("Must select at least one character type");
}
//If/when condition is met, generate password
  else {
      createPassword();
}};

let index = 0; 
let randomElement = ""; 

//Function to get random element from array-generate password
function generatePassword() {
    for (let i= 0; i < passwordLength; i++){
        index = Math.floor(Math.random() * arr.length);
        randomElement = arr[index];
        randomPassword = randomPassword += randomElement;
    }
    return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}