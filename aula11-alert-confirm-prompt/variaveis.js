/*
let varA = 'B'; // B
let varB = 'C'; // C
let varC = 'A'; // A

console.log(varA, varB, varC);
*/
// Forma moderna de se fazer:
let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);

// ou se pode fazer com variável auxiliar:
/*let varA = 'A';
let varB = 'B';
let varC = 'C';

let temp = varA;

varA = varB;
varB = varC;
varC = temp;

console.log(varA, varB, varC);*/
