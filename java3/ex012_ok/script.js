let numero = document.querySelector("#numero");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function somar (){

let vlr1 = Number(numero.value);

let centena = Math.floor(vlr1 / 100);
let dezena = Math.floor((vlr1 % 100) / 10);
let unidade = vlr1 % 10;

resultado.innerHTML = String("Centena: " + centena + "<br>" +
    "dezena: " + dezena + "<br>" + "unidade: " + unidade);


}

btCalcular.onclick = function(){
    somar();
}