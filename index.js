let count = 0;
let countEl = document.getElementById("count-el");

let message = "Last entred: ";
let logEl = document.getElementById("log-el");

function increment(){
    count += 1;
    countEl.innerText = count;
}

function save(){
    message += count + " - ";
    count = 0;

    countEl.innerText = count;
    logEl.innerText = message;
}