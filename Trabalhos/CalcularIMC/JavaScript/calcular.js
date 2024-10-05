function calcularImc() {
    const nome = (document.getElementById('nome').value)
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    var imc, alt, pes;
    alt = altura;
    pes = peso;


    imc = peso / (alt * alt)

    document.getElementById("resultado").textContent = `Senhor ${nome} seu imc é igual a: ${imc}`
}
