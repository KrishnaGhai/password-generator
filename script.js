const generatorBtn = document.getElementById("generatorBtn")
const checkerBtn = document.getElementById("checkerBtn")

const generatorSection = document.getElementById("generatorSection")
const checkerSection = document.getElementById("checkerSection")

generatorBtn.onclick = () => {

generatorSection.style.display = "block"
checkerSection.style.display = "none"

}

checkerBtn.onclick = () => {

generatorSection.style.display = "none"
checkerSection.style.display = "block"

}

const result = document.getElementById("result")
const length = document.getElementById("length")

const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase")
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")

const generate = document.getElementById("generate")
const clipboard = document.getElementById("clipboard")

const strength = document.getElementById("strength")
const copyMsg = document.getElementById("copy-msg")

generate.onclick = () => {

let characters = ""

if(lowercase.checked)
characters += "abcdefghijklmnopqrstuvwxyz"

if(uppercase.checked)
characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

if(numbers.checked)
characters += "0123456789"

if(symbols.checked)
characters += "!@#$%^&*()"

let animationTime = 15

let interval = setInterval(() => {

let tempPassword = ""

for(let i = 0; i < length.value; i++){

tempPassword += characters.charAt(
Math.floor(Math.random() * characters.length)
)

}

result.innerText = tempPassword

animationTime--

if(animationTime === 0){

clearInterval(interval)

let finalPassword = ""

for(let i = 0; i < length.value; i++){

finalPassword += characters.charAt(
Math.floor(Math.random() * characters.length)
)

}

result.innerText = finalPassword

checkStrength(finalPassword)

}

}, 50)

}

clipboard.onclick = () => {

if(!result.innerText) return

navigator.clipboard.writeText(result.innerText)

copyMsg.innerText = "Password Copied!"

setTimeout(() => {

copyMsg.innerText = ""

}, 2000)

}

function checkStrength(password){

let score = 0

if(password.length >= 8) score++
if(/[A-Z]/.test(password)) score++
if(/[0-9]/.test(password)) score++
if(/[!@#$%^&*]/.test(password)) score++

if(score <= 2)
strength.innerText = "Weak 🔴"

else if(score === 3)
strength.innerText = "Medium 🟡"

else
strength.innerText = "Strong 🟢"

}

/* Manual Password Checker */

const manualPassword = document.getElementById("manual-password")
const manualStrength = document.getElementById("manual-strength")

manualPassword.addEventListener("input", () => {

let password = manualPassword.value

let score = 0

if(password.length >= 8) score++
if(/[A-Z]/.test(password)) score++
if(/[0-9]/.test(password)) score++
if(/[!@#$%^&*]/.test(password)) score++

if(score <= 1)
manualStrength.innerText = "Weak 🔴"

else if(score <= 3)
manualStrength.innerText = "Medium 🟡"

else
manualStrength.innerText = "Strong 🟢"

})