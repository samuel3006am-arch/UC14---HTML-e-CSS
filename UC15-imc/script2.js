let nome = prompt("Qual é o seu nome?");

let nota1Str = prompt(`Olá, ${nome}! Qual sua nota no 1° semestre? (Ex: 7,5 ou 7.5)`);
let nota2Str = prompt("Qual é a sua nota no 2° semestre? (Ex: 8,0 ou 8.0)");

let nota1 = Number(nota1Str.replace(",", "."));
let nota2 = Number(nota2Str.replace(",", "."));

console.log("Nome:", nome);
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);

// Calcula a média
let media = (nota1 + nota2) / 2;

console.log("Média:", media.toFixed(1));

let classificacao;

// Classificação da média
if (media < 3.0) {
    classificacao = "Abaixo da média";
} else if (media < 5.0) {
    classificacao = "Próximo da média";
} else if (media < 7.0) {
    classificacao = "Na média";
} else if (media < 9.0) {
    classificacao = "Acima da média";
} else {
    classificacao = "Excelente aluno";
}

console.log(`A média final de ${nome} é ${media.toFixed(1)}.`);
console.log(`Classificação: ${classificacao}`);

