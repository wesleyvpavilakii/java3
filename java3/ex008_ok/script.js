let preco10 = document.querySelector("#preco10");
let preco12 = document.querySelector("#preco12");
let preco15 = document.querySelector("#preco15");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function somarSaldo(){

let vlr1 = Number(preco10.value);
let vlr2 = Number(preco12.value);
let vlr3 = Number(preco15.value);

let pequena = vlr1 * 10;
let media = vlr2 * 12;
let grande = vlr3 * 15;

let total = pequena + media + grande;


resultado.innerHTML = String("o total dos valores será de: " + total + " R$.");


}

btCalcular.onclick = function(){
    somarSaldo();   
}