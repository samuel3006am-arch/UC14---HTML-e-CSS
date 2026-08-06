let nome = prompt('Qual é o seu nome?');
let pesoStr = prompt(`Olá, ${nome}! Qual é o seu peso em kg?\n nome(use vírgula ou ponto - ex:75,5 ou 75.5`)
let altStr = prompt('Qual é a sua altura em metros?(ex:1,75 ou 1.75');

let peso = Number(pesoStr.replace(',', '.'));
let alt = Number(altStr.replace(',', '.'));

console.log('nome:', nome);
console.log('peso:', peso, typeof peso);
console.log('Altura:', alt, typeof alt);

let imc = peso / (alt * alt);
let imcFormatado = imc.toFixed(1);

if (imc <18.5) {
console.log("Abaixo do peso")
} else if (imc < 25) {
    console.log("Peso normal")
} else {
    console.log("Acima do peso")
}

if (imc < 18.5) {
    classificacao = 'Abaixo do  peso';
} else if (imc < 25) {
    classificacao = 'Peso normal';
} else if (imc < 30) {
    classificacao = 'Sobrepeso';
} else if (imc < 35) {
    classificacao = 'Obesidade grau I';
} else if (imc < 40) {
    classificacao = 'Obesidade grau II';
} else if (imc < 40) {
    classificacao = 'Obesidade grau III';
}

 