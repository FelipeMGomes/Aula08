var numero = 0 , par = 0 , impar = 0;

while(numero <= 100){

    if (numero%2 == 1){
        impar = numero + impar;
    }
    else if (numero%2==0) {
        par = numero + par;
    }
    
    numero++
}

alert("par: "+par);
alert("impar: "+impar);
