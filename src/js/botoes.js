function mostrarMensagem(mensagem) {
    alert(mensagem)
}

function mostrarBotao() {
    let botaoSecreto = document.getElementsByClassName('botao-secreto')

    botaoSecreto[0].classList.add('ativo')

}

document.querySelector('button[class = botao-secreto]').addEventListener('click', function () {

    let botaoUltra = document.getElementsByClassName('botao-ultra-secreto')

    botaoUltra[0].classList.add('ativo')

})

document.querySelector('.botao-ultra-secreto').addEventListener('click', function () {

    let botoesSuperSecretos = document.querySelectorAll(".super-secreto")

    botoesSuperSecretos.forEach((botoes) => {
        botoes.classList.add("ativo")
    })

})

setTimeout(() => {
    alert("Vamos, não desista!")
}, 30000);
setTimeout(() => {
    alert("Está quase lá! Eu acho....")
}, 60000);
setTimeout(() => {
    alert("Ainda por aqui :O")
}, 100000);