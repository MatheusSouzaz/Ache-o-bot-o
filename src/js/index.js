function mostrarMensagem(mensagem) {
    alert(mensagem)
}

let nomeUsuario = prompt('Digite seu nome')

function dizerBemVindo() {

    if (nomeUsuario !== "" && nomeUsuario !== null) {
        alert("Seja bem vindo(a) " + nomeUsuario)
    } else if (nomeUsuario === null) {
        console.log("sem bem vindo para você >:(")
    }
    else {
        alert("Bem vindo(a)")
    }
}
dizerBemVindo()

