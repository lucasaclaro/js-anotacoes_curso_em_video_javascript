function funcaoLength() {
    var nome = document.getElementById("length").value
    var contador = nome.length
    var resultado = document.getElementById("resultado-length")
    resultado.innerHTML = `A string "${nome}" possui ${contador} caracteres.`
}

function funcaoToUpperCase() {
    var nome = document.getElementById("toUpperCase").value
    var contador = nome.toUpperCase()
    var resultado = document.getElementById("resultado-toUpperCase")
    resultado.innerHTML = `A string "${nome}" em letras maiúsculas é "${contador}".`
}

function funcaoToLowerCase() {
    var nome = document.getElementById("toLowerCase").value
    var contador = nome.toLowerCase()
    var resultado = document.getElementById("resultado-toLowerCase")
    resultado.innerHTML = `A string "${nome}" em letras minúsculas é "${contador}".`
}

function funcaoToFixed() {
    var numero = Number(document.getElementById("toFixed").value)
    var resultado = document.getElementById("resultado-toFixed")
    resultado.innerHTML = numero.toFixed(2)
}

function funcaoReplace() {
    var numero = Number(document.getElementById("replace").value)
    var resultado = document.getElementById("resultado-replace")
    resultado.innerHTML = numero.toFixed(2).replace('.', ',')
}

function funcaoCalcular() {
    var valorUm = Number(document.getElementById("valorUm").value)
    var valorDois = Number(document.getElementById("valorDois").value)
    var resultado = document.getElementById("resultado-operadores")
    resultado.innerHTML = `${valorUm} + ${valorDois} = ${valorUm + valorDois}<br>
    ${valorUm} - ${valorDois} = ${valorUm - valorDois}<br>
    ${valorUm} * ${valorDois} = ${valorUm * valorDois}<br>
    ${valorUm} / ${valorDois} = ${valorUm / valorDois}<br>
    ${valorUm} % ${valorDois} = ${valorUm % valorDois}<br>
    ${valorUm} ** ${valorDois} = ${valorUm ** valorDois}<br> `
}

function clicar() {
    var area = document.getElementById("conteudo-interaja")
    area.innerHTML = "Clicou"
    area.style.background = 'red'
    area.style.color = "white"

}

function entrar() {
    var area = document.getElementById("conteudo-interaja")
    area.innerHTML = "Entrou"
    area.style.background = 'green'

}

function saiu() {
    var area = document.getElementById("conteudo-interaja")
    area.innerHTML = "Saiu"
    area.style.background = 'yellow'
    area.style.color = "black"

}


function calculoIfElse() {
    var velocidade = Number(document.getElementById("ifElse").value)
    var resultado = document.getElementById("resultadoIfElse")

    if (velocidade > 120) {
        resultado.innerHTML = `Sua velocidade aferida foi de <strong>${velocidade} km/h</strong>. Você ultrapassou o limite da via.`
    } else {
        resultado.innerHTML = `Sua velocidade aferida foi de <strong>${velocidade} km/h</strong>. Você não ultrapassou o limite da via.`
    }
}


function calculoSwitch() {
    var dataAtual = new Date()
    var diaSemana = dataAtual.getDay()
    var resultado = document.getElementById("resultadoSwitch")
    var diaHoje = ''

    switch (diaSemana) {
        case 0:     
            diaHoje = "domingo"
            resultado.innerHTML = `Hoje é ${diaHoje}.`
            break
        case 1:
            diaHoje = "segunda-feira"
            resultado.innerHTML = `Hoje é ${diaHoje}.`
            break
        case 2:
            diaHoje = "terça-feira"
            resultado.innerHTML = `Hoje é ${diaHoje}.`
            break
        case 3:
            diaHoje = "quarta-feira"
            resultado.innerHTML = `Hoje é ${diaHoje}.`
            break
        case 4:
            diaHoje = "quinta-feira"
            resultado.innerHTML = `Hoje é ${diaHoje}.`
            break
        case 5:
            diaHoje = "sexta-feira"
            resultado.innerHTML = `Hoje é ${diaHoje}.`
            break           
        case 6:
            diaHoje = "sábado"
            resultado.innerHTML = `Hoje é ${diaHoje}.`
            break
        default:
            resultado.innerHTML = `Erro ao gerar o dia da semana. Por favor, tente novamente mais tarde.`
            break
                    }

}

function calculoWhile() {
    var inicio = Number(document.getElementById("whileInicio").value)
    var fim = Number(document.getElementById("whileFim").value)
    resultado = document.getElementById("resultadoWhile")    

    while (inicio <= fim) {
        resultado.innerHTML += `${inicio} `        
        inicio++
    }
}

function calculoDoWhile() {
    var inicio = Number(document.getElementById("doWhileInicio").value)
    var fim = Number(document.getElementById("doWhileFim").value)
    resultado = document.getElementById("resultadoDoWhile")   
    
    do {
        resultado.innerHTML += `${inicio} `        
        inicio++
    } while (inicio <= fim) {

    }
}


function calculoFor() {
    var inicio = Number(document.getElementById("forInicio").value)
    var fim = Number(document.getElementById("forFim").value)
    resultado = document.getElementById("resultadoFor")

    for (c = inicio; c <= fim; c++)
    resultado.innerHTML += `${c} `
}

function calculoArray () {
    var lista = [8, 9, 5, 1, 7]
    resultado = document.getElementById("resultadoArray")
    resultado.innerHTML = `.length (quantidade de elementos) = ${lista.length}.<br><br>
    .push (adiciona um elemento do final da array) = ${lista.push(10)} / a array agora passar a ser = ${lista}.<br><br>
    .pop (exclui um elemento do final da array) = ${lista.pop()} / a array agora passa a ser = ${lista}.<br><br>
    .unshift (adiciona um elemento do inícia da array) = ${lista.unshift(10)} / a array a passa a ser = ${lista}.<br><br>
    .shift (exclui um elemento do início da array) = ${lista.shift()} / a array passa a ser = ${lista}.<br><br>
    [lista.length - 1] (acessa o último elemento da array) = ${lista[lista.length - 1]}.<br><br>
    .indexOf(7) (localiza algum elemento dentro da array e informa sua posição / caso o elemento não seja encontrado ele retorna -1) = O elemento 7 está na posição: ${lista.indexOf(7)}.<br><br>
    .sort() (coloca os elementos em ordem crescente) = ${lista.sort()}.<br><br>
    .reverse() (inverte a ordem dos elementos) = ${lista.reverse()}.<br><br>
    .`
}


function calculoForIn() {
    lista = [8, 9, 5, 1, 7]
    var resultado = document.getElementById("resultadoForIn")

    for (posicao in lista) {
        resultado.innerHTML += `${lista[posicao]} `
    }
}

function calculoFuncoes(numero=0) {
    var numero = Number(document.getElementById("funcoes").value)
    var resultado = document.getElementById("resultadoFuncoes")

    if (numero % 2 == 0) {
        return resultado.innerHTML = `O número ${numero} é par.`
    } else {
        return resultado.innerHTML = `O número ${numero} é ímpar.`
    }
}


function calculoObjetos() {
    var varNome = document.getElementById("objetosNome").value
    var varPeso = Number(document.getElementById("objetosPeso").value)
    var varAltura = Number(document.getElementById("objetosAltura").value)
    var resultado = document.getElementById("resultadoObjetos")
    var pessoa = {nome: varNome, peso: varPeso, altura: varAltura}
    var imc = varPeso / (varAltura * varAltura)
  
    if (imc < 18.5) {
        resultado.innerHTML = `<br>${pessoa.nome}, você informou que pesa ${pessoa.peso}kg e tem ${pessoa.altura}cm de altura, isso significa que seu IMC é ${imc.toFixed(1)}, indicando que você está abaixo do peso ideal.`
    } else if (imc >= 18.5 && imc < 25) {
        resultado.innerHTML = `<br>${pessoa.nome}, você informou que pesa ${pessoa.peso}kg e tem ${pessoa.altura}cm de altura, isso significa que seu IMC é ${imc.toFixed(1)}, indicando que você está com o peso ideal.`
    } else if (imc >= 25 && imc < 29.9) {
        resultado.innerHTML = `<br>${pessoa.nome}, você informou que pesa ${pessoa.peso}kg e tem ${pessoa.altura}cm de altura, isso significa que seu IMC é ${imc.toFixed(1)}, indicando que você está com sobrepeso.`
    } else if (imc >= 30 && imc < 39.9) {
        resultado.innerHTML = `<br>${pessoa.nome}, você informou que pesa ${pessoa.peso}kg e tem ${pessoa.altura}cm de altura, isso significa que seu IMC é ${imc.toFixed(1)}, indicando que você está com besidade.`
    } else if (imc >= 40) {
        resultado.innerHTML = `<br>${pessoa.nome}, você informou que pesa ${pessoa.peso}kg e tem ${pessoa.altura}cm de altura, isso significa que seu IMC é ${imc.toFixed(1)}, indicando que você está com obesidade grave.`
    } else {
        resultado.innerHTML = "Dados inválidos. Por favor, tente novamente."
    }
 
    
}