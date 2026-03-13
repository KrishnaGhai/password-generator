const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

generateEl.addEventListener("click", () => {

const length = lengthEl.value;

let characters = "";

if(lowercaseEl.checked)
characters += "abcdefghijklmnopqrstuvwxyz";

if(uppercaseEl.checked)
characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

if(numbersEl.checked)
characters += "0123456789";

if(symbolsEl.checked)
characters += "!@#$%^&*(){}[]=<>/,";

let password = "";

for(let i=0;i<length;i++){

password += characters.charAt(
Math.floor(Math.random() * characters.length)
);

}

resultEl.innerText = password;

});

clipboardEl.addEventListener("click", () => {

const textarea = document.createElement("textarea");

const password = resultEl.innerText;

if(!password) return;

textarea.value = password;

document.body.appendChild(textarea);

textarea.select();

document.execCommand("copy");

textarea.remove();

alert("Password copied to clipboard");

});