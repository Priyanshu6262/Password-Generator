const passwordBox = document.getElementById("password");
const length = 10;

const upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
const lowerCase = "acdefghijklmnopqrstuvwxz"
const number = "0123456789"
const symbols = "@#$%^&*!{}[]()<>"

const allChars = upperCase + lowerCase + number + symbols ;

function createPassword() {
    let password = " ";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbere[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}