let users = [
    {nome: "babi", cargo: "dev", status: "MIMIR"},
    {nome: "babi dois", cargo: "dev", status: "MIMIR"},
    {nome: "babi tres", cargo: "dev", status: "MIMIR"},
]

let { 0:babi } = users

let pessoa = {nome: "babi", cargo: "dev", status: "MIMIR"}
let newPerson = {
    ...pessoa,
    status: 'ATIVO',
    cidade: "Pp"
}

//desconstruindo obj
const { nome:nomePessoa, cargo } = pessoa

//spread operator
let uns = [1, 2, 3]
let dois = [...uns, 4, 5, 6]

//REST OPERATOR - recebe tudo e trata como um array/lista
function products(...names){


    console.log(names)
}

convidados("a", "b", "c")


function sortearNumbers(...numeros){
    console.log(numeros)

    const numeroGerado = Math.floor(Math.random() * numeros.length)
    console.log(numeros[numeroGerado])
}
sortearNumbers(1, 4, 6546, 3, 7, 2, 64)




//map

let lista = ["mama", "baba", "caca"]
lista.map((item, index) => {
    console.log(item, index)
})

// reduce - reduzindo um array

let nums = [4, 6, 9, 9]
let total = nums.reduce((acumulador, numero, indice, original) => {
    return acumulador += numero
})
console.log(total)

//find - buscando em um array - devolve primeiro item que encontrar

let aleatorios = ["eu", "alguem", 4, 7, 9, "%"]
let search = aleatorios.find((item) => {
    if(item === "eu")
    return console.log("search success")
})

//filter - filtrar algo dentro do array - devolve tudo que encontrar da comparação
let words = ["trabalhar", "estudar", "passear com babi", "codar", "fazer UI", "xixi", "skin", "café"]
letresultWords = words.filter((item) =>{
    return item.length <= 4 //palavras menor a 4
})

//includes - devolve um boolean
let abc = ["assdf", "lucas"]
console.log(abc.includes("lucas"))

if(abc.includes("maria")){
    console.log("na lista")
}else{
    console.log("não está na lista")
}

//startsWith - texto começa com oq for informado na condição
console.log(abc.startsWith("ass"))

//endsWith - texto termina com oq for informado na condição
console.log(abc.endsWith("s"))

let listElement = document.querySelector('#app ul')
let inputElement = document.querySelector('#app input')
let buttonElement = document.querySelector('#app button')

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || []

function renderTasks(){
    listElement.innerHTML = []

    tarefas.map((todo) => {
        let liElement = document.createElement("li")
        let taskText = document.createElement(todo)

        let linkElement = document.querySelector("a")
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Excluir")
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(todo)

        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)

        liElement.appendChild(taskText)
        liElement.appendChild(linkElement)
        listElement.appendChild(liElement)
    })
}
renderTasks()