function soma() {
    let numberOne = parseFloat(document.getElementById("numberOne").value)
    let numberTwo = parseFloat(document.getElementById("numberTwo").value)
    let result = numberOne + numberTwo
    resultInput = document.getElementById("result")
    resultInput.value = result

}

function helloUser() {
    userFirstName = prompt("Digite seu primeiro nome")
    userLastName = prompt("Digite seu Sobrenome")
    userCompletName = userFirstName + " " + userLastName
    fullnameSpan = document.getElementById("fullname")
    fullnameSpan.innerHTML = userCompletName
}

function toDollarConvert() {
    valueInRealInput = document.getElementById("money")
    atualCoteInput = document.getElementById("cotation")
    valueInReal = parseFloat(valueInRealInput.value)
    atualCote = parseFloat(atualCoteInput.value)

    valueInRealInput.type = 'text'
    valueInRealInput.value = "R$" + valueInReal

    atualCoteInput.type = 'text'
    atualCoteInput.value = "$" + atualCote

    valueConvertedToDollar = (valueInReal / atualCote).toFixed(2)
    dollarResultInput = document.getElementById("dollarResult")

    dollarResultInput.type = 'text'
    dollarResultInput.value = "$" + valueConvertedToDollar
}

function terrainAreaCalculator() {
    withValue = parseFloat(document.getElementById("largura").value)
    heightValue = parseFloat(document.getElementById("comprimento").value)
    M2Value = parseFloat(document.getElementById("areavalue").value)

    area = withValue * heightValue
    totalTerrainValue = area * M2Value
    totalTerrainValue = totalTerrainValue.toFixed(2)
    document.getElementById("terrainValue").value = "R$" + totalTerrainValue
}

function mediaGasolineCalculator() {
    distance = parseFloat(document.getElementById("distancia").value)
    gasolinaGasta = parseFloat(document.getElementById("gasolinaGasta").value)

    gasolinaMedia = (distance / gasolinaGasta).toFixed(2)

    document.getElementById("gasolinaMedia").value = gasolinaMedia + "Km/l"

}

function noteMediaCalculator() {
    noteOne = parseFloat(document.getElementById("note1").value)
    noteTwo = parseFloat(document.getElementById("note2").value)
    noteThre = parseFloat(document.getElementById("note3").value)
    noteFour = parseFloat(document.getElementById("note4").value)

    noteMedia = ((noteOne + noteTwo + noteThre + noteFour) / 4).toFixed(2)

        document.getElementById("noteMedia").value = "Média de " + noteMedia
}


function temperatureConvertor() {
    degreesInF = parseFloat(document.getElementById("emF").value)

    degreesInC = (degreesInF - 32) / 1.8
    degreesInC = degreesInC.toFixed(2)

    if (degreesInC <= 15) {
        document.getElementById("celcius").value = "Está frio, não esqueça o casaco 🥶 - Temperadura de : " + degreesInC
    }
    else {
        document.getElementById("celcius").value = "Está quente, ligue o ventilador. 🥵 - Temperadura de : " + degreesInC
    }
}


helloUser()


