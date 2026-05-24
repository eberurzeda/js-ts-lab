const conto = { // Cria objeto conto
  titulo: 'O Horror de Hidrolândia', // Título do conto
  autor: 'Eber Urzeda', // Autor
  genero: 'Terror psicológico', // Gênero
  publicado: true, // Indica se foi publicado

  mostrarInfo() { // Método para mostrar informações
    console.log(`Título: ${this.titulo}`); // Mostra título
    console.log(`Autor: ${this.autor}`); // Mostra autor
    console.log(`Gênero: ${this.genero}`); // Mostra gênero
    console.log(`Publicado: ${this.publicado}`); // Mostra status
  }
};

conto.mostrarInfo(); // Executa o método

/*
Objeto = conjunto de dados organizados
Propriedade = informação dentro do objeto
Método = função dentro do objeto
this = o próprio objeto
pessoa.nome = acessa uma propriedade
pessoa.fala() = executa um método
 */

/*const usuario = {
    nome: 'Eber', // Nome do usuário
    idade: 40, // idade do usuário
    profissao: 'Escritor', // Profissão do usuário

    apresentar() { //Método de apresentação
        console.log(`Meu nome é ${this.nome}.`);//Mostra o nome
        console.log(`Tenho ${this.idade}. anos.`);//Mostra a idade
        console.log(`Sou ${this.profissao}!`);//Mostra a profissão
    }
}
usuario.apresentar(); //Executa o método apresentar
*/


/*function criaPessoa(nome, sobrenome, idade) { // Função fábrica de pessoas
  return { // Retorna um objeto
    nome, // Atalho para nome: nome
    sobrenome, // Atalho para sobrenome: sobrenome
    idade, // Atalho para idade: idade

    fala() { // Método do objeto
      console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos.`); // Usa dados do próprio objeto
    },

    envelhecer() { // Método para alterar idade
      this.idade++; // Soma 1 à idade
    }
  };
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25); // Cria pessoa1
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32); // Cria pessoa2

pessoa1.fala(); // Mostra dados da pessoa1
pessoa1.envelhecer(); // Aumenta idade da pessoa1
pessoa1.fala(); // Mostra pessoa1 com idade atualizada

pessoa2.fala(); // Mostra dados da pessoa2
pessoa2.envelhecer(); // Aumenta idade da pessoa2
pessoa2.fala(); // Mostra pessoa2 com idade atualizada*/



/*const pessoa1 = { // Cria um objeto chamado pessoa1
  nome: 'Luiz', // Propriedade nome
  sobrenome: 'Miranda', // Propriedade sobrenome
  idade: 25 // Propriedade idade
};

console.log(pessoa1.nome); // Mostra apenas o nome
console.log(pessoa1.sobrenome); // Mostra apenas o sobrenome
console.log(pessoa1.idade); // Mostra apenas a idade

const livro = { // Cria um objeto livro
  titulo: 'Trevas do Eu', // Título do livro
  autor: 'Eber Urzeda', // Autor
  paginasLidas: 0, // Começa com zero páginas lidas
  totalPaginas: 200, // Total de páginas

  ler(paginas) { // Método que recebe quantidade de páginas
    this.paginasLidas += paginas; // Soma páginas lidas
  },

  progresso() { // Método para mostrar progresso
    console.log(`Você leu ${this.paginasLidas} de ${this.totalPaginas} páginas.`); // Mostra leitura
  }
};

livro.progresso(); // Mostra 0 de 200
livro.ler(20); // Soma 20 páginas
livro.progresso(); // Mostra 20 de 200
livro.ler(30); // Soma mais 30 páginas
livro.progresso(); // Mostra 50 de 200
*/