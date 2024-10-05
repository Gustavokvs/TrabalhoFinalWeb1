function baskara() {
    // Função :
    // Autor :
    // Data : 25/07/2017
    // Seção de Declarações

    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    let d, x1, x2;

    d = (b * b) - (4 * a * c);

    if (d < 0) {

        d = !!d;

        x1 = (-b + Math.sqrt(d)) / 2 * a;
        x2 = (-b - Math.sqrt(d)) / 2 * a;

        document.getElementById('resultado').textContent = `O resultado dessa bhaskara é negativo, eis os números imaginários:\nX1 = ${x1.toFixed(2)}\nX2 = ${x2.toFixed(2)}`


    } else {

        x1 = (-b + Math.sqrt(d)) / 2 * a;
        x2 = (-b - Math.sqrt(d)) / 2 * a;

        document.getElementById('resultado').textContent = `O resultado dessa bhaskara é \nX1 = ${x1.toFixed(2)}\nX2 = ${x2.toFixed(2)}`;
    }

}
