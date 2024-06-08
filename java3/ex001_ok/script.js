let lado = document.querySelector("#lado");
let comprimento = document.querySelector("#comprimento");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function somaSaldo(){

    let vlr1 = Number(lado.value);
    let vlr2 = Number(comprimento.value);

    let areaTotal = vlr1 * vlr2;
    

    resultado.innerHTML = String("a area total sera de: " + areaTotal);


}

btCalcular.onclick = function(){
    somaSaldo();
}