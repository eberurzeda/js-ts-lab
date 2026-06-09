/*const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

// Desestruturação do objeto
const { nome } = pessoa; // Retira a propriedade nome do objeto pessoa

console.log(nome); // Luiz*/

/*const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

// Retira três propriedades do objeto
const { nome, sobrenome, idade } = pessoa;

console.log(nome);      // Luiz
console.log(sobrenome); // Miranda
console.log(idade);     // 30
*/

/*const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  profissao: 'Professor',
};

// Retira nome e guarda todas as outras propriedades em resto
const { nome, ...resto } = pessoa;

console.log(nome); // Luiz

console.log(resto);
// {
//   sobrenome: 'Miranda',
//   idade: 30,
//   profissao: 'Professor'
// }
*/

const usuario = {
  nome: 'Carla',
  email: 'carla@email.com',
  idade: 28,
};

// A função retira apenas os dados necessários
function apresentarUsuario({ nome, email }) {
  console.log(`Nome: ${nome}`);
  console.log(`E-mail: ${email}`);
}

apresentarUsuario(usuario);
