var valorEmEuro = 64;
var cotacaoDoEuro = 5.54;
var nome = prompt("Digite seu nome:");
var valorEmReal = valorEmEuro * cotacaoDoEuro;
valorEmReal = valorEmReal.toFixed(2);

alert(
  "Olá " +
    nome +
    " seus euros convertidos para reais fica exatamente" +
    " R$" +
    valorEmReal
);