function mostrarMensagem(mensagem){
    alert(mensagem)
}

function mostrarBotao(){
    let botaoSecreto = document.getElementsByClassName('botao-secreto')
    
    botaoSecreto[0].classList.add('ativo')
    
}

document.querySelector('button[class = botao-secreto]').addEventListener('click', function(){
    
let botaoUltra = document.getElementsByClassName('botao-ultra-secreto')

botaoUltra[0].classList.add('ativo')

})

document.querySelector('button[class = botao-ultra-secreto]').addEventListener('click', function(){
    
    let botaoSuper = document.getElementsByClassName('botao-super-secreto')
    
    botaoSuper[0].classList.add('ativo')

    let botaoNormal = document.getElementsByClassName('botao-normal')
    
    botaoNormal[0].classList.add('ativo')
    
    })