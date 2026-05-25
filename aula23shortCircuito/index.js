/* Valores falsy - Em JavaScript, alguns valores são tratados como falso em expressões lógicas.

false
0
'' // string vazia
"" // string vazia
`` // template string vazia
null
undefined
NaN

Exemplos:
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

Atenção especial:
console.log(Boolean('0')); // true
console.log(Boolean('false')); // true

Por quê?

Porque são textos. E textos com conteúdo são truthy.
truthy:
console.log(Boolean('Eber')); // true
console.log(Boolean(123)); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean('0')); // true
console.log(Boolean('false')); // true
*/
//console.log('Luiz' && NaN && 'Maria');

/*function falaOi() {
  return 'Oi'; // A função devolve a string 'Oi'
}

let vaiExecutar = 'Joãozinho'; // String com conteúdo é truthy

console.log(vaiExecutar && falaOi());
// Primeiro o JS olha para vaiExecutar
// 'Joãozinho' é truthy, então ele continua
// Depois ele executa falaOi()
// falaOi() retorna 'Oi'
// Resultado final: 'Oi'

//E se fosse false?:
function falaOi() {
  return 'Oi'; // A função só retornaria 'Oi' se fosse chamada
}

let vaiExecutar = false; // false é falsy

console.log(vaiExecutar && falaOi());
// Primeiro o JS olha para vaiExecutar
// Como é false, o && já para aqui
// A função falaOi() nem é executada
// Resultado: false


const corUsuario = 'azul';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);*/

// Agora o operador ||

/*O operador || significa “OU”. Ele precisa de apenas um valor verdadeiro para considerar a expressão válida.

console.log(0 || false || null || 'Eber' || true);
// 0 é falsy, então continua
// false é falsy, então continua
// null é falsy, então continua
// 'Eber' é truthy, então para aqui
// true nem precisa ser avaliado
// Resultado: 'Eber'

// 7. Uso comum do ||: valor padrão - O || é muito usado para escolher um valor padrão.

const nome = ''; // String vazia é falsy

const nomePadrao = nome || 'Usuário';
// nome é falsy
// então o JS procura outro valor
// 'Usuário' é truthy
// resultado: 'Usuário'

console.log(nomePadrao); // Usuário

const nome2 = 'Eber'; // String com conteúdo é truthy

const nomePadrao2 = nome2 || 'Usuário';
// nome já é truthy
// então o JS para nele
// 'Usuário' nem é usado

console.log(nomePadrao2); // Eber

// Diferença principal entre && e || 
// && procura o primeiro falsy
// || procura o primeiro truthy
*/

function falaOi() {
  return 'Oi'; // Retorna uma mensagem
}

let vaiExecutar = 'Joãozinho'; // String com conteúdo é truthy

console.log(vaiExecutar && falaOi());
// vaiExecutar é truthy
// então a função falaOi() é executada
// resultado: 'Oi'

vaiExecutar = false; // Agora temos um valor falsy

console.log(vaiExecutar && falaOi());
// vaiExecutar é false
// então a função falaOi() NÃO é executada
// resultado: false

const nome = '';
const nomeFinal = nome || 'Usuário';

console.log(nomeFinal);
// nome é string vazia, ou seja, falsy
// então o JS usa 'Usuário'
// resultado: 'Usuário'

const autor = 'Eber';
const autorFinal = autor || 'Autor desconhecido';

console.log(autorFinal);
// autor é truthy
// então o JS usa 'Eber'
// resultado: 'Eber'