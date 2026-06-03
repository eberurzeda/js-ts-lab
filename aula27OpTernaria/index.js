const pontuacaoUsuario = 1000; // Guarda a pontuação atual do usuário

const nivelUsuario =
  pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
// Se a pontuação for maior ou igual a 1000, recebe 'Usuário VIP'
// Caso contrário, recebe 'Usuário normal'

console.log(nivelUsuario); // Exibe: Usuário VIP