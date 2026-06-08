// ======================================================
// EXEMPLO PRÁTICO: const, let e var
// ======================================================


// ------------------------------------------------------
// 1. CONST
// Use quando o valor não será substituído depois.
// ------------------------------------------------------

const nome = 'Eber'; // Cria uma constante chamada nome

console.log(nome); // Imprime: Eber

// nome = 'João'; // ERRO: const não permite atribuir outro valor


// ------------------------------------------------------
// 2. LET
// Use quando o valor precisará mudar durante o programa.
// ------------------------------------------------------

let pontos = 0; // Cria uma variável com o valor inicial 0

pontos += 10; // pontos recebe pontos + 10
pontos += 5;  // pontos recebe pontos + 5

console.log(pontos); // Imprime: 15


// ------------------------------------------------------
// 3. CONST E LET TRABALHANDO JUNTOS
// ------------------------------------------------------

const nomeAluno = 'Eber'; // O nome do aluno não será alterado
let nota = 6;              // A nota poderá ser alterada

nota += 1; // Acrescenta 1 à nota

console.log(nomeAluno); // Imprime: Eber
console.log(nota);      // Imprime: 7

if (nota >= 7) { // Verifica se a nota é maior ou igual a 7
  const resultado = 'Aprovado'; // Existe somente dentro deste bloco
  console.log(resultado);       // Imprime: Aprovado
}

// console.log(resultado); // ERRO: resultado só existe dentro do if


// ------------------------------------------------------
// 4. LET RESPEITA O BLOCO { }
// ------------------------------------------------------

if (true) { // Cria um bloco de código
  let mensagemLet = 'Eu existo somente dentro do bloco'; // Variável local
  console.log(mensagemLet); // Funciona normalmente
}

// console.log(mensagemLet); // ERRO: mensagemLet não existe fora do bloco


// ------------------------------------------------------
// 5. VAR NÃO RESPEITA O BLOCO { }
// Evite usar var em códigos novos.
// ------------------------------------------------------

if (true) { // Cria um bloco de código
  var mensagemVar = 'Eu escapei do bloco'; // var ignora o escopo do if
  console.log(mensagemVar); // Funciona dentro do bloco
}

console.log(mensagemVar); // Também funciona fora do bloco


// ------------------------------------------------------
// 6. VAR PERMITE DECLARAR A MESMA VARIÁVEL NOVAMENTE
// Isso pode causar erros difíceis de perceber.
// ------------------------------------------------------

var cidade = 'Roßtal'; // Cria a variável cidade
var cidade = 'Nuremberg'; // Declara novamente sem apresentar erro

console.log(cidade); // Imprime: Nuremberg


// ------------------------------------------------------
// 7. LET NÃO PERMITE REPETIR A DECLARAÇÃO
// Isso protege melhor o código.
// ------------------------------------------------------

let pais = 'Alemanha'; // Cria a variável pais

// let pais = 'Brasil'; // ERRO: a variável já foi declarada

pais = 'Brasil'; // Correto: altera o valor sem declarar novamente

console.log(pais); // Imprime: Brasil


// ------------------------------------------------------
// 8. DIFERENÇA EM UM LOOP FOR
// ------------------------------------------------------

for (let i = 0; i < 3; i++) { // i existe somente dentro do loop
  console.log(`let i = ${i}`); // Imprime: 0, 1 e 2
}

// console.log(i); // ERRO: i não existe fora do loop


for (var j = 0; j < 3; j++) { // j continua existindo após o loop
  console.log(`var j = ${j}`); // Imprime: 0, 1 e 2
}

console.log(`Fora do loop: j = ${j}`); // Imprime: j = 3


// ------------------------------------------------------
// 9. EXEMPLO MAIS PRÓXIMO DE UM PROGRAMA REAL
// ------------------------------------------------------

const produto = 'Livro'; // O nome do produto não será substituído
const precoUnitario = 20; // O preço unitário permanece igual
let quantidade = 2;       // A quantidade poderá mudar
let valorTotal;           // O valor será calculado depois

quantidade += 1; // O cliente adicionou mais uma unidade ao carrinho

valorTotal = precoUnitario * quantidade; // Calcula o valor total

console.log(`Produto: ${produto}`);           // Imprime: Produto: Livro
console.log(`Quantidade: ${quantidade}`);     // Imprime: Quantidade: 3
console.log(`Valor total: €${valorTotal}`);   // Imprime: Valor total: €60