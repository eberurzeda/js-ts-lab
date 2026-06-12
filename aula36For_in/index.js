const pessoa = {
  nome: 'José',          // Propriedade: nome | Valor: José
  sobrenome: 'Silva',   // Propriedade: sobrenome | Valor: Silva
  idade: 30              // Propriedade: idade | Valor: 30
};

for (let chave in pessoa) {
  // A variável chave recebe o nome de uma propriedade por vez

  console.log(chave, pessoa[chave]);
  // Mostra o nome da propriedade e o valor correspondente
}