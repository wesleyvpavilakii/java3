let raio = document.querySelector("#raio");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function somar(){

let vlr1 = Number(raio.value);
let pi = 3.14;
let area = pi * Math.pow(vlr1, 2);

resultado.innerHTML = String("A area da pizza é de: " + area);

}

btCalcular.onclick = function(){
    somar();
}   