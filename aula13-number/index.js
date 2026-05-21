// Padrão do IEEE 754-2008

let num1 = 0.7;
let num2 = 0.1;

let resultado = num1 + num2;
resultado = Number(resultado.toFixed(2));

console.log(resultado);
console.log(Number.isInteger(num1));


/*
let num1 = 0.7; // Number
let num2 = 0.1; // Number


// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8 Isso resolve o problema

console.log(num1 + num2);
console.log(Number.isInteger(num1));

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0*/ // Neste caso, a soma de números flutuantes será imprecisa = 0.999999999999

//console.log(num1.toString() + num2); // Converte number em string

//num1 = num1.toString(); Converte o num1 para string em todo o código

/*console.log(num1.toString(2)); // converte para nº binário .toString(2)
console.log(num1.toFixed(2)); //converte p quantas casas decimais queremos, 2, 3... 12.359545 para 12.35 (2)
console.log(Number.isInteger(num1));
let temp = num1 * 'Olá'; // NaN
console.log(temp); // NaN
console.log(Number.isNaN(temp)); // esta variável é um NaN = true
let temp = num1 + '5';
console.log(temp);
*/





