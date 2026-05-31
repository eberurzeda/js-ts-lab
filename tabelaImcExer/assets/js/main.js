"use strict";

// Seleciona os elementos necessários
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const result = document.querySelector("#result");

// Intercepta o envio do formulário
form.addEventListener("submit", (event) => {
  // Impede o recarregamento automático da página
  event.preventDefault();

  // Obtém o texto digitado e remove espaços desnecessários
  const name = nameInput.value.trim();

  // Verifica se o campo está vazio
  if (!name) {
    result.textContent = "Digite seu nome antes de enviar.";
    return;
  }

  // Exibe uma mensagem quando o campo foi preenchido
  result.textContent = `Olá, ${name}! Formulário enviado com sucesso.`;
});