// Índices:          0        1        2
let alunos = ['Luiz', 'Maria', 'João']; // Cria um array/lista

console.log(alunos); // Mostra o array inteiro

console.log(alunos[0]); // Acessa o índice 0
console.log(alunos[1]); // Acessa o índice 1
console.log(alunos[2]); // Acessa o índice 2

alunos[0] = 'Eduardo'; // Altera um item

console.log(alunos); // Mostra alteração

alunos[3] = 'Luiza'; // Adiciona pelo índice

console.log(alunos); // Mostra novo item

alunos[alunos.length] = 'Fábio'; // Adiciona no fim
alunos[alunos.length] = 'Luana'; // Adiciona no fim

console.log(alunos); // Mostra array atualizado

alunos.push('Carlos'); // Adiciona no fim
alunos.push('Ana'); // Adiciona no fim

console.log(alunos); // Mostra com novos itens

alunos.unshift('Pedro'); // Adiciona no começo

console.log(alunos); // Mostra com item no início

const removidoFim = alunos.pop(); // Remove do fim

console.log(removidoFim); // Mostra removido do fim
console.log(alunos); // Mostra array atualizado

const removidoInicio = alunos.shift(); // Remove do começo

console.log(removidoInicio); // Mostra removido do começo
console.log(alunos); // Mostra array atualizado

console.log(alunos.length); // Mostra quantidade de itens

console.log(alunos[50]); // Índice inexistente

console.log(alunos.slice(0, 3)); // Fatia do índice 0 ao 2

console.log(Array.isArray(alunos)); // Verifica se é array

/*
Importante: Com const, não posso trocar a caixa. Mas, se a caixa for um array ou objeto, posso mexer no que está dentro dela.
const alunos = ['Luiz', 'Maria']; // Não pode trocar o array inteiro

alunos.push('João'); // Pode alterar por dentro
alunos[0] = 'Eduardo'; // Pode alterar por dentro

alunos = ['Pedro', 'Ana']; // Erro: tentou trocar tudo

*/
/*const palavra = 'JavaScript';

console.log(palavra[0]); // J
console.log(palavra[4]); // S
console.log(palavra[9]); // t
console.log('-' *20)
const nome = 'Eber';

console.log(nome.length); // 4
console.log(nome[nome.length - 1]); // r

console.log('-'.repeat(30));
const nome = 'Eber Urzeda';

console.log(nome[0]); // E
console.log(nome[5]); // U
console.log(nome.length); // 11
console.log(nome[nome.length - 1]); // a
*/