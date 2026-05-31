// Seleciona o formulário e a área onde o resultado será exibido.
const form = document.querySelector('#form-imc');
const resultado = document.querySelector('#resultado');

// Escuta o envio do formulário quando o usuário clica em "Calcular".
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o recarregamento da página.

  // Captura os valores digitados e converte os textos para números.
  const peso = Number(document.querySelector('#peso').value);
  const altura = Number(document.querySelector('#altura').value);

  // Verifica se os valores são válidos antes de fazer o cálculo.
  if (!peso || !altura || peso <= 0 || altura <= 0) {
    mostrarResultado('Digite um peso e uma altura válidos.', true);
    return; // Encerra a função para impedir um cálculo incorreto.
  }

  // Fórmula do IMC: peso dividido pela altura ao quadrado.
  const imc = peso / altura ** 2;

  // Descobre a classificação correspondente ao valor calculado.
  const classificacao = classificarImc(imc);

  // Mostra o resultado com duas casas decimais.
  mostrarResultado(
    `Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}.`
  );
});

// Recebe o valor do IMC e devolve a classificação adequada.
function classificarImc(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso';
  }

  if (imc < 25) {
    return 'Peso normal';
  }

  if (imc < 30) {
    return 'Sobrepeso';
  }

  if (imc < 35) {
    return 'Obesidade grau 1';
  }

  if (imc < 40) {
    return 'Obesidade grau 2';
  }

  return 'Obesidade grau 3';
}

// Centraliza a exibição das mensagens na página.
function mostrarResultado(mensagem, temErro = false) {
  resultado.textContent = mensagem;
  resultado.classList.add('visivel');
  resultado.classList.toggle('erro', temErro);
}