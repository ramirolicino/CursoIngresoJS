function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var resultado = true;
    var cantidadTemperaturasPares = 0;
    var marcaMasPesada = 0;
    var cantidadProductosConservanMenosDeCeroGrados = 0;
    var sumaPeso = 0;
    var cantidadPeso = 0;
    var promedio;
    var pesoMaximo = 0;
    var pesoMinimo = 0;


    while(resultado){
        do{
            marca = prompt("Ingrese la marca");

        }while(!isNaN(marca));

        do{
            peso = prompt("Ingrese el peso");
            peso = parseInt(peso);

        }while(isNaN(peso) || peso < 1 || peso > 100);

        do{
            temperatura = prompt("Ingrese la temperatura");
            temperatura = parseInt(temperatura);

        }while(isNaN(temperatura) || temperatura < -30 || temperatura > 30);

        console.log("marca: "+marca+" / peso: "+peso+" / temp: "+temperatura);

        //Punto a
        if(temperatura % 2 == 0){
            cantidadTemperaturasPares++;
        }

        //Punto b
        if(marcaMasPesada < peso){
            marcaMasPesada = peso;
        }
        
        //Punto c
        if(temperatura < 0){
            cantidadProductosConservanMenosDeCeroGrados++;
        }

        //Punto d
        sumaPeso += peso;
        cantidadPeso++;
        promedio =  sumaPeso / cantidadPeso;

        //Punto e
        if(pesoMinimo > peso){
            pesoMinimo = peso;
        }else if(pesoMaximo < peso){
            pesoMaximo = peso;
        }
        
        
        resultado = confirm("Desea continuar?");
    }

    console.log("...");
    console.log("Temp. pares: "+cantidadTemperaturasPares);
    console.log(".");
    console.log("marca mayor peso: "+marcaMasPesada);
    console.log(".");
    console.log("temp -0: "+cantidadProductosConservanMenosDeCeroGrados);
    console.log(".");
    console.log("promedio: "+sumaPeso+" / "+cantidadPeso+" = "+promedio);
    console.log(".");
    console.log("Peso max: "+pesoMaximo+" / Peso min: "+pesoMinimo);











}
