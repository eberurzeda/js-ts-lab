// + - * /
// String = Text | Number = Número
const primeiroNumero = 5; // o 5 é um Number porque está foa de aspas.
const segundoNumero = '10'; // o 10 é uma String porque leva aspas.
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);

console.log(typeof primeiroNumero);
console.log(typeof segundoNumero);
console.log(primeiroNumero + segundoNumero); //Se usamos o + entre uma string e um Number, o sistema vai concatená-los 2 + '5' = 25




/*
console.log(nomeProtagonista)
const nomeProtagonista = 'Henrique';
Regras para criar Constantes:
1º - Não podemos criar constantes com palavras reservadas para o JS (let, if...)
2º - Nomes das constantes têm que ter significado (No lugar de 'n', melhor 'nomeCliente')
3º - Não podemos começar uma constante com um número (no lugar de '1nome', melhor 'nome1')
4º - Nãp podem conter espaços ou traços.
5º - Para nomes compostos, usamos camelCase: começamos com letra minúscula e as outras palavras, maiúscula: 'nomeCliente', 'nomePersonagemSecundário'
6º - Case-sensitive: letras minúsculas e maiúsculas têm diferença. Melhor usar o camelCase.
7º - Não podemos modificar o valor de uma Contante.
8º - Não utilize 'var', utilize 'const'.
 Obs.: sempre criar a constante 'const' declarando o valor, diferente da criação de variável, que permite criar variáveis e logo seus valores.
*/