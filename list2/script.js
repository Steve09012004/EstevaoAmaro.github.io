function Ex1() {

    alert("\n\n======================EX01==========================\n\n")
    let numero = prompt("Digite um número: ")

    if (numero == 0) {
        alert("o numero digitado é 0 ")
    } else if ((numero % 2) == 1) {
        alert("o numero digitado é impar ")
    }
    else {
        alert("o numero digitado é par")
    }

}
function Ex2() {
    alert("\n\n======================EX02==========================\n\n")
    let numero1 = prompt("Digite um número: ")
    let numero2 = prompt("Digite outro número: ")
    
    


    if(numero1 > numero2){
        alert("O número " + numero1 + " é maior que " + numero2)
    }else{
        alert("O número " + numero1 + " é menor que " + numero2)
    }

}
function Ex3() {
    alert("\n\n======================EX03==========================\n\n")
    let pergunta1 = "Tem mais de 65 anos? \n 1 - Sim \n 2 - Não \n Sua Resposta: \n"
    let pergunta2 = "É gestante? \n 1 - Sim \n 2 - Não \n Sua Resposta: \n"
    let pergunta3 = " é deficiente? \n 1 - Sim \n 2 - Não \n Sua Resposta: \n"

    let resposta1 = prompt(pergunta1)
    let resposta2 = prompt(pergunta2)
    let resposta3 = prompt(pergunta3)

    let deficiente
    let gestante
    let maisDe65


    if(resposta1 == 1){
        maisDe65 = true
    }else {
        maisDe65 = false
    }

    if(resposta2 == 1){
        gestante = true
    }else{
        gestante = false
    }

    if(resposta3 == 1){
        deficiente = true
    }else {
        deficiente = false
    }

    if(maisDe65 == true | deficiente == true | gestante == true){
        alert("Você foi para a fila preferencial.")
    }else{
        alert("Você vai para a fila normal.")
    }

}
function Ex4() {
    alert("\n\n======================EX04==========================\n\n")
    let idade = parseInt(prompt("Qual é a sua idade? "))

    if(idade < 16) {
        alert("Não pode entrar no evento, você é menor de idade")
    } else if(idade >= 16 && idade < 18) {
        alert("Somente acompanhado dos responsáveis")
    } else if(idade >= 60) {
        alert("Você é muito velho pra isso")
    }else {
        alert("Podem entrar normalmente")
    }
}

function Ex5() {
    alert("\n\n======================EX05==========================\n\n")
    let usuario = prompt("Digite o usuario: ")
    let senha = prompt("Escreva a sua senha: ")

    verificaLogin(usuario, senha)
}

function verificaLogin(usuario, senha) {
      let user
      let sen
    if(usuario == "admin") {
        user = true
    } else {
        user = false
    }

    if(senha == "carro") {
        sen = true
    } else {
        sen = false
    }

    if(user && sen){
        login(usuario)
    } else if(user == true && sen == false){
        alert("senha incorreta")
    } else if(user == false && sen == true){
        alert("usuario incorreto")
    } else {
        alert("usuario e senha incorretos")
    }
}

function login(usuario) {
    alert("Olá, " + usuario + " login bem sucedido")
}
function Ex6() {
    alert("\n\n======================EX06==========================\n\n")
    //Criar as 3 perguntas

    alert("Bem vindo ao jogo de perguntas e respostas! Responda em número de acordo com as respostas apresentadas \n\n ")

    let pergunta1 = ("Quem descobriu o Brasil?  \n\n 1 - Pedro Alvares Cabral \n 2 - Cleitinho da Esquina \n 3 - Fernando Gil \n\n Sua Resposta: ")
    let pergunta2 = ("\n Qual o feminino de Cachorro? \n\n 1 - Cachorra \n 2 - Cadela \n 3 - Alexa \n\n Sua Resposta: ")
    let pergunta3 = ("\n Como se fala 'Eu não sei' em Inglês? \n\n 1 - Eu não sei em inglês \n 2 - How are you! \n 3 - I dont't know \n\n Sua Resposta: ")

    let respostaCerta1 = 1
    let respostaCerta2 = 2
    let respostaCerta3 = 3

    let resposta1 = parseInt(prompt(pergunta1))
    let resposta2 = parseInt(prompt(pergunta2))
    let resposta3 = parseInt(prompt(pergunta3))

    let ganharJogo

    if(resposta1 == respostaCerta1 && resposta2 == respostaCerta2 && resposta3 == respostaCerta3) {
        ganharJogo = true
    }else {
        ganharJogo = false
    }

    switch(ganharJogo) {
      case true: alert("Você ganhou o jogo !!!")
        break
      default : alert("Você perdeu, por favor tente novamente!")
    }

}

