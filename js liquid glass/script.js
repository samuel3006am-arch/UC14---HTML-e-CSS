console.log("Ola, Luiz! seja bem vindo");
console.log("Ola, Gustavo! Seja bem vindo");
console.log("Ola, Cecilia! Seja bem vinda");

function darBoasvindas(name) {
    console.log(`Ola,${nome}! Seja be-vindo!`);
}

darBoasvindas("Luiz");
darBoasvindas("Gustavo");
darBoasvindas("Cecilia");

function apresentar(nome, idade) {
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
}


apresentar("Gaby",24)


//Criar uma função que recebe o nome de uma pessoa e mostra uma mensagem dizendo se ela está estudando.

function estaEstudando(nome, materia) {
    console.log(`Meu nome é ${nome} e estudo ${materia} anos.`);
}

apresentar("Samuel","Fisica")

function somar(a,b) {
  return a + b;
}

somar(5, 3)


let resultado = somar(5, 3);

console.log(resultado);



function somar(7, 6) {
  return 7 + 6;
}

let resultado = somar(7, 6);

console.log(resultado);


function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

let nome = prompt("Digite o nome do aluno:");
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media1 = calcularMedia(nota1, nota2);

console.log(`${nome} ficou com média ${media1}`);

if(media1 >=6) {
  console.log(`${nome} está aprovado!`);
} else {
  console.log(`${nome} está reprovado!`);
}

calcularMedia(nota1, nota2)



function calcularCustoViagem(passagem, hospedagem, alimentacao, passeios) {
  return passagem + hospedagem + alimentacao + passeios;
}


let destino = prompt("Digite o destino da viagem:");
let passagem = Number(prompt("Digite o valor da passagem:"));
let hospedagem = Number(prompt("Digite o valor da hospedagem:"));
let alimentacao = Number(prompt("Digite o valor da alimentação:"));
let passeios = Number(prompt("Digite o valor dos passeios:"));


let custoTotal = calcularCustoViagem(passagem, hospedagem, alimentacao, passeios);

// Exibindo o custo total formatado
console.log(`A viagem para ${destino} ficou com o custo total de R$ ${custoTotal.toFixed(2)}`);


if (custoTotal <= 2000) {
  console.log("A viagem está DENTRO do orçamento!");
} else {
  console.log("A viagem está FORA do orçamento!");
}
