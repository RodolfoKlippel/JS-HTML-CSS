let Num = 0;

document.getElementById("Aumentar").onclick = function(){
    Num+=1;
    Num = document.getElementById("h1").textContent = Num;
}

document.getElementById("Diminuir").onclick = function(){
    Num-=1;
    Num = document.getElementById("h1").textContent = Num;
}

document.getElementById("Reset").onclick = function(){
    Num=0;
    Num = document.getElementById("h1").textContent = Num;
}