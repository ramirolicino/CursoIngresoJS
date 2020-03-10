function mostrar()
{
    var numero; 
    var letra;
    var respuesta = true;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCero = 0;
    var promedio;
    var numeroPar = 0;
    var numeroImpar = 0;
    var numeroMinimo = 0;
    var letraMinimo; 
    var numeroMaximo = 0;
    var letraMaximo;
    var suma;

    while(respuesta){
        do{
            numero = prompt("Ingrese un numero");
            numero = parseInt(numero);

        }while(isNaN(numero) || numero < -100 || numero > 100);

        do{
            letra = prompt("Ingrese una letra");

        }while(!isNaN(letra));

        console.log(numero+" / "+letra);
        
        //Punto a
        if(numero % 2 == 0){
            contadorPares++;
        }

        //Punto b
        if(numero % 2 == 1){
            contadorImpares++;
        }

        // Punto c
        if(numero % 10 == 0){
            contadorCero++;
        }

        //Punto d
        if(numero % 2 == 0){
            numeroPar += numero;
            promedio = numeroPar / contadorPares;
        }

        //Punto e
        if(numero % 2 == 1){
            numeroImpar += numero;
            suma = numeroImpar
        }

        //Punto f
        if(numero < numeroMinimo){
            numeroMinimo = numero;
            letraMinimo = letra; 
        }else if(numero > numeroMaximo){
            numeroMaximo = numero;
            letraMaximo = letra;
        }

        respuesta = confirm("Desea continuar?");
    }

    console.log("...");
    console.log("Par: "+contadorPares);
    console.log(".");
    console.log("Impar: "+contadorImpares);
    console.log(".");
    console.log("Cero: "+contadorCero);
    console.log(".");
    console.log("Promedio-Par: "+numeroPar+" / "+contadorPares+": "+promedio);
    console.log(".");
    console.log("Suma(-): "+suma);
    console.log(".");
    console.log("n y l min: "+numeroMinimo+" / "+letraMinimo);
    console.log(".");
    console.log("n y l max: "+numeroMaximo+" / "+letraMaximo);




}
