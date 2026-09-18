// Variável do contador
let valorContador = 10;


// Função para mostrar a cidade
function mostrarCidade() {

    // Pega a cidade digitada
    let cidade = document.getElementById("cidade").value;

    // Pega o parágrafo da mensagem
    let mensagem = document.getElementById("mensagem");

    // Verifica se o usuário digitou alguma coisa
    if (cidade === "") {

        mensagem.textContent = "Digite uma cidade para continuar!";

    } else {

        mensagem.textContent = `Prepare as malas! Sua próxima aventura será em ${cidade}! ✈️`;
    }
}


// Função para destacar a mensagem
function destacarMensagem() {

    let mensagem = document.getElementById("mensagem");

    // Alterando propriedades de estilo através do JavaScript
    mensagem.style.color = "#8e44ad";
    mensagem.style.backgroundColor = "#f3e5f5";
    mensagem.style.fontSize = "24px";
    mensagem.style.fontWeight = "bold";
    mensagem.style.padding = "15px";
    mensagem.style.borderRadius = "10px";
}


// Função para aumentar o contador
function aumentar() {

    valorContador++;

    document.getElementById("contador").textContent = valorContador;
}


// Função para diminuir o contador
function diminuir() {

    valorContador--;

    document.getElementById("contador").textContent = valorContador;
}