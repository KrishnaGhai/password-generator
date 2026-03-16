const genBtn=document.getElementById("genBtn")
const checkBtn=document.getElementById("checkBtn")

const generator=document.getElementById("generator")
const checker=document.getElementById("checker")

genBtn.onclick=()=>{
generator.style.display="block"
checker.style.display="none"
}

checkBtn.onclick=()=>{
generator.style.display="none"
checker.style.display="block"
}

const password=document.getElementById("password")
const generate=document.getElementById("generate")

const length=document.getElementById("length")
const upper=document.getElementById("upper")
const lower=document.getElementById("lower")
const number=document.getElementById("number")
const symbol=document.getElementById("symbol")

const strengthText=document.getElementById("strengthText")
const strengthBar=document.getElementById("strengthBar")
const crackTime=document.getElementById("crackTime")

const copy=document.getElementById("copy")
const copyMsg=document.getElementById("copyMsg")

const toggle=document.getElementById("toggle")

let visible=true

toggle.onclick=()=>{
if(visible){
password.style.filter="blur(6px)"
visible=false
}
else{
password.style.filter="none"
visible=true
}
}

generate.onclick=()=>{

let chars=""

if(upper.checked) chars+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
if(lower.checked) chars+="abcdefghijklmnopqrstuvwxyz"
if(number.checked) chars+="0123456789"
if(symbol.checked) chars+="!@#$%^&*()"

let anim=10

let interval=setInterval(()=>{

let temp=""

for(let i=0;i<length.value;i++){
temp+=chars[Math.floor(Math.random()*chars.length)]
}

password.innerText=temp

anim--

if(anim===0){

clearInterval(interval)

let final=""

for(let i=0;i<length.value;i++){
final+=chars[Math.floor(Math.random()*chars.length)]
}

password.innerText=final

checkStrength(final)

}

},50)

}

copy.onclick=()=>{

navigator.clipboard.writeText(password.innerText)

copyMsg.innerText="Copied!"

setTimeout(()=>{

copyMsg.innerText=""

},2000)

}

function checkStrength(pass){

let score=0

if(pass.length>=8) score++
if(/[A-Z]/.test(pass)) score++
if(/[0-9]/.test(pass)) score++
if(/[!@#$%^&*]/.test(pass)) score++

let width=score*25

strengthBar.style.width=width+"%"

if(score<=2){
strengthText.innerText="Weak"
strengthBar.style.background="red"
crackTime.innerText="Crack time: seconds"
}

else if(score==3){
strengthText.innerText="Medium"
strengthBar.style.background="orange"
crackTime.innerText="Crack time: hours"
}

else{
strengthText.innerText="Strong"
strengthBar.style.background="lime"
crackTime.innerText="Crack time: years"
}

}

/* password checker */

const checkInput=document.getElementById("checkInput")
const checkStrengthText=document.getElementById("checkStrength")
const checkBar=document.getElementById("checkBar")
const checkTime=document.getElementById("checkTime")

checkInput.addEventListener("input",()=>{

let pass=checkInput.value

let score=0

if(pass.length>=8) score++
if(/[A-Z]/.test(pass)) score++
if(/[0-9]/.test(pass)) score++
if(/[!@#$%^&*]/.test(pass)) score++

let width=score*25

checkBar.style.width=width+"%"

if(score<=1){
checkStrengthText.innerText="Weak"
checkBar.style.background="red"
checkTime.innerText="Crack time: seconds"
}

else if(score<=3){
checkStrengthText.innerText="Medium"
checkBar.style.background="orange"
checkTime.innerText="Crack time: hours"
}

else{
checkStrengthText.innerText="Strong"
checkBar.style.background="lime"
checkTime.innerText="Crack time: years"
}

})