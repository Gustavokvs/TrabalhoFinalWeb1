function Soma() {

    const valorA = parseFloat(document.getElementById('valorA').value);
    const valorB = parseFloat(document.getElementById('valorB').value);



    let soma;

    soma = valorA + valorB;

    document.getElementById('Resultado:').textContent = `${soma}`;
}
