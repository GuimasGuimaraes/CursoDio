class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) {
    this.idade = idade;
    this.nome = nome;
    this.anoDeNascimento = 2023 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const guilherme = new Pessoa("Guilherme Guimarães", 25);
const lorena = new Pessoa("Lorena Sousa", 27);
const gustavo = new Pessoa("Gustavo Guimarães", 26);

console.log(guilherme);
console.log(lorena);
console.log(gustavo);

guilherme.descrever();
lorena.descrever();
gustavo.descrever();
