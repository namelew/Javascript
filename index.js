let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function (){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
})

deleteBtn.addEventListener("dblclick", function (){
    for(let i = 0; i < myLeads.length; i++){
        myLeads.pop()
    }
    localStorage.clear()
    ulEl.innerHTML = ""
})


function renderLeads(){
    let listItens = ""
    for(let i=0; i < myLeads.length; i++){
        //listItens += "<li>"+"<a target='_blank'href='"+myLeads[i]+"'>"+ myLeads[i] +"</a>"+ "</li>"
        listItens += `
        <li>
            <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a> 
        </li>
        `
    }
    ulEl.innerHTML = listItens
}