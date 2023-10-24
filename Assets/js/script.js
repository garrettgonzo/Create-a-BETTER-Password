// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = document.querySelector("#characters");
var lowercase = document.querySelector("#lowercase");
var uppercase = document.querySelector("#uppercase");
var numeric = document.querySelector("#numeric");
var special = document.querySelector("#special");

function getRandomNumber(len) {
    return Math.floor(Math.random() * len)
    // return 5
}
var randomNumber = getRandomNumber()
// console.log(randomNumber)
// charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()@#&%!*%@&(%#@!$^&^%$#@!$()*^";
var lowerCharset = "abcdefghijklmnopqrstuvwxyz"
var upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericCharset = "0123456789"
var specialCharset = "!@#$%^&*()@#&%!*%@&(%#@!$^&^%$#@!$()*^"
function generatePassword() {
    var passwordLength = parseInt(characters.value)
    console.log(typeof passwordLength)
    if (passwordLength < 8) {
        alert("Please enter a character anmount greater than 8 characters (must be between 8 to 128 character)", "");
    }
    if (passwordLength > 128) {
        alert("Please enter a character anmount less than 128 characters (must be between 8 to 128 character)", "");
    }

    var passwordCharacterLowercase = lowercase.checked
    console.log(passwordCharacterLowercase)
    var passwordCharacterUppercase = uppercase.checked
    console.log(passwordCharacterUppercase)
    var passwordCharacterNumeric = numeric.checked
    console.log(passwordCharacterNumeric)
    var passwordCharacterSpecial = special.checked
    console.log(passwordCharacterSpecial)
    if (!passwordCharacterLowercase && !passwordCharacterUppercase && !passwordCharacterNumeric && !passwordCharacterSpecial) {
        alert("Please select all or atleast one of the boxes to continue");
        return ""
    }
    var possibilities = ""
    if (passwordCharacterLowercase) {
        possibilities += lowerCharset
    }

    if (passwordCharacterUppercase) {
        possibilities += upperCharset
    }

    if (passwordCharacterNumeric) {
        possibilities += numericCharset
    }

    if (passwordCharacterSpecial) {
        possibilities += specialCharset
    }

    var password = ""
    for (let i = 0; i < passwordLength; i++) {
        // console.log(getRandomNumber())
        password += possibilities[getRandomNumber(possibilities.length)]
        console.log(password)
    }
    console.log(password)
    return password
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
