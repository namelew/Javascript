let num1 = 8
let num2 = 2

let sum = document.getElementById("sum-el")

document.getElementById("num1-el").innerText = num1
document.getElementById("num2-el").innerText = num2

function add(){
    if(sum.innerText != "Sum: "){
        sum.textContent = "Sum: " + String(num1 + num2)
    }else{
        sum.textContent += String(num1 + num2)
    }
}

function subtract(){
    if(sum.innerText != "Sum: "){
        sum.textContent = "Sum: " + String(num1 - num2)
    }else{
        sum.textContent += String(num1 - num2)
    }
}

function multiply(){
    if(sum.innerText != "Sum: "){
        sum.textContent = "Sum: " + String(num1 * num2)
    }else{
        sum.textContent += String(num1 * num2)
    }
}

function divide(){
    if(sum.innerText != "Sum: "){
        sum.textContent = "Sum: " + String(num1/num2)
    }else{
        sum.textContent += String(num1/num2)
    }
}