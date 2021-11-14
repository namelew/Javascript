let firstCard = Math.floor(Math.random() * 10) + 2
let secondCard = Math.floor(Math.random() * 10) + 2

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")

function displaySum(){
    if(sumEl.textContent != "Sum: "){
        sumEl.textContent = "Sum: " + sum
    } else{
        sumEl.textContent += sum
    }
}

function startGame(){
    displaySum()
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "You've got blackjack!"
        hasBlackJack = true
    } else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.innerText = message
}