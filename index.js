let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItens = ""
    for(let i=0; i < leads.length; i++){
        listItens += `
        <li>
            <a target="_blank" href="${leads[i]}">${leads[i]}</a> 
        </li>
        `
    }
    ulEl.innerHTML = listItens
}

inputBtn.addEventListener("click", function (){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function (){
    myLeads = []
    localStorage.clear()
    render(myLeads)
})