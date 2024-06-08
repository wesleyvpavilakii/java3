let gasolina = document.querySelector("#gasolina");
let dinheiro = document.querySelector("#dinheiro");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function somarSaldo(){

let vlr1 = Number(gasolina.value);
let vlr2 = Number(dinheiro.value);

let total = vlr2 / vlr1;

resultado.innerHTML = String("voce podera colocar " + total.toFixed(2) + " litros de gasolina.") //.toFixed(2) serve p arredondar valores


}

btCalcular.onclick = function(){
    somarSaldo();
}