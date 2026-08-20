// Converter cada if/else para ternário:-+

// 1.
let descricao;
if (temperatura > 30) {
  descricao = 'Quente';
} else {
  descricao = 'Agradável';

}



// 2.
let tipo;
if (nota > 6) {
  tipo = 'Aprovado';
} else {
  tipo = 'reprovado';

}

// 3.
let saudacao;
if (hora < 12) {
  saudacao = 'Bom dia';
} else {
  saudacao = 'Boa tarde/noite';

}

const mensagem = temperatura >= 30 ? 'Quente' : 'Agradavel';

const mensagem = nota >= 6 ? 'Aprovado' : 'Reprovado';

const mensagem = hora <= 12 ? 'Bom dia' : 'Reprovado';
