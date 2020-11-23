function calcular() {
    var n1 = parseInt(document.querySelector("#n1").value);
    var n2 = parseInt(document.querySelector("#n2").value);
    var e = document.querySelector("#operacao");
    var operacao = e.options[e.selectedIndex].text;

    console.log(n1);
    console.log(n2);
    console.log(operacao);
    var total = 0;

    switch(operacao) {
        case '+':
            //console.log(n1 + n2);
            total = n1 + n2;
            break;
        case '-' :
            //console.log(n1 - n2);
            total = n1 - n2;
            break;
        case '*' : 
            //console.log(n1 * n2);
            total = n1 * n2;
            break;
        case '/' : 
            //console.log(n1 / n2);
            total = n1 / n2;
            break;
        default: 
            console.log("Operação inválida!");
            break;                
    }

    var resultado = document.querySelector("#resultado");
    resultado.innerHTML = "<p><b>O resultado é: " + total + "</b></p>";
}