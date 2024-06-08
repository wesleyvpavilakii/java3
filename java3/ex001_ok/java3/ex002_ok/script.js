let cavalos = document.querySelector("#cavalos");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function ferraduras(){

let vlr1 = Number(cavalos.value);

let total = vlr1 * 4;

resultado.innerHTML = String("o total de ferraduras necessarias sera de: " + total);

}

btCalcular.onclick = function(){
    ferraduras();
}