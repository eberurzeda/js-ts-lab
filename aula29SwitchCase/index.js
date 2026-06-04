const data = new Date('1987-04-20 00:00:00');

const diasDaSemana = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

const diaSemanaTexto = diasDaSemana[data.getDay()];

console.log(diaSemanaTexto); // Quinta-feira

// Ou versão longa Switch/Case:


/*const data = new Date('1987-04-02T00:00:00'); // Data no formato ISO
const diaSemana = data.getDay();              // Número entre 0 e 6
let diaSemanaTexto;

switch (diaSemana) {
  case 0:
    diaSemanaTexto = 'Domingo';
    break;
  case 1:
    diaSemanaTexto = 'Segunda-feira';
    break;
  case 2:
    diaSemanaTexto = 'Terça-feira';
    break;
  case 3:
    diaSemanaTexto = 'Quarta-feira';
    break;
  case 4:
    diaSemanaTexto = 'Quinta-feira';
    break;
  case 5:
    diaSemanaTexto = 'Sexta-feira';
    break;
  case 6:
    diaSemanaTexto = 'Sábado';
    break;
  default:
    diaSemanaTexto = 'Data inválida';
}

console.log(diaSemanaTexto); // Quinta-feira*/
