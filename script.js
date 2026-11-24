window.onload = function () {
    
    // Exercicio 1
    document.getElementById("gerar-tabela").onclick = function (){
        // Lógica para gerar a tabela
        const firstNumber = Number(document.getElementById("numero-1").value);
        const secondNumber = Number(document.getElementById("numero-2").value);
        

        const resultSoma = secondNumber + firstNumber;
        const resultSubtracao = firstNumber - secondNumber;
        const resultMultiplicacao = secondNumber * firstNumber;
        const resultDivisao = firstNumber/ secondNumber;
        
        
        
        var tabelas = document.getElementById("tabela-operacoes");
        tabelas.innerHTML = "";
        var table = document.createElement("table");
        tabelas.appendChild(table);
        
        var lista = [resultSoma, resultSubtracao, resultMultiplicacao, resultDivisao];
        var op = ["+", "-", "*", "/"];
        for( const n in lista){
            var tr = document.createElement("tr");
            var td = document.createElement("td"); 
            var td2 = document.createElement("td"); 
            td.innerHTML = firstNumber + " " + op[n] + " " + secondNumber;
            td2.innerHTML = lista[n];
            tr.appendChild(td);
            tr.appendChild(td2);
            table.appendChild(tr);
        }
   


    }

    // Exercicio 2
    const imagem = document.getElementById("imagem-evento");
    imagem.addEventListener("mouseover", () => {
        alert("Você passou o mouse sobre o elemento!");
    });
    


    // Exercicio 3
    var increment;
    increment = 0;
    const contador = document.getElementById("selecao-contador");
    contador.addEventListener("change", () => {
        increment ++;
        alert("O valor do incremento foi alterado para: " + increment);
    });
    


    // Exercicio 4
    const texto = document.getElementById("campo-sem-qwx");
    texto.addEventListener("keydown", function(evento) {
        
        if(evento.key.toLowerCase() == "q"  || evento.key.toLowerCase() == "w" || evento.key.toLowerCase() == "x"){
            evento.preventDefault();
            alert("Você digitou uma letra proibida!");
        }
    });

    // Exercicio 5
    
};
