"use strict";

// Seleciona elementos do HTML
const testButton = document.querySelector("#test-button");
const result = document.querySelector("#result");

// Executa uma ação quando o usuário clicar no botão
testButton.addEventListener("click", () => {
  result.textContent = "O JavaScript está funcionando corretamente!";
});
