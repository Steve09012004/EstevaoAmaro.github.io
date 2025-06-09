function soma() {
    alert(" Vamos fazer a soma entre dois números!")
let numberOne = parseInt(prompt("Digite o primeiro número:"))
let numberTwo = parseInt(prompt("Digite o segundo número:"))
let result = numberOne + numberTwo
alert("A soma entre " + numberOne + " e " + numberTwo + " é : " + result)
}

function helloUser(){
    userFirstName = prompt("Digite seu nome")
    userLastName = prompt("Digite seu Sobrenome")
    userCompletName = userFirstName + " " + userLastName
    alert("Olá " + userCompletName)
}

function toDollarConvert() {
    alert(" Vamos converter seu dinheiro para Dollar!")
    valueInReal = parseFloat(prompt("Digite o quanto você tem em reais. (Apenas Números):"))
    atualCote = 5.25
    valueConvertedToDollar = valueInReal * atualCote
    alert("Seu valor convertido para real é de: " + valueConvertedToDollar + ". Dessa vez não cobraremos taxa 😁")
}

function terrainAreaCalculator() {
    alert("Vamos calcular o valor do terreno baseado na sua área e valor por M² !")
    withValue = parseFloat(prompt("Qual a largura do terreno: "))
    heightValue = parseFloat(prompt("Qual o comprimento do terreno: "))
    M2Value = parseFloat(prompt("Qual o valor do M²: "))

    area = withValue * heightValue
    totalTerrainValue = area * M2Value
    totalTerrainValue  = totalTerrainValue.toFixed(2)
    alert("O valor do terreno é de: R$" + totalTerrainValue)
}

function mediaGasolineCalculator() {
    alert("Vamos cacular o quanto de gasolina seu carro gasta em média por Km !")
    distance = parseFloat(prompt("Digite a distância que você percorreu: "))
    gasoline = parseFloat(prompt("Digite o quanto de gasolina foi gasto: "))

    mediaGasoline = distance / gasoline
    mediaGasoline = mediaGasoline.toFixed(2)

    alert("O seu carro gasta em média: " + mediaGasoline + " por Km/l")
}

function noteMediaCalculator() {
    alert("Vamos calcular a sua média de notas !!! Espero que tenha estudado 😁")
    noteOne = parseFloat(prompt("Primeira nota: "))
    noteTwo = parseFloat(prompt("Segunda nota: "))
    noteThre = parseFloat(prompt("Terceira nota: "))
    noteFour = parseFloat(prompt("Quarta nota: "))

    noteMedia = (noteOne + noteTwo + noteThre + noteFour) / 4
    noteMedia = noteMedia.toFixed(2)

    alert("Sua média é: " + noteMedia)
}

function temperatureConvertor() {
    alert("Vamos converter a temperatura atual em ºF para ºC: ")

    degreesInF = parseFloat(prompt("Digite quantos graus está fazendo em °F: "))

    degreesInC = (degreesInF - 32) / 1.8
    degreesInC = degreesInC.toFixed(2)

    if (degreesInC <=15) {
        alert("Está frio, não esqueça o casaco 🥶 - Temperadura de : " + degreesInC)
    }
    else {
        alert("Está quente, ligue o ventilador. 🥵 - Temperadura de : " + degreesInC)
    }
}


