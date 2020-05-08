var escolha = "sim";

var nota01 = 0, nota02 = 0, mediafim = 0;

while(escolha == "sim" || escolha == "Sim" ){
    nota01 = prompt("informe a primeira nota: ");
    nota02 = prompt("informe a segunda nota: ");

    mediafim = (nota01 * 0.4) + (nota02 * 0.6);

    alert("A média final é: "+ mediafim.toString());
    escolha = prompt("Deseja continuar? \nsim/não");
}
    
