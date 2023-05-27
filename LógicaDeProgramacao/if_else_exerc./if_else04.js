
var precoMacaNDuzia = 0.30 
var precoMacaSDuzia = 0.25 

var quantidadePedida = prompt("Quantas macas ira comprar?")

if ( quantidadePedida >= 12) {
  alert ("O preço foi de R$" + quantidadePedida * precoMacaSDuzia)
} else {
  alert ("O preço foi de R$" + quantidadePedida * precoMacaNDuzia)
}
