let dias = document.querySelector("#dias");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");


function Converter(){

let vlr1 = Number(dias.value);

let anos = Math.floor(vlr1 / 360);
let meses = Math.floor((vlr1 % 360) / 30);
let dias2 = vlr1 % 30;

resultado.innerHTML = String(dias.value + " equivalem a: " + "<br>" + anos + " anos" + "<br>" + meses + " meses" + "<br>" + dias2 + " dias.");

}

btCalcular.onclick = function(){
    Converter();
}