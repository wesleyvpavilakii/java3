let salario = document.querySelector("#salario");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function somarSaldo(){

let vlr1 = Number(salario.value);
let vlr2 = vlr1 * 0.15;

let aumento = salario.value + vlr2;
let imposto = aumento * 0.08;

let final = aumento - imposto;

resultado.innerHTML = String(vlr1 + "<br>" + aumento + "<br>" + final);



}

btCalcular.onclick = function(){
    somarSaldo();
}