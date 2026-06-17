// While
function random(min, max) {
  // PT: Gera um número inteiro entre min e max, incluindo os dois.
  // EN: Generates an integer between min and max, including both.
  // DE: Erzeugt eine ganze Zahl zwischen min und max, beide eingeschlossen.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
  // PT: Enquanto rand for diferente de 10, o loop continua.
  // EN: While rand is different from 10, the loop continues.
  // DE: Solange rand ungleich 10 ist, läuft die Schleife weiter.
  console.log(rand);

  // PT: Sorteia um novo número para tentar sair do loop.
  // EN: Draws a new number to try to exit the loop.
  // DE: Zieht eine neue Zahl, um die Schleife zu beenden.
  rand = random(min, max);
}

console.log("Encontrou o 10. Fim do while.");

// Do While
/*
function random(min, max) {
  // PT: Gera um número inteiro entre min e max, incluindo os dois.
  // EN: Generates an integer between min and max, including both.
  // DE: Erzeugt eine ganze Zahl zwischen min und max, beide eingeschlossen.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 50;
let rand;

do {
  // PT: Primeiro sorteia, depois verifica a condição.
  // EN: First it draws a number, then checks the condition.
  // DE: Zuerst wird eine Zahl gezogen, dann wird die Bedingung geprüft.
  rand = random(min, max);

  console.log(rand);
} while (rand !== 10);

console.log("Encontrou o 10. Fim do do...while.");
*/

// while: primeiro pergunta, depois executa.
// do...while: primeiro executa, depois pergunta.

// 10. Cuidado com loop infinito - Este código trava:

/*
let contador = 1;

while (contador <= 5) {
  console.log(contador);
}
*/

// O correto é:

let contador = 1;

while (contador <= 5) {
  console.log(contador);
  contador++; // Todo loop precisa de alguma mudança interna que ajude a condição a ficar falsa em algum momento.
}