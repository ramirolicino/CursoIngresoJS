function mostrar()
{
    var numero;
    var letra;
    var respuesta = true;
    var cantidadPares = 0;
    var cantidadImpares = 0;
    var cantidadCero = 0;
    var cantidadPositivos = 0;
    var numerosPositivos = 0;
    var numeroMax = 0;
    var numeroMin = 0;
    var letraMax;
    var letraMin;
    var numerosNegativos = 0;

    
    while(respuesta){
        
        do{
            numero = prompt("Ingrese un numero")
            numero = parseInt(numero);

        }while(isNaN(numero) || numero < -100 || numero > 100);

        do{
            letra = prompt("Ingresa una letra");

        }while(!isNaN(letra));

        console.log(numero+" / "+letra);

        //Punto a
        if(numero % 2 == 0){
            cantidadPares++;
        }
        
        //Punto b 
        if(numero % 2 == 1){
            cantidadImpares++;
        }else if(numero % 2 == -1){
            cantidadImpares++;
        }

        //Punto c
        if(numero % 10 == 0){
            cantidadCero++;
        }

        //Punto d 
        if(numero > 0){
            numerosPositivos += numero;
            cantidadPositivos++;
            promedio = numerosPositivos / cantidadPositivos
        }

        //Punto e
        if(numero < 0){
            numerosNegativos += numero;
        }

        //Punto f
        if(numeroMax < numero){
            numeroMax = numero;
            letraMax = letra;
        }else if(numeroMin > numero){
            numeroMin = numero;
            letraMin = letra;
        }

        respuesta = confirm("Desea continuar?");
    }
    
    console.log("...");
    console.log("Cantidad pares: "+cantidadPares);
    console.log(".");
    console.log("Cantidad impares: "+cantidadImpares);
    console.log(".");
    console.log("cantidad Cero: "+cantidadCero);
    console.log(".");
    console.log("Promedio: "+numerosPositivos+" / "+cantidadPositivos+" = "+promedio);
    console.log(".");
    console.log("numeros Negativos: "+numerosNegativos);
    console.log(".");
    console.log("n y l max: "+numeroMax+" / "+letraMax);
    console.log(".");
    console.log("n y l min: "+numeroMin+" / "+letraMin);

}
