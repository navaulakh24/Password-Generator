// Arrays for each character type
let lowerCaseLetters = ["a", 'b', 'c', 'd', 'e', "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", '9'];
let specialCharacters = ["!", "@", '"', "'", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", "`", "~", "<", ">", "?", ",", "."];

let generateBtn = document.querySelector("#generate");
var passwordLength;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//includes criteria
let includeSpecialCharacters;
let includesLowerCaseLetters;
let includesUpperCaseLetters;
let includesNumbers;




let index = 0;
let randomElement = "";

//Function to get random element from array-generate password
function generatePassword() {

    let arr = [];
    var placeholder = [];

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
        var includeSpecialCharacters = confirm("Hit OK to include special characters.");

        var includesLowerCaseLetters = confirm("Hit OK to include lower case letter.");

        var includesUpperCaseLetters = confirm("Hit OK to unclude upper case letters.");

        var includesNumbers = confirm("Hit OK to include numbers.");

    }

    if (includeSpecialCharacters == false && includesLowerCaseLetters == false && includesUpperCaseLetters == false && includesNumbers == false) {
        alert("Must select at least one character type");
    }

    if (includeSpecialCharacters) {
        arr = arr.concat(specialCharacters);

        console.log(arr);
    }

    if (includesLowerCaseLetters) {
        arr = arr.concat(lowerCaseLetters);

        console.log(arr);
    }

    if (includesUpperCaseLetters) {
        arr = arr.concat(upperCaseLetters);

        console.log(arr);
    }
    if (includesNumbers) {
        arr = arr.concat(numbers);

        console.log(arr);
    }




    for (let i = 0; i < passwordLength; i++) {
        index = Math.floor(Math.random() * arr.length);
        randomElement = arr[index];

        placeholder.push(randomElement);

        console.log(placeholder);
    }

    let password = placeholder.join("");

    return password;




}

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}