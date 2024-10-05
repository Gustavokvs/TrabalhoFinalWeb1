
function fibonacci() {

    let ant = 0;
    let atual = 1;
    let numAux;
    let cont = 1;
    let valor = document.getElementById('valor').value;

    document.getElementById('resultado').innerHTML = '';

    while (cont < valor) {
        numAux = ant + atual;
        document.getElementById('resultado').innerHTML += numAux + '<br>';
        ant = atual; 
        atual = numAux; 
        cont++; 
    }

}
