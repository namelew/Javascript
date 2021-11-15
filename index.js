let cards = []

let sum = 0
let hasBlackJack = false
let isAlive = false
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

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    } else if(randomNumber == 1){
        return 11
    } else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    for(let i = 0; i < 2; i++){
        let card = getRandomCard()
        cards.push(card)
        sum += card
    }
    renderGame()
}

function displayCards(pager){
    cardEl.textContent += cards[pager - 1] + " "
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
    if(isAlive && !(hasBlackJack)){
        let card = getRandomCard()

        sum += card

        cards.push(card)

        renderGame()
    }
}