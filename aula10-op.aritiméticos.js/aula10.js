/**
 *  Operadores aritméticos:
 *  + : Adição / Concatenação
 *  - / * : Subtração, divisão e multiplicação. (Cada um tem apenas sua função própria)
 *  ** : Potenciação (Eleva à potencia)
 *  % : Retorna o resto da divisão (5 % 2= 1)
 *  Ordem: primeiro tudo que está entre parênteses (5+2) * 5 = 35
 *  segundo: ** potenciação
 *  terceiro: Multiplicaçãi, divisão e resto da divisão; *, /, % 0 a preferência daesquerda pra direita.
 *  quarto: Soma e subtração: +, -
 *  ++ Operador de incremento: soma + 1 ao contador, por exemplo
 *  -- Operador de decremento: subtrai - 1 do contador, por exemplo.
 *  Existe o pós incremento (contador++;) e o pré (++contador;)
 *  Existe o pós decremento (contador--;) e o pré (--contador;)
 * 
 *  Operadores de atribuição: +=, *=, **=, -=...

const num1 = 5;
const num2 = 2;
console.log( num1 % num2)
*/
let contador = 3;
contador++; // operador de incremento - acrescenta um número
console.log(contador);
let contador2 = 10;
contador2--; // operador de decremento - dimini um número
console.log(contador2);

// Como boas práticas: melhor fazer o (incremento/decremento) fora do console.log. ou seja, primeiro cria o contador++, depois pede para o console.log mostrar.
console.log('Operadores de atribuição', '-' .repeat(20));
let contador3 = 0;
contador3 += 2; // contador3 recebe(=) contador3 + 2
contador3 += 2;
contador3 += 2;
console.log(contador3);

console.log('parseInt, parseFloat e Number', '-' .repeat(20));
// NaN = not a number
const num1 = 10;
const num2 = parseInt ('5'); //Transforma strings em número
console.log(num1 + num2);
