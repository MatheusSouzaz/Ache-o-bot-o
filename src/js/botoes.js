function mostrarMensagem(mensagem){
    alert(mensagem)
}

function mostrarBotao(){
    let botaoSecreto = document.getElementsByClassName('botao-secreto')
    
    botaoSecreto[0].classList.toggle('ativo')
    
}