var distanciaDaEstrela = 642.5;
var anoLuz = 5.54;
var nome = prompt("Digite seu nome:");
var distanciaEmMetros = distanciaDaEstrela * anoLuz;
distanciaEmMetros = distanciaEmMetros.toFixed(2);

alert(
  "Olá " +
    nome +
    " a distância da estrela em metros é exatamente " +
    distanciaEmMetros +
    " Metros"
);