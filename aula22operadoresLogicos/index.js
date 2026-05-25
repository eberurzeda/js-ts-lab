/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para voltar true.
|| -> OR -> OU
! -> NOT -> NÃO
*/
//const expressaoAnd = true && true && true && true;
/*const expressaoOr = true || false || false || false;
console.log(expressaoOr);

const usuario = 'Luiz'; //form usuário digitou
const senha = '123456'; // form usuário digitou
//                       True                False
const vaiLogar = usuario === 'Luiz' && senha === '12345';
console.log(vaiLogar);
// O && é como uma porta com duas chaves. Para abrir, as duas precisam funcionar.

// O || é como dizer: “Se uma dessas opções der certo, já está bom.”
*/

const usuarioDigitado = 'Luiz'; // Simula o usuário digitado no formulário
const senhaDigitada = '123456'; // Simula a senha digitada no formulário

const usuarioCadastrado = 'Luiz'; // Usuário correto salvo no sistema
const senhaCadastrada = '123456'; // Senha correta salva no sistema

const usuarioEstaCorreto = usuarioDigitado === usuarioCadastrado; // Compara o usuário digitado com o cadastrado
const senhaEstaCorreta = senhaDigitada === senhaCadastrada; // Compara a senha digitada com a cadastrada

const podeLogar = usuarioEstaCorreto && senhaEstaCorreta; // Só entra se usuário E senha estiverem corretos

console.log(podeLogar); // true, porque usuário e senha estão corretos

//Exemplo com erro na senha:

/*const usuarioDigitado = 'Luiz'; // Usuário correto
const senhaDigitada = '12345'; // Senha errada

const usuarioCadastrado = 'Luiz'; // Usuário salvo
const senhaCadastrada = '123456'; // Senha salva

const podeLogar = usuarioDigitado === usuarioCadastrado && senhaDigitada === senhaCadastrada; // true && false

console.log(podeLogar); // false, porque a senha não confere*/

//Emeplo com if:

/*const usuario = 'Luiz'; // Usuário digitado
const senha = '123456'; // Senha digitada

if (usuario === 'Luiz' && senha === '123456') { // Se usuário E senha estiverem corretos
  console.log('Login realizado com sucesso!'); // Executa se for true
} else {
  console.log('Usuário ou senha inválidos.'); // Executa se for false
}*/

// Mais exemplos:

const usuario = 'Luiz'; // Usuário digitado
const senha = '12345'; // Senha digitada errada

const usuarioCorreto = usuario === 'Luiz'; // true
const senhaCorreta = senha === '123456'; // false

if (usuarioCorreto && senhaCorreta) { // Se usuário E senha estiverem corretos
  console.log('Login realizado com sucesso.'); // Mensagem de sucesso
} else if (!usuarioCorreto) { // Se o usuário NÃO estiver correto
  console.log('Usuário incorreto.'); // Mensagem para usuário errado
} else if (!senhaCorreta) { // Se a senha NÃO estiver correta
  console.log('Senha incorreta.'); // Mensagem para senha errada
}
