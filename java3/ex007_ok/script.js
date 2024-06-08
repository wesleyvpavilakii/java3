let dias = document.querySelector("#dias");
let mes = document.querySelector("#mes");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function somar(){

let vlr1 = Number(dias.value);
let vlr2 = Number(mes.value);

let totalMeses = (vlr2 - 1) * 30 + vlr1;


resultado.innerHTML = String("se passaram " + totalMeses + " dias");



}

btCalcular.onclick = function(){
    somar();
}d