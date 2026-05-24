function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const dados = new FormData(form);

    const pessoa = {
      nome: dados.get('nome').trim(),
      sobrenome: dados.get('sobrenome').trim(),
      peso: Number(dados.get('peso')),
      altura: Number(dados.get('altura')),
    };

    if (!pessoa.nome || !pessoa.sobrenome || !pessoa.peso || !pessoa.altura) {
      resultado.innerHTML = '<p>Preencha todos os campos corretamente.</p>';
      return;
    }

    pessoa.imc = pessoa.peso / (pessoa.altura ** 2);

    pessoas.push(pessoa);

    console.log(pessoas);

    resultado.insertAdjacentHTML(
      'beforeend',
      `<p>
        ${pessoa.nome} ${pessoa.sobrenome} —
        Peso: ${pessoa.peso}kg —
        Altura: ${pessoa.altura}m —
        IMC: ${pessoa.imc.toFixed(2)}
      </p>`
    );

    form.reset();
  });
}

meuEscopo();


/*function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const dados = new FormData(form); // Pega todos os dados do formulário

    const pessoa = {
      nome: dados.get('nome'), // Pega o campo name="nome"
      sobrenome: dados.get('sobrenome'), // Pega o campo name="sobrenome"
      peso: Number(dados.get('peso')), // Converte para número
      altura: Number(dados.get('altura')), // Converte para número
    };

    pessoas.push(pessoa);

    console.log(pessoas);

    resultado.insertAdjacentHTML(
      'beforeend',
      `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso}kg ${pessoa.altura}m</p>`
    );

    form.reset(); // Limpa os campos depois de enviar
  });
}

meuEscopo();*/


/*function meuEscopo() { // Protege o código no escopo da função
  const form = document.querySelector('.form'); // Pega o formulário
  const resultado = document.querySelector('.resultado'); // Pega a área de resultado

  const pessoas = []; // Array para guardar os objetos

  function recebeEventoForm(evento) { // Executa ao enviar o formulário
    evento.preventDefault(); // Impede recarregar a página

    const nome = form.querySelector('.nome'); // Campo nome
    const sobrenome = form.querySelector('.sobrenome'); // Campo sobrenome
    const peso = form.querySelector('.peso'); // Campo peso
    const altura = form.querySelector('.altura'); // Campo altura

    const pessoa = { // Cria um objeto pessoa
      nome: nome.value, // Valor do nome
      sobrenome: sobrenome.value, // Valor do sobrenome
      peso: peso.value, // Valor do peso
      altura: altura.value, // Valor da altura
    };

    pessoas.push(pessoa); // Adiciona a pessoa no array

    console.log(pessoas); // Mostra o array no console

    resultado.innerHTML += `
      <p>
        ${pessoa.nome} ${pessoa.sobrenome} 
        ${pessoa.peso}kg 
        ${pessoa.altura}m
      </p>
    `; // Mostra na tela
  }

  form.addEventListener('submit', recebeEventoForm); // Escuta o envio
}

meuEscopo(); // Inicia o código
*/

/*function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ` + 
        `${sobrenome.value} ${peso.value} ${altura.value} </p>`
    }

    form.addEventListener('submit', recebeEventoForm);
    }

    meuEscopo();
*/