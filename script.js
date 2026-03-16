const generatorBtn=document.getElementById("generatorBtn")
const checkerBtn=document.getElementById("checkerBtn")

const generatorSection=document.getElementById("generatorSection")
const checkerSection=document.getElementById("checkerSection")

generatorBtn.onclick=()=>{
generatorSection.style.display="block"
checkerSection.style.display="none"
}

checkerBtn.onclick=()=>{
generatorSection.style.display="none"
checkerSection.style.display="block"
}

const result=document.getElementById("result")
const length=document.getElementById("length")

const uppercase=document.getElementById("uppercase")
const lowercase=document.getElementById("lowercase")
const numbers=document.getElementById("numbers")
const symbols=document.getElementById("symbols")

const generate=document.getElementById("generate")
const clipboard=document.getElementById("clipboard")

const strength=document.getElementById("strength")
const fill=document.getElementById("strength-fill")

const crackTime=document.getElementById("crackTime")

const copyMsg=document.getElementById("copy-msg")

generate.onclick=()=>{

let characters=""

if(lowercase.checked)
characters+="abcdefghijklmnopqrstuvwxyz"

if(uppercase.checked)
characters+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

if(numbers.checked)
characters+="0123456789"

if(symbols.checked)
characters+="!@#$%^&*()"

let animationTime=12

let interval=setInterval(()=>{

let temp=""

for(let i=0;i<length.value;i++){

temp+=characters.charAt(
Math.floor(Math.random()*characters.length)
)

}

result.innerText=temp

animationTime--

if(animationTime===0){

clearInterval(interval)

let password=""

for(let i=0;i<length.value;i++){

password+=characters.charAt(
Math.floor(Math.random()*characters.length)
)

}

result.innerText=password

checkStrength(password)

}

},50)

}

clipboard.onclick=()=>{

navigator.clipboard.writeText(result.innerText)

copyMsg.innerText="Copied!"

setTimeout(()=>{

copyMsg.innerText=""

},2000)

}

/* strength checker */

function checkStrength(password){

let score=0

if(password.length>=8) score++
if(/[A-Z]/.test(password)) score++
if(/[0-9]/.test(password)) score++
if(/[!@#$%^&*]/.test(password)) score++

let percent=score*25

fill.style.width=percent+"%"

if(score<=2){
strength.innerText="Weak 🔴"
fill.style.background="red"
crackTime.innerText="Estimated crack time: seconds to minutes"
}

else if(score===3){
strength.innerText="Medium 🟡"
fill.style.background="orange"
crackTime.innerText="Estimated crack time: hours to days"
}

else{
strength.innerText="Strong 🟢"
fill.style.background="lime"
crackTime.innerText="Estimated crack time: years"
}

}

/* manual checker */

const manualPassword=document.getElementById("manual-password")
const manualStrength=document.getElementById("manual-strength")

const manualFill=document.getElementById("manual-fill")
const manualTime=document.getElementById("manualTime")

manualPassword.addEventListener("input",()=>{

let password=manualPassword.value

let score=0

if(password.length>=8) score++
if(/[A-Z]/.test(password)) score++
if(/[0-9]/.test(password)) score++
if(/[!@#$%^&*]/.test(password)) score++

let percent=score*25

manualFill.style.width=percent+"%"

if(score<=1){
manualStrength.innerText="Weak 🔴"
manualFill.style.background="red"
manualTime.innerText="Estimated crack time: seconds"
}

else if(score<=3){
manualStrength.innerText="Medium 🟡"
manualFill.style.background="orange"
manualTime.innerText="Estimated crack time: hours"
}

else{
manualStrength.innerText="Strong 🟢"
manualFill.style.background="lime"
manualTime.innerText="Estimated crack time: years"
}

})