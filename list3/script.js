
function EX01() {
    let tempoDesejado
    let content = document.getElementById("content")


    do {
        tempoDesejado = parseFloat(prompt("\nEscolha o tempo desejado: "))
        if (tempoDesejado < 1) {
            alert("O tempo precisa ser maior que " + tempoDesejado + ". Escolha um número entre 1 e 59 \nTente Novamente")
        } else if (tempoDesejado > 59) {
            alert("O tempo precisa ser menor que " + tempoDesejado + ". Escolha um número entre 1 e 59 \nTente Novamente")
        } else {
            alert("Tempo de " + tempoDesejado + " Segundos Aceito.\n")
        }
    } while ((tempoDesejado < 1) | (tempoDesejado > 59))


    function esperar(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function contarTempo() {
        for (let i = tempoDesejado; i >= 0; i--) {
            content.innerHTML = i
            await esperar(1000); // Pausa de 1 segundo
        }
        content.innerHTML = ""
    }

    contarTempo(); // Chama a função que conta com pausa

}

function EX02() {
    let numeroDigitado
    let limiteTabuada
    let contador = 0

    numeroDigitado = parseInt(prompt("Escolha um número para ser calculado a sua tabuada: "))

    limiteTabuada = parseInt(prompt("\nEscolha um limite para ser calculado: "))


    alert("Pressione Ctrl + Shift + I para continuar")

    console.log("\nMultiplicação:\n")

    for (contador; contador <= limiteTabuada; contador++) {
        console.log(numeroDigitado + " X " + contador + " = " + (numeroDigitado * contador) + "\n")
    }

    if (contador >= limiteTabuada) {
        contador = 0
    }
    console.log("\nSoma:\n")

    while (contador <= limiteTabuada) {
        console.log(numeroDigitado + " + " + contador + " = " + (numeroDigitado + contador) + "\n")
        contador++
    }

    if (contador >= limiteTabuada) {
        contador = 0
    }
    console.log("\nSubtração:\n")

    for (contador; contador <= limiteTabuada; contador++) {
        console.log(numeroDigitado + " - " + contador + " = " + (numeroDigitado - contador) + "\n")
    }

    if (contador >= limiteTabuada) {
        contador = 0
    }
    console.log("\nDivisão:\n")

    while (contador <= limiteTabuada) {
        console.log(numeroDigitado + " / " + contador + " = " + (numeroDigitado / contador) + "\n")
        contador++
    }

    if (contador >= limiteTabuada) {
        contador = 0
    }
    console.log("\nResto da Divisão:\n")

    for (contador; contador <= limiteTabuada; contador++) {
        console.log(numeroDigitado+ " % "+ contador+ " = "+ (numeroDigitado % contador) + "\n")
    }
}

function EX03() {
    //CRIA E ARMAZENA DOIS NÚMEROS INTEIROS
    let primeiroNumero = 0
    let segundoNumero = 0
    let numeroMaior = 0
    let numeroMenor = 0
    let contador = 0
    let content = document.getElementById("content")
    let numberList = []


    primeiroNumero = parseFloat(prompt("Digite o primeiro número: "))
    segundoNumero = parseFloat(prompt("\nEscreva o segundo número: "))

    //Processa os dados e printa na tela os números pares
    if (primeiroNumero > segundoNumero) {
        numeroMaior = primeiroNumero
        numeroMenor = segundoNumero
        numeroMaior--
        numeroMenor++
    } else if (segundoNumero > primeiroNumero) {
        numeroMaior = segundoNumero
        numeroMenor = primeiroNumero

        numeroMaior--
        numeroMenor++
    } else if (primeiroNumero == segundoNumero) {
        alert("Você não pode digitar números iguais\n")
    }

    for (numeroMenor; numeroMenor <= numeroMaior; numeroMenor++) {
        contador++
        if (numeroMenor % 2 == 0) {
            numberList.push(numeroMenor)
            content.innerHTML = numberList
        }
    }


}

function EX04() {
    let numeroDigitado
    let numeroEscolhido = parseInt(prompt("\nMestre - Escolha um número: "))


    do {

        numeroDigitado = parseInt(prompt("\nTente acertar o número! : "))


        if ((numeroEscolhido == numeroDigitado - 1) | (numeroEscolhido == numeroDigitado + 1)) {
            alert ("Esta fervendo 😨")
        } else if ((numeroEscolhido == numeroDigitado - 2) | (numeroEscolhido == numeroDigitado + 2)) {
            alert ("Esta quente 😬")
        } else if ((numeroEscolhido == numeroDigitado - 3) | (numeroEscolhido == numeroDigitado + 3)) {
            alert ("Esta esquentando 🥵")
        } else {
            if (numeroDigitado != numeroEscolhido) {
                alert ("Está frio 🥶")
            }
        }
    } while (numeroDigitado != numeroEscolhido)

    alert("\nVocê acertou!!")
}

function EX05() {
    let usuario = "admin"
    let senha = "admin"
    let usuarioDigitado
    let senhaDigitada
    let tenativas = 0
    let auth = false

    do {

        if (tenativas == 2) {
            alert("Esta é sua ultima tentativa, se errar seu acesso será bloqueado\n")
        }

        usuarioDigitado = prompt("Digite o usuario: ")
        senhaDigitada = prompt("Digite a sua senha: ")

        if ((usuarioDigitado != usuario) && (senhaDigitada != senha)) {
            alert("Usuario e senha incorreto\n")
            tenativas++
        } else {
            if (usuarioDigitado != usuario) {
                alert("Usuario incorreto\n")
                tenativas++
            } else if (senhaDigitada != senha) {
                alert("Senha incorreta\n")
                tenativas++
            } else {
                alert("login Feito com sucesso\n")
                auth = true
            }
        }
    } while (tenativas < 3 && auth == false)

    if (tenativas == 3) {
        alert("Acesso bloqueado\n")
    }
}

function EX06() {
    let andares = prompt("Quantos andares: ")
    let string = ""


    alert("Pressione Ctrl + Shift + I para continuar")


    for (let i = 1; i <= andares; i++) {
        for (let x = andares - i; x > 0; x--) {
            string += (" ")
        }
        for (let j = 1; j <= (i * 2) - 1; j++) {
            string += ("*")
        }
        string += ("\n")
    }


    return console.log("\n" + string)
}

function EX07() {

    let altura = prompt("Escreva altura: ")
    let largura = prompt("Largura: ")
    let string = ""

    alert("Pressione Ctrl + Shift + I para continuar")


    for (let j = 1; j <= altura; j++) {
        for (let i = 1; i <= largura; i++) {
            string += ("* ")
        }
        string += ("\n")
    }

    return console.log("\n" + string)
}



