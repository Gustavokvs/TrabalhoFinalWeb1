function fatorar() {

    const n = parseFloat(document.getElementById('numero').value)

    if (isNaN(n) || n <= 0) {
        document.getElementById('resultado').textContent = 'por favor digite um numero válido para fatorar\nMaior que 0 e tem que ser um número'

    } else {

        var f;

        f = 1;

        for (let c = 1; c <= n; c++) {
            f *= c;
        }

        document.getElementById('resultado').textContent = `O fatorial de ${n} é ${f}`



    }

}