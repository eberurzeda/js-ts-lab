const nomes = ['Luiz', 'Otávio', 'Henrique'];

// 1. for clássico: controla o índice
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

// 2. for...in: recebe a chave ou índice
for (const i in nomes) {
  console.log(nomes[i]);
}

// 3. for...of: recebe diretamente o valor
for (const nome of nomes) {
  console.log(nome);
}

//for clássico → i recebe 0, 1 e 2
//for...in     → i recebe '0', '1' e '2'
//for...of     → nome recebe 'Luiz', 'Otávio' e 'Henrique'

nomes.forEach((nome, indice) => {
  console.log(nome, indice);
});
