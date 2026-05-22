// Função tradicional
function soma(x, y) { // Recebe dois valores
  return x + y; // Devolve a soma
}

console.log(soma(2, 2)); // Mostra 4
console.log(soma(4, 9)); // Mostra 13
console.log(soma(15, 25)); // Mostra 40


// Função com valor padrão
function somaPadrao(x = 2, y = 3) { // Usa 2 e 3 se nenhum valor for enviado
  return x + y; // Devolve a soma
}

console.log(somaPadrao()); // Mostra 5
console.log(somaPadrao(10, 20)); // Mostra 30
console.log(somaPadrao(8)); // Mostra 11


// Função de saudação
function saudacao(nome) { // Recebe um nome
  return `Bom dia, ${nome}!`; // Devolve uma frase
}

const mensagem = saudacao('Luiz'); // Guarda a frase na variável

console.log(mensagem); // Mostra a mensagem


// Função guardada em variável
const raizAntiga = function (n) { // Cria uma função anônima dentro de uma variável
  return Math.sqrt(n); // Devolve a raiz quadrada
}

console.log(raizAntiga(64)); // Mostra 8


// Arrow function
const raiz = n => Math.sqrt(n); // Recebe n e devolve a raiz quadrada

console.log(raiz(64)); // Mostra 8
console.log(raiz(25)); // Mostra 5
console.log(raiz(81)); // Mostra 9


/*const raiz = function (n) {
    return n ** 0.5;
} // Modo antiho

const raiz = n => Math.sqrt(n); // Recebe n e retorna a raiz quadrada

console.log(raiz(64));
console.log(raiz(25));
console.log(raiz(81));


/function soma(x, y) { // Cria uma função chamada soma com dois parâmetros
  const resultado = x + y; // Soma x com y e guarda em resultado
  return resultado; // Devolve o resultado para fora da função
}

console.log(soma(2, 2)); // Chama a função e mostra 4
console.log(soma(4, 9)); // Chama a função e mostra 13
console.log(soma(15, 25)); // Chama a função e mostra 40

---
function soma(x, y) { // Cria a função soma
  return x + y; // Devolve a soma
}

const resultado = soma(10, 5); // Guarda o retorno da função na variável

console.log(resultado); // Mostra 15
---

function soma(x = 2, y = 3) { // Valores padrão
  return x + y; // Soma os valores
}

console.log(soma()); // Usa 2 e 3: resultado 5
console.log(soma(10, 20)); // Usa 10 e 20: resultado 30
console.log(soma(8)); // Usa 8 e 3: resultado 11

--- 

const resultado = soma('Luiz', ' Mario');
console.log(resultado);




console.log(soma(2, 2));
console.log(soma(4, 9));
console.log(soma(15, 25));



function saudacao (nome) {
    return `Bom dia, ${nome}!`;
    }

const variavel = saudacao('Luiz');
console.log(variavel);
*/