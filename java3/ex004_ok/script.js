let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function somar(){

let vlr1 = Number(idade.value);

let dias = vlr1 * 365;



resultado.innerHTML = String(nome.value + ", voce ja viveu: " + dias + " dias.")


}

btCalcular.onclick = function(){
    somar();
} 