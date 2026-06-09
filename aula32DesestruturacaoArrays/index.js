// Array original
const numeros = [
  1000,
  2000,
  3000,
  4000,
  5000,
  6000,
  7000,
  8000,
  9000
];

// Retira os três primeiros valores.
// Recolhe os demais valores em um novo array.
const [um, dois, tres, ...resto] = numeros;

console.log(um);    // 1000
console.log(dois);  // 2000
console.log(tres);  // 3000
console.log(resto); // [4000, 5000, 6000, 7000, 8000, 9000]

// Ignora valores usando espaços entre vírgulas
const [primeiro, , terceiro] = numeros;

console.log(primeiro); // 1000
console.log(terceiro); // 3000

// Troca os valores de variáveis existentes
let a = 'A';
let b = 'B';

[a, b] = [b, a];

console.log(a, b); // B A

// Arrays dentro de arrays
const listas = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const [lista1, lista2, lista3] = listas;

console.log(lista1); // [1, 2, 3]
console.log(lista2); // [4, 5, 6]
console.log(lista3); // [7, 8, 9]