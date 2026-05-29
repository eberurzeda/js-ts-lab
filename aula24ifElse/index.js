/* 
Entre 0 - 11 = Bom dia!
Entre 12 - 17 = Boa Tarde!
Entre 18 - 23 = Boa noite!
*/
// if pode ser usado sozinho
// else if - posso ter vários na checagem.
// else - apenas um na checagem.

const hora = 11; // Define a hora

if (hora < 0 || hora > 23) { // Verifica se a hora está fora do intervalo válido
  console.log('Hora inválida!'); // Mostra mensagem de erro
} else if (hora <= 11) { // Se a hora for de 0 até 11
  console.log('Bom dia!'); // Mostra Bom dia
} else if (hora <= 17) { // Se a hora for de 12 até 17
  console.log('Boa tarde!'); // Mostra Boa tarde
} else { // Se chegou aqui, só pode ser de 18 até 23
  console.log('Boa noite!'); // Mostra Boa noite
}

/*function obterSaudacao(hora) { // Cria uma função que recebe a hora
  if (hora < 0 || hora > 23) { // Se a hora for inválida
    return 'Hora inválida!'; // Devolve mensagem de erro
  }

  if (hora <= 11) { // Se a hora for até 11
    return 'Bom dia!'; // Devolve Bom dia
  }

  if (hora <= 17) { // Se a hora for até 17
    return 'Boa tarde!'; // Devolve Boa tarde
  }

  return 'Boa noite!'; // Se não caiu nos casos anteriores, é noite
}

console.log(obterSaudacao(11)); // Bom dia!
console.log(obterSaudacao(14)); // Boa tarde!
console.log(obterSaudacao(20)); // Boa noite!
console.log(obterSaudacao(30)); // Hora inválida!
*/