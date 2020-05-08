function desc(valorDaCompra){
    var percdesconto = 0;
    var valorFinalDaCompra = 0;
    var valordoDesconto = 0;

    if(valorDaCompra < 199){
        percdesconto = 0.05;
        valordoDesconto = 5;
    }
    else if(valorDaCompra >= 200 && valorDaCompra < 499){
        percdesconto = 0.08;
        valordoDesconto = 8;
    }
    else{
        percdesconto = 0.1;
        valordoDesconto = 10;
    }

    valorFinalDaCompra = valorDaCompra - (valorDaCompra * percdesconto);

    var compra = {
        desconto: valordoDesconto,
        ValorFinal: valorFinalDaCompra
    }

    console.log(compra);

    return compra;
}