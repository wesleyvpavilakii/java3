let kgPrato = document.querySelector("#kgPrato");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function somarKg (){

let vlr1 = Number(kgPrato.value);
let calculo = vlr1 * 12;

resultado.innerHTML = String("O valor sera de: " + calculo);

}

btCalcular.onclick =function (){
    somarKg();
}