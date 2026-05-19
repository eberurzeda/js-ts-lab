let nomeProtagonista = 'Henrique';
let nomeAntagonista = 'Lia'; //Usar a string entre aspas 'João'
//antes era usado 'var' no lugar de 'let'

console.log(nomeProtagonista, 'nasceu em 1984.');
console.log('Em 2000,', nomeProtagonista, 'conheceu',nomeAntagonista);
console.log(nomeProtagonista, 'casou-se com', nomeAntagonista, 'em 2012.');
console.log(nomeAntagonista, 'teve 1 filho com' ,nomeProtagonista , 'em 2015.');
console.log('O flho de', nomeProtagonista, 'se chama Eduardo.');

/*
let nome; //Declara uma variável
nome = 'Qualquer valor'; //Inicializa uma variável
console.log('nome');

Regras para criar variáveis:
1º - Não podemos criar varáveis com palavras reservadas para o JS (let, if...)
2º - Nomes de variáveis têm que ter significado (No lugar de 'n', melhor 'nomeCliente')
3º - Não podemos começar com um número (no lugar de '1nome', melhor 'nome1')
4º - Nãp podem conter espaços ou traços.
5º - Para nomes compostos, usamos camelCase: começamos com letra minúscula e as outras palavras, maiúscula: 'nomeCliente', 'nomePersonagemSecundário'
6º - Case-sensitive: letras minúsculas e maiúsculas têm diferença. Melhor usar o camelCase.
7º - Não podemos redeclarar variáveis com "let":
let nomeCliente = 'Luiz';
nomeCliente = 'Otávio'; ou seja, para redeclarar variáveis, mudar apenas a variável sem o let.
8º - Não utilize 'var', utilize 'let'.

Obeservação, sempre a última variável redeclarada será a utilizada pelo js.


*/
