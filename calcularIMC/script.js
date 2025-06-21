// abaixo de 17 muito abaixo do peso
// entre 17 e 18.49 abaixo do peso
// entre 18.5 e 24.99 peso normal
// entre 25 e 29.99 acima do peso

var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    event.prevetDefault()

    peso = document.getElementById('peso').value
    altura = documento.getElementById('altura').value
    imc = peso / (altura * altura)

    if(imc < 17){
        resultado = document.getElementById('resultado')
        resultado.innerHTML = '<br /> Seu resultado> ' + imc.toFixed(2) + '<br/>. Acima do peso'
    }else if(imc > 17 && imc < 18.49){
        rultado = document.getElementById('resultado')
        resultado.innerHTML = '<br /> Seu resultado> ' + imc.toFixed(2) + '<br/>. Abaixo do peso'
    }else if(imc >= 18.5 && imc < 24.99){
        rultado = document.getElementById('resultado')
        resultado.innerHTML = '<br /> Seu resultado> ' + imc.toFixed(2) + '<br/>. Peso Ideal'
    }else if(imc >= 25 && imc < 29.99){
        rultado = document.getElementById('resultado')
        resultado.innerHTML = '<br /> Seu resultado> ' + imc.toFixed(2) + '<br/>. Acima do peso'
    }else if(imc >= 30){
        rultado = document.getElementById('resultado')
        resultado.innerHTML = '<br /> Seu resultado> ' + imc.toFixed(2) + '<br/>. Obesidade'
    }

    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
}