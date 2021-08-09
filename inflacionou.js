var alimento
var precoAntigo
var precoNovo
var resultado

function func() {
    var fruta = document.getElementsByName("fruta");
    if (fruta[0].checked) {
        alimento = fruta[0].value;
        console.log(alimento);
    }

    else if (fruta[1].checked) {
        alimento = fruta[1].value;
        console.log(alimento);
    }

    else if (fruta[2].checked) {
        alimento = fruta[2].value;
        console.log(alimento);
    }
    else if (fruta[3].checked) {
        alimento = fruta[3].value;
        console.log(alimento);
    }
}
function getInputValue() {
    // Selecting the input element and get its value 
    precoAntigo = document.getElementById("valorAntigo").value;
    precoNovo = document.getElementById("valorAtual").value;
    // Displaying the value
    if (+precoAntigo>+precoNovo){
        resultado = precoAntigo - precoNovo
        document.getElementById('texto').innerHTML = "O preço do "+ alimento + " teve redução de " +  resultado;
    }
    else if (+precoAntigo<+precoNovo) {
        resultado = precoNovo - precoAntigo
        document.getElementById('texto').innerHTML = "O preço do "+ alimento + " teve aumento de " +  resultado;
    }
    else {
        document.getElementById('texto').innerHTML = "O preço do "+ alimento + " não teve alteração";
    }
    
}

var fruta = [0, 1 , 2 , 3]