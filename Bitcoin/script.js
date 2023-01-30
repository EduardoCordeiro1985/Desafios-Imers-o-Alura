var nome = prompt("Olá! Me diga seu nome!")
var valorDesejado = prompt("Quantos bitcoins você possui na carteira?");
var cotaçaoBitcoin = 117979.25;
var valorBitcoin = valorDesejado * cotaçaoBitcoin

valorBitcoin.toFixed(2);

alert('Olá, ' + nome + '! Sua carteira em bitcoin é de: R$' + valorBitcoin);