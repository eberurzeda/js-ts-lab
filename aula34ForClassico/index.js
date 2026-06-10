for (let i = 0; i <= 5; i++) {
  console.log(`Linha ${i}`);
}

for (let i = 1; i <= 5; i++) { // Começa em 1; continua até 5; soma 1 a cada volta
  console.log(i);               // Imprime 1, 2, 3, 4 e 5
}

for (let i = 5; i >= 1; i--) { // Começa em 5; continua até 1; diminui 1 a cada volta
  console.log(i);               // Imprime 5, 4, 3, 2 e 1
}

for (let i = 2; i <= 10; i += 2) { // Avança de dois em dois
  console.log(i);                   // Imprime 2, 4, 6, 8 e 10
}

const frutas = ['maçã', 'banana', 'uva']; // Array com três elementos

for (let i = 0; i < frutas.length; i++) { // Índices válidos: 0, 1 e 2
  console.log(i, frutas[i]);               // Imprime o índice e a fruta correspondente
}

const nomes = ['Ana', 'Bruno', 'Carla'];

// Use o for clássico quando o índice for importante.
for (let i = 0; i < nomes.length; i++) {
  console.log(`${i}: ${nomes[i]}`);
}

// Use for...of quando precisar somente dos valores.
for (const nome of nomes) {
  console.log(nome);
}

for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break;              // Encerra o loop ao chegar ao número 6
  }

  console.log(i);       // Imprime 1, 2, 3, 4 e 5
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;           // Pula os números ímpares
  }

  console.log(i);       // Imprime 2, 4, 6, 8 e 10
}
