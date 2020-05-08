function enviar(){
    var valorCompra = document.getElementById("valorCompra");
    var nome = document.getElementById("nome");
    
    if(valorCompra.value.trim() == "" || nome.value.trim() == ""){
        alert("Por gentileza, informe todos os valores");
    }

    var RetornoDoDesconto = desc(valorCompra.value);

    alert("Total da compra do "+ nome.value + " é de " + RetornoDoDesconto.ValorFinal);
}