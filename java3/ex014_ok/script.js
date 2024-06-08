let conta = document.querySelector("#conta");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function somar(){

vlr1 = Number(conta.value);

parteInteira = Math.floor(vlr1 / 3);

let carlos = parteInteira;
let andre = parteInteira;
let felipe = vlr1 - (carlos + andre);

resultado.innerHTML = String("Carlos deve pagar: R$" + carlos.toFixed(2) + "<br>" + 
"Andre deve pagar: R$" + andre.toFixed(2) + "<br>" + 
"Felipe deve pagar: R$" + felipe.toFixed(2))



}

btCalcular.onclick = function(){
    somar();
}