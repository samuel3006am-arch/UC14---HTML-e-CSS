/* =========================================================
   TABELA PERIÓDICA
   118 ELEMENTOS
========================================================= */


/*
    Estrutura:

    número: {
        nome,
        símbolo,
        grupo,
        período,
        família,
        estado,
        descrição
    }
*/

const elementos = {

    1: {
        nome: "Hidrogênio",
        simbolo: "H",
        grupo: 1,
        periodo: 1,
        familia: "Outros não metais",
        estado: "Gasoso",
        descricao: "É o elemento químico de menor número atômico e o mais leve. É muito abundante no universo e participa da formação da água."
    },

    2: {
        nome: "Hélio",
        simbolo: "He",
        grupo: 18,
        periodo: 1,
        familia: "Gases nobres",
        estado: "Gasoso",
        descricao: "É um gás nobre muito leve e pouco reativo. É utilizado em balões, criogenia e diversas aplicações científicas."
    },

    3: {
        nome: "Lítio",
        simbolo: "Li",
        grupo: 1,
        periodo: 2,
        familia: "Metais alcalinos",
        estado: "Sólido",
        descricao: "É um metal alcalino leve e bastante reativo. Possui grande importância na fabricação de baterias recarregáveis."
    },

    4: {
        nome: "Berílio",
        simbolo: "Be",
        grupo: 2,
        periodo: 2,
        familia: "Alcalino-terrosos",
        estado: "Sólido",
        descricao: "É um metal leve, rígido e resistente. É utilizado em algumas ligas metálicas e aplicações tecnológicas."
    },

    5: {
        nome: "Boro",
        simbolo: "B",
        grupo: 13,
        periodo: 2,
        familia: "Metaloides",
        estado: "Sólido",
        descricao: "É um metaloide utilizado em vidros, cerâmicas e diversos materiais tecnológicos."
    },

    6: {
        nome: "Carbono",
        simbolo: "C",
        grupo: 14,
        periodo: 2,
        familia: "Outros não metais",
        estado: "Sólido",
        descricao: "É fundamental para a vida e forma uma enorme variedade de compostos. Possui formas como grafite e diamante."
    },

    7: {
        nome: "Nitrogênio",
        simbolo: "N",
        grupo: 15,
        periodo: 2,
        familia: "Outros não metais",
        estado: "Gasoso",
        descricao: "É um dos principais componentes da atmosfera terrestre e participa da composição de proteínas e ácidos nucleicos."
    },

    8: {
        nome: "Oxigênio",
        simbolo: "O",
        grupo: 16,
        periodo: 2,
        familia: "Outros não metais",
        estado: "Gasoso",
        descricao: "É essencial para a respiração de muitos organismos e participa de processos de combustão."
    },

    9: {
        nome: "Flúor",
        simbolo: "F",
        grupo: 17,
        periodo: 2,
        familia: "Halogênios",
        estado: "Gasoso",
        descricao: "É um dos elementos mais eletronegativos e reativos da tabela periódica."
    },

    10: {
        nome: "Neônio",
        simbolo: "Ne",
        grupo: 18,
        periodo: 2,
        familia: "Gases nobres",
        estado: "Gasoso",
        descricao: "É um gás nobre utilizado em lâmpadas e tubos luminosos."
    },


    11: {
        nome: "Sódio",
        simbolo: "Na",
        grupo: 1,
        periodo: 3,
        familia: "Metais alcalinos",
        estado: "Sólido",
        descricao: "É um metal alcalino muito reativo. Seus compostos possuem muitas aplicações e o íon sódio é importante para os organismos."
    },

    12: {
        nome: "Magnésio",
        simbolo: "Mg",
        grupo: 2,
        periodo: 3,
        familia: "Alcalino-terrosos",
        estado: "Sólido",
        descricao: "É um metal leve e participa de importantes processos biológicos."
    },

    13: {
        nome: "Alumínio",
        simbolo: "Al",
        grupo: 13,
        periodo: 3,
        familia: "Pós-metais",
        estado: "Sólido",
        descricao: "É um metal leve e resistente à corrosão, muito utilizado em embalagens, construções e transportes."
    },

    14: {
        nome: "Silício",
        simbolo: "Si",
        grupo: 14,
        periodo: 3,
        familia: "Metaloides",
        estado: "Sólido",
        descricao: "É um metaloide muito importante para semicondutores e componentes eletrônicos."
    },

    15: {
        nome: "Fósforo",
        simbolo: "P",
        grupo: 15,
        periodo: 3,
        familia: "Outros não metais",
        estado: "Sólido",
        descricao: "Participa da composição do DNA, RNA e moléculas relacionadas à energia celular."
    },

    16: {
        nome: "Enxofre",
        simbolo: "S",
        grupo: 16,
        periodo: 3,
        familia: "Outros não metais",
        estado: "Sólido",
        descricao: "É um não metal encontrado em diversos minerais e participa da composição de algumas proteínas."
    },

    17: {
        nome: "Cloro",
        simbolo: "Cl",
        grupo: 17,
        periodo: 3,
        familia: "Halogênios",
        estado: "Gasoso",
        descricao: "É um halogênio reativo utilizado, entre outras aplicações, no tratamento da água."
    },

    18: {
        nome: "Argônio",
        simbolo: "Ar",
        grupo: 18,
        periodo: 3,
        familia: "Gases nobres",
        estado: "Gasoso",
        descricao: "É um gás nobre pouco reativo utilizado em soldagem, iluminação e aplicações industriais."
    },


    /* =====================================================
       PERÍODO 4
    ===================================================== */

    19: ["Potássio","K",1,4,"Metais alcalinos","Sólido"],
    20: ["Cálcio","Ca",2,4,"Alcalino-terrosos","Sólido"],
    21: ["Escândio","Sc",3,4,"Metais de transição","Sólido"],
    22: ["Titânio","Ti",4,4,"Metais de transição","Sólido"],
    23: ["Vanádio","V",5,4,"Metais de transição","Sólido"],
    24: ["Cromo","Cr",6,4,"Metais de transição","Sólido"],
    25: ["Manganês","Mn",7,4,"Metais de transição","Sólido"],
    26: ["Ferro","Fe",8,4,"Metais de transição","Sólido"],
    27: ["Cobalto","Co",9,4,"Metais de transição","Sólido"],
    28: ["Níquel","Ni",10,4,"Metais de transição","Sólido"],
    29: ["Cobre","Cu",11,4,"Metais de transição","Sólido"],
    30: ["Zinco","Zn",12,4,"Metais de transição","Sólido"],
    31: ["Gálio","Ga",13,4,"Pós-metais","Sólido"],
    32: ["Germânio","Ge",14,4,"Metaloides","Sólido"],
    33: ["Arsênio","As",15,4,"Metaloides","Sólido"],
    34: ["Selênio","Se",16,4,"Outros não metais","Sólido"],
    35: ["Bromo","Br",17,4,"Halogênios","Líquido"],
    36: ["Criptônio","Kr",18,4,"Gases nobres","Gasoso"],


    /* =====================================================
       PERÍODO 5
    ===================================================== */

    37: ["Rubídio","Rb",1,5,"Metais alcalinos","Sólido"],
    38: ["Estrôncio","Sr",2,5,"Alcalino-terrosos","Sólido"],
    39: ["Ítrio","Y",3,5,"Metais de transição","Sólido"],
    40: ["Zircônio","Zr",4,5,"Metais de transição","Sólido"],
    41: ["Nióbio","Nb",5,5,"Metais de transição","Sólido"],
    42: ["Molibdênio","Mo",6,5,"Metais de transição","Sólido"],
    43: ["Tecnécio","Tc",7,5,"Metais de transição","Sólido"],
    44: ["Rutênio","Ru",8,5,"Metais de transição","Sólido"],
    45: ["Ródio","Rh",9,5,"Metais de transição","Sólido"],
    46: ["Paládio","Pd",10,5,"Metais de transição","Sólido"],
    47: ["Prata","Ag",11,5,"Metais de transição","Sólido"],
    48: ["Cádmio","Cd",12,5,"Metais de transição","Sólido"],
    49: ["Índio","In",13,5,"Pós-metais","Sólido"],
    50: ["Estanho","Sn",14,5,"Pós-metais","Sólido"],
    51: ["Antimônio","Sb",15,5,"Metaloides","Sólido"],
    52: ["Telúrio","Te",16,5,"Metaloides","Sólido"],
    53: ["Iodo","I",17,5,"Halogênios","Sólido"],
    54: ["Xenônio","Xe",18,5,"Gases nobres","Gasoso"],


    /* =====================================================
       PERÍODO 6
    ===================================================== */

    55: ["Césio","Cs",1,6,"Metais alcalinos","Sólido"],
    56: ["Bário","Ba",2,6,"Alcalino-terrosos","Sólido"],

    // GRUPO 3 — posição ocupada por La na tabela visual
    57: ["Lantânio","La",3,6,"Lantanídeos","Sólido"],

    72: ["Háfnio","Hf",4,6,"Metais de transição","Sólido"],
    73: ["Tântalo","Ta",5,6,"Metais de transição","Sólido"],
    74: ["Tungstênio","W",6,6,"Metais de transição","Sólido"],
    75: ["Rênio","Re",7,6,"Metais de transição","Sólido"],
    76: ["Ósmio","Os",8,6,"Metais de transição","Sólido"],
    77: ["Irídio","Ir",9,6,"Metais de transição","Sólido"],
    78: ["Platina","Pt",10,6,"Metais de transição","Sólido"],
    79: ["Ouro","Au",11,6,"Metais de transição","Sólido"],
    80: ["Mercúrio","Hg",12,6,"Metais de transição","Líquido"],
    81: ["Tálio","Tl",13,6,"Pós-metais","Sólido"],
    82: ["Chumbo","Pb",14,6,"Pós-metais","Sólido"],
    83: ["Bismuto","Bi",15,6,"Pós-metais","Sólido"],
    84: ["Polônio","Po",16,6,"Pós-metais","Sólido"],
    85: ["Astato","At",17,6,"Halogênios","Sólido"],
    86: ["Radônio","Rn",18,6,"Gases nobres","Gasoso"],


    /* =====================================================
       PERÍODO 7
    ===================================================== */

    87: ["Frâncio","Fr",1,7,"Metais alcalinos","Sólido"],
    88: ["Rádio","Ra",2,7,"Alcalino-terrosos","Sólido"],

    // GRUPO 3 — posição ocupada por Ac na tabela visual
    89: ["Actínio","Ac",3,7,"Actinídeos","Sólido"],

    104: ["Rutherfórdio","Rf",4,7,"Metais de transição","Sólido"],
    105: ["Dúbnio","Db",5,7,"Metais de transição","Sólido"],
    106: ["Seabórgio","Sg",6,7,"Metais de transição","Sólido"],
    107: ["Bóhrio","Bh",7,7,"Metais de transição","Sólido"],
    108: ["Hássio","Hs",8,7,"Metais de transição","Sólido"],
    109: ["Meitnério","Mt",9,7,"Metais de transição","Sólido"],
    110: ["Darmstádio","Ds",10,7,"Metais de transição","Sólido"],
    111: ["Roentgênio","Rg",11,7,"Metais de transição","Sólido"],
    112: ["Copernício","Cn",12,7,"Metais de transição","Sólido"],
    113: ["Nihônio","Nh",13,7,"Pós-metais","Sólido"],
    114: ["Fleróvio","Fl",14,7,"Pós-metais","Sólido"],
    115: ["Moscóvio","Mc",15,7,"Pós-metais","Sólido"],
    116: ["Livermório","Lv",16,7,"Pós-metais","Sólido"],
    117: ["Tenessino","Ts",17,7,"Halogênios","Sólido"],
    118: ["Oganessônio","Og",18,7,"Gases nobres","Gasoso"]
};


/* =========================================================
   LANTANÍDEOS
   58 → 71
========================================================= */

const lantanideos = {

    58: ["Cério","Ce"],
    59: ["Praseodímio","Pr"],
    60: ["Neodímio","Nd"],
    61: ["Promécio","Pm"],
    62: ["Samário","Sm"],
    63: ["Európio","Eu"],
    64: ["Gadolínio","Gd"],
    65: ["Térbio","Tb"],
    66: ["Disprósio","Dy"],
    67: ["Hólmio","Ho"],
    68: ["Érbio","Er"],
    69: ["Túlio","Tm"],
    70: ["Itérbio","Yb"],
    71: ["Lutécio","Lu"]

};


/* =========================================================
   ACTINÍDEOS
   90 → 103
========================================================= */

const actinideos = {

    90: ["Tório","Th"],
    91: ["Protactínio","Pa"],
    92: ["Urânio","U"],
    93: ["Netúnio","Np"],
    94: ["Plutônio","Pu"],
    95: ["Amerício","Am"],
    96: ["Cúrio","Cm"],
    97: ["Berquélio","Bk"],
    98: ["Califórnio","Cf"],
    99: ["Einstênio","Es"],
    100: ["Férmio","Fm"],
    101: ["Mendelévio","Md"],
    102: ["Nobélio","No"],
    103: ["Laurêncio","Lr"]

};


/* =========================================================
   CONVERTER ARRAYS PARA OBJETOS
========================================================= */

Object.keys(elementos).forEach(numero => {

    if (Array.isArray(elementos[numero])) {

        const dados = elementos[numero];

        elementos[numero] = {

            nome: dados[0],
            simbolo: dados[1],
            grupo: dados[2],
            periodo: dados[3],
            familia: dados[4],
            estado: dados[5],

            descricao:
                `O ${dados[0]} (${dados[1]}) pertence à família ${dados[4]}. É um elemento do período ${dados[3]} e possui número atômico ${numero}.`

        };

    }

});


/* =========================================================
   DESCRIÇÕES ESPECIAIS DOS ELEMENTOS 104–118
========================================================= */

const descricoesSuperpesados = {

    104: "É um elemento superpesado, radioativo e sintético. Foi produzido artificialmente e possui vida muito curta.",

    105: "É um elemento superpesado, radioativo e sintético produzido em laboratório.",

    106: "É um elemento superpesado, radioativo e sintético. Foi produzido artificialmente.",

    107: "É um elemento superpesado e radioativo produzido artificialmente.",

    108: "É um elemento superpesado, radioativo e sintético.",

    109: "É um elemento superpesado e radioativo produzido artificialmente.",

    110: "É um elemento superpesado, radioativo e sintético.",

    111: "É um elemento superpesado e radioativo produzido em laboratório.",

    112: "É um elemento superpesado, radioativo e sintético.",

    113: "É um elemento superpesado, radioativo e produzido artificialmente.",

    114: "É um elemento superpesado, radioativo e sintético.",

    115: "É um elemento superpesado, radioativo e produzido artificialmente.",

    116: "É um elemento superpesado, radioativo e sintético.",

    117: "É um elemento superpesado, radioativo e produzido artificialmente.",

    118: "É o elemento de maior número atômico atualmente conhecido. É superpesado, radioativo e produzido artificialmente."

};


Object.keys(descricoesSuperpesados).forEach(numero => {

    elementos[numero].descricao =
        descricoesSuperpesados[numero];

});


/* =========================================================
   DESCRIÇÕES DOS LANTANÍDEOS
========================================================= */

Object.keys(lantanideos).forEach(numero => {

    const dados = lantanideos[numero];

    elementos[numero] = {

        nome: dados[0],

        simbolo: dados[1],

        grupo: 3,

        periodo: 6,

        familia: "Lantanídeos",

        estado: "Sólido",

        descricao:
            `O ${dados[0]} (${dados[1]}) é um lantanídeo. É um elemento das terras raras utilizado em diferentes aplicações tecnológicas e científicas.`

    };

});


/* =========================================================
   DESCRIÇÕES DOS ACTINÍDEOS
========================================================= */

Object.keys(actinideos).forEach(numero => {

    const dados = actinideos[numero];

    elementos[numero] = {

        nome: dados[0],

        simbolo: dados[1],

        grupo: 3,

        periodo: 7,

        familia: "Actinídeos",

        estado: "Sólido",

        descricao:
            `O ${dados[0]} (${dados[1]}) pertence à série dos actinídeos e é um elemento radioativo.`

    };

});


/* =========================================================
   CORRESPONDÊNCIA DAS FAMÍLIAS COM O CSS
========================================================= */

const classesFamilia = {

    "Metais alcalinos": "alcalino",

    "Alcalino-terrosos": "alcalino-terroso",

    "Metais de transição": "transicao",

    "Pós-metais": "pos-metal",

    "Metaloides": "metaloide",

    "Outros não metais": "nao-metal",

    "Halogênios": "halogenio",

    "Lantanídeos": "lantanideo",

    "Actinídeos": "actinideo",

    "Gases nobres": "gas-nobre"

};


/* =========================================================
   ELEMENTOS HTML
========================================================= */

const tabelaPrincipal =
    document.getElementById("tabelaPrincipal");

const containerLantanideos =
    document.getElementById("lantanideos");

const containerActinideos =
    document.getElementById("actinideos");


/* =========================================================
   CRIAR CARTÃO
========================================================= */

function criarElemento(numero, elemento, serie = false) {

    const card =
        document.createElement("div");

    card.className =
        `elemento ${classesFamilia[elemento.familia]}`;

    card.dataset.numero =
        numero;

    if (!serie) {

        card.style.gridColumn =
            elemento.grupo;

        card.style.gridRow =
            elemento.periodo;

    }


    card.innerHTML = `

        <span class="numero">
            ${numero}
        </span>

        <strong class="simbolo">
            ${elemento.simbolo}
        </strong>

        <small class="nome">
            ${elemento.nome}
        </small>

    `;


    card.addEventListener(
        "click",
        () => abrirModal(numero)
    );


    return card;

}


/* =========================================================
   INSERIR ELEMENTOS NA TABELA
========================================================= */

Object.keys(elementos).forEach(numero => {

    const elemento =
        elementos[numero];

    /*
        58–71 e 90–103 ficam
        nas séries inferiores.
    */

    if (numero >= 58 && numero <= 71) {

        return;

    }

    if (numero >= 90 && numero <= 103) {

        return;

    }


    const card =
        criarElemento(
            numero,
            elemento
        );


    tabelaPrincipal.appendChild(card);

});


/* =========================================================
   INSERIR LANTANÍDEOS
========================================================= */

for (let numero = 58; numero <= 71; numero++) {

    const card =
        criarElemento(
            numero,
            elementos[numero],
            true
        );

    containerLantanideos.appendChild(card);

}


/* =========================================================
   INSERIR ACTINÍDEOS
========================================================= */

for (let numero = 90; numero <= 103; numero++) {

    const card =
        criarElemento(
            numero,
            elementos[numero],
            true
        );

    containerActinideos.appendChild(card);

}


/* =========================================================
   MODAL
========================================================= */

const modal =
    document.getElementById("modal");

const modalElemento =
    document.getElementById("modalElemento");

const modalNome =
    document.getElementById("modalNome");

const modalNumero =
    document.getElementById("modalNumero");

const modalSimbolo =
    document.getElementById("modalSimbolo");

const modalGrupo =
    document.getElementById("modalGrupo");

const modalPeriodo =
    document.getElementById("modalPeriodo");

const modalFamilia =
    document.getElementById("modalFamilia");

const modalEstado =
    document.getElementById("modalEstado");

const modalDescricao =
    document.getElementById("modalDescricao");


let elementoAtual = null;


/* =========================================================
   ABRIR MODAL
========================================================= */

function abrirModal(numero) {

    const elemento =
        elementos[numero];

    if (!elemento) {
        return;
    }

    elementoAtual = {

        numero: numero,

        ...elemento

    };


    modalNome.textContent =
        elemento.nome;

    modalNumero.textContent =
        numero;

    modalSimbolo.textContent =
        elemento.simbolo;

    modalGrupo.textContent =
        elemento.grupo;

    modalPeriodo.textContent =
        elemento.periodo;

    modalFamilia.textContent =
        elemento.familia;

    modalEstado.textContent =
        elemento.estado;

    modalDescricao.textContent =
        elemento.descricao;


    /*
        Cria o símbolo grande
        dentro do modal.
    */

    modalElemento.innerHTML = `

        <strong class="simbolo">
            ${elemento.simbolo}
        </strong>

    `;


    /*
        Mantém a cor da família.
    */

    modalElemento.className =
        `modal-elemento ${classesFamilia[elemento.familia]}`;


    modal.classList.add("ativo");

}


/* =========================================================
   FECHAR MODAL
========================================================= */

document
    .getElementById("fechar")
    .addEventListener(
        "click",
        fecharModal
    );


function fecharModal() {

    modal.classList.remove("ativo");

    speechSynthesis.cancel();

}


/* Clicar fora */

modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            fecharModal();

        }

    }
);


/* ESC */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            fecharModal();

        }

    }
);


/* =========================================================
   RECURSO DE VOZ
========================================================= */

document
    .getElementById("falar")
    .addEventListener(
        "click",
        falarElemento
    );


function falarElemento() {

    if (!elementoAtual) {

        return;

    }


    /*
        Cancela qualquer narração
        que esteja acontecendo.
    */

    speechSynthesis.cancel();


    const texto =

        `Elemento químico ${elementoAtual.nome}. ` +

        `Símbolo ${elementoAtual.simbolo}. ` +

        `Número atômico ${elementoAtual.numero}. ` +

        `Grupo ${elementoAtual.grupo}. ` +

        `Período ${elementoAtual.periodo}. ` +

        `Família ${elementoAtual.familia}. ` +

        `Estado físico: ${elementoAtual.estado}. ` +

        `Características: ${elementoAtual.descricao}.`;


    const voz =
        new SpeechSynthesisUtterance(texto);


    /*
        Português brasileiro
    */

    voz.lang =
        "pt-BR";

    voz.rate =
        0.9;

    voz.pitch =
        1;

    voz.volume =
        1;


    speechSynthesis.speak(voz);

}


/* =========================================================
   PARAR VOZ
========================================================= */

document
    .getElementById("parar")
    .addEventListener(
        "click",
        () => {

            speechSynthesis.cancel();

        }
    );