
const form = document.getElementById("formNotas");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    const camposNotas = [
        document.getElementById("nota1"),
        document.getElementById("nota2"),
        document.getElementById("nota3")
    ];

    // Verifica se o nome foi informado.
    if (nome === "") {
        mostrarErro("Por favor, informe o nome do estudante.");
        return;
    }

    // Verifica se todas as notas foram preenchidas.
    for (const campo of camposNotas) {
        if (campo.value.trim() === "") {
            mostrarErro("Preencha as três notas antes de continuar.");
            return;
        }
    }

    const notas = camposNotas.map(campo => campo.valueAsNumber);

    // Verifica se as notas são números válidos entre 0 e 10.
    const notasInvalidas = notas.some(nota =>
        !Number.isFinite(nota) || nota < 0 || nota > 10
    );

    if (notasInvalidas) {
        mostrarErro("As notas devem ser números entre 0 e 10.");
        return;
    }

    // Calcula a média aritmética.
    const media = (notas[0] + notas[1] + notas[2]) / 3;

    // Define a situação acadêmica.
    let situacao;
    let classe;

    if (media >= 7) {
        situacao = "Aprovado";
        classe = "aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
        classe = "recuperacao";
    } else {
        situacao = "Reprovado";
        classe = "reprovado";
    }

    // Exibe o resultado sem interpretar o nome como código HTML.
    resultado.replaceChildren();

    const titulo = document.createElement("h2");
    titulo.textContent = "Resultado da consulta";

    const estudante = document.createElement("p");
    estudante.textContent = `Estudante: ${nome}`;

    const mediaTexto = document.createElement("p");
    mediaTexto.className = "media";
    mediaTexto.textContent = `Média: ${media.toFixed(2).replace(".", ",")}`;

    const situacaoTexto = document.createElement("p");
    situacaoTexto.className = "situacao";
    situacaoTexto.textContent = `Situação: ${situacao}`;

    resultado.append(titulo, estudante, mediaTexto, situacaoTexto);
    resultado.className = `resultado ${classe}`;
    resultado.hidden = false;
});

function mostrarErro(mensagem) {
    resultado.replaceChildren();

    const titulo = document.createElement("h2");
    titulo.textContent = "Atenção";

    const texto = document.createElement("p");
    texto.className = "situacao";
    texto.textContent = mensagem;

    resultado.append(titulo, texto);
    resultado.className = "resultado erro";
    resultado.hidden = false;
}

// Limpa o resultado quando o formulário é reiniciado.
form.addEventListener("reset", function () {
    resultado.replaceChildren();
    resultado.hidden = true;
    resultado.className = "resultado";
});
