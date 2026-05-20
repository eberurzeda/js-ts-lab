//               01234567
/*
console.log(umaString[4]); //imprime a letra 'e': outra forma de fazer o mesmo:
console.log(umaString.charAt(6)); //usando .charAt( )
// concatenando: as 3 formas de fazer*/
/*
let umaString = 'Henrique descobriu o display:flex numa terça-feira.';

console.log(umaString.length);
    if (umaString.length > 160) {
        console.log('Texto longo demais para meta description.');
    }
     else;
        console.log('Texto ideal para meta description.');

*/
/*
let umaString = 'Henrique descobriu o display:flex numa terça-feira.';

console.log(umaString.length);                    // tamanho da string
console.log(umaString[0]);                        // primeiro caractere
console.log(umaString.charAt(0));                 // primeiro caractere
console.log(umaString.indexOf('display'));        // posição da palavra
console.log(umaString.lastIndexOf('e'));          // última posição da letra
console.log(umaString.slice(0, 8));               // corta trecho
console.log(umaString.slice(-3));                 // corta do final
console.log(umaString.substring(0, 8));           // corta trecho
console.log(umaString.replace('Henrique', 'Lia'));// substitui primeira ocorrência
console.log(umaString.toUpperCase());             // maiúsculas
console.log(umaString.toLowerCase());             // minúsculas
console.log(umaString.includes('display:flex'));  // verifica se contém
console.log(umaString.startsWith('Henrique'));    // verifica início
console.log(umaString.endsWith('.'));             // verifica final
console.log(umaString.split(' '));                // transforma em array
console.log(umaString.trim());                    // remove espaços
console.log('-'.repeat(30));                      // repete string
*/

let umaString = 'Henrique descobriu o display:flex numa terça-feira.';

console.log('Texto original:', umaString);
console.log('Quantidade de caracteres:', umaString.length);
console.log('Primeira letra:', umaString[0]);
console.log('Últimos 3 caracteres:', umaString.slice(-3));
console.log('Nome do personagem:', umaString.slice(0, 8));
console.log('Posição de display:', umaString.indexOf('display'));
console.log('Contém display:flex?', umaString.includes('display:flex'));
console.log('Começa com Henrique?', umaString.startsWith('Henrique'));
console.log('Termina com ponto?', umaString.endsWith('.'));
console.log('Em maiúsculas:', umaString.toUpperCase());
console.log('Em minúsculas:', umaString.toLowerCase());
console.log('Trocar Henrique por Lia:', umaString.replace('Henrique', 'Lia'));
console.log('Separar palavras:', umaString.split(' '));
console.log('Total de palavras:', umaString.split(' ').length);
console.log('-'.repeat(50));

/*
length
slice()
indexOf()
replace()
toUpperCase()
toLowerCase()
includes()
split()
trim()
repeat()
*/