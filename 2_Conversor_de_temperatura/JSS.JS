let temperatura;

function converter(){
    temperatura = document.getElementById("textBox").value;

    if(document.getElementById("radioF").checked){
        temperatura = (temperatura * 1.8) + 32;
        document.getElementById("resultado").textContent = temperatura.toFixed(1) + "F°";
    }else if(document.getElementById("radioC").checked){
        temperatura = (temperatura - 32) * 5 / 9;
        document.getElementById("resultado").textContent = temperatura.toFixed(1) + "C°";
    }else{
        document.getElementById("resultado").textContent = "Nenhum botão selecionado.";
    }
}
