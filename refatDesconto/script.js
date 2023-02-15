const precoEtiqueta = 100;
const formaDePagamento = 4;

function aplicarDesconto(valor, desconto) {
  return valor - valor * (desconto / 100);
}

function aplicarJuros(valor, juros) {
  return valor + valor * (juros / 100);
}

if (formaDePagamento === 1) {
  console.log(aplicarDesconto(precoEtiqueta, 17.5));
} else if (formaDePagamento === 2) {
  console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
  console.log(precoEtiqueta);
} else if (formaDePagamento === 4) {
  console.log(aplicarJuros(precoEtiqueta, 10));
}

console.log(200 * 0.1);

console.log(10 / 100);
