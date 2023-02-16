class carros {
  marca;
  cor;
  consumo;

  constructor(marca, cor, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.consumo = consumo;
  }

  calcularGasto(distancia, precoCombustivel) {
    return distancia * this.consumo * precoCombustivel;
  }
}

const gol = new carros("Gol", "Preto", 1 / 13);
const palio = new carros("palio", "cinza", 1 / 15);

console.log(gol.calcularGasto(73, 5));
console.log(palio.calcularGasto(73, 5));
