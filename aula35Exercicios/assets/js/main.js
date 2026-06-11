const elementos = [
  { tag: 'p', texto: 'Qualquer texto só para teste!' },
  { tag: 'div', texto: 'Frase 2' },
  { tag: 'section', texto: 'Frase 3' },
  { tag: 'footer', texto: 'Frase 4' },
];

const container = document.querySelector('.container'); // Procura a caixa principal
const div = document.createElement('div'); // Cria uma div intermediária

for (let i = 0; i < elementos.length; i++) {
  const { tag, texto } = elementos[i]; // Pega o objeto atual
  const tagCriada = document.createElement(tag); // Cria a tag HTML
  tagCriada.textContent = texto; // Insere o texto dentro da tag
  div.appendChild(tagCriada); // Coloca a tag dentro da div
}

container.appendChild(div); // Insere o bloco completo na página



