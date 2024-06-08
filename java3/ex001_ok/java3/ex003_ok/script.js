let pao = document.querySelector("#pao");
let broa = document.querySelector("#broa");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function somarSaldo(){

let vlr1 = Number(pao.value);
let vlr2 = Number(broa.value);

let precoPao = vlr1 * 0.12;
let precoBroa = vlr2 * 1.50;

let total = precoPao + precoBroa;
let poupanca = total * 10/100;


resultado.innerHTML = String("preço total: " + total + "<br>" + "poupanca: " + poupanca);



}
    
btCalcular.onclick = function(){
    somarSaldo();
}