/*
Primitivos: string, number, boolean, undefined, null, bigint, symbol
São copiados por valor.

Referência: array, object, function
São passados por referência.

Primitivo copia o valor. Objeto e array copiam o endereço.

*/

// PRIMITIVOS

let nome1 = 'Luiz'; // Valor primitivo

let nome2 = nome1; // Copia o valor de nome1

console.log(nome1, nome2); // Luiz Luiz

nome1 = 'João'; // Altera apenas nome1

console.log(nome1, nome2); // João Luiz


// ARRAY POR REFERÊNCIA

let a = [1, 2, 3]; // Cria um array

let b = a; // b aponta para o mesmo array

a.push(4); // Adiciona 4 no array

console.log(a, b); // Os dois mostram [1, 2, 3, 4]

b.pop(); // Remove o último item do mesmo array

console.log(a, b); // Os dois mostram [1, 2, 3]


// ARRAY COM CÓPIA

let c = [1, 2, 3]; // Cria outro array

let d = [...c]; // Cria uma cópia independente

c.push(4); // Altera apenas c

console.log(c, d); // c mudou, d não mudou


// OBJETO POR REFERÊNCIA

const pessoa1 = { // Cria um objeto
  nome: 'Luiz', // Propriedade nome
  sobrenome: 'Otávio' // Propriedade sobrenome
};

const pessoa2 = pessoa1; // pessoa2 aponta para o mesmo objeto

pessoa1.nome = 'João'; // Altera o objeto original

console.log(pessoa2); // pessoa2 também mostra João


// OBJETO COM CÓPIA

const pessoa3 = { // Cria outro objeto
  nome: 'Luiz', // Propriedade nome
  sobrenome: 'Otávio' // Propriedade sobrenome
};

const pessoa4 = { ...pessoa3 }; // Cria uma cópia independente

pessoa3.nome = 'Maria'; // Altera apenas pessoa3

console.log(pessoa3); // { nome: 'Maria', sobrenome: 'Otávio' }

console.log(pessoa4); // { nome: 'Luiz', sobrenome: 'Otávio' }
