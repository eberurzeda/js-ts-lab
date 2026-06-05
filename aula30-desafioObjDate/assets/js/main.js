// Seleciona o h1 que está dentro da classe container.
const h1 = document.querySelector('.container h1');

// Cria um objeto Date com a data e a hora atuais.
const data = new Date();

// Recebe um número entre 0 e 6 e devolve o dia da semana correspondente.
function getDiaSemanaTexto(diaSemana) {
  const diasDaSemana = [
    'domingo',
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
    'sábado',
  ];

  return diasDaSemana[diaSemana];
}

// Recebe um número entre 0 e 11 e devolve o nome do mês correspondente.
function getNomeMes(numeroMes) {
  const meses = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];

  return meses[numeroMes];
}

// Acrescenta um zero antes dos minutos menores que 10.
// Exemplo: transforma 5 em "05".
function zeroAEsquerda(numero) {
  return numero >= 10 ? numero : `0${numero}`;
}

// Monta a frase completa que será exibida na página.
function criaData(data) {
  const diaSemana = getDiaSemanaTexto(data.getDay());
  const diaMes = data.getDate();
  const mes = getNomeMes(data.getMonth());
  const ano = data.getFullYear();
  const horas = zeroAEsquerda(data.getHours());
  const minutos = zeroAEsquerda(data.getMinutes());

  return `${diaSemana}, ${diaMes} de ${mes} de ${ano}<br>${horas}:${minutos}`;
}

// Insere a frase dentro do h1 da página.
h1.innerHTML = criaData(data);