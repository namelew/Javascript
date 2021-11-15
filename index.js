let firstCard = Math.floor(Math.random() * 10) + 2
let secondCard = Math.floor(Math.random() * 10) + 2
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#cards-el")

function displaySum(){
    if(sumEl.textContent != "Sum: "){
        sumEl.textContent = "Sum: " + sum
    } else{
        sumEl.textContent += sum
    }
}

function startGame(){
    renderGame()
}

function displayCards(pager){
    for(let i = pager - 1; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
}

function renderGame(){
    if(cards.length != 2){
        displayCards(cards.length)
    }else{
        cardEl.textContent = "Cards: " + cards[0] + " " + cards[1] + " "
    }
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

function newCard(){
    console.log("Drawing a new card from te deck")
    
    let card = Math.floor(Math.random() * 10) + 2

    sum += card

    cards.push(card)

    renderGame()
}