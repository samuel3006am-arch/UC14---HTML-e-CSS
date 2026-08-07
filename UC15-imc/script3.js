
// Dados do cliente
let nomeCliente = prompt("Digite o nome do cliente:");

let valorCompra = parseFloat(
    prompt("Digite o valor da compra:").replace(",", ".")
);

let clienteVip = prompt("O cliente é VIP? (true ou false):").toLowerCase() === "true";

// Variáveis do desconto
let percentualDesconto;
let valorDesconto;
let valorFinal;

// Verificando as regras de desconto
if (clienteVip) {
    percentualDesconto = 20;
} else if (valorCompra >= 500) {
    percentualDesconto = 15;
} else if (valorCompra >= 200) {
    percentualDesconto = 10;
} else {
    percentualDesconto = 0;
}

// Calculando o valor do desconto
valorDesconto = valorCompra * (percentualDesconto / 100);

// Calculando o valor final
valorFinal = valorCompra - valorDesconto;

// Exibindo os resultados
console.log("Nome: " + nomeCliente);
console.log("Valor da compra: R$ " + valorCompra.toFixed(2));
console.log("Desconto: " + percentualDesconto + "%");
console.log("Valor do desconto: R$ " + valorDesconto.toFixed(2));
console.log("Valor final: R$ " + valorFinal.toFixed(2));

// Desafio: frete grátis
if (valorFinal > 1000) {
    console.log("Parabéns! Você ganhou frete grátis.");
} else {
    console.log("Frete será cobrado normalmente.");
}

