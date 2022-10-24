function numero() {
    var numbers = document.getElementById('numeroEscolhido').value;
    const value = numero.value

    var absolute = Math.abs(numbers);

    resultado_1.innerHTML = absolute

    var inteira = parseInt(Math.trunc(numbers));

    resultado_2.innerHTML = inteira

    var inteiro_proximo = Math.round(numbers);

    resultado_3.innerHTML = inteiro_proximo

    var raiz_2 = Math.sqrt(numbers);

    resultado_4.innerHTML = raiz_2

    var raiz_3 = Math.cbrt(numbers);

    resultado_5.innerHTML = raiz_3
}


