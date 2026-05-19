const nomeCliente = 'Henrique';
const sobrenome = 'Santos';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2026 - idade;

console.log(`${nomeCliente} ${sobrenome} tem ${idade} anos e pesa ${peso} Kg.`);
console.log(`Ele tem ${alturaEmM} m. de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nomeCliente} ${sobrenome} nasceu em ${anoNascimento}.`);

