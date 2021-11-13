let contEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
let saveMessage = "Previos entries: ";

function increment(){
    count += 1
    contEl.innerText = count
}

function save(){
    if(saveMessage == "Previos entries: "){
        saveMessage += count + " "
    } else{
        saveMessage += "- "+count+ " "
    }
    saveEl.innerText = saveMessage
    count = 0
    contEl.innerText = count
}