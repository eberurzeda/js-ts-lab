/*1. O que é uma estrutura condicional? Uma estrutura condicional serve para o programa tomar decisões.
Se estiver chovendo, levo guarda-chuva.
Senão, saio sem guarda-chuva.
*/

const estaChovendo = true; // Guarda se está chovendo ou não

if (estaChovendo) { // Se estaChovendo for true
  console.log('Levar guarda-chuva.'); // Executa esta linha
} else { // Caso contrário
  console.log('Pode sair sem guarda-chuva.'); // Executa esta linha
}

/*
2. Modelo básico com apenas if

Use if sozinho quando você quer executar algo apenas se uma condição for verdadeira.

const idade = 20; // Guarda a idade

if (idade >= 18) { // Verifica se a idade é maior ou igual a 18
  console.log('Você é maior de idade.'); // Executa se a condição for verdadeira
}
  ou

  const carrinho = 250; // Valor total da compra

if (carrinho >= 200) { // Se a compra for maior ou igual a 200
  console.log('Você ganhou frete grátis.'); // Mostra a mensagem
}
*/

/*3. Modelo com if e else
Use if e else quando existem duas possibilidades.*/

const idade = 17; // Guarda a idade

if (idade >= 18) { // Se a idade for maior ou igual a 18
  console.log('Pode entrar.'); // Executa se for verdadeiro
} else { // Caso contrário
  console.log('Entrada não permitida.'); // Executa se for falso
}

/* Esse tipo de lógica aparece muito em sistemas reais:
Usuário logado ou não logado.
Produto disponível ou indisponível.
Pagamento aprovado ou recusado.
Formulário válido ou inválido.
*/
/*4. Modelo com if, else if e else

Use quando existem várias possibilidades.
*/
const nota = 8; // Guarda a nota do aluno

if (nota >= 9) { // Se a nota for maior ou igual a 9
  console.log('Excelente.'); // Mostra Excelente
} else if (nota >= 7) { // Senão, se a nota for maior ou igual a 7
  console.log('Bom.'); // Mostra Bom
} else if (nota >= 5) { // Senão, se a nota for maior ou igual a 5
  console.log('Regular.'); // Mostra Regular
} else { // Se nenhuma condição anterior for verdadeira
  console.log('Reprovado.'); // Mostra Reprovado
}

//5. Exemplo clássico: hora do dia
const hora = 14; // Guarda a hora atual

if (hora < 0 || hora > 23) { // Se a hora for menor que 0 ou maior que 23
  console.log('Hora inválida.'); // Mostra erro
} else if (hora <= 11) { // Se a hora for até 11
  console.log('Bom dia!'); // Mostra Bom dia
} else if (hora <= 17) { // Se a hora for até 17
  console.log('Boa tarde!'); // Mostra Boa tarde
} else { // Se passou por tudo, só pode ser entre 18 e 23
  console.log('Boa noite!'); // Mostra Boa noite
}

//8. Exemplo profissional: validação de formulário
const nome = 'Eber'; // Nome informado pelo usuário
const email = ''; // E-mail informado pelo usuário
const senha = '123456'; // Senha informada pelo usuário

if (!nome) { // Se o nome estiver vazio
  console.log('O nome é obrigatório.'); // Mostra erro do nome
} else if (!email) { // Se o e-mail estiver vazio
  console.log('O e-mail é obrigatório.'); // Mostra erro do e-mail
} else if (senha.length < 6) { // Se a senha tiver menos de 6 caracteres
  console.log('A senha precisa ter pelo menos 6 caracteres.'); // Mostra erro da senha
} else { // Se tudo estiver correto
  console.log('Cadastro realizado com sucesso.'); // Mostra sucesso
}

/*9. Modelo moderno: early return
early return significa “retorno antecipado”.
É muito usado em empresas porque evita muitos else.
Versão com muitos else if:*/
function validarCadastro(nome, email, senha) { // Cria função de validação
  if (!nome) { // Se não houver nome
    return 'O nome é obrigatório.'; // Retorna erro
  } else if (!email) { // Se não houver e-mail
    return 'O e-mail é obrigatório.'; // Retorna erro
  } else if (senha.length < 6) { // Se a senha for curta
    return 'A senha precisa ter pelo menos 6 caracteres.'; // Retorna erro
  } else { // Se tudo estiver correto
    return 'Cadastro realizado com sucesso.'; // Retorna sucesso
  }
}
//Versão mais moderna e limpa:
function validarCadastro(nome, email, senha) { // Cria função de validação
  if (!nome) { // Se o nome estiver vazio
    return 'O nome é obrigatório.'; // Para a função e retorna erro
  }

  if (!email) { // Se o e-mail estiver vazio
    return 'O e-mail é obrigatório.'; // Para a função e retorna erro
  }

  if (senha.length < 6) { // Se a senha tiver menos de 6 caracteres
    return 'A senha precisa ter pelo menos 6 caracteres.'; // Para a função e retorna erro
  }

  return 'Cadastro realizado com sucesso.'; // Se passou por tudo, retorna sucesso
}

console.log(validarCadastro('Eber', '', '123456')); // O e-mail é obrigatório.

//10. Exemplo profissional com objeto de resposta

function validarCadastro(nome, email, senha) { // Cria função de validação
  if (!nome) { // Se o nome estiver vazio
    return { valido: false, mensagem: 'O nome é obrigatório.' }; // Retorna erro em objeto
  }

  if (!email) { // Se o e-mail estiver vazio
    return { valido: false, mensagem: 'O e-mail é obrigatório.' }; // Retorna erro em objeto
  }

  if (senha.length < 6) { // Se a senha for curta
    return { valido: false, mensagem: 'A senha precisa ter pelo menos 6 caracteres.' }; // Retorna erro
  }

  return { valido: true, mensagem: 'Cadastro realizado com sucesso.' }; // Retorna sucesso
}

const resultado = validarCadastro('Eber', 'eber@email.com', '123456'); // Chama a função

if (resultado.valido) { // Se o cadastro for válido
  console.log(resultado.mensagem); // Mostra mensagem de sucesso
} else { // Se tiver erro
  console.log(resultado.mensagem); // Mostra mensagem de erro
}
