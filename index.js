let fruit = ["apple", "orange", "apple", "apple", "orange"]
let appleEl = document.getElementById("apple-el")
let orangeEl = document.getElementById("orange-el")

function set() {
    for(let i = 0; i < fruit.length; i++){
        if(fruit[i] == "apple"){
            appleEl.textContent += fruit[i] + "\n"
        }else{
            orangeEl.textContent += fruit[i] + "\n"
        }
    }
}