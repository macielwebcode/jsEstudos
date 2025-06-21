// setInterval

function acao(){
    document.writeln("executando")
}

//de forma anonima
setInterval(() => {
    document.writeln("executando")

}, 1000)

//setTimeout - depois de um tempo determinado que chama a ação
setTimeout(acao, 3000)